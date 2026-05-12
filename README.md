# The Savage Land — 原野

A multilingual landing page (English · 中文 · Español) for **The Savage Land** (原野, *Yuányě*), a landmark Chinese opera by composer Jin Xiang, based on the play by Cao Yu.

**Madrid premiere:** September 1 & 2, 2026 — Gran Teatro CaixaBank Príncipe Pío.

---

## About the site

A single-file static landing page (`index.html`) with no build step, no framework, and no external runtime dependencies beyond Google Fonts.

- **Multilingual** — Hand-crafted translations in EN / ZH / ES with an in-page language switcher. Detection: browser preference on first visit, `localStorage` thereafter.
- **Design** — Asian-fusion: deep lacquer red (`#8b0a0a`), gold (`#c9a14a`) and ink black on parchment cream, with brush-style Chinese typography for accents.
- **Sections** — Hero, Introduction, Synopsis, Characters, The Story (Prologue + 4 Acts + Epilogue), Creative Team, Awards, International Acclaim, Tour Dates, Tickets CTA.
- **Performance** — All 14 production images pre-optimised to a total ~2 MB. No JS bundles. Fonts via Google Fonts CDN.
- **SEO** — `hreflang` alternates, semantic structure, descriptive `alt` text on every image.

## Local preview

Just open `index.html` in a browser. No server required.

```bash
# Optionally serve over HTTP for a more realistic preview:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

This repository deploys as a fully static site on **Vercel** (no build command needed). Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel will auto-detect it as a static project. The included `vercel.json` sets sensible cache headers and the correct framework preset.

## Editing translations

All copy lives inside `index.html`, in the `const I18N = { en, zh, es }` object near the bottom of the file. Each translatable element in the DOM has a `data-i18n="key"` attribute that matches a key in those dictionaries.

To change a phrase, search the HTML for the key (e.g. `syn.p1`) and edit the value in all three languages.

## Credits

- **Original play** — Cao Yu (曹禺)
- **Libretto** — Wan Fang (万方)
- **Composer** — Jin Xiang (金湘)
- **Stage direction** — Li Daochuan (李稻川)
- **Presented in association with** — CAEG · China Arts & Entertainment Group

## License

All textual copy and production photographs remain the property of their respective rights holders. Site code: see repository.
