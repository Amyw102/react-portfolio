# Wu Yi — React Portfolio

A six-page personal portfolio website built with **React** and **React Router** for
COMP229 Web Application Development, Assignment 2.

## Pages

| Page | Route | Highlights |
| --- | --- | --- |
| Home | `/` | Welcome message, mission statement, quick stats, featured projects, contact CTA |
| About | `/about` | Legal name, portrait, short biography, key facts, skills, downloadable PDF résumé |
| Projects | `/projects` | Three projects with image, role, outcome and technology tags |
| Education | `/education` | Timeline of qualifications with dates and credentials, certifications, current coursework |
| Services | `/services` | Four service offerings with original SVG illustrations, icons and deliverables, four-step process |
| Contact | `/contact` | Contact details panel and validated interactive message form |

> Routing uses `HashRouter`, so the built site works when opened directly from
> disk as well as when hosted on GitHub Pages — no server rewrite rules needed.

## Features

- **Custom logo** — an inline SVG hexagon with a “W” monogram, used in the
  navigation bar, footer and favicon (no third-party marks).
- **Persistent navigation** — sticky top bar with active-page indicator and a
  full-screen mobile menu below 820 px. The frosted header effect is painted
  on a pseudo-element, so the fixed menu is positioned against the viewport
  rather than clipped by the header.
- **Working contact form** — validates first name, last name, contact number,
  email and message, stores the submission in `localStorage`, then redirects
  the visitor back to the Home page with a confirmation banner.
- **Project imagery** — each project card carries an interface concept mockup,
  captioned on the page as such rather than presented as a live screenshot.
- **Service illustrations** — every service card opens with an original,
  locally drawn SVG illustration, so the page stays visual without loading
  third-party images.
- **Downloadable résumé** — a one-page PDF linked from the About page and the
  navigation flow.
- **Responsive design** — fluid layout from 360 px phones to widescreen
  desktops; respects `prefers-reduced-motion`.
- **Accessible basics** — semantic landmarks, labelled form fields, inline
  validation messages, visible focus rings.

## Tech stack

- React 18
- React Router 6
- Vite 5
- Plain CSS with custom properties (no UI framework)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Project structure

```
react-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume/WuYi-Resume.pdf
├── src/
│   ├── assets/               # hero background, portrait, project and service images
│   ├── components/
│   │   ├── Icon.jsx          # inline SVG icon set
│   │   ├── Logo.jsx          # custom brand mark
│   │   ├── NavBar.jsx        # sticky navigation + mobile menu
│   │   ├── Footer.jsx
│   │   ├── PageHeader.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── portfolioData.js  # all copy and content in one place
│   ├── pages/                # Home, About, Projects, Education, Services, Contact
│   ├── App.jsx               # route table and app shell
│   ├── main.jsx              # React entry point
│   └── styles.css            # design tokens, layout, responsive rules
├── index.html
├── vite.config.js
└── package.json
```

## Editing content

All text, project details, education entries, services and contact information
live in `src/data/portfolioData.js`. Update that file to change the site without
touching component code. Images live in `src/assets/`; the résumé PDF lives in
`public/resume/`.

## Repository and live site

- Repository: **https://github.com/amyw102/react-portfolio**
- Published site: **https://amyw102.github.io/react-portfolio/**

The published build lives in the `docs/` folder of `main`. `npm run build:docs`
regenerates it (`vite build --outDir docs --emptyOutDir`), and GitHub Pages is
configured under **Settings → Pages → Source: Deploy from a branch → `main` /
`/docs`**, so the live site updates on every push:

```bash
npm run build:docs
git add .
git commit -m "Update site and published build"
git push origin main
```

`vite.config.js` keeps `base: './'` and routing uses `HashRouter`, so the build
also works when opened directly from disk or from the repository sub-path.

## Verification

Checked on 26 November 2026 against the production build (`npm run preview`)
in headless Microsoft Edge:

- `npm run build` completes without errors; 57 modules transformed.
- All six routes render and show their expected `<h1>` heading.
- Every image, illustration and the résumé PDF load (the PDF returns
  `200 application/pdf`); no broken assets or horizontal overflow at 1440 px
  or 390 px wide.
- The mobile menu covers the viewport below the 78 px header, lists all six
  pages plus the contact call-to-action, and closes after navigation.
- Submitting the empty contact form shows five inline validation messages.
  A valid submission is stored in `localStorage`, redirects to Home and shows
  the confirmation banner.
- No console errors, uncaught exceptions or failed network requests.
