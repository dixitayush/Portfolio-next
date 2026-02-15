// Skill icon mapping for devicon CDN
export const skillIconMap: Record<string, string> = {
    // Languages
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

    // Frameworks & Tools
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    "Spring Security": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    "Spring Data JPA": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    "Microservices": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

    // Other
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "Bitbucket": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
    "JIRA": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    "Agile": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg",
    "Maven": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
    "Gradle": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
    "JUnit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg",
    "Mockito": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "OpenAI API": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openal/openal-original.svg",
    "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

export const portfolioData = {
    name: "Ayush Kumar",
    location: "Noida, Uttar Pradesh, India",
    email: "dixitayush284@gmail.com",
    phone: "+91 8931086751",
    website: "https://ayush-portfolio-next.netlify.app",
    linkedin: "https://linkedin.com/in/ayush-dixit-2316b4153",
    github: "https://github.com/dixitayush",
    resume: "/Ayush_kumar_full-stack_resume.pdf",
    last_updated: "July 2025",

    summary: "Senior Software Engineer with 4.5 years of hands-on experience building enterprise-grade applications using Java, Spring Boot, Microservices, and modern front-end technologies. Skilled in architecting scalable systems, cloud-native deployment, and cross-functional collaboration. Passionate about clean code, system optimization, and DevOps culture.",

    education: [
        {
            institution: "MMIT, Pune",
            degree: "Bachelor of Engineering in Computer Science",
            cgpa: "8.0",
            start_date: "July 2017",
            end_date: "June 2021"
        }
    ],

    experience: [
        {
            title: "Senior Software Engineer - I",
            company: "HCL Software",
            location: "Pune, India",
            start_date: "Apr 2025",
            end_date: "Present",
            responsibilities: [
                "Developing cloud-native microservices for HCL's commerce platform using Java, Spring Boot, and Redis",
                "Designing scalable REST APIs using Spring MVC and Spring Data JPA",
                "Containerizing microservices with Docker and deploying on Kubernetes",
                "Creating responsive frontend components in React and integrating with backend REST APIs",
                "Building server-rendered pages and API routes in Next.js for SEO-friendly apps",
                "Implementing secure authentication using JWT and Spring Security",
                "Applying Redis caching for faster data retrieval and session optimization",
                "Conducting code reviews, unit/integration testing, and following Agile/Scrum practices"
            ]
        },
        {
            title: "Software Development Senior Analyst",
            company: "Accenture",
            location: "Noida, India",
            start_date: "Oct 2024",
            end_date: "Apr 2025",
            responsibilities: [
                "Developed secure digital onboarding module with encryption flows",
                "Built scalable Spring Boot microservices for the banking domain",
                "Developed secure REST APIs using Spring Security + JWT",
                "Implemented Spring Batch jobs for large-scale data processing",
                "Used Quartz Scheduler for recurring automated reporting jobs",
                "Followed Agile practices: sprint planning, standups, retrospectives",
                "Conducted code reviews and created JUnit/Mockito unit tests"
            ]
        },
        {
            title: "Software Developer",
            company: "Amdocs",
            location: "Gurugram, India",
            start_date: "Aug 2021",
            end_date: "Oct 2024",
            responsibilities: [
                "Contributed to telecom domain Ordering Management System (OMS)",
                "Implemented business logic using Java, EJB, and WebLogic Server",
                "Integrated SOAP web services and internal APIs",
                "Worked with JMS for asynchronous messaging",
                "Developed Oracle PL/SQL queries and tuned large database operations",
                "Participated in Agile SDLC: standups, sprint planning, demos",
                "Collaborated with QA, DevOps, and Business Analysts",
                "Used Jenkins, Maven, Git, JIRA for CI/CD and version control",
                "Performed debugging, unit testing, and production issue resolution"
            ]
        }
    ],

    projects: [
        {
            name: "MCP-Powered REST/GraphQL API Generator",
            status: "Open Source",
            github: "https://github.com/dixitayush/mcp-api.git",
            demo: null,
            description: "Built an intelligent MCP Server that auto-generates production-ready REST and GraphQL CRUD APIs from Mermaid ER diagrams.",
            details: [
                "Built an intelligent MCP Server that auto-generates production-ready REST and GraphQL CRUD APIs from Mermaid ER diagrams",
                "Developed using Node.js, TypeScript, PostgreSQL, and Model Context Protocol (MCP) for seamless AI-agent integration",
                "Implements automatic schema validation, DDL generation, database synchronization, and API server deployment with zero manual coding",
                "Features real-time ER diagram parsing, entity relationship mapping, and dynamic REST/GraphQL endpoint generation"
            ],
            techStack: ["Node.js", "TypeScript", "PostgreSQL", "GraphQL"]
        },
        {
            name: "AI-School: Intelligent School Management System (SaaS)",
            status: "Live",
            github: "https://github.com/dixitayush/mAI-school",
            demo: "https://mai-school.netlify.app/login",
            description: "Full-stack SaaS platform using Spring Boot, Node.js, GraphQL, PostgreSQL, and Next.js 14 with TypeScript.",
            details: [
                "Full-stack SaaS platform using Spring Boot, Node.js, GraphQL, PostgreSQL, and Next.js 14 with TypeScript",
                "Integrated Generative AI using OpenAI API and MCP Server for student performance analysis and automated report generation",
                "Deployed Agentic AI workflows to autonomously analyze data and generate personalized learning recommendations",
                "Secured with Spring Security OAuth 2.0/JWT and deployed on AWS using EC2, S3, RDS with Docker and CI/CD pipeline"
            ],
            techStack: ["Spring Boot", "Next.js", "GraphQL", "PostgreSQL", "Docker", "AWS"]
        }
    ],

    skills: {
        languages: ["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
        frameworks_tools: [
            "Spring Boot",
            "Spring Security",
            "Spring Data JPA",
            "Microservices",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Docker",
            "Kubernetes",
            "Jenkins",
            "Redis",
            "MongoDB",
            "PostgreSQL",
            "Oracle"
        ],
        other: [
            "Git",
            "Bitbucket",
            "JIRA",
            "Agile",
            "Maven",
            "Gradle",
            "JUnit",
            "Mockito",
            "OpenAI API",
            "CI/CD",
            "GraphQL",
            "Node.js"
        ]
    },

    certifications: [
        "Java Spring Framework with Spring Boot – Udemy",
        "Java Certification – HackerRank",
        "Python Programming – Microsoft",
        "Data Analytics – IBM",
        "Microservices with Spring Boot – Coursera",
        "Docker Kubernetes – Udemy"
    ]
};
