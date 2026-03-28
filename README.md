# DocuMind AI v2 🧠

**Multi-provider Document Intelligence Platform**
*Conceptualised & crafted by Raman Verma*

---

## What's New in v2

| Feature | Details |
|---------|---------|
| **Multi-provider AI** | OpenAI (GPT-4o), Google Gemini, Grok (xAI), Anthropic Claude |
| **Live connection test** | Green dot confirms model is reachable before you analyse |
| **Multiple documents** | Upload a whole batch — each is classified and analysed separately |
| **Facial analysis** | Detects medical conditions / deformities from customer photos |
| **Face match scoring** | Compares faces across multiple documents for identity verification |
| **Downloadable report** | Professional HTML report that opens print-to-PDF |
| **Session JSON export** | Full structured output for all documents in one JSON |

---

## Quickstart

### Serve (mandatory — file:// won't work with APIs)
```bash
python3 -m http.server 8080
# Open: http://localhost:8080
```

### GitHub Pages
Push `index.html`, `config.js`, `README.md` to a repo → Settings → Pages → main/root.

---

## API Keys & Providers

All keys are entered in the top config bar. They're saved per-provider in `sessionStorage` (tab only, never persisted).

| Provider | Key format | Get key |
|----------|-----------|---------|
| OpenAI | `sk-...` | platform.openai.com |
| Gemini | `AIzaSy...` | aistudio.google.com |
| Grok (xAI) | `xai-...` | console.x.ai |
| Anthropic | `sk-ant-...` | platform.anthropic.com |

**Recommended models:**
- 🟢 **Gemini 2.0 Flash** — free tier, fast, excellent vision
- 🟢 **GPT-4o** — best overall vision accuracy
- 🟢 **Grok 2 Vision** — strong vision, xAI platform
- 🟡 **Claude Sonnet 4.6** — great if Anthropic CORS allows

> Use the **▶ Test** button after entering a key — the status dot turns green when the model is reachable.

---

## Workflow

1. Select provider + model → paste API key → click **▶ Test** (wait for green dot)
2. Drag-drop one or more documents (JPG, PNG, WEBP, PDF)
3. Click **Analyse Documents**
4. Review **Overview** → **Extracted Fields** → **Rules Eval** → **JSON**
5. Click **⬇ Download Report** for a printable/PDF-able professional report

---

## Document Types Supported

- Medical / Lab reports (CBC, LFT, RFT, HbA1c, lipid panels…)
- Financial statements (P&L, balance sheet, bank statements…)
- KYC / Identity documents (passport, Aadhaar, driving licence, PAN…)
- **Customer photographs** — facial condition analysis + match scoring
- Auto-classification — AI determines type from content

---

## Facial Analysis

When a document contains a photograph (e.g. passport photo, standalone customer photo):
- AI analyses the face for visible medical conditions or physical findings
- Clinical, factual language used (not diagnostic)
- If **multiple photo documents** are uploaded, a **face match score** is computed by comparing facial descriptions
- Match verdicts: MATCH / LIKELY_MATCH / INCONCLUSIVE / LIKELY_MISMATCH / MISMATCH

---

## Report Download

Click **⬇ Download Report** from the Overview tab. A new window opens with a clean, professionally formatted HTML report containing:
- Executive summary table
- Per-document decision cards with rationale
- Extracted fields in tabular format
- Rules evaluation grid
- Facial analysis findings
- Face match score (if applicable)
- Attribution footer: *Conceptualised & crafted by Raman Verma*

Use **Ctrl+P / Cmd+P → Save as PDF** to create a PDF.

---

## Files

```
documind2/
├── index.html   ← Entire app (no dependencies, no build)
├── config.js    ← Optional key pre-configuration (add to .gitignore)
├── .gitignore   ← Excludes config.js
└── README.md    ← This file
```

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| "fetch failed" | Open via HTTP, not file:// |
| 401 Unauthorized | Invalid API key |
| 403 Forbidden | Key has no access to this model |
| 429 Rate limit | Wait 30s and retry |
| Gemini "no candidates" | Key quota exhausted or region restriction |
| Grok model error | Use `grok-2-vision-1212` for image docs |
| Status dot stays grey | Click ▶ Test after entering key |

---

*DocuMind AI v2 — Conceptualised & crafted by Raman Verma*
