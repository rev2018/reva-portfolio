import { useCallback, useEffect, useRef, useState } from "react";
import {
  achievements,
  certifications,
  education,
  experience,
  leadership,
  profile,
  projects,
  skillGroups,
} from "./data/content";

const WELCOME_TITLE = "Reva's data console";
const WELCOME_DESC = "Projects, practical experience, and the systems behind useful data.";

// Every key has a distinct destination: fewer repeated pages, more useful content.
const keyItems = [
  { id: "work-p", letter: "P", label: "PROJECTS", title: "stuff i've cooked up", description: "What each project does, how it works, and the choices behind it.", section: "projects", className: "cap-orange" },
  { id: "about-top", letter: "O", label: "PROFILE", title: "okay, but who's she?", description: "A little about me, what I’m curious about, and the kind of work I want to do.", section: "profile", className: "cap-amber" },
  { id: "process-top", letter: "R", label: "DATA WORK", title: "the lore behind the logic", description: "From joining records to checking quality and preparing useful outputs.", section: "pipeline", className: "cap-cream" },
  { id: "services-top", letter: "T", label: "EXPERIENCE", title: "character development: career edition", description: "Work across data analytics, Python, web development, and AI/BI strategy.", section: "experience", className: "cap-forest" },
  { id: "explore-top", letter: "F", label: "TOOLKIT", title: "the things i speak fluent", description: "Python, SQL, analytics, cloud basics, and the parts of the stack I’m learning next.", section: "skills", className: "cap-leaf" },
  { id: "about-bottom", letter: "O", label: "EDUCATION", title: "the academic lore", description: "My BCA, analytics diplomas, certifications, and the work behind the results.", section: "education", className: "cap-pink" },
  { id: "process-bottom", letter: "L", label: "MILESTONES", title: "proof i touch grass (sometimes)", description: "Competition results, academic milestones, and campus roles worth a look.", section: "impact", className: "cap-brown" },
  { id: "services-bottom", letter: "I", label: "LINKEDIN", title: "my linkedin cinematic universe", description: "Professional updates, current projects, and what I’m learning next.", href: profile.linkedin, external: true, className: "cap-orange" },
  { id: "contact-bottom", letter: "O", label: "RESUME", title: "TL;DR: hire me", description: "Experience, projects, skills, and education in one place.", href: profile.resumeUrl, className: "cap-amber" },
  { id: "portfolio-star", letter: "✦", label: "PINTEREST", title: "for the plot", description: "Things I find, make, and decide the internet needs to see.", href: profile.pinterest, external: true, className: "cap-pink cap-star" },
];

const keyPositions = {
  "work-p": { x: 24.674, y: 57.617, w: 10.156, h: 12.695 },
  "about-top": { x: 37.760, y: 56.641, w: 10.156, h: 12.695 },
  "process-top": { x: 50.911, y: 55.664, w: 10.156, h: 12.695 },
  "services-top": { x: 63.932, y: 54.590, w: 10.156, h: 12.695 },
  "explore-top": { x: 77.083, y: 53.516, w: 10.156, h: 12.695 },
  "about-bottom": { x: 23.112, y: 76.465, w: 6.380, h: 10.547 },
  "process-bottom": { x: 31.185, y: 75.781, w: 6.380, h: 10.547 },
  "services-bottom": { x: 39.193, y: 75.195, w: 6.380, h: 10.547 },
  "contact-bottom": { x: 47.396, y: 74.512, w: 6.380, h: 10.547 },
  "portfolio-star": { x: 55.469, y: 73.828, w: 6.380, h: 10.547 },
};

function Arrow() {
  return <span className="arrow-glyph" aria-hidden="true">↗</span>;
}

function DeviceKey({ item, onPreview, onLeave, onOpen, index }) {
  const pos = keyPositions[item.id];
  const commonProps = {
    className: `key-face ${item.className}`,
    "aria-label": `${item.label}: ${item.href ? `open ${item.title}` : `open ${item.section}`}`,
    onPointerEnter: () => onPreview(item),
    onPointerLeave: (event) => onLeave(event.currentTarget),
    onFocus: () => onPreview(item),
    onBlur: (event) => onLeave(event.currentTarget),
    title: item.title,
  };
  const content = <><span className="key-letter">{item.letter}</span><span className="key-label">{item.label}</span></>;
  return (
    <div
      className={`key-position key-position-${item.id}`}
      style={{ "--x": `${pos.x}%`, "--y": `${pos.y}%`, "--w": `${pos.w}%`, "--h": `${pos.h}%`, "--wave-delay": `${index * 85}ms` }}
    >
      {item.href ? (
        <a {...commonProps} href={item.href} target={item.external || item.href.endsWith(".pdf") ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
          {content}
        </a>
      ) : (
        <button type="button" {...commonProps} onClick={(event) => onOpen(item.section, event)}>
          {content}
        </button>
      )}
    </div>
  );
}

function SectionIntro({ eyebrow, title, highlight, body }) {
  return <div className="modal-intro-row"><div><p className="eyebrow">{eyebrow}</p><h2>{title}<br /><span>{highlight}</span></h2></div><p className="modal-intro-copy">{body}</p></div>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-body">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <div className="project-title-row"><h3>{project.title}</h3></div>
        <p>{project.desc}</p>
        {project.details?.length > 0 && <ul className="project-detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
        <div className="project-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <a className="project-demo-link" href={project.demo} target="_blank" rel="noreferrer">OPEN LIVE DEMO</a>
      </div>
    </article>
  );
}

function ProjectsContent() {
  return <div className="modal-work-content">
    <SectionIntro eyebrow="PROJECTS / 01" title="stuff i've" highlight="cooked up" body="From checking CSV quality to spotting excavation conflicts, these projects show how I break down a problem, choose an approach, and build something people can use." />
    <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
    <p className="project-note">The notes below cover the core logic, trade-offs, and tools behind each live demo.</p>
  </div>;
}

function AboutContent() {
  return <div className="content-page about-page">
    <p className="eyebrow">PROFILE / 02</p>
    <h2>okay, but who's she?</h2>
    <div className="about-columns">
      <div className="about-lede">{profile.bio.map((paragraph, index) => {
        const chunks = paragraph.split("**");
        return <p className={index === 0 ? "large-copy" : ""} key={index}>{chunks.map((chunk, chunkIndex) => chunkIndex % 2 === 1 ? <strong key={chunkIndex}>{chunk}</strong> : chunk)}</p>;
      })}</div>
    </div>
  </div>;
}

function PipelineContent() {
  const areas = [
    { n: "01", title: "Query with intent", body: "Use joins and multi-table queries to connect the dots across records and answer a real question—not just return a wall of rows." },
    { n: "02", title: "Shape the dataset", body: "Clean, transform, and structure inputs in Python so the next report or workflow starts with data that’s ready to use." },
    { n: "03", title: "Catch issues early", body: "Flag missing values, inconsistent formats, duplicates, and anomalies before they quietly skew the result." },
    { n: "04", title: "Make it useful", body: "Turn prepared data into summaries, dashboards, and documented outputs someone can actually act on." },
  ];
  const evidence = [
    { value: "25K+", label: "transactional rows analysed during an analytics internship" },
    { value: "1,000+", label: "records extracted and structured with scraping automation" },
    { value: "30–35%", label: "estimated reduction in manual data-preparation time" },
  ];
  return <div className="content-page pipeline-page">
    <p className="eyebrow">DATA WORK / 03</p>
    <h2>the lore behind the logic</h2>
    <p className="content-subtitle">My process is practical: bring the right records together, clean up inconsistencies, validate what’s there, then shape the output for analysis. I’m building toward workflows that stay dependable beyond a one-off notebook.</p>
    <div className="pipeline-sequence">{areas.map((area) => <article key={area.n}><span className="pipeline-step-number">{area.n}</span><h3>{area.title}</h3><p>{area.body}</p></article>)}</div>
    <div className="side-quest"><p className="eyebrow">SIDE QUEST / WEB DEVELOPMENT</p><h3>I’ve built for the browser, too.</h3><p>I’ve turned 10+ UI mockups into responsive pages and used HTML, CSS, JavaScript, React, and browser DevTools to debug layout and performance. It’s a useful extra skill set, alongside the data systems work I’m focused on now.</p></div>
    <p className="eyebrow evidence-eyebrow">A FEW NUMBERS FROM PAST WORK</p>
    <div className="pipeline-proof-grid">{evidence.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</div>
    <div className="pipeline-foundations"><span className="pipeline-foundations-label">SKILLS I’M BUILDING NEXT</span>{["SQL joins & multi-table queries", "ETL/ELT concepts", "Data validation", "Python automation", "Apache Spark fundamentals", "Cloud fundamentals"].map((item) => <span key={item}>{item}</span>)}</div>
  </div>;
}

function ExperienceContent() {
  return <div className="content-page experience-page">
    <SectionIntro eyebrow="EXPERIENCE / 04" title="character development:" highlight="career edition" body="A selection of roles relevant to where I’m headed next, with the work and outcomes that show how I approach problems." />
    <div className="experience-list">{experience.map((job, index) => <article className="experience-entry" key={job.company}>
      <div className="experience-index">0{index + 1}</div>
      <div className="experience-main"><div className="experience-title-line"><h3>{job.title}</h3><span>{job.duration}</span></div><p className="experience-company">{job.company}{job.companySub ? ` · ${job.companySub}` : ""}</p><ul>{job.points.map((point, i) => <li key={i}>{point}</li>)}</ul></div>
    </article>)}</div>
  </div>;
}

function SkillsContent() {
  return <div className="content-page skills-page">
    <SectionIntro eyebrow="TOOLKIT / 05" title="the things i speak" highlight="fluent" body="Python and SQL are at the centre. Around them: data preparation, analytics, cloud fundamentals, and development tools I use or am actively strengthening." />
    <div className="skills-directory">{skillGroups.map((group, index) => <article className="skills-directory-row" key={group.title}><div className="skills-row-index">0{index + 1}</div><div className="skills-row-main"><h3>{group.title}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></article>)}</div>
  </div>;
}

function EducationContent() {
  return <div className="content-page education-page">
    <SectionIntro eyebrow="EDUCATION / 06" title="the academic" highlight="lore" body="My BCA and analytics diplomas have built my base in programming, databases, and working with data. The results here reflect the effort I’ve put into that foundation." />
    <div className="education-stack"><p className="eyebrow">EDUCATION</p>{education.map((school) => <div key={school.school} className="school-block"><h3>{school.school}</h3>{school.items.map((item) => <div className="education-line" key={item.name}><span>{item.name}<small>{item.description}</small></span><strong>{item.meta}</strong></div>)}</div>)}
      <p className="eyebrow certification-eyebrow">CERTIFICATIONS & TRAINING</p><ul className="cert-list">{certifications.map((cert) => <li key={cert}>{cert}</li>)}</ul>
    </div>
  </div>;
}

function ImpactContent() {
  return <div className="content-page impact-page">
    <SectionIntro eyebrow="RECOGNITION / 07" title="proof i touch grass" highlight="(sometimes)" body="Academic results, competition placements, and campus roles—some of the moments that pushed me to try something beyond the usual routine." />
    <div className="recognition-grid">{achievements.map((item) => <article className="recognition-card" key={item.title}>
      <div className="recognition-meta"><p className="eyebrow">{item.issuer}</p><span className="recognition-date">{item.date}</span></div>
      <h3>{item.title}</h3><p className="recognition-description">{item.desc}</p>
    </article>)}</div>
    <p className="eyebrow leadership-eyebrow">LEADERSHIP & VOLUNTEERING</p>
    <div className="leadership-list">{leadership.map((item, index) => <article key={item.role + item.group}><span className="leadership-number">0{index + 1}</span><div><div className="leadership-title-line"><h3>{item.role}</h3><small>{item.date}</small></div><p className="leadership-group">{item.group}</p><p className="leadership-desc">{item.desc}</p></div></article>)}</div>
  </div>;
}

const sectionTitles = {
  projects: "stuff i've cooked up",
  profile: "okay, but who's she?",
  pipeline: "the lore behind the logic",
  experience: "character development: career edition",
  skills: "the things i speak fluent",
  education: "the academic lore",
  impact: "proof i touch grass (sometimes)",
};

function SectionDialog({ section, onClose }) {
  const closeRef = useRef(null);
  const priorFocus = useRef(null);
  useEffect(() => {
    priorFocus.current = document.activeElement;
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "Tab") {
        const dialog = document.querySelector(".section-dialog-panel");
        if (!dialog) return;
        const focusable = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((element) => element.offsetParent !== null);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("dialog-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("dialog-open");
      window.setTimeout(() => priorFocus.current?.focus?.(), 0);
    };
  }, [onClose]);

  const content = {
    projects: <ProjectsContent />,
    profile: <AboutContent />,
    pipeline: <PipelineContent />,
    experience: <ExperienceContent />,
    skills: <SkillsContent />,
    education: <EducationContent />,
    impact: <ImpactContent />,
  }[section];

  return <div className="section-dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="section-dialog-panel" role="dialog" aria-modal="true" aria-label={sectionTitles[section]}>
      <div className="dialog-topbar"><span className="dialog-kicker">REVA SAXENA <span> / DATA SYSTEMS PORTFOLIO</span></span><span className="dialog-status"><i /> EXPLORING / {section.toUpperCase()}</span><button className="dialog-close" type="button" ref={closeRef} onClick={onClose} aria-label="Close section dialog">CLOSE <span aria-hidden="true">×</span></button></div>
      <div className="dialog-scroll-content">{content}</div>
      <div className="dialog-bottom"><span>PYTHON / SQL / DATA QUALITY / PIPELINES</span><span>ESC TO CLOSE <span aria-hidden="true">↵</span></span></div>
    </section>
  </div>;
}

function App() {
  const [screenTitle, setScreenTitle] = useState("");
  const [screenTitleTarget, setScreenTitleTarget] = useState(WELCOME_TITLE);
  const [screenDescription, setScreenDescription] = useState(WELCOME_DESC);
  const [screenStatus, setScreenStatus] = useState("BOOTING");
  const [modal, setModal] = useState(null);
  const [isBusy, setIsBusy] = useState(false);
  const typingTimers = useRef([]);
  const lastScreenRequest = useRef({ title: "", description: "" });
  const restoreTimer = useRef(null);
  const sceneRef = useRef(null);

  const clearTyping = useCallback(() => {
    typingTimers.current.forEach((timer) => window.clearTimeout(timer));
    typingTimers.current = [];
  }, []);

  const typeScreen = useCallback((title, description) => {
    if (lastScreenRequest.current.title === title && lastScreenRequest.current.description === description) return;
    lastScreenRequest.current = { title, description };
    clearTyping();
    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    setScreenTitleTarget(title);
    setScreenDescription(description);
    const reduceMotion = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setScreenTitle(title);
      setScreenStatus("READY");
      return;
    }
    setScreenTitle("");
    setScreenStatus("TYPING");
    let index = 0;
    const tick = () => {
      index += 1;
      setScreenTitle(title.slice(0, index));
      if (index < title.length) typingTimers.current.push(window.setTimeout(tick, 78));
      else setScreenStatus("READY");
    };
    typingTimers.current.push(window.setTimeout(tick, 350));
  }, [clearTyping]);

  useEffect(() => {
    typeScreen(WELCOME_TITLE, WELCOME_DESC);
    return () => {
      clearTyping();
      lastScreenRequest.current = { title: "", description: "" };
      if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    };
  }, [typeScreen, clearTyping]);

  useEffect(() => {
    const onVisibilityChange = () => {
      const keyInteraction = Boolean(document.querySelector(".key-face:hover, .key-face:focus"));
      setIsBusy(document.hidden || Boolean(modal) || keyInteraction);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [modal]);

  const previewKey = useCallback((item) => {
    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    setIsBusy(true);
    typeScreen(item.title, item.description);
  }, [typeScreen]);

  const restoreWelcome = useCallback((element) => {
    if (element && element.matches?.(":focus")) return;
    if (modal) return;
    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    restoreTimer.current = window.setTimeout(() => {
      if (document.querySelector(".section-dialog-panel")) return;
      const focusedKey = sceneRef.current?.querySelector(".key-face:focus");
      if (!focusedKey) {
        setIsBusy(false);
        typeScreen(WELCOME_TITLE, WELCOME_DESC);
      }
    }, 350);
  }, [modal, typeScreen]);

  const openSection = useCallback((section) => {
    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    clearTyping();
    lastScreenRequest.current = { title: "", description: "" };
    setScreenStatus("READY");
    setIsBusy(true);
    setModal(section);
  }, [clearTyping]);

  const closeSection = useCallback(() => {
    setModal(null);
    setIsBusy(false);
    typeScreen(WELCOME_TITLE, WELCOME_DESC);
  }, [typeScreen]);

  const handleNav = (section) => openSection(section);

  return <div className="portfolio-shell">
    <header className="site-header">
      <span className="header-spacer" aria-hidden="true" />
      <nav className="main-nav" aria-label="Main navigation">
        <button type="button" onClick={() => handleNav("projects")}>Projects</button>
        <button type="button" onClick={() => handleNav("profile")}>Profile</button>
        <button type="button" onClick={() => handleNav("experience")}>Experience</button>
        <button type="button" onClick={() => handleNav("skills")}>Toolkit</button>
      </nav>
    </header>

    <main id="top">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          
          <h1 id="hero-title">Hey, I'm <span>Reva</span></h1>
          <p>I like figuring out what happens between a messy CSV and data someone can actually trust. I use Python and SQL to explore data quality, build useful workflows, and understand what makes pipelines dependable.</p>
        </div>

        <div className={`device-scene ${isBusy || modal ? "is-paused" : ""}`} ref={sceneRef}>
          <img className="device-artwork" src="/device-reference.png" alt="A graphite mechanical console with an inset screen and eleven recessed switch openings" fetchPriority="high" />
          <div className="terminal-screen" aria-label={`Console screen. ${screenTitle || "Loading title"}. ${screenDescription}`}>
            <div className="terminal-meta"><span>REVA / DATA SYSTEMS INDEX</span><span className="terminal-status"><i />{screenStatus}</span></div>
            <h2 aria-label={screenTitle || WELCOME_TITLE} className="terminal-title" style={{ "--title-length": Math.max(screenTitleTarget.length + 1, 1) }}><span>{screenTitle}</span><span className="terminal-caret" aria-hidden="true" /></h2>
            <p className="terminal-description">{screenDescription}</p>
            <span className="terminal-corner" aria-hidden="true">SYS.01</span>
          </div>
          {keyItems.map((item, index) => <DeviceKey key={item.id} item={item} index={index} onPreview={previewKey} onLeave={restoreWelcome} onOpen={openSection} />)}
          <div className="key-position key-position-contact-bar" style={{ "--x": "73.893%", "--y": "72.754%", "--w": "24.349%", "--h": "10.938%", "--wave-delay": "850ms" }}>
            <a className="key-face cap-contact" href={`mailto:${profile.email}`} aria-label={`Email Reva at ${profile.email}`} onPointerEnter={() => previewKey({ title: "Let's talk", description: `Send a note to ${profile.email}` })} onPointerLeave={(event) => restoreWelcome(event.currentTarget)} onFocus={() => previewKey({ title: "Let's talk", description: `Send a note to ${profile.email}` })} onBlur={(event) => restoreWelcome(event.currentTarget)}>
              <span className="contact-return" aria-hidden="true">↵</span><span className="contact-key-text">LET'S TALK</span><Arrow />
            </a>
          </div>
        </div>

      </section>

      <section className="hello-section" id="contact">
        <div className="hello-title"><p className="eyebrow">CONTACT / OPEN TO OPPORTUNITIES</p><h2>Got a role, a project,<br /><span>or a data problem?</span></h2></div>
        <div className="hello-details">
          <p>I’m looking for an entry-level Data Engineering role where I can put Python, SQL, and data-quality skills to work while learning how reliable pipelines are built in practice. Have an opening, a project, or an idea worth talking through? Send me a note.</p>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
          <div className="contact-details-list">
            <span className="contact-detail-label">LINKEDIN</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinDisplay} <Arrow /></a>
            <span className="contact-detail-label">PHONE</span>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
          </div>
          <div className="resume-actions"><a className="resume-view" href={profile.resumeUrl} target="_blank" rel="noreferrer">View resume <Arrow /></a><a className="resume-download" href={profile.resumeUrl} download="Reva_Saxena_Resume.pdf"><span aria-hidden="true">↓</span> Download PDF</a><a className="resume-download" href="/Reva_Saxena_Resume.docx" download="Reva_Saxena_Resume.docx"><span aria-hidden="true">↓</span> Download DOCX</a></div>
        </div>
      </section>
    </main>

    <footer className="site-footer"><span>PYTHON / SQL / RELIABLE DATA</span><span>© {new Date().getFullYear()} REVA SAXENA</span></footer>
    {modal && <SectionDialog section={modal} onClose={closeSection} />}
  </div>;
}

export default App;
