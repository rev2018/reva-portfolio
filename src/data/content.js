import dynamicPricingImg from "../assets/projects/dynamic-pricing.png";
import passwordStrengthImg from "../assets/projects/password-strength.png";
import whatIfImg from "../assets/projects/what-if.png";
import webvisionCertImg from "../assets/achievements/webvision-certificate.jpg";
import dataScienceAwardImg from "../assets/achievements/datascience-award.jpg";

export const profile = {
  name: "Reva Saxena",
  firstName: "Reva",
  role: "Data Analyst & BCA Student",
  location: "Jaipur, Rajasthan, India",
  email: "revasaxena90@gmail.com",
  phone: "+91 63788 63351",
  linkedin: "https://www.linkedin.com/in/reva-saxena-61bb33342",
  resumeUrl: "/Reva_Saxena_Resume.pdf",
  bio: [
    "I'm a data analyst and final-year BCA student based in Jaipur, India, currently rounding out four internships spanning data analytics, AI/BI strategy, and Python development. I'm drawn to the full lifecycle of a data problem: pulling and cleaning the data, building the model or pipeline behind it, and packaging the result into something a stakeholder can actually act on.",
    "Across those internships, I've built predictive models and anomaly-detection workflows on transactional datasets with 25,000+ rows, shipped real-time dashboards in Python, Plotly, and SQL that gave teams live visibility into key business metrics, and automated data-validation pipelines that cut manual prep time by roughly a third. I've also spent time on the AI-strategy side, working through business case studies with BI and AI frameworks to turn ambiguous problems into clear recommendations.",
    "I'm currently completing advanced diplomas in data analytics alongside my BCA, holding certifications from J.P. Morgan, Accenture, IBM, and Oracle Cloud Infrastructure. I'm actively looking for data analyst or data science roles where I can keep working close to the data — and close to the decisions it's meant to inform.",
  ],
  techStack: [
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "Pandas & NumPy",
    "Scikit-learn",
  ],
};

export const skillGroups = [
  {
    title: "Programming & Querying",
    skills: ["Python", "SQL", "JavaScript", "Scala", "C", "Java"],
  },
  {
    title: "Data Analysis & Statistics",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "EDA",
      "Data Cleaning & Wrangling",
      "Statistical Analysis",
      "Hypothesis Testing",
      "A/B Testing",
      "Regression",
      "Time-Series Analysis",
    ],
  },
  {
    title: "BI & Visualization",
    skills: [
      "Power BI",
      "Tableau",
      "Plotly",
      "Excel (PivotTables, VLOOKUP, Macros)",
      "Google Sheets",
      "Dashboarding & KPI Reporting",
    ],
  },
  {
    title: "Cloud & Big Data",
    skills: ["Oracle Cloud Infrastructure (OCI)", "Apache Spark", "Big Data Fundamentals"],
  },
  {
    title: "AI & Automation",
    skills: [
      "Generative AI Tools",
      "Prompt Engineering",
      "AI-Driven Analytics",
      "Machine Learning Fundamentals",
    ],
  },
  {
    title: "Web & Frameworks",
    skills: ["HTML", "CSS", "React", "Flask"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Postman", "Jupyter Notebook", "Anaconda", "VS Code"],
  },
  {
    title: "Professional",
    skills: ["Data Storytelling", "Stakeholder Communication", "Agile/Scrum Basics"],
  },
];

export const experience = [
  {
    company: "CSRBOX",
    companySub: "IBM SkillsBuild x AICTE",
    title: "AI Strategy & BI Intern",
    duration: "Mar 2026 — Apr 2026",
    points: [
      "Worked through 3 real-world business case studies, applying BI and AI frameworks to translate raw business problems into structured, data-driven decisions.",
      "Evaluated each case against IBM SkillsBuild's AI strategy playbooks, weighing trade-offs between different analytical and automation approaches before settling on a recommendation.",
      "Presented findings, insights, and final recommendations to a mentor panel, defending the reasoning behind each strategic call under Q&A.",
    ],
  },
  {
    company: "Mridul and Rohan",
    companySub: "",
    title: "Website Developer Intern",
    duration: "Sept 2025 — Oct 2025",
    points: [
      "Converted 10+ UI design mockups into responsive, functional website pages, working closely from spec to catch spacing, alignment, and breakpoint issues before handoff.",
      "Improved cross-browser compatibility by testing and patching layout inconsistencies across Chrome, Firefox, and Safari.",
      "Cut page-load time by roughly 20% through CSS optimization, image handling, and DevTools/DOM debugging.",
      "Collaborated directly with the design team to flag mockup elements that wouldn't translate well to responsive layouts, and proposed practical fixes.",
    ],
  },
  {
    company: "Algonive",
    companySub: "",
    title: "Data Analytics Intern",
    duration: "Jun 2025 — Jul 2025",
    points: [
      "Built predictive models and anomaly-detection workflows on a 25,000+ row transactional dataset, iterating on feature selection to lift detection accuracy by roughly 18% over the prior baseline rule-based checks.",
      "Designed and shipped real-time analytics dashboards in Python, Plotly, and SQL, giving stakeholders live visibility into 10+ key business metrics without needing to pull manual reports.",
      "Automated data validation and transformation in the pipeline, cutting manual data-prep time by an estimated 30-35% and reducing downstream data-quality errors that used to require manual cleanup.",
      "Queried and joined multi-table datasets in SQL to support 15+ ad-hoc analysis requests from the team, often turning around same-day answers for time-sensitive business questions.",
      "Documented model assumptions and pipeline logic so the anomaly-detection workflow could be handed off and rerun by teammates without needing a walkthrough.",
    ],
  },
  {
    company: "Cognifyz Technologies",
    companySub: "",
    title: "Python Developer Intern",
    duration: "May 2025 — Jun 2025",
    points: [
      "Built 5+ Python-based tools and mini-applications, from utility scripts to small data-visualization tools, writing clean, modular code meant to be reused across tasks rather than one-off scripts.",
      "Automated web-scraping scripts to collect and structure 1,000+ records, cutting manual data-collection time by an estimated 70%.",
      "Added input validation and error handling to each script so they could run unattended on messier, real-world input without silently failing.",
      "Strengthened debugging habits by working through edge cases in scraped data — missing fields, inconsistent formatting — that don't show up in clean sample datasets.",
    ],
  },
];

export const projects = [
  {
    title: "Dynamic Pricing System",
    desc: "An end-to-end demand-based pricing engine: engineered features from product, seasonal, and customer-behavior signals, then trained a predictive model that recommends real-time price adjustments as those inputs change. Built and deployed as an interactive Streamlit app so pricing scenarios can be tested live.",
    tech: ["Python", "Machine Learning", "Feature Engineering", "Streamlit"],
    demo: "https://dynamic-pricing-system-57pfa36vwafwytsxqvstfg.streamlit.app/",
    image: dynamicPricingImg,
    featured: true,
  },
  {
    title: "Password Strength Analyzer",
    desc: "A real-time password strength evaluator that scores entropy and estimated crack time as you type, checks against a full requirements checklist, and visualizes character composition — all client-side, with nothing stored or sent.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://password-strength-analyser.netlify.app/",
    image: passwordStrengthImg,
  },
  {
    title: "What If? Simulator",
    desc: "An interactive scenario-comparison tool: describe a real decision and the alternate path you didn't take, and it visualizes how outcomes might diverge across the two, turning a vague 'what if' into a structured side-by-side comparison.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://creative-axolotl-368dd6.netlify.app/",
    image: whatIfImg,
  },
];

export const achievements = [
  {
    title: "First Position — WebVision Competition",
    date: "January 2026",
    issuer: "International School of Informatics & Management (IIIM), Jaipur",
    desc: "Secured First Position in WebVision, an inter-institute web development competition held during Mosaic Montage – Annual Management & IT Fest, competing against teams from major colleges across Jaipur. Recognized for designing and developing an innovative web solution under competitive time constraints, demonstrating strong problem-solving abilities, front-end development skills, and practical application of modern web technologies.",
    image: webvisionCertImg,
  },
  {
    title: "Third Position — Data Science Challenge 2026",
    date: "February 2026",
    issuer: "IIS (Deemed to be University), Jaipur",
    desc: "Awarded Third Position in the Data Science Challenge 2026 during the 19th International Conference on Innovations in Software Engineering (ISEC 2026), an all-India conference that drew participants and academic evaluators from institutions across the country. Recognized for presenting a data-driven solution that demonstrated analytical thinking, research-based problem solving, data interpretation, and technical evaluation in a highly competitive, national-level academic environment.",
    image: dataScienceAwardImg,
  },
];

export const education = [
  {
    school: "IIS (Deemed to be University), Jaipur",
    items: [
      { name: "Bachelor of Computer Applications (BCA)", meta: "CGPA 9.7/10 · Expected May 2027" },
      { name: "Advanced Diploma in Data Analytics", meta: "CGPA 9.8/10 · May 2026" },
      { name: "Diploma in Data Analytics", meta: "CGPA 10/10 · May 2025" },
    ],
  },
];

export const certifications = [
  "J.P. Morgan — Quantitative Research Job Simulation (Forage)",
  "Accenture North America — Data Analytics & Visualization Job Simulation (Forage)",
  "IBM — Data Analysis Using Python (Tableau, Excel & Data Visualization)",
  "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
  "ACM Student Member",
];

export const navLinks = [
  { label: "home", href: "#hero" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "achievements", href: "#achievements" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];
