// DocuMind AI v2 — Optional API Key Pre-configuration
// ─────────────────────────────────────────────────────────────────
// You can paste keys here to pre-load them on startup.
// ⚠️ Add config.js to .gitignore — NEVER commit keys to GitHub.
// If left empty, users paste their key in the UI (stored in sessionStorage).

const DOCUMIND_KEYS = {
  openai:    '',   // sk-...
  gemini:    'AIzaSyB2VToZBxJu_K-sL8RH7hnMR_ecqLqMFVg',   // AIzaSy...
  grok:      '',   // xai-...
  anthropic: '',   // sk-ant-...
};

// To use: the app auto-reads these on load. Any non-empty value is pre-filled.
