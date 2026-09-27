# devwith.shry — Personal Portfolio

Professional personal portfolio website for **Sangita Bhowmick** (`devwith.shry`), Computer Science Undergraduate & Open Source Contributor.

## Design Philosophy
- **Dark Editorial Aesthetic:** Monochromatic near-black canvas (`#090b10`), elevated surface cards (`#11141d`), and crisp hairline borders (`rgba(255, 255, 255, 0.08)`).
- **Restrained Accents:** Electric cool blue (`#38bdf8`) for interactive elements and warm amber (`#f59e0b`) for program highlights.
- **Zero-Dependency Architecture:** Pure semantic HTML5, modern modular CSS3, and lightweight vanilla JavaScript. No heavy external frameworks, assuring instantaneous load times and 100/100 Lighthouse performance.
- **Accessibility (WCAG AA):** Semantic hierarchy, high-contrast text, keyboard focus states, skip navigation link, and `prefers-reduced-motion` compliance.

## Project Structure
```
D:\portfolio\
├── index.html       # Complete semantic structure & content
├── style.css        # Refined dark editorial design system & responsive rules
├── script.js        # Accessible navigation drawer, scrollspy & clipboard utilities
└── README.md        # Documentation & deployment guide
```

## Quick Start & Local Preview
You can directly double-click `index.html` to open it in any web browser, or serve it locally:

```bash
# Using Python
python -m http.server 3000 --directory D:\portfolio

# Or using Node.js (npx serve)
npx serve D:\portfolio
```
Then visit `http://localhost:3000`.

## Deployment Options
- **GitHub Pages:** Push this directory to your `devwith-shry.github.io` or `portfolio` repository and enable GitHub Pages in repository settings.
- **Vercel / Cloudflare Pages / Netlify:** Import the repository or drag-and-drop the `D:\portfolio` folder directly into the web dashboard for instant global CDN deployment.
