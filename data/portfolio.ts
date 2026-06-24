export type NavLink = {
  label: string
  href: string
}

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tech: string[]
}

export type Project = {
  title: string
  description: string
  impact: string
  tech: string[]
}

export type PersonalProject = {
  title: string
  description: string
  tech: string[]
  videoUrl?: string
  githubUrl?: string
}

export type SkillCategory = {
  category: string
  items: string[]
}

export type ContactInfo = {
  email: string
  github: string
  linkedin: string
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const experience: ExperienceEntry[] = [
  {
    company: "Quizlet",
    role: "Senior Software Engineer (L3)",
    period: "Jan 2024 – Present",
    location: "New York, NY",
    bullets: [
      "Architected heterogeneous folder system supporting diverse study materials — redesigned ORM to accommodate both integer and string-based IDs, created new database schemas, and developed batch migration scripts to move 600M+ records with zero downtime.",
      "Led zero-downtime upgrade of Elasticsearch cluster from v8.11 to v9.2.1, overseeing strategy, documentation, risk mitigation, and vendor coordination; introduced alias-based indexing that unlocked semantic search for ML partners.",
      "Spearheaded migration of core search functionality from a legacy monolith to a scalable Go microservice, reducing operational complexity and enabling independent iteration on search infrastructure.",
      "Owned course content recommendations in the Hex service — Spanner table design, multi-platform API endpoints for web and native clients, and Datadog monitoring; delivered ahead of schedule.",
      "Drove the Quizlet Powered Folders (QPF) pipeline: migrated data from BigQuery to Vitess using QBatch scripts, launched 150,000+ curated folders during spring finals with a 37% CTR vs. 20% baseline.",
      "Course-Powered Folders initiative: +66% canonical school additions, +243% explicit course additions, +77% folder creation.",
    ],
    tech: ["Go", "Python", "TypeScript", "Django", "FastAPI", "PostgreSQL", "Cloud Spanner", "Elasticsearch", "BigQuery"],
  },
  {
    company: "Quizlet",
    role: "Software Engineer II",
    period: "Sep 2020 – Jan 2024",
    location: "New York, NY",
    bullets: [
      "Developed Python/Django API services delivering step-by-step solutions for user-generated questions and textbooks; extended APIs with full backward compatibility across search, ranking, and blended results endpoints.",
      "Drove planning, authored the RFC, and implemented a Python-based misspelling microservice; improved search capabilities by integrating video content indexing into blended search results.",
      "Migrated Search Pages to a new rendering architecture using TypeScript, Next.js, and React.",
      "Contributed to BTS Tiger Team navigation A/B experiments: +34% Q-Chat engagement, +19% 1-day Q-Chat retention, contributing to a 3.3M search day milestone in Dec 2023.",
    ],
    tech: ["Python", "TypeScript", "Django", "FastAPI", "Next.js", "React", "PostgreSQL", "Elasticsearch"],
  },
  {
    company: "Slader",
    role: "Software Engineer I (Ad Tech)",
    period: "Sep 2019 – Sep 2020",
    location: "New York, NY",
    bullets: [
      "Refactored partner adapters in Go server-to-server and JavaScript client codebases, increasing overall ad revenue by 15%.",
      "Built an automated reporting pipeline using the Django admin server, reducing manual data entry for the AdOps team by 70%.",
      "Integrated SourcePoint APIs to implement GDPR and CCPA consent management across web, Android, and iOS platforms.",
    ],
    tech: ["Go", "Python", "JavaScript", "Django", "PostgreSQL", "MySQL"],
  },
  {
    company: "Petroleum Traders Corporation",
    role: "Software Engineering Intern",
    period: "2018 – 2019",
    location: "Fort Wayne, IN",
    bullets: [
      "Developed ETL pipelines to automate extraction of oil index prices from daily PDFs — eliminated a fully manual daily process.",
      "Designed and implemented an end-to-end hours of operation feature, including SQL Server backend and frontend UI.",
    ],
    tech: ["Python", "SQL Server", "JavaScript"],
  },
]

export const projects: Project[] = [
  {
    title: "Zero-Downtime Folder Migration",
    description:
      "Designed and executed a batch migration strategy for 600M+ records across the Quizlet folder system. Used dual-write with gradual read ramp-up and Datadog visibility to eliminate any window of inconsistency. Established a migration pattern later adopted by the Teacher-Led Study team.",
    impact: "600M+ records · zero downtime · cross-team adoption",
    tech: ["Go", "Python", "PostgreSQL", "Cloud Spanner", "Datadog"],
  },
  {
    title: "Elasticsearch Cluster Upgrade",
    description:
      "Owned end-to-end upgrade of Quizlet's Elasticsearch cluster from v8.11 to v9.2.1 — a major version with real breaking changes. Introduced alias-based indexing to decouple index management from application logic, enabling semantic search experiments with ML partners.",
    impact: "Zero traffic downtime · unlocked Vertex AI semantic search",
    tech: ["Elasticsearch", "Python", "Go", "Datadog"],
  },
  {
    title: "Quizlet Powered Folders Pipeline",
    description:
      "Built the end-to-end QPF pipeline: migrated curated folder data from BigQuery to Vitess via QBatch scripts, updated APIs for folder differentiation, and added logging for pilot analysis. Timed the launch to the highest-traffic study window of the year.",
    impact: "150,000+ folders launched · 37% CTR vs. 20% baseline",
    tech: ["Python", "BigQuery", "Vitess", "Django", "FastAPI"],
  },
  {
    title: "Course Recommendations API",
    description:
      "Owned the course content recommendations implementation within the Hex service — Spanner table design, multi-platform API endpoints for web and native clients, and Datadog monitoring. Collaborated with the ML team to surface new course recommendation pages.",
    impact: "+243% explicit course additions · +66% school additions · +77% folder creation",
    tech: ["Go", "Python", "Cloud Spanner", "FastAPI", "Datadog"],
  },
  {
    title: "Search Microservice Migration",
    description:
      "Spearheaded the technical design and implementation of migrating core search from a legacy Python monolith to a standalone Go microservice. Reduced operational complexity and enabled the Search & Discovery team to iterate independently on search infrastructure.",
    impact: "Decoupled search from monolith · contributed to 3.3M search day milestone",
    tech: ["Go", "Python", "Elasticsearch", "PostgreSQL"],
  },
  {
    title: "Ad Tech Revenue Pipeline",
    description:
      "Refactored programmatic ad partner adapters in Go and JavaScript at Slader, fixing inefficiencies in ad call handling. Built an automated reporting pipeline via the Django admin, eliminating hours of daily manual AdOps data entry.",
    impact: "+15% ad revenue · 70% reduction in manual data entry",
    tech: ["Go", "Python", "JavaScript", "Django", "PostgreSQL", "MySQL"],
  },
]

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Go", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Cloud Spanner", "Elasticsearch", "BigQuery", "Vitess"],
  },
  {
    category: "Frameworks",
    items: ["Django", "FastAPI", "Next.js", "React"],
  },
  {
    category: "Infrastructure",
    items: ["Datadog", "Google Cloud", "Vercel", "Docker"],
  },
  {
    category: "Practices",
    items: ["API Design", "Zero-Downtime Migrations", "Schema Design", "ETL Pipelines", "Microservices", "A/B Testing"],
  },
]

export const personalProjects: PersonalProject[] = [
  {
    title: "Visumic",
    description:
      "A social platform for musicians, poets, and artists to share their work. Users can upload videos, like and comment on content, and subscribe to their favorite creators. Built as a Django monolith backed by PostgreSQL, with RabbitMQ handling asynchronous video upload processing to keep the experience fast and non-blocking.",
    tech: ["Python", "Django", "PostgreSQL", "Celery", "RabbitMQ", "Javascript"],
    videoUrl: "https://www.youtube.com/watch?v=LXInLlFKYBk",
  },
]

export const contact: ContactInfo = {
  email: "ollydorvelus@gmail.com",
  github: "https://github.com/OllyDorvelus",
  linkedin: "https://linkedin.com/in/olivier-dorvelus-257149b9",
}
