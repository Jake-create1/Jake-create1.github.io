# Jake — Portfolio Site

Static HTML/CSS/JS portfolio. No build step required. Deploy by pushing to GitHub Pages.

---

## Quick start

Open any `.html` file directly in a browser, or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## File structure

```
├── index.html          # Home page
├── projects.html       # Full project grid with filtering
├── about.html          # Story, career arc, values
├── contact.html        # Email, LinkedIn, contact form
│
├── css/
│   ├── tokens.css      # Design tokens (colors, spacing, type)
│   ├── reset.css       # CSS reset + reduced-motion handling
│   ├── global.css      # Nav, cursor, cards, buttons, reveals
│   ├── home.css        # Hero, Spline scene, about teaser
│   ├── projects.css    # Filter bar, projects grid
│   ├── about.css       # Story, timeline, values, facts
│   └── contact.css     # Contact cards and form
│
├── js/
│   ├── cursor.js       # Custom cursor (desktop only)
│   ├── transitions.js  # Page fade transitions
│   ├── reveal.js       # Scroll-triggered reveal animations
│   ├── tilt.js         # 3D card tilt on hover
│   ├── magnetic.js     # Magnetic button pull effect
│   ├── spline.js       # Lazy-loads the Spline 3D scene
│   ├── filter.js       # Projects page tag filtering
│   ├── easter-egg.js   # Konami code easter egg
│   └── nav.js          # Nav scroll state + mobile menu
│
├── assets/
│   └── og/             # Open Graph images (add home.png, projects.png, etc.)
│
├── sitemap.xml
└── robots.txt
```

---

## Adding a new project

Copy this block into `projects.html` (and optionally into the selected grid in `index.html`):

```html
<article class="project-card reveal tilt-card" data-delay="0"
         data-role="ic"
         data-industry="saas"
         data-type="dashboard">
  <a href="#" class="project-card__link" aria-label="View [Project Name] project">
    <div class="project-card__visual"
         style="--grad: linear-gradient(135deg, #0a1a2a 0%, #0d3d5c 50%, #1a6080 100%)">
      <div class="project-card__visual-inner"></div>
    </div>
    <div class="project-card__body">
      <div class="project-card__tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
      </div>
      <h3 class="project-card__title">Project Name</h3>
      <p class="project-card__desc">One-line description of what this was and why it mattered.</p>
      <div class="project-card__metrics">
        <span class="metric">+00% metric</span>
        <span class="metric">Impact stat</span>
        <span class="metric">Scale stat</span>
      </div>
      <div class="project-card__footer">
        <span class="project-card__role">Your Role</span>
        <span class="project-card__year">YYYY–YYYY</span>
      </div>
    </div>
  </a>
</article>
```

**Gradient options for project visuals:**
- Purple: `linear-gradient(135deg, #1a0a3c 0%, #4a1a6e 50%, #7b3a9b 100%)`
- Green:  `linear-gradient(135deg, #0a2a1a 0%, #0d5c36 50%, #1a8c55 100%)`
- Blue:   `linear-gradient(135deg, #0a1a2a 0%, #0d3d5c 50%, #1a6080 100%)`
- Red:    `linear-gradient(135deg, #1a0a12 0%, #5c0d2e 50%, #8c2058 100%)`
- Amber:  `linear-gradient(135deg, #1a1200 0%, #5c4200 50%, #9c7200 100%)`
- Indigo: `linear-gradient(135deg, #0a0a1a 0%, #1a1a5c 50%, #2d2d8c 100%)`

**Filter data attributes** — apply to the `<article>` element:
- `data-role`: `ic` or `management`
- `data-industry`: `fintech`, `saas`, `enterprise`, `health`, `startup`
- `data-type`: `mobile`, `dashboard`, `design-system`, `management`

---

## Updating the Spline scene

1. Publish your updated scene in Spline (set to **Public**)
2. Export → Web → copy the URL from the `<iframe src="...">` embed code
3. In `index.html`, find `.spline-wrapper` and update `data-src`:

```html
<div class="spline-wrapper"
     data-src="https://my.spline.design/YOUR-NEW-SCENE-URL/"
     ...>
```

The scene lazy-loads when it enters the viewport and shows a gradient fallback while initialising.

---

## Personalising

| What | Where |
|------|-------|
| Name / logo | Search `Jake` across all HTML files |
| Email | `hello@jake.design` → yours |
| LinkedIn | `https://linkedin.com/in/jake` → yours |
| Location | `contact.html` + `about.html` |
| Photo | Replace `.about-hero__photo` div with an `<img>` tag |
| OG images | Add 1200×630px PNGs to `/assets/og/` |
| Sitemap domain | Update `jake-create1.github.io` to your domain |
| Accent color | `--accent` in `css/tokens.css` |

---

## Deploying to GitHub Pages

1. Push all files to `main` branch of `Jake-create1.github.io`
2. **Settings → Pages → Source** → Deploy from branch → `main` / `/ (root)`
3. Live at `https://jake-create1.github.io` in ~1 minute

For a custom domain, add a `CNAME` file containing your domain name and point DNS to GitHub per their docs.

---

## Accessibility

- Keyboard navigable with visible focus rings (`:focus-visible`)
- All animations respect `prefers-reduced-motion`
- Spline scene skipped entirely under reduced-motion
- Custom cursor active only on `(pointer: fine)` — touch gets native cursor
- Decorative elements marked `aria-hidden="true"`

---

## Easter egg

Type the Konami code anywhere: **↑ ↑ ↓ ↓ ← → ← → B A**
