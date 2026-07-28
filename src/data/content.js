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
    "I’m a final-year BCA student and aspiring Data Analyst who enjoys turning raw, messy data into insights that drive better decisions. Whether it’s cleaning datasets, building predictive models, designing analytics pipelines, or creating interactive dashboards, I enjoy solving problems across the entire data lifecycle—from collecting information to delivering something stakeholders can confidently act on.",
    "Through multiple internships spanning data analytics, AI/BI strategy, Python development, and web development, I’ve worked on projects involving 25,000+ row transactional datasets, developed anomaly detection and predictive modelling workflows, built real-time dashboards using Python, Plotly, and SQL, and automated data validation processes that reduced manual effort while improving data quality. Beyond the technical implementation, I enjoy understanding the business context behind the numbers and translating complex findings into practical recommendations.",
    "Alongside my BCA, I’m pursuing advanced studies in Data Analytics while continuously strengthening my skills through industry programmes from J.P. Morgan, Accenture, IBM, and Oracle Cloud Infrastructure. I’m particularly interested in Data Analytics, Business Intelligence, and Data Science roles where I can combine analytical thinking, technical problem-solving, and effective communication to build solutions that create measurable business impact.",
  ],
  techStack: [
  "Python",
  "SQL",
  "Power BI",
  "Apache Spark",
  "Oracle Cloud (OCI)",
  "Machine Learning",
  "Docker",
  "Pandas",
  "Plotly",]
};

export const skillGroups = [
  {
    title: "Programming & Querying",
    skills: ["Python", "SQL", "JavaScript", "PHP", "Scala", "C", "Java"],
  },
  {
    title: "Data Analysis & Statistics",
    skills: ["Pandas","NumPy","Scikit-learn","EDA", "Data Cleaning & Wrangling","Statistical Analysis","Hypothesis Testing","A/B Testing","Regression","Time-Series Analysis","Feature Engineering"],
  },
  {
    title: "BI & Visualization",
    skills: ["Power BI","Tableau","Plotly","Excel (PivotTables, VLOOKUP, Macros)","Google Sheets","Dashboarding",],
  },
  {
    title: "Cloud & Big Data",
    skills: ["Oracle Cloud Infrastructure (OCI)", "Apache Spark", "Big Data Analytics", "Data Lakes", "Data Warehousing", "ETL Pipelines", "Cloud Storage & Compute"],
  },
  {
    title: "AI & Automation",
    skills: ["Generative AI Tools","Prompt Engineering","AI-Driven Analytics","Machine Learning","Anomaly Detection","Predictive Modeling","Automation Workflows"],
  },
  {
    title: "Development Stack",
    skills: ["HTML", "CSS", "Bootstrap", "jQuery", "React", "Flask", "Streamlit", "WordPress", "Software Testing"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Postman", "Jupyter Notebook", "Anaconda", "VS Code"],
  },
  {
    title: "Professional",
    skills: ["Problem-Solving", "Critical Thinking", "Data Storytelling", "Stakeholder Communication", "Collaboration & Teamwork", "Agile Methodologies"],
  },
];

export const experience = [
  {
    company: "CSRBOX",
    companySub: "IBM SkillsBuild x AICTE",
    title: "AI Strategy & BI Intern",
    duration: "Mar 2026 — Apr 2026",
    points: [
   "Analysed 3 real-world business case studies using Business Intelligence and AI frameworks to transform complex business challenges into structured, data-driven strategies.",
   "Evaluated multiple AI adoption and analytics approaches by assessing feasibility, business impact, and implementation trade-offs before recommending the most effective solution.",
   "Presented strategic insights and recommendations to an industry mentor panel, clearly justifying analytical decisions while responding to technical and business-focused discussions.",
   "Mapped business requirements to AI and BI solution architectures, identifying suitable analytical approaches to improve decision-making and operational efficiency.",
    ],
  },
  {
    company: "Mridul and Rohan",
    companySub: "",
    title: "Website Developer Intern",
    duration: "Sept 2025 — Oct 2025",
    points: [
      "Translated 10+ UI design mockups into responsive, production-ready web pages, ensuring pixel-perfect implementation across multiple screen sizes and devices.",
      "Enhanced cross-browser compatibility by identifying and resolving layout inconsistencies across Chrome, Firefox, and Safari, delivering a consistent user experience.",
      "Optimized website performance through CSS refinement, image optimization, and DevTools-based debugging, reducing page-load time by approximately 20%.",
      "Collaborated with designers to bridge design and development, identifying responsive design challenges early and proposing practical, user-centric solutions.",
    ],
  },
  {
    company: "Algonive",
    companySub: "",
    title: "Data Analytics Intern",
    duration: "Jun 2025 — Jul 2025",
    points: [
     "Built predictive models and anomaly-detection workflows on a 25,000+ row transactional dataset, improving detection accuracy by approximately 18% through feature engineering.",
     "Designed real-time analytics dashboards using Python, Plotly, and SQL, providing stakeholders with live visibility into 10+ key business performance metrics.",
     "Automated data validation, transformation, and SQL workflows, reducing manual data preparation time by approximately 30% while improving data quality and pipeline reliability.",
     "Documented analytical workflows, model assumptions, and pipeline logic, enabling reproducible execution and seamless knowledge transfer across team members.",
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
    desc: "Built an end-to-end machine learning pricing engine that analyses product attributes, seasonal demand, and customer behaviour to recommend dynamic price adjustments. Engineered predictive features, trained a pricing model, and deployed the solution as an interactive Streamlit application for real-time scenario analysis and pricing optimization.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    demo: "https://dynamic-pricing-system-57pfa36vwafwytsxqvstfg.streamlit.app/",
    image: dynamicPricingImg,
    featured: true,
  },
  {
    title: "Password Strength Analyzer",
    desc: "Built an interactive password security analyzer that evaluates password strength using entropy calculations, regex-based validation, and common password detection. The application provides real-time security feedback, estimates brute-force crack time, and includes a secure password generator, all within a responsive, user-friendly interface, and visualizes character composition — all client-side, with nothing stored or sent.",
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
