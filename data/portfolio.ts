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
      "Migrated 600M+ records from legacy tables with zero downtime by redesigning the ORM to support both integer and string-based IDs and writing batch migration scripts. The pattern was later adopted by the Teacher-Led Study team.",
      "Decoupled core search from a legacy monolith into a Go microservice, enabling independent deployments and faster iteration on search performance.",
      "Owned course content recommendations in the Hex service end-to-end: Spanner table design, multi-platform API endpoints, and Datadog monitoring. Delivered ahead of schedule and expanded scope into ML-owned infrastructure.",
      "Led the QPF data pipeline from BigQuery to Vitess using QBatch scripts, updated APIs for folder differentiation, and added logging for pilot analysis. Launched 150,000+ curated folders during spring finals, hitting a 37% CTR against a 20% baseline.",
      "Led the zero-downtime Elasticsearch upgrade from v8.11 to v9.2.1, coordinating strategy, documentation, and vendor relations. Introduced alias-based indexing to decouple index management from application logic and unblock ML partners on semantic search.",
      "Shipped Course-Powered Folders and study hub features, driving a 66% increase in canonical school additions, 243% increase in explicit course additions, and 77% increase in folder creation.",
    ],
    tech: ["Go", "Python", "TypeScript", "Django", "FastAPI", "PostgreSQL", "Cloud Spanner", "Elasticsearch", "BigQuery"],
  },
  {
    company: "Quizlet",
    role: "Software Engineer II",
    period: "Sep 2020 – Jan 2024",
    location: "New York, NY",
    bullets: [
      "Built Python/Django API services delivering step-by-step solutions for user-generated questions and textbooks, extending endpoints with full backward compatibility across search, ranking, and blended results.",
      "Authored the RFC and implemented a Python-based misspelling microservice. Improved search coverage by integrating video content into blended search results.",
      "Migrated Search Pages to a new rendering architecture using TypeScript, Next.js, and React. Contributed to the BTS Tiger Team, shipping navigation A/B experiments that increased Q-Chat engagement by 34% and improved 1-day retention by 19%.",
      "Led the global navigation redesign on Quizlet's home page, A/B testing three variants in collaboration with Product and Design before shipping the winning variant.",
      "Partnered with Data Engineering and Data Science on user engagement tracking, and strengthened site security during adversarial traffic events by improving input validation and rate-limiting infrastructure.",
    ],
    tech: ["Python", "TypeScript", "Django", "FastAPI", "Next.js", "React", "PostgreSQL", "Elasticsearch"],
  },
  {
    company: "Slader",
    role: "Software Engineer I (Ad Tech)",
    period: "Sep 2019 – Sep 2020",
    location: "New York, NY",
    bullets: [
      "Refactored partner adapters across Go server-to-server and JavaScript client codebases, increasing overall ad revenue by 15%.",
      "Built an automated reporting pipeline on the Django admin server, cutting manual data entry for the AdOps team by 70%.",
      "Integrated SourcePoint APIs to implement GDPR and CCPA consent management across web, Android, and iOS.",
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
      "Designed and executed a batch migration strategy for 600M+ records across the Quizlet folder system. Used dual-write with gradual read ramp-up and Datadog visibility to eliminate any window of inconsistency. Established a migration pattern later adopted by other engineering teams.",
    impact: "600M+ records · zero downtime · pattern adopted by other engineering teams",
    tech: ["Go", "Python", "PostgreSQL", "Cloud Spanner", "Datadog"],
  },
  {
    title: "Elasticsearch Cluster Upgrade",
    description:
      "Owned end-to-end upgrade of Quizlet's Elasticsearch cluster from v8.11 to v9.2.1 — a major version with real breaking changes. Introduced alias-based indexing to decouple index management from application logic, enabling semantic search experiments with ML partners.",
    impact: "Zero traffic downtime · unlocked semantic search experiments with ML partners",
    tech: ["Elasticsearch", "Python", "Go", "Datadog"],
  },
  {
    title: "Quizlet Powered Folders Pipeline",
    description:
      "Built the end-to-end curated folders pipeline: migrated folder data from BigQuery to Vitess via internal batch tooling, updated APIs for folder differentiation, and added logging for pilot analysis. Timed the launch to the highest-traffic study window of the year.",
    impact: "Large-scale folder launch · CTR significantly above baseline",
    tech: ["Python", "BigQuery", "Vitess", "Django", "FastAPI"],
  },
  {
    title: "Course Recommendations API",
    description:
      "Owned the course content recommendations implementation within the recommendations service — Spanner table design, multi-platform API endpoints for web and native clients, and Datadog monitoring. Collaborated with the ML team to surface new course recommendation pages.",
    impact: "Significant growth in explicit course additions, school additions, and folder creation",
    tech: ["Go", "Python", "Cloud Spanner", "FastAPI", "Datadog"],
  },
  {
    title: "Search Microservice Migration",
    description:
      "Spearheaded the technical design and implementation of migrating core search from a legacy Python monolith to a standalone Go microservice. Reduced operational complexity and enabled the Search & Discovery team to iterate independently on search infrastructure.",
    impact: "Decoupled search from monolith · contributed to a record search day milestone",
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
    category: "Infrastructure & DevOps",
    items: ["Datadog", "OpenTelemetry", "GCP", "AWS", "Docker", "Terraform", "CI/CD"],
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
