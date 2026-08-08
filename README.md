# Andrés Rafael — Portfolio

Personal portfolio site. Retro-terminal / early-computer aesthetic: pixel
headings (Silkscreen), monospace UI (IBM Plex Mono), CRT grid + scanline
overlay, boot-sequence intro.

Plain HTML/CSS/JS, no build step, no framework.

## Structure

- `index.html` — page markup
- `css/tokens.css` — design tokens (colors, fonts, spacing) as CSS custom properties
- `css/style.css` — layout and components
- `js/boot.js` — terminal boot-sequence intro (runs once per session)
- `js/main.js` — nav active-section highlighting

## Local development

```
npm install
npm run serve      # serves the site at http://localhost:8420
npm run verify      # Playwright check: viewport overflow + screenshots
```

## Content TODO

- [ ] Replace the contact email placeholder in `index.html` (`#contact`)
- [ ] Replace the GitHub / LinkedIn / X placeholder links in `index.html` (`#contact`)
