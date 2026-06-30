# iflykingc · AI Product Portfolio

Static portfolio site for `https://iflykingc-oss.github.io`.

## Stack
- Pure HTML/CSS/JS (no build step)
- Bilingual (中文 / English) with localStorage persistence
- GitHub Pages deploy

## File layout
```
.
├── index.html        # Page shell + bilingual markup hooks
├── styles.css        # Dark glass-morphism theme
├── script.js         # Language switcher + card rendering
├── data.js           # Project data + i18n strings
└── assets/           # SVG covers (one per project)
```

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy
Push to `main` — GitHub Pages serves this automatically.
