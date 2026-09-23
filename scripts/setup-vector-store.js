import "dotenv/config";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is missing.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const store = await openai.vectorStores.create({ name: "AIMST RMC Approved Knowledge" });

console.log("\nVector store created successfully.");
console.log("Add this to your .env file:\n");
console.log(`OPENAI_VECTOR_STORE_ID=${store.id}\n`);
