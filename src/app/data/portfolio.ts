// ============================================================
//  Skill icon mapping (devicon CDN)
// ============================================================
const dv = (slug: string, variant = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

export const skillIconMap: Record<string, string> = {
    // Languages
    Java: dv("java"),
    JavaScript: dv("javascript"),
    TypeScript: dv("typescript"),
    Python: dv("python"),
    Rust: dv("rust"),
    SQL: dv("azuresqldatabase"),
    PLpgSQL: dv("postgresql"),
    HTML: dv("html5"),
    CSS: dv("css3"),
    Bash: dv("bash"),

    // Backend / frameworks
    "Spring Boot": dv("spring"),
    "Spring Security": dv("spring"),
    "Spring Data JPA": dv("spring"),
    Microservices: dv("kubernetes"),
    "Node.js": dv("nodejs"),
    Express: dv("express"),
    FastAPI: dv("fastapi"),
    GraphQL: dv("graphql", "plain"),
    PostGraphile: dv("graphql", "plain"),
    Tauri: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg",

    // Frontend
    React: dv("react"),
    "Next.js": dv("nextjs"),
    "Tailwind CSS": dv("tailwindcss"),
    "shadcn/ui": dv("react"),
    Zustand: dv("react"),
    "Framer Motion": dv("framermotion"),

    // Data
    PostgreSQL: dv("postgresql"),
    MongoDB: dv("mongodb"),
    Redis: dv("redis"),
    Oracle: dv("oracle"),
    SQLite: dv("sqlite"),

    // DevOps / cloud
    Docker: dv("docker"),
    Kubernetes: dv("kubernetes"),
    Jenkins: dv("jenkins"),
    AWS: dv("amazonwebservices", "original-wordmark"),
    "CI/CD": dv("githubactions"),
    "GitHub Actions": dv("githubactions"),
    Vite: dv("vitejs"),

    // AI / tooling
    "Gemini API": dv("google"),
    NextAuth: dv("nextjs"),

    // Other
    Git: dv("git"),
    Bitbucket: dv("bitbucket"),
    JIRA: dv("jira"),
    Agile: dv("confluence"),
    Maven: dv("maven"),
    Gradle: dv("gradle"),
    JUnit: dv("junit"),
    Mockito: dv("java"),
    Mermaid: dv("markdown"),
};

// ============================================================
//  Types
// ============================================================
export interface ArchNode {
    label: string;
    sub?: string;
}
export interface ArchLayer {
    title: string;
    tone?: "frontend" | "backend" | "data" | "external" | "ai";
    nodes: ArchNode[];
}
export interface Project {
    slug: string;
    name: string;
    tagline: string;
    status: "Live" | "Open Source" | "In Progress";
    year: string;
    role: string;
    github: string | null;
    demo: string | null;
    featured: boolean;
    description: string;
    /** "The Thinking" — why this exists */
    problem: string;
    approach: string[];
    /** "System Design" */
    architecture: {
        layers: ArchLayer[];
        flow: string;
    };
    highlights: string[];
    techStack: string[];
    languages: Record<string, number>;
    commits: number;
}

// ============================================================
//  Portfolio data
// ============================================================
export const portfolioData = {
    name: "Ayush Dixit",
    altName: "Ayush Kumar",
    role: "Senior Software Engineer",
    location: "Noida, Uttar Pradesh, India",
    email: "dixitayush284@gmail.com",
    phone: "+91 8931086751",
    website: "https://ayushdixit.work",
    linkedin: "https://linkedin.com/in/ayush-dixit-2316b4153",
    github: "https://github.com/dixitayush",
    githubUser: "dixitayush",
    resume: "/Ayush_kumar_full-stack_resume.pdf",
    last_updated: "June 2026",
    available: true,

    // Rotating roles for the hero
    roles: [
        "Senior Software Engineer",
        "Full-Stack Developer",
        "MERN Stack Developer",
        "Java Full-Stack Developer",
        "Cloud-Native Developer",
    ],

    headline: "Senior Software Engineer & Full-Stack Developer",
    tagline: "I build scalable backends, thoughtful tooling, and polished products.",

    summary:
        "Senior Software Engineer and Full-Stack Developer with ~5 years building enterprise-grade systems. I work across the MERN stack (MongoDB, Express, React, Node.js) and the Java / Spring Boot microservices world — shipping fast products with Next.js, TypeScript, and Rust. I care about clean architecture, performance, and developer experience.",

    // Hero / stats band
    stats: [
        { label: "Years Experience", value: 5, suffix: "+" },
        { label: "Projects Shipped", value: 8, suffix: "" },
        { label: "Public Repos", value: 8, suffix: "" },
        { label: "Companies", value: 3, suffix: "" },
    ],

    // "How I Think" — engineering philosophy
    philosophy: [
        {
            icon: "Layers",
            title: "Architecture first",
            body: "I design for the boundary before the line of code — clear layers, explicit contracts, and data flow you can reason about. Good structure makes everything after it cheaper.",
        },
        {
            icon: "Gauge",
            title: "Performance is a feature",
            body: "Native binaries over bundled runtimes, indexed search over scans, DataLoader over N+1, caching where it counts. I measure before I optimize, then optimize what matters.",
        },
        {
            icon: "ShieldCheck",
            title: "Secure by default",
            body: "JWT, OAuth2, row-level security, least-privilege access, and local-first privacy. Security isn't a layer you add later — it's baked into the data model.",
        },
        {
            icon: "Sparkles",
            title: "Automate the boilerplate",
            body: "If a machine can generate the CRUD, the schema, or the API, it should. I build tools that turn declarative intent — an ER diagram, a DB schema — into working software.",
        },
        {
            icon: "Wand2",
            title: "Developer experience matters",
            body: "Typed contracts, zero-config defaults, clear errors at startup, and observability built in. The best systems are the ones the next engineer can extend without fear.",
        },
        {
            icon: "GitMerge",
            title: "Ship, measure, iterate",
            body: "I work in small, reviewable increments — tested, documented, and deployed through CI/CD. Real feedback from a running system beats speculation every time.",
        },
    ],

    experience: [
        {
            title: "Senior Software Engineer - I",
            company: "HCL Software",
            location: "Pune, India",
            start_date: "Apr 2025",
            end_date: "Present",
            current: true,
            stack: ["Java", "Spring Boot", "Redis", "Docker", "Kubernetes", "React", "Next.js"],
            responsibilities: [
                "Developing cloud-native microservices for HCL's commerce platform using Java, Spring Boot, and Redis",
                "Designing scalable REST APIs with Spring MVC and Spring Data JPA",
                "Containerizing microservices with Docker and deploying on Kubernetes",
                "Building responsive React frontends and SEO-friendly server-rendered pages in Next.js",
                "Implementing secure authentication with JWT and Spring Security",
                "Applying Redis caching for faster data retrieval and session optimization",
                "Conducting code reviews, unit/integration testing, and following Agile/Scrum",
            ],
        },
        {
            title: "Software Development Senior Analyst",
            company: "Accenture",
            location: "Noida, India",
            start_date: "Oct 2024",
            end_date: "Apr 2025",
            current: false,
            stack: ["Java", "Spring Boot", "Spring Security", "Spring Batch", "Quartz"],
            responsibilities: [
                "Built a secure digital onboarding module with encryption flows for the banking domain",
                "Developed scalable Spring Boot microservices and secure REST APIs (Spring Security + JWT)",
                "Implemented Spring Batch jobs for large-scale data processing",
                "Used Quartz Scheduler for recurring automated reporting jobs",
                "Followed Agile practices: sprint planning, standups, retrospectives",
                "Conducted code reviews and authored JUnit/Mockito unit tests",
            ],
        },
        {
            title: "Software Developer",
            company: "Amdocs",
            location: "Gurugram, India",
            start_date: "Aug 2021",
            end_date: "Oct 2024",
            current: false,
            stack: ["Java", "EJB", "WebLogic", "SOAP", "JMS", "Oracle PL/SQL", "Jenkins"],
            responsibilities: [
                "Contributed to a telecom Ordering Management System (OMS)",
                "Implemented business logic with Java, EJB, and WebLogic Server",
                "Integrated SOAP web services and internal APIs; handled async messaging with JMS",
                "Wrote and tuned Oracle PL/SQL for large database operations",
                "Participated in Agile SDLC and collaborated with QA, DevOps, and Business Analysts",
                "Used Jenkins, Maven, Git, and JIRA for CI/CD and version control",
                "Performed debugging, unit testing, and production issue resolution",
            ],
        },
    ],

    // ============================================================
    //  Projects — with "The Thinking" + "System Design"
    // ============================================================
    projects: <Project[]>[
        {
            slug: "clipo",
            name: "Clipo",
            tagline: "A fast, native, privacy-first clipboard manager",
            status: "Open Source",
            year: "2026",
            role: "Creator",
            github: "https://github.com/dixitayush/clipo",
            demo: null,
            featured: true,
            description:
                "A lightweight clipboard history manager for macOS and Windows built with Tauri v2 + Rust + SQLite (FTS5) and a React + TypeScript + shadcn/ui frontend. Search, pin, tag, edit and paste back anything you've copied — 100% local.",
            problem:
                "Clipboard managers are either heavy Electron apps that eat RAM, or cloud-synced tools that quietly ship your copied passwords off-device. I wanted something that starts instantly, stays under ~15 MB, and never leaves the machine.",
            approach: [
                "Chose Tauri v2 over Electron — ships a tiny native binary on the OS webview instead of bundling Chromium.",
                "Put a zero-GC Rust core behind the UI so monitoring never blocks the interface.",
                "Used SQLite + FTS5 for full-text search that stays fast past 100k+ entries with no server.",
                "De-dupe copies by SHA-256 and stream them over an MPSC channel to an async writer.",
            ],
            architecture: {
                layers: [
                    {
                        title: "WebView — React UI",
                        tone: "frontend",
                        nodes: [
                            { label: "Sidebar / Search", sub: "All · Pinned · Tagged · Today" },
                            { label: "Virtualized list", sub: "@tanstack/react-virtual" },
                            { label: "Detail / Edit panel", sub: "pin · favorite · tag" },
                            { label: "Zustand store", sub: "typed invoke + event listeners" },
                        ],
                    },
                    {
                        title: "Rust Core — Tauri v2",
                        tone: "backend",
                        nodes: [
                            { label: "Commands", sub: "async handlers" },
                            { label: "Clipboard watcher", sub: "poll 400ms + SHA-256 dedupe" },
                            { label: "Repository (SQLx)", sub: "WAL pool" },
                            { label: "Tray + global hotkey", sub: "⌘/Ctrl+Shift+V" },
                        ],
                    },
                    {
                        title: "Storage",
                        tone: "data",
                        nodes: [{ label: "SQLite + FTS5", sub: "clipboard.db — fully local" }],
                    },
                ],
                flow: "OS clipboard changes → watcher thread samples it (400ms) → de-dupes by SHA-256 → sends over an MPSC channel → async task writes to SQLite → backend emits `clipboard://new-item` → the store prepends the row. No polling work ever runs on the UI thread.",
            },
            highlights: [
                "Native binary, ~10–15 MB installer, cold start under a second",
                "Full-text search (FTS5) that stays fast past 100k+ entries",
                "Pins, favorites, tags, notes, and edit-in-place",
                "Global hotkey + system-tray; 100% local, no telemetry",
            ],
            techStack: ["Rust", "Tauri", "TypeScript", "React", "SQLite", "Tailwind CSS", "shadcn/ui", "Zustand"],
            languages: { TypeScript: 66867, Rust: 33625, JavaScript: 7173, CSS: 2449, Shell: 2333 },
            commits: 2,
        },
        {
            slug: "nakshatra-ai",
            name: "Nakshatra AI",
            tagline: "AI-powered Vedic astrology platform",
            status: "In Progress",
            year: "2026",
            role: "Full-Stack Engineer",
            github: "https://github.com/dixitayush/nakshatra-ai",
            demo: null,
            featured: true,
            description:
                "A monorepo combining a Next.js 16 web app with a Python FastAPI astro-engine microservice — kundli generation, kundli matching, an AI astrologer chat, and daily horoscopes, with auth, payments, and an admin dashboard.",
            problem:
                "Vedic astrology math (ephemeris, Guna Milan) is best done in Python, but the product needed a modern, SEO-friendly web app with auth, payments, and AI chat. The challenge was marrying two runtimes cleanly without coupling them.",
            approach: [
                "Split the system into a Next.js 16 App Router frontend and a Python FastAPI microservice for the heavy astrology calculations.",
                "Wrapped the Python service behind a typed client with a mock fallback, so the web app runs even when the engine is offline.",
                "Used NextAuth v5 with Email OTP + Google, and middleware for role-based route protection.",
                "Layered Gemini as the primary LLM with an OpenAI fallback for the AI astrologer chat.",
            ],
            architecture: {
                layers: [
                    {
                        title: "Next.js 16 — App Router",
                        tone: "frontend",
                        nodes: [
                            { label: "Auth", sub: "NextAuth v5 · OTP · Google" },
                            { label: "Kundli / Match / Horoscope" },
                            { label: "AI Astrologer chat" },
                            { label: "Admin dashboard", sub: "role-gated" },
                        ],
                    },
                    {
                        title: "Domain services (lib/)",
                        tone: "backend",
                        nodes: [
                            { label: "AI clients", sub: "Gemini + OpenAI fallback" },
                            { label: "Payments", sub: "Razorpay" },
                            { label: "Astrology client", sub: "typed + mock fallback" },
                            { label: "Mongoose models" },
                        ],
                    },
                    {
                        title: "Python astro-engine (FastAPI)",
                        tone: "ai",
                        nodes: [
                            { label: "Kundli calculations" },
                            { label: "Guna Milan matching" },
                        ],
                    },
                    {
                        title: "Data & external",
                        tone: "external",
                        nodes: [
                            { label: "MongoDB Atlas" },
                            { label: "Razorpay" },
                            { label: "Google OAuth / Gemini" },
                        ],
                    },
                ],
                flow: "Middleware enforces auth + RBAC → App Router server actions / API routes call domain services → ephemeris-heavy work is delegated to the FastAPI astro-engine → results and user state persist to MongoDB. The Python service is optional in dev thanks to a mock fallback.",
            },
            highlights: [
                "Polyglot monorepo: Next.js 16 + Python FastAPI microservice",
                "NextAuth v5 with Email OTP + Google and role-based middleware",
                "Dual-LLM AI chat (Gemini primary, OpenAI fallback)",
                "Razorpay payments and an admin dashboard",
            ],
            techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "MongoDB", "NextAuth", "Gemini API", "OpenAI API", "Razorpay", "Tailwind CSS"],
            languages: { TypeScript: 260926, CSS: 18926, Python: 15320, JavaScript: 724 },
            commits: 7,
        },
        {
            slug: "mai-school",
            name: "mAI-school",
            tagline: "Multi-tenant school management SaaS",
            status: "Live",
            year: "2025",
            role: "Full-Stack Engineer",
            github: "https://github.com/dixitayush/mAI-school",
            demo: "https://mai-school.netlify.app/login",
            featured: true,
            description:
                "A containerized, multi-tenant school-management platform. Every institute signs in on its own subdomain with its own branding; admins, principals, teachers and students each get a focused, role-based home — attendance, fees, exams, announcements, meetings, and AI assists.",
            problem:
                "Schools need the same core software but with their own identity, data isolation, and role boundaries. Building one app per school doesn't scale — I needed true multi-tenancy with strict row-level isolation and self-serve onboarding.",
            approach: [
                "Modeled the platform as multi-tenant with a subdomain per institute and a tenant resolver in the request path.",
                "Exposed the data layer through PostGraphile — auto-generated, Relay-compliant GraphQL straight from the PostgreSQL schema.",
                "Enforced isolation with PostgreSQL row-level security and JWT-scoped sessions per tenant + role.",
                "Built self-serve onboarding that provisions an institute, its first admin, and a shareable sign-in link by email.",
            ],
            architecture: {
                layers: [
                    {
                        title: "Next.js 15 — per-institute subdomain",
                        tone: "frontend",
                        nodes: [
                            { label: "Tenant resolver", sub: "subdomain → context" },
                            { label: "Role dashboards", sub: "Admin · Principal · Teacher · Student" },
                            { label: "Self-serve onboarding" },
                        ],
                    },
                    {
                        title: "GraphQL API — PostGraphile",
                        tone: "backend",
                        nodes: [
                            { label: "Auto-generated CRUD" },
                            { label: "JWT auth", sub: "tenant + role scoped" },
                            { label: "Row-level security" },
                        ],
                    },
                    {
                        title: "Domain",
                        tone: "backend",
                        nodes: [
                            { label: "Attendance · Fees · Exams" },
                            { label: "Announcements · Meetings" },
                            { label: "AI assists", sub: "drafting + summaries" },
                        ],
                    },
                    {
                        title: "Data",
                        tone: "data",
                        nodes: [
                            { label: "PostgreSQL", sub: "PLpgSQL functions + RLS" },
                            { label: "Docker", sub: "containerized deploy" },
                        ],
                    },
                ],
                flow: "A request hits a tenant subdomain → the tenant resolver sets context → the user lands on a role-scoped dashboard → reads/writes go through PostGraphile GraphQL with PostgreSQL row-level security guaranteeing each institute only ever sees its own data.",
            },
            highlights: [
                "True multi-tenancy: subdomain + branding per institute",
                "PostGraphile auto-generates the GraphQL API from the DB schema",
                "Role-based access for admin, principal, teacher, student",
                "Self-serve onboarding with emailed sign-in links; Dockerized",
            ],
            techStack: ["Next.js", "JavaScript", "GraphQL", "PostGraphile", "PostgreSQL", "PLpgSQL", "Docker", "Tailwind CSS"],
            languages: { JavaScript: 767924, PLpgSQL: 66422, CSS: 7954, Shell: 1467 },
            commits: 30,
        },
        {
            slug: "springboot-postgraphile",
            name: "PostGraphile Java",
            tagline: "Auto-generate a GraphQL API from your PostgreSQL schema",
            status: "Open Source",
            year: "2026",
            role: "Creator",
            github: "https://github.com/dixitayush/springboot-postgraphile",
            demo: null,
            featured: true,
            description:
                "A Spring Boot starter that introspects your PostgreSQL database and generates a full, Relay-compliant GraphQL API — the Java equivalent of PostGraphile. Zero boilerplate: tables, views, FKs, enums and functions become types, queries and mutations.",
            problem:
                "PostGraphile is fantastic for Node.js, but Java/Spring teams had no equivalent — they hand-wrote resolvers and fought N+1 queries. I wanted to bring zero-config, schema-driven GraphQL to the Spring ecosystem.",
            approach: [
                "Built a framework-agnostic core that introspects tables, columns, FKs and enums, then generates the schema in a pipeline of phases.",
                "Solved N+1 by batching foreign-key loads with DataLoader; added keyset cursor pagination for index-friendly navigation.",
                "Ran each GraphQL request in a single JDBC transaction and wired PostgreSQL row-level security via SET LOCAL session variables.",
                "Added complexity/depth guards, JWT/Basic/API-key auth, and virtual-thread execution for data fetchers.",
            ],
            architecture: {
                layers: [
                    {
                        title: "GraphQL request",
                        tone: "frontend",
                        nodes: [{ label: "GraphiQL / clients", sub: "Relay-compliant" }],
                    },
                    {
                        title: "Spring Boot starter",
                        tone: "backend",
                        nodes: [
                            { label: "Auto-config" },
                            { label: "Auth", sub: "JWT · Basic · API key" },
                            { label: "Complexity / depth guards" },
                            { label: "Virtual-thread executor" },
                        ],
                    },
                    {
                        title: "postgraphile-java-core",
                        tone: "backend",
                        nodes: [
                            { label: "Introspection", sub: "tables · FKs · enums" },
                            { label: "Schema generation", sub: "phased pipeline" },
                            { label: "Execution", sub: "DataFetchers + DataLoader" },
                            { label: "Relay Node IDs" },
                        ],
                    },
                    {
                        title: "PostgreSQL",
                        tone: "data",
                        nodes: [
                            { label: "Tables · views · FKs · enums" },
                            { label: "Row-level security", sub: "SET LOCAL per request" },
                        ],
                    },
                ],
                flow: "At startup the PG schema is introspected → the GraphQL schema is built in phases (types → relationships → connections → filters) → each request runs in one JDBC transaction → DataLoader batches FK loads to kill N+1 → RLS is applied via SET LOCAL session variables inside the transaction.",
            },
            highlights: [
                "Zero-config: PostgreSQL schema → Relay GraphQL API",
                "DataLoader batching eliminates N+1; keyset cursor pagination",
                "Per-request JDBC transaction + PostgreSQL row-level security",
                "Smart Comments, full-text search, JWT auth, virtual threads",
            ],
            techStack: ["Java", "Spring Boot", "GraphQL", "PostgreSQL", "PLpgSQL"],
            languages: { Java: 322881, PLpgSQL: 2556, HTML: 2178 },
            commits: 3,
        },
        {
            slug: "mcp-api",
            name: "MCP Mermaid ER Server",
            tagline: "Turn an ER diagram into a live REST + GraphQL API",
            status: "Open Source",
            year: "2026",
            role: "Creator",
            github: "https://github.com/dixitayush/mcp-api",
            demo: null,
            featured: true,
            description:
                "An open-source Model Context Protocol (MCP) server that parses Mermaid ER diagrams, creates PostgreSQL tables, and exposes automatic REST and GraphQL CRUD APIs — driven entirely by an AI agent through 12 MCP tools.",
            problem:
                "Going from a data model to a working API is repetitive: write the DDL, wire CRUD endpoints, add a GraphQL layer. I wanted an AI agent to do all of it from a single Mermaid ER diagram — no boilerplate.",
            approach: [
                "Implemented the Model Context Protocol so any MCP client (e.g. Claude) can drive the whole workflow with tool calls.",
                "Built a Mermaid ER parser that extracts entities, attributes, relationships and key constraints (PK/FK/UK).",
                "Generated DDL from the parsed schema, synced it to PostgreSQL, then spun up REST and GraphQL CRUD servers dynamically.",
                "Exposed 12 focused tools (parse, validate, generate SQL, create/drop schema, start/stop API) so the agent stays in control.",
            ],
            architecture: {
                layers: [
                    {
                        title: "AI agent",
                        tone: "ai",
                        nodes: [{ label: "MCP client (Claude)", sub: "invokes tools" }],
                    },
                    {
                        title: "MCP server (TypeScript)",
                        tone: "backend",
                        nodes: [
                            { label: "Mermaid ER parser", sub: "entities · attrs · relations" },
                            { label: "SQL generator", sub: "DDL + key detection" },
                            { label: "Schema sync" },
                            { label: "API server controller", sub: "12 tools" },
                        ],
                    },
                    {
                        title: "Generated API",
                        tone: "backend",
                        nodes: [
                            { label: "REST CRUD" },
                            { label: "GraphQL CRUD" },
                        ],
                    },
                    {
                        title: "Data",
                        tone: "data",
                        nodes: [{ label: "PostgreSQL", sub: "auto-created tables" }],
                    },
                ],
                flow: "An AI agent calls parse_er_diagram → the server extracts entities & relationships → generate_sql produces DDL → create_schema syncs it to PostgreSQL → start_api_server brings up REST and/or GraphQL CRUD endpoints — all with zero hand-written code.",
            },
            highlights: [
                "Model Context Protocol server with 12 agent-callable tools",
                "Mermaid ER → PostgreSQL DDL with PK/FK/UK detection",
                "Auto-generated REST and GraphQL CRUD endpoints",
                "Drives end-to-end from diagram to running API",
            ],
            techStack: ["TypeScript", "Node.js", "MCP", "PostgreSQL", "GraphQL", "Mermaid"],
            languages: { TypeScript: 67224, JavaScript: 2577, Mermaid: 1403 },
            commits: 4,
        },
    ],

    // ============================================================
    //  Skills — categorized
    // ============================================================
    skillGroups: [
        {
            label: "Languages",
            icon: "Code2",
            items: ["Java", "TypeScript", "JavaScript", "Python", "Rust", "SQL", "HTML", "CSS"],
        },
        {
            label: "Backend & APIs",
            icon: "Server",
            items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Microservices", "Node.js", "FastAPI", "GraphQL", "REST"],
        },
        {
            label: "Frontend",
            icon: "Layout",
            items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Tauri"],
        },
        {
            label: "Databases",
            icon: "Database",
            items: ["PostgreSQL", "MongoDB", "Redis", "Oracle", "SQLite"],
        },
        {
            label: "DevOps & Cloud",
            icon: "Cloud",
            items: ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD", "Git"],
        },
        {
            label: "AI & Tooling",
            icon: "Sparkles",
            items: ["MCP", "OpenAI API", "Gemini API", "JUnit", "Mockito", "JIRA"],
        },
    ],

    education: [
        {
            institution: "MMIT, Pune",
            degree: "Bachelor of Engineering in Computer Science",
            cgpa: "8.0",
            start_date: "July 2017",
            end_date: "June 2021",
        },
    ],

    certifications: [
        "Java Spring Framework with Spring Boot – Udemy",
        "Java Certification – HackerRank",
        "Python Programming – Microsoft",
        "Data Analytics – IBM",
        "Microservices with Spring Boot – Coursera",
        "Docker & Kubernetes – Udemy",
    ],
};

export type PortfolioData = typeof portfolioData;
