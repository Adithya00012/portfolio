// ---------------------------------------------------------------------------
// All editable site content lives here. Update this file to change copy —
// no need to touch component code.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Adithya K",
  title: "BTech Student | AI Full-Stack Developer",
  tagline:
    "I build full-stack web apps powered by AI — from responsive frontends to scalable backends, wiring LLMs, RAG pipelines, and intelligent APIs into real products.",
  email: "k.adithyaadithya1432@gmail.com",
  github: "https://github.com/Adithya00012",
  linkedin: "https://www.linkedin.com/in/adithya-k23",
  location: "India"
};

export const about = {
  bio: [
    "I'm an India-based undergraduate (BTech, CSE — Data Science) focused on full-stack AI web development. I like building complete products end to end — clean React interfaces on the frontend, robust APIs and databases on the backend, and increasingly, AI capabilities like LLMs, RAG pipelines, and intelligent agents woven into the middle.",
    "I'm especially drawn to projects that combine traditional software engineering discipline with modern AI tooling — things like MCP servers, vector search, and LLM-powered workflows — rather than AI as a bolted-on feature."
  ],
  education: {
    degree: "BTech, Computer Science & Engineering (Data Science)",
    institution: "CMR University",
    duration: "Expected Graduation: 2027"
  },
  interests: ["Full-stack web development", "Applied AI / LLM engineering", "Open source", "System design"]
};

export const skills = [
  {
    category: "Languages & Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "REST APIs", "Redis"]
  },
  {
    category: "Auth & State",
    items: ["JWT", "OAuth basics", "Zustand", "Redux Toolkit"]
  },
  {
    category: "AI / ML Tooling",
    items: ["OpenAI APIs", "LangChain", "MCP (Model Context Protocol)", "RAG", "pgvector"]
  },
  {
    category: "Tools & Infra",
    items: ["Git & GitHub", "Docker", "Jest", "Vercel", "Render"]
  }
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "RepoPilot — MCP-Based Issue Triage Platform",
    description:
      "AI platform that helps open-source maintainers triage GitHub issues: auto-categorizes issues, detects duplicates, drafts replies, and generates release notes — all with human approval required. Ships a RAG chatbot and 5 custom MCP tools so any AI assistant can use its capabilities directly.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "pgvector", "Redis", "MCP", "RAG"],
    live: "https://repopilot-frontend.onrender.com",
    github: "https://github.com/Adithya00012/repopilot"
  },
  {
    title: "CivicFix — AI-Powered Civic Issue Management",
    description:
      "Lets citizens report civic issues (potholes, garbage, broken streetlights, water leaks) with photo evidence and GPS location. Uses AI to auto-classify complaints, detect duplicates via text and image similarity, route issues to the right department, track SLA deadlines with automatic escalation, and gives citizens a public transparency page to track resolution progress.",
    stack: ["React", "TypeScript", "Leaflet", "Node.js", "PostgreSQL", "Gemini", "BullMQ"],
    live: "https://civicfix.k-adithyaadithya1432.workers.dev",
    github: "https://github.com/Adithya00012/civicfix"
  },
  {
    title: "Codebase Q&A — AI-Powered RAG Assistant",
    description:
      "Full-stack RAG app that lets developers ask natural-language questions about any public GitHub repo and get source-cited answers grounded in the real code — no more grepping through hundreds of files.",
    stack: ["React", "LangChain", "Groq (Llama 3.3)", "pgvector", "Node.js", "Docker"],
    live: "https://codebase-qa.k-adithyaadithya1432.workers.dev",
    github: "https://github.com/Adithya00012/codebase-qa"
  }
];

export type ExperienceItem = {
  role: string;
  org: string;
  duration: string;
  points: string[];
  credentialId?: string; // optional — shown as small reference text, not a link
};

export const experience: ExperienceItem[] = [
  {
    role: "AI & Cloud Virtual Internship",
    org: "Edunet Foundation × IBM SkillsBuild (in collaboration with AICTE)",
    duration: "Jul 15 — Aug 7, 2025",
    points: [
      "Completed a 4-week internship in Emerging Technologies (AI & Cloud), working hands-on with the IBM Cloud Platform.",
      "Built practical familiarity with cloud-based AI tooling and workflows as part of a structured, mentor-guided curriculum."
    ],
    credentialId: "INTERNSHIP_1748937226683eaa0a58abc"
  },
  {
    role: "Open Source Contributor — Wagtail CMS",
    org: "Wagtail (Django CMS)",
    duration: "2025",
    points: [
      "Fixed a server-startup crash (Issue #12791) caused by a circular import: a ModelForm used as creation_form_class on a ChooserViewSet, referenced via a StreamField block, triggered a model import before Django's app registry had finished loading.",
      "Diagnosed the full dependency cycle (Page model → StreamField block → ChooserViewSet → ModelForm → model) and evaluated multiple fixes, including dotted-path string support for creation_form_class.",
      "Implemented a backwards-compatible fix by deferring form class resolution to runtime instead of import time — merged into Wagtail core (PR #13985)."
    ]
  }
];

// Set this to your Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxxx"
export const formspreeEndpoint = "https://formspree.io/f/your-id-here";
