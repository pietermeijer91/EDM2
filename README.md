# EDSN Delivery Model

De Big Picture van onze werkwijze (Basis EDSN en AI-Native EDSN), met verdiepende pagina's, wijzigingsvoorstellen en een zoekbalk.

**Live:** https://pietermeijer91.github.io/EDM2/

## Hoe het werkt

De site is gebouwd in **React**. De broncode staat in `src/`, en wordt gebouwd tot één zelfstandig bestand: `index.html` in de root. GitHub Pages publiceert dat bestand.

Zodra er een wijziging in `src/` op `main` landt, bouwt GitHub Actions de site automatisch opnieuw en zet de nieuwe `index.html` terug in de repo. Je hoeft zelf dus niets te bouwen om iets te publiceren.

| Map / bestand | Wat staat erin |
|---|---|
| `src/config.js` | Instellingen: kleuren, ARTie-link, AI-Native EDSN aan/uit (`aiOpen`) |
| `src/view/buildView.js` | Alle teksten van de pagina's en de data achter de Big Picture |
| `src/content/` | Teksten per onderwerp, zoals de AI Innovation Pipeline (`aiPipeline.js`) |
| `src/components/` | De opmaak: kop, startpagina, Big Picture, artikelpagina en overlays |
| `src/components/pages/` | Pagina-specifieke onderdelen (T4K, Feature Kanban, LACE, Continuous Flow, …) |
| `src/App.jsx` | Gedrag: navigatie, deeplinks, nachtmodus, tour |
| `src/styles.css` | Globale stijlen en animaties |
| `scripts/build.mjs` | Bouwscript (esbuild) |

## Lokaal werken

```bash
npm install
npm run dev     # bouwt index.html opnieuw bij elke wijziging; open index.html in je browser
npm run build   # eenmalig bouwen
```

Bijdragen? Lees [CONTRIBUTING.md](CONTRIBUTING.md).
