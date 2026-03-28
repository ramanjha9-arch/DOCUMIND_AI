# DocuMind AI 🧠📄

**Intelligent Document Intelligence Platform** — upload medical, financial, or KYC documents and get structured AI analysis with rule-based decision making, all in a single HTML file.

---

## Features

- **Vision AI analysis** — sends documents to Claude's vision model for extraction
- **Three document types** — Medical/Lab reports, Financial statements, KYC/Identity
- **Auto-detection** — AI identifies the document type automatically
- **Rule engine** — configurable pass/fail/warn rules with custom thresholds
- **Unit standardisation** — glucose, HbA1c, creatinine etc. all normalised to standard units
- **JSON export** — full structured output you can copy or use downstream
- **Session trends** — approval rates, confidence trends across multiple documents
- **No server needed** — pure client-side, runs on GitHub Pages or any static host

---

## Quickstart

### Option 1 — Open locally (simplest)

```bash
# Clone or download the repo, then just open the file:
open index.html
# or double-click index.html in your file manager
```

> **Note:** Some browsers block API calls from `file://` URLs due to CORS. If the analysis button returns a network error, use Option 2 instead.

### Option 2 — Serve locally (recommended for development)

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080

# Node.js (npx)
npx serve .
```

### Option 3 — GitHub Pages (recommended for sharing)

1. Fork or push this repo to GitHub
2. Go to **Settings → Pages → Source → Deploy from branch → main / root**
3. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## API Key Setup

DocuMind AI calls the **Anthropic API** directly from your browser. You need a key from [platform.anthropic.com](https://platform.anthropic.com).

### Method A — Enter in the banner (easiest, no config needed)

Paste your `sk-ant-...` key into the green banner at the top of the page. It is stored in `sessionStorage` only — it disappears when you close the tab, and never leaves your browser.

### Method B — Pre-set via `config.js` (for personal/internal deployments)

1. Open `config.js`
2. Replace the empty string:
   ```js
   const DOCUMIND_API_KEY = 'sk-ant-api03-YOUR-KEY-HERE';
   ```
3. Save the file

> ⚠️ **Security warning:** `config.js` is loaded client-side. Anyone who views source can read the key. For public GitHub Pages sites, always use Method A. For private/internal hosting, Method B is fine — just ensure `config.js` stays in `.gitignore` and is **never committed to a public repo**.

---

## File Structure

```
documind/
├── index.html      ← The entire app (HTML + CSS + JS, single file)
├── config.js       ← Optional API key pre-configuration (do NOT commit if key is set)
├── .gitignore      ← Excludes config.js from git
└── README.md       ← This file
```

---

## Supported Document Types

| Type | Examples | Key Fields Extracted |
|------|----------|----------------------|
| **Medical / Lab Report** | CBC, LFT, RFT, HbA1c panels | HbA1c, glucose, creatinine, haemoglobin, cholesterol |
| **Financial Statement** | P&L, Balance Sheet, Bank statement | Net income, revenue, DTI ratio, credit score |
| **KYC / Identity** | Passport, Aadhaar, Driving Licence, PAN | Full name, DOB, ID number, expiry date |

---

## Built-in Rules (configurable)

| ID | Rule | Default Action |
|----|------|----------------|
| R001 | HbA1c ≤ 6.5% | Reject if failed |
| R002 | Glucose ≤ 11.1 mmol/L | Warn if failed |
| R003 | KYC ID expiry valid | Reject if failed |
| R004 | Name match score ≥ 0.9 | Reject if failed |
| R005 | Debt-to-income ≤ 43% | Reject if failed |
| R006 | Credit score ≥ 650 | Warn if failed |
| R007 | Creatinine ≤ 110 µmol/L | Warn if failed (off by default) |

All rules can be toggled, edited, or deleted. New rules can be added via the **Rules** panel.

---

## Unit Standardisation

The AI automatically converts non-standard units:

| Parameter | Standard Unit | Conversion |
|-----------|---------------|------------|
| Glucose | mmol/L | mg/dL ÷ 18.016 |
| Creatinine | µmol/L | mg/dL × 88.4 |
| Cholesterol | mmol/L | mg/dL ÷ 38.67 |
| HbA1c | % | as-is |
| Dates | YYYY-MM-DD | ISO 8601 |

---

## Known Limitations

- **Browser CORS:** Direct browser-to-Anthropic API calls require the `anthropic-dangerous-direct-browser-calls: true` header. This is intentional for single-file deployments. For production, route calls through your own backend.
- **PDF support:** PDF analysis requires Claude's document API. Complex scanned PDFs may have lower accuracy than image uploads.
- **No persistence:** Session data is in-memory only and resets on page refresh. For persistent history, extend the app to use `localStorage` or a backend.

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Nothing styled / all white | CSS variable bug (em-dash instead of `--`) | Use the fixed version from this repo |
| "API 401" error | Invalid or expired key | Generate a new key at platform.anthropic.com |
| "Failed to fetch" / network error | Opening via `file://` URL | Serve via `python3 -m http.server` or deploy to GitHub Pages |
| Tabs not switching | JS error | Open browser console (F12) and check for errors |
| No fields extracted | Document image too low resolution | Use a clearer scan or photo; minimum ~300 DPI recommended |
| Analysis hangs | Large PDF / slow connection | Wait up to 30 seconds; PDFs are larger payloads |

---

## Technology

- **Frontend:** Vanilla HTML + CSS + JavaScript (zero dependencies, zero build step)
- **AI:** [Anthropic Claude](https://anthropic.com) — `claude-opus-4-5-20251101` vision model
- **Fonts:** DM Serif Display, DM Mono, Syne (Google Fonts)
- **Hosting:** Any static host — GitHub Pages, Netlify, Vercel, or local

---

## License

MIT — free to use, modify, and distribute. Attribution appreciated but not required.
