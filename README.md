# Reva Saxena — Portfolio

A personal portfolio site built with **React 19 + Vite + Tailwind CSS + Framer Motion**,
inspired by the layout, motion language, and interaction patterns of gazijarin.com, rebuilt
from scratch with Reva Saxena's own content, photo, and a custom ASCII-particle portrait
effect generated from her photo.

## Stack

- **React 19** + **Vite** — fast dev server & optimized production build
- **Tailwind CSS 3** — utility-first styling, dark navy / mint-green design system
- **Framer Motion** — scroll-triggered reveals, tab transitions, mobile menu animation
- **react-icons** — Heroicons + Font Awesome icon set

## Structure

```
src/
  components/
    NavBar.jsx         fixed top nav, active-section highlighting, mobile menu
    SideRails.jsx       fixed left/right social + email rails (desktop)
    Hero.jsx            intro section with ASCII particle portrait + typed greeting
    AsciiPortrait.jsx    canvas particle-portrait effect built from profile.jpg
    About.jsx            bio + tech-stack + photo
    Skills.jsx            categorized skill pill groups
    Experience.jsx        animated tab list of internships
    Projects.jsx           featured project + project grid, links to live demos
    Education.jsx          education timeline + certifications
    Contact.jsx             contact CTA + info
    Footer.jsx               credits
    FadeIn.jsx               reusable scroll-reveal + stagger wrapper (Framer Motion)
    SectionHeader.jsx        "01. section title ———" header pattern
  data/
    content.js               all resume-derived content in one place — edit here to update copy
  assets/
    profile.jpg               profile photo (used in the About photo + ASCII portrait)
public/
  Reva_Saxena_Resume.pdf      downloadable résumé (linked from nav + hero)
  favicon.svg, og-image.jpg
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally to sanity-check
```

## Deploy

The `dist/` folder is a fully static site — deploy it anywhere static hosting is supported:

**Vercel**
```bash
npm i -g vercel
vercel --prod
```
(Framework preset: Vite — auto-detected.)

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**
- Set `base` in `vite.config.js` to your repo name if not deploying to a custom domain, then
  deploy `dist/` via `gh-pages` or a GitHub Actions workflow.

## Updating content

All resume-derived copy (bio, skills, experience, projects, education, certifications, contact
info) lives in `src/data/content.js`. Update the résumé PDF in `public/` if you replace your
resume, and swap `src/assets/profile.jpg` to update the photo used in the About section and the
ASCII portrait effect.
