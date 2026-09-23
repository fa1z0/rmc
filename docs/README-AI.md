# AIMST RMC Website + Ask RMC AI

This package contains the futuristic RMC front-end prototype plus a server-side AI chatbot.

## Requirements
- Node.js 20 or newer
- An OpenAI API key
- Internet access on the server

## 1. Install
Open a terminal in this folder:

```bash
npm install
```

## 2. Configure the API key
Copy `.env.example` to `.env`.

macOS / Linux:
```bash
cp .env.example .env
```

Windows PowerShell:
```powershell
Copy-Item .env.example .env
```

Edit `.env` and set:

```text
OPENAI_API_KEY=your_real_api_key
OPENAI_MODEL=gpt-5.6-luna
PORT=8080
```

Never put the API key in `index.html` or `script.js`.

## 3. Add approved RMC knowledge
Edit:

`knowledge/rmc-approved-knowledge.md`

Replace the prototype material with verified, current RMC content.

For a production system with many PDF/DOCX policies, do not paste everything into this file. Use a proper retrieval/RAG layer or OpenAI file-search/vector-store architecture and return source references with answers.

## 4. Launch
```bash
npm start
```

Open:

`http://localhost:8080`

Important: do not double-click `index.html` for the AI version because the browser needs the `/api/chat` backend.

## Security / governance checklist before public deployment
- Keep the API key server-side only.
- Add institutional authentication if personalised data is ever introduced.
- Do not expose student/staff/patient records to a public chatbot.
- Add rate limiting, abuse controls, logging policy and retention rules.
- Use only approved/current RMC documents.
- Display citations/source links for policy answers in the production RAG version.
- Add a formal fallback/escalation route to RMC staff.
- Conduct privacy, security and university governance review before connecting internal systems.
- Do not allow the bot to approve, submit or alter research/ethics/grant records without a separately authorised workflow.

## Prototype behaviour
The chatbot is deliberately instructed not to invent institutional rules. If the answer is absent from the supplied approved knowledge, it should say that it cannot verify it and refer the user to RMC.
