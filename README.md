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
| Services | `/services` | Four service offerings with icons and deliverables, four-step process |
| Contact | `/contact` | Contact details panel and validated interactive message form |

> Routing uses `HashRouter`, so the built site works when opened directly from
> disk as well as when hosted on GitHub Pages — no server rewrite rules needed.

## Features

- **Custom logo** — an inline SVG hexagon with a “W” monogram, used in the
  navigation bar, footer and favicon (no third-party marks).
- **Persistent navigation** — sticky top bar with active-page indicator and a
  full-screen mobile menu.
- **Working contact form** — validates first name, last name, contact number,
  email and message, stores the submission in `localStorage`, then redirects
  the visitor back to the Home page with a confirmation banner.
- **Project imagery** — each project card carries an interface concept mockup,
  captioned on the page as such rather than presented as a live screenshot.
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
│   ├── assets/               # hero background, portrait, project images
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

## Publishing to GitHub

1. On GitHub, create a **new empty repository** named `react-portfolio`
   (do not initialise it with a README, .gitignore or licence).
2. From this project folder, run:

```bash
git init
git add .
git commit -m "React portfolio site"
git branch -M main
git remote add origin https://github.com/amyw102/react-portfolio.git
git push -u origin main
```

## Live site

GitHub Pages: **https://amyw102.github.io/react-portfolio/**

The published build lives in the `docs/` folder of `main`. `npm run build:docs`
regenerates it (`vite build --outDir docs --emptyOutDir`), and GitHub Pages is
configured under **Settings → Pages → Source: Deploy from a branch → `main` /
`/docs`**, so the live site updates on every push. `vite.config.js` keeps
`base: './'` and routing uses `HashRouter`, so the build also works from the
repository sub-path without any rewrite rules.
