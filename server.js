/* ==========================================================================
   AIMST RMC BACKEND — SERVER.JS

   IMPORTANT: This file is NOT arranged by webpage position because it is the
   server/backend. It is arranged by backend job instead. Most visual website
   editing should happen in index.html, styles.css and script.js.

   BACKEND ORDER
   B-00  Imports and basic configuration
   B-01  Upload rules and admin protection
   B-02  Ask RMC AI rules and citation helpers
   B-03  Public health/chat API
   B-04  Knowledge-base admin API
   B-05  Start server
   ========================================================================== */

/* ===== B-00 | IMPORTS AND BASIC CONFIGURATION ===== */

import "dotenv/config";
import express from "express";
import OpenAI from "openai";
import multer from "multer";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const model = process.env.OPENAI_MODEL || "gpt-5.6-luna";
const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID || "";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json({ limit: "60kb" }));
app.use(express.static(__dirname));

/* ===== B-01 | UPLOAD RULES AND ADMIN PROTECTION ===== */

const upload = multer({
  dest: path.join(os.tmpdir(), "rmc-ai-uploads"),
  limits: { fileSize: 25 * 1024 * 1024, files: 10 },
  fileFilter: (_req, file, cb) => {
    const allowed = new Set([
      ".pdf", ".doc", ".docx", ".txt", ".md", ".rtf",
      ".ppt", ".pptx", ".csv", ".html", ".htm"
    ]);
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowed.has(ext)) return cb(new Error(`Unsupported file type: ${ext}`));
    cb(null, true);
  }
});

function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_TOKEN;
  const supplied = req.header("x-admin-token");
  if (!expected) return res.status(503).json({ error: "ADMIN_TOKEN is not configured." });
  if (!supplied || supplied !== expected) return res.status(401).json({ error: "Invalid admin token." });
  next();
}

function configCheck() {
  if (!process.env.OPENAI_API_KEY) return "OPENAI_API_KEY is not configured.";
  if (!vectorStoreId) return "OPENAI_VECTOR_STORE_ID is not configured.";
  return null;
}

/* ===== B-02 | ASK RMC AI RULES AND CITATION HELPERS ===== */

const SYSTEM = `
You are Ask RMC AI, the Research Management Centre assistant for AIMST University.

Rules:
1. For AIMST-specific policies, SOPs, grant conditions, ethics requirements, deadlines, forms, contacts, procedures, funding limits and approval pathways, answer only from retrieved approved RMC documents.
2. If the retrieved documents do not verify the requested institutional fact, say exactly: "I could not verify that from the approved RMC knowledge base." Then recommend confirming with RMC.
3. Never invent a policy clause, form name, deadline, grant ceiling, contact detail or approval requirement.
4. Keep the response clear and practical.
5. Do not claim to have checked a user's personal application, grant, finance, ethics or account status.
6. Ask users not to submit confidential, patient, personally identifiable, financial, credential or unpublished sensitive data.
7. Where useful, identify the document source by filename or document title.
8. Treat older and newer documents cautiously. If retrieved documents conflict, say so and advise the user to verify which version is current.
`;

function extractCitations(response) {
  const sources = new Map();

  for (const item of response.output || []) {
    if (item.type === "message") {
      for (const content of item.content || []) {
        for (const ann of content.annotations || []) {
          if (ann.type === "file_citation" && ann.filename) {
            sources.set(ann.file_id || ann.filename, {
              file_id: ann.file_id || null,
              filename: ann.filename
            });
          }
        }
      }
    }

    if (item.type === "file_search_call") {
      for (const result of item.results || []) {
        if (result.filename) {
          sources.set(result.file_id || result.filename, {
            file_id: result.file_id || null,
            filename: result.filename,
            score: typeof result.score === "number" ? result.score : undefined
          });
        }
      }
    }
  }
  return [...sources.values()].slice(0, 6);
}

/* ===== B-03 | PUBLIC HEALTH + CHAT API ===== */

app.get("/api/health", async (_req, res) => {
  const error = configCheck();
  res.json({
    ok: !error,
    model,
    vectorStoreConfigured: Boolean(vectorStoreId),
    message: error || "RMC Knowledge Hub is configured."
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const error = configCheck();
    if (error) return res.status(503).json({ error });

    const message = String(req.body?.message || "").trim();
    if (!message) return res.status(400).json({ error: "Please enter a question." });
    if (message.length > 1600) return res.status(400).json({ error: "Please keep the question under 1,600 characters." });

    const response = await openai.responses.create({
      model,
      instructions: SYSTEM,
      input: message,
      tools: [{
        type: "file_search",
        vector_store_ids: [vectorStoreId],
        max_num_results: 5
      }],
      include: ["file_search_call.results"]
    });

    const answer = response.output_text?.trim() ||
      "I could not verify that from the approved RMC knowledge base.";

    res.json({
      answer,
      sources: extractCitations(response)
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "The RMC AI assistant could not complete the request. Please try again or contact RMC."
    });
  }
});

/* ===== B-04 | KNOWLEDGE-BASE ADMIN API ===== */

app.get("/api/admin/documents", requireAdmin, async (_req, res) => {
  try {
    const error = configCheck();
    if (error) return res.status(503).json({ error });

    const list = await openai.vectorStores.files.list(vectorStoreId, { limit: 100 });
    const docs = [];
    for (const vf of list.data || []) {
      let filename = vf.id;
      try {
        const meta = await openai.files.retrieve(vf.id);
        filename = meta.filename || filename;
      } catch {}
      docs.push({
        file_id: vf.id,
        filename,
        status: vf.status,
        created_at: vf.created_at
      });
    }
    res.json({ documents: docs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not list knowledge-base documents." });
  }
});

app.post("/api/admin/upload", requireAdmin, upload.array("documents", 10), async (req, res) => {
  const uploaded = [];
  try {
    const error = configCheck();
    if (error) return res.status(503).json({ error });
    if (!req.files?.length) return res.status(400).json({ error: "No documents were uploaded." });

    for (const local of req.files) {
      const file = await openai.files.create({
        file: fs.createReadStream(local.path),
        purpose: "assistants"
      });

      await openai.vectorStores.files.create(vectorStoreId, { file_id: file.id });

      uploaded.push({
        file_id: file.id,
        filename: local.originalname,
        status: "processing"
      });
    }

    res.json({
      message: "Documents uploaded. OpenAI will index them for file search; status may briefly show as processing.",
      documents: uploaded
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Could not upload documents." });
  } finally {
    for (const local of req.files || []) {
      fs.promises.unlink(local.path).catch(() => {});
    }
  }
});

app.delete("/api/admin/documents/:fileId", requireAdmin, async (req, res) => {
  try {
    const error = configCheck();
    if (error) return res.status(503).json({ error });

    const fileId = req.params.fileId;
    await openai.vectorStores.files.delete(fileId, { vector_store_id: vectorStoreId }).catch(async () => {
      await openai.vectorStores.files.delete(vectorStoreId, fileId);
    });
    await openai.files.delete(fileId).catch(() => {});
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not remove the document." });
  }
});

/* ===== B-05 | START SERVER ===== */

app.listen(port, () => {
  console.log(`AIMST RMC Knowledge Hub running at http://localhost:${port}`);
  if (!process.env.OPENAI_API_KEY) console.warn("OPENAI_API_KEY is missing.");
  if (!vectorStoreId) console.warn("OPENAI_VECTOR_STORE_ID is missing.");
});
