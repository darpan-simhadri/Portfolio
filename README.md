# Darpan Simhadri — Accessible Portfolio Website

**Assignment:** HTML5 Semantic Structure & Accessibility  
**Student:** Darpan Simhadri — Front-End Development Student

---

## Project Objective

Build a clean, professional, multi-page portfolio website that demonstrates correct HTML5 semantic structure and WCAG-focused accessibility practices, targeting Lighthouse Accessibility and SEO scores of 100.

---

## Pages Included

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Introduction, highlighted skills and featured projects |
| About | `about.html` | Biography, education timeline and goals |
| Projects | `projects.html` | Three detailed project entries with outcomes |
| Skills / Resume | `skills.html` | Skill categories, education, achievements and resume download |
| Contact | `contact.html` | Accessible contact form and social links |

---

## Folder Structure

```
portfolio-accessible/
├── index.html
├── about.html
├── projects.html
├── skills.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── styles.css        ← Design tokens, reset, all component styles
│   │   └── responsive.css    ← Breakpoints: tablet (1023px), mobile (767px), small (400px)
│   ├── js/
│   │   └── main.js           ← Mobile nav toggle + contact form validation
│   └── images/               ← Add project screenshots / profile photo here
├── audit/
│   └── lighthouse-results/   ← Save Lighthouse screenshots here
└── README.md
```

---

## Semantic HTML5 Elements Implemented

| Element | Location |
|---------|----------|
| `<header>` | Every page — site identity and navigation |
| `<nav aria-label="Primary">` | Every page — primary navigation |
| `<nav aria-label="Footer navigation">` | Every page — footer nav |
| `<nav aria-label="Breadcrumb">` | Inner pages — breadcrumb trail |
| `<main id="main-content">` | Every page — unique page content |
| `<section>` | Grouped content with headings (hero, skills, about sections) |
| `<article>` | Each project entry on projects.html |
| `<aside>` | Contact details on contact.html |
| `<footer>` | Every page |
| `<figure>` / `<figcaption>` | About page avatar |
| `<h1>–<h3>` | Correct heading hierarchy throughout |

---

## Accessibility Features Implemented

- **Skip link** — visible on focus, moves focus to `#main-content`
- **`aria-current="page"`** — marks the active navigation link on every page
- **`aria-label`** — applied to navigation landmarks, form, and social links
- **`aria-required="true"`** — on all required form fields
- **`aria-invalid`** — toggled by JavaScript on validation failure
- **`aria-describedby`** — links fields to error messages and hints
- **`role="alert"`** on inline error spans — read immediately on change
- **`role="status"` + `aria-live="polite"`** on form feedback — announced without interruption
- **`:focus-visible`** ring — 3 px solid accent colour with offset, never suppressed
- **Keyboard navigation** — all interactions operable by Tab, Shift+Tab, Enter, Escape
- **Colour contrast** — navy text on cream/white backgrounds exceeds WCAG AA 4.5:1
- **`prefers-reduced-motion`** — all transitions/animations disabled for users who prefer it
- **Decorative elements** — `aria-hidden="true"` on icons, graphic divs
- **`alt` text** — meaningful alt on real images; empty `alt=""` for decorative images

---

## SEO Features Implemented

- Unique `<title>` on every page: `Page │ Darpan Simhadri Portfolio`
- Unique `<meta name="description">` on every page
- `<meta name="robots" content="index, follow">` sitewide
- Open Graph tags (`og:title`, `og:description`, `og:type`) on every page
- One meaningful `<h1>` per page
- Section headings in correct order (h1 → h2 → h3)
- Descriptive link text (e.g. "View CampusOS Project →" not "Read More")
- Descriptive filenames: `about.html`, `projects.html`, `skills.html`, `contact.html`
- Image `alt` attributes with descriptive text
- Lightweight CSS and no unused framework bloat

---

## How to Run Locally

1. Clone or download the repository.
2. Open any `.html` file directly in a modern browser **or** serve with a local server:
   ```bash
   # Python 3
   python -m http.server 8080
   # Then open http://localhost:8080
   ```
3. No build step required — this is a pure HTML5 / CSS3 / vanilla JavaScript project.

---

## Testing Checklist

### Manual Tests

- [ ] Open each page and click every primary nav link — all reach correct pages
- [ ] Tab through every page without a mouse — focus order is logical and visible
- [ ] Press Tab once on page load — skip link appears; Enter moves focus to main content
- [ ] Click each form label — activates corresponding input
- [ ] Submit blank contact form — error messages appear beside each invalid field
- [ ] Submit form with invalid email — email error message appears
- [ ] Resize to 320 px width — no horizontal scroll, single-column layout
- [ ] Resize to 768 px — two-column project/skill layout appears
- [ ] Disable CSS — heading hierarchy and reading order remain sensible

### Lighthouse Audits

1. Open Chrome DevTools → Lighthouse tab
2. Run **Accessibility** and **SEO** for each of the five pages
3. Save screenshots or exported JSON to `audit/lighthouse-results/`
4. Fix any reported issues before submission

---

## Lighthouse Audit Results

*(Replace with actual screenshots after running audits)*

| Page | Accessibility | SEO |
|------|:---:|:---:|
| index.html | — | — |
| about.html | — | — |
| projects.html | — | — |
| skills.html | — | — |
| contact.html | — | — |

---

## Future Improvements

- Accessible dark / light theme toggle with `localStorage` preference persistence
- Filter projects by technology tag using keyboard-operable buttons
- Downloadable PDF resume with clearly described download link
- Hosted form service integration (Formspree / Netlify Forms) maintaining accessible validation
- GitHub Pages or Netlify deployment with live URL

---

*Built for: HTML5 Semantic Structure & Accessibility assignment | Prepared 2026*
