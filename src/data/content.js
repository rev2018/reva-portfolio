export const profile = {
  name: "Reva Saxena",
  role: "BCA Student | Python & SQL",
  location: "Jaipur, Rajasthan, India",
  email: "revasaxena90@gmail.com",
  phone: "+91 63788 63351",
  linkedin: "https://www.linkedin.com/in/reva-saxena-61bb33342",
  linkedinDisplay: "www.linkedin.com/in/reva-saxena-61bb33342",
  pinterest: "https://in.pinterest.com/asitarafromrohininakshatra/",
  resumeUrl: "/Reva_Saxena_Resume.pdf",
  bio: [
    "Hey, I'm Reva — I like my data structured, my pipelines reliable, and my problems a little complicated.",
    "I'm a BCA student curious about what happens behind the scenes: how raw data becomes usable, how systems keep it moving, and what makes information reliable enough to act on.",
    "I work mostly with Python, SQL, and data-focused projects where I can test an idea, solve a problem, and make a workflow more useful. Lately, I'm especially interested in data pipelines, ETL/ELT, and data quality.",
    "To me, good data work isn't just moving information from A to B. It's making sure it arrives clean, consistent, and ready for someone to use.",
    "Outside the terminal, I'm usually following a new idea, building something to see whether I can make it work, or debugging a small issue that has somehow become personal.",
    "Right now, I'm learning the engineering behind dependable data systems and putting that learning into projects."
  ],
  techStack: ["Python", "SQL", "ETL/ELT concepts", "Data quality", "Pandas", "Apache Spark", "OCI", "Docker"]
};

export const skillGroups = [
  {
    title: "Working with data",
    skills: ["ETL/ELT Concepts", "Data Pipelines", "Data Extraction", "Data Transformation", "Data Validation", "Data Quality Checks", "Data Cleaning", "Structured Data", "CSV Ingestion", "Schema Checks", "Data Profiling", "Repeatable Transformations"]
  },
  {
    title: "Programming & querying",
    skills: ["Python", "SQL", "SQL Joins", "Multi-table Queries", "Filtering & Aggregation", "Relational Data Concepts", "Java", "C", "JavaScript", "R", "Scala"]
  },
  {
    title: "Data processing & analytics",
    skills: ["Pandas", "NumPy", "EDA", "Statistical Analysis", "Anomaly Detection", "Scikit-learn", "Predictive Modeling", "Feature Engineering"]
  },
  {
    title: "Big data & cloud",
    skills: ["Apache Spark", "Big Data Fundamentals", "Oracle Cloud Infrastructure (OCI)", "Cloud Computing Concepts", "Distributed Data Processing Fundamentals"]
  },
  {
    title: "What I’m learning next",
    skills: ["Batch-processing concepts", "Data warehouse fundamentals", "Workflow orchestration concepts", "Schema and metadata basics", "SQL query optimisation fundamentals", "Partitioning and file-format concepts"]
  },
  {
    title: "BI & visualization",
    skills: ["Power BI", "Tableau", "Plotly", "Excel", "PivotTables", "VLOOKUP", "Macros", "Dashboards"]
  },
  {
    title: "Automation & development",
    skills: ["Web Scraping", "Workflow Automation", "Input Validation", "Flask", "React", "Git", "Docker", "Postman", "Jupyter Notebook", "Anaconda", "VS Code"]
  },
  {
    title: "Professional toolkit",
    skills: ["Problem Solving", "Data Documentation", "Stakeholder Communication", "Agile/Scrum Basics"]
  }
];

export const experience = [
  {
    company: "CSRBOX",
    companySub: "IBM SkillsBuild × AICTE",
    title: "AI Strategy & BI Intern",
    duration: "Mar 2026 — Apr 2026",
    points: [
      "Worked through three business case studies using AI and business-intelligence frameworks to define the core question, identify data needs, and compare suitable analytical approaches.",
      "Presented data-informed recommendations to a mentor panel, explaining the reasoning behind each approach and how business context and trade-offs shaped the final direction."
    ]
  },
  {
    company: "Mridul and Rohan",
    companySub: "",
    title: "Website Developer Intern",
    duration: "Sep 2025 — Oct 2025",
    points: [
      "Turned 10+ UI mockups into responsive web pages, translating static designs into working layouts that stayed consistent across browsers and screen sizes.",
      "Used CSS optimisation and browser DevTools/DOM debugging to trace rendering and layout issues, improve performance, and reduce page-load time by roughly 20%."
    ]
  },
  {
    company: "Algonive",
    companySub: "",
    title: "Data Analytics Intern",
    duration: "Jun 2025 — Jul 2025",
    points: [
      "Worked with a 25,000+ row transactional dataset to build predictive and anomaly-detection workflows; detection accuracy improved by roughly 18% against baseline rule-based checks.",
      "Queried multiple tables for 15+ ad-hoc requests, built Python/SQL/Plotly dashboards covering 10+ business metrics, and automated validation and transformation steps to cut manual prep time by an estimated 30–35%."
    ]
  },
  {
    company: "Cognifyz Technologies",
    companySub: "",
    title: "Python Developer Intern",
    duration: "May 2025 — Jun 2025",
    points: [
      "Built 5+ Python tools and mini-applications for task automation, data processing, and basic visualisation, turning repeated manual steps into simpler workflows.",
      "Automated scraping to collect and structure 1,000+ records, reducing manual collection time by an estimated 70%; added input-validation and debugging checks to improve consistency."
    ]
  }
];

export const projects = [
  {
    title: "Underground One",
    desc: "A geospatial planning tool for spotting excavation schedule conflicts and comparing coordinated versus independent utility work across 15 Rajasthan cities.",
    details: [
      "Uses typed, city-specific demo datasets for roads, utilities, project schedules, and excavation history rather than live municipal feeds.",
      "Detects overlapping schedules on shared roads with a 10-day buffer, then scores conflict risk from 0–100 using traffic, utility overlap, timelines, history, resurfacing recency, and project scale.",
      "Compares cost and disruption for independent versus coordinated excavation, with interactive maps, KPI dashboards, risk summaries, and historical trends."
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Leaflet", "Leaflet", "Recharts", "React Router", "Lucide React"],
    demo: "https://underground-one-six.vercel.app/",
    eyebrow: "MAPS / EXCAVATION RISK"
  },
  {
    title: "Insiora",
    desc: "Upload a CSV to check for missing values, duplicates, and inconsistent fields, then explore KPIs and statistical summaries before analysis.",
    details: [
      "Parses CSV uploads and flags missing values, duplicates, and inconsistent fields for review before the analysis workflow begins.",
      "Calculates statistical summaries across selected columns, helping users inspect distributions, compare values, and spot potential patterns without relying on separate tools or manual calculations during data review.",
      "Keeps dataset review together: upload data, inspect quality signals, examine summaries, and explore results."
    ],
    tech: ["Python", "SQL Concepts", "TypeScript", "React", "PapaParse"],
    demo: "https://insiora.netlify.app/",
    eyebrow: "CSV / DATA QUALITY"
  },
  {
    title: "Password Strength Analyzer",
    desc: "A browser-based password checker that gives real-time, rule-based feedback and flags common weaknesses as you type.",
    details: [
      "Gives immediate feedback against password rules while the user is entering a password.",
      "Uses vulnerability checks to make weak spots easier to recognise and address.",
      "Keeps the interaction focused: clear input, quick feedback, and a straightforward way to improve the result."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://password-strength-analyser.netlify.app/",
    eyebrow: "SECURITY / PASSWORD CHECKS"
  }
];

export const achievements = [
  {
    title: "Top 15 Team — Technorazz 2026: HACK THE GAP",
    date: "October 2026",
    issuer: "Jaipur National University",
    desc: "Placed in the Top 15 out of nearly 100 teams in Cyber Security & Blockchain with RIFT, a prototype exploring how reputation signals and aggregation strategies can flag suspicious participants in federated AI/ML networks."
  },
  {
    title: "First Position — IIS Hackathon 2026: Idea Presentation",
    date: "September 2026",
    issuer: "IIS (Deemed to be University), Jaipur",
    desc: "Presented Team Rocket’s approach to unified underground utility mapping, aimed at making excavation safer and infrastructure work easier to coordinate."
  },
  {
    title: "Second in Order of Merit — BCA Semesters I & II",
    date: "September 2026",
    issuer: "IIS (Deemed to be University), Jaipur",
    desc: "Recognised for strong academic performance across the first year of the BCA programme."
  },
  {
    title: "Second in Order of Merit — Diploma in Data Analytics",
    date: "September 2026",
    issuer: "IIS (Deemed to be University), Jaipur",
    desc: "Finished the Diploma in Data Analytics with a 10.0 CGPA and second place in the Order of Merit."
  },
  {
    title: "Third Position — Data Science Challenge 2026",
    date: "February 2026",
    issuer: "ISEC 2026 · IIS (Deemed to be University), Jaipur",
    desc: "Placed third in the Data Science Challenge at the 19th Innovations in Software Engineering Conference with a solution shaped by analysis and research."
  },
  {
    title: "First Position — WebVision Competition",
    date: "January 2026",
    issuer: "IIIM, Jaipur",
    desc: "Took first place in an inter-institute web competition at Mosaic Montage, putting practical web development and problem-solving to work under time pressure."
  },
 ];

export const leadership = [
  {
    role: "Participant Coordination Executive",
    group: "Smart India Hackathon 2026",
    date: "Sep 2026",
    desc: "Kept participant communication organised and helped collect, verify, and submit presentation decks."
  },
  {
    role: "Head of Event Documentation & Reporting",
    group: "ISEC 2026 · IIS University",
    date: "Feb 2026",
    desc: "Turned session notes and event proceedings into clear, organised reports and documentation."
  },
  {
    role: "Master of Ceremonies",
    group: "IIS Hackathon 2025",
    date: "Sep 2025",
    desc: "Hosted the idea-presentation event, introduced speakers, and kept transitions smooth and the session on track."
  },
  {
    role: "Photography & Visual Media Lead",
    group: "Smart India Hackathon 2024",
    date: "Sep 2024",
    desc: "Led visual event coverage, capturing key moments and building a consistent record of the event."
  }
];

export const education = [
  {
    school: "IIS (Deemed to be University), Jaipur",
    items: [
      { name: "Bachelor of Computer Applications (BCA)", meta: "CGPA 9.7/10 · Expected May 2027", description: "Building a strong computing foundation across programming, databases, data structures, systems, and software development." },
      { name: "Advanced Diploma in Data Analytics", meta: "CGPA 9.8/10 · May 2026", description: "More hands-on practice with Python analysis, data preparation, visualisation, and turning results into clear takeaways." },
      { name: "Diploma in Data Analytics", meta: "CGPA 10/10 · May 2025", description: "Built the analytics basics: prepare the data, look for what matters, and present the findings clearly." }
    ]
  }
];

export const certifications = [
  "J.P. Morgan — Quantitative Research Job Simulation (Forage)",
  "Accenture North America — Data Analytics & Visualization Job Simulation (Forage)",
  "IBM — Data Analysis Using Python (Tableau, Excel & Data Visualization)",
  "Oracle Cloud Infrastructure 2025 Certified Developer Professional"
];
