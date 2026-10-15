# Reva Saxena — The Portfolio Console

A responsive React/Vite portfolio built around the graphite mechanical-console artwork. Interactive HTML keycaps preview their destinations on the terminal screen; section dialogs support keyboard navigation and reduced-motion preferences.

## Run locally

Run these commands from the extracted folder that contains `package.json`:

```bash
npm install
npm run dev
```

Vite prints the local development URL (usually `http://localhost:5173`).

## Build for Netlify

```bash
npm run build
```

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Console destinations

- **P:** Projects — a representative sample: Underground One, Insiora, and Password Strength Analyzer. No project thumbnails are shown, and no project is visually prioritised.
- **O:** Profile.
- **R:** What I Work On — concrete areas of data work such as SQL querying, data preparation, validation, and delivering analysis-ready information.
- **T:** Internship experience.
- **F:** Technical toolkit, including core skills and concepts currently being strengthened.
- **O:** Education and certifications, with extra context for each qualification.
- **L:** Awards, milestones, and roles. The requested outdated achievement entry has been removed.
- **I:** LinkedIn.
- **O:** Resume PDF (the latest supplied resume).
- **✦:** Pinterest — a personal visual-inspiration link.
- The lower **Let's Talk** key opens an email to `revasaxena90@gmail.com`; Resume and Let's Talk have been removed from the header navigation.

The display-name personalisation control and the "Available for data opportunities / Python · SQL · ETL" strip are removed. The site has no public code-profile link. The projects use text-first cards and include more context about the work. The skills page distinguishes additional data-engineering concepts from the core resume skills, so developing familiarity is not presented as production experience.

## Resume assets

`public/Reva_Saxena_Resume.pdf` is exported from the latest supplied DOCX resume; `public/Reva_Saxena_Resume.docx` is also included for direct download. Replace these files when the source resume changes.

## Content notes

- Project names and core technology labels match the supplied resume.
- Project descriptions are based on the supplied project summaries and live-demo links; this page is intended as a representative sample, not a complete inventory.
- Work and education copy expands the resume-supported responsibilities and qualifications. Additional data-engineering concepts are explicitly labelled as areas being strengthened.
- Data engineering is framed as Reva's target role and current foundations, not as a claim of production data-platform ownership.

The ZIP is flat at the archive root: after extraction, the folder itself contains `package.json`, `src`, `public`, and `index.html`.


## Latest visual refinements
- Removed the moving focus ticker below the console.
- Removed the “Built with curiosity & care” footer label.
- Added clear spacing between the web-development side-quest panel and the evidence cards.
- Increased and standardised paragraph spacing in the About section.
- Rebalanced internship summaries to two similarly sized, resume-supported bullets per role.


## Latest copy refinements
- Removed the duplicate project-title demo arrows; each project keeps one clear “Open live demo” link at the bottom.
- Changed the What I Work On heading to “From raw data to reliable systems.”
- Reframed the homepage introduction around Python, SQL, dependable answers, and the data pipelines/systems Reva is building toward.


## Copy refresh
- Updated headlines and descriptions for a more direct, confident tone without changing the console visual system.
- Kept the toolkit categories and listed skills unchanged.
- Tightened project, internship, and recognition copy while staying within the supplied experience details.


## Latest requested updates
- Recognition entries use text-first cards rather than numbered decorative blocks that resemble missing image placeholders.
- Leadership and volunteering entries are ordered newest to oldest.
- Added Underground One using the resume's project list, stack summary, and demo URL; the portfolio's three project titles now match the supplied resume.
- Replaced the downloadable PDF and DOCX with the latest supplied resume.
- Removed Resume and Let's Talk from the top navigation while preserving resume downloads in the contact area and the clickable console contact key.
