# AIMST RMC Knowledge Hub + Ask RMC AI

This is the expanded prototype of the AIMST Research Management Centre website with a document-grounded AI assistant.

## What is included

- Futuristic responsive RMC website
- Ask RMC AI chatbot
- OpenAI Responses API integration
- OpenAI File Search / Vector Store retrieval
- Source filenames displayed below grounded answers
- Admin Knowledge Hub at `/admin.html`
- Multiple approved-document upload
- Document inventory/status view
- Document removal
- Server-side API key
- Separate admin secret
- Guardrails against inventing AIMST-specific policies or deadlines

## 1. Requirements

- Node.js 20+
- OpenAI API key

## 2. Install

```bash
npm install
```

Copy the environment file:

macOS/Linux:
```bash
cp .env.example .env
```

Windows PowerShell:
```powershell
Copy-Item .env.example .env
```

Set your API key in `.env`:

```text
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-5.6-luna
ADMIN_TOKEN=use_a_long_random_secret
PORT=8080
```

## 3. Create the RMC vector store

Run:

```bash
npm run setup:kb
```

It prints an ID like:

```text
OPENAI_VECTOR_STORE_ID=vs_...
```

Copy that line into `.env`.

## 4. Launch

```bash
npm start
```

Open:

- Website: `http://localhost:8080`
- Knowledge Hub admin: `http://localhost:8080/admin.html`

## 5. Add RMC documents

Open `/admin.html`, enter the `ADMIN_TOKEN`, and upload only approved/current materials such as:

- Research policies
- SOPs
- Grant guidelines
- Ethics guidance
- Research integrity policies
- IP/commercialisation policies
- Forms and explanatory guidance
- Current funding-call documents

Uploaded files are sent server-side to OpenAI Files and attached to the configured vector store. The AI's File Search tool searches that vector store when answering questions.

## Production governance

This prototype's token gate is NOT a substitute for institutional authentication.

Before public deployment:
1. Put the admin interface behind university SSO/VPN or authenticated admin access.
2. Restrict upload/delete rights to authorised RMC personnel.
3. Define a formal document approval/version-control workflow.
4. Remove superseded documents from the vector store.
5. Maintain document owners, effective dates and review dates.
6. Add rate limiting and abuse protection to `/api/chat`.
7. Define logging and retention rules.
8. Complete privacy/security review before connecting internal university systems.
9. Never expose patient, student, staff HR, finance, credential or confidential research records through the public chatbot.
10. Separate public knowledge search from any future authenticated "My RMC" assistant.

## Recommended next production enhancement

Add metadata to each document:
- document title
- policy/SOP number
- version
- effective date
- owner
- status: current/superseded
- public/internal classification
- canonical URL

Then show clickable institutional source links and prevent superseded material from being retrieved.

## OpenAI architecture

The chatbot uses:
- Responses API
- `file_search` tool
- `vector_store_ids`
- `include: ["file_search_call.results"]`

The backend extracts file-citation annotations and search-result filenames and returns them to the website as source chips.
