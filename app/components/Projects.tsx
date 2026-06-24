import { projects, type Project } from "@/data/portfolio"
import { SectionHeading, TechTag } from "@/app/components/ui"

function TerminalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent shrink-0"
      aria-hidden="true"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface p-6 hover:border-accent transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-foreground text-base leading-snug">{project.title}</h3>
        <TerminalIcon />
      </div>
      <p className="mt-3 text-muted text-sm leading-relaxed flex-1">{project.description}</p>
      <p className="mt-3 font-mono text-xs text-accent">{project.impact}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeading>Professional Career Projects</SectionHeading>
      <p className="mt-4 text-sm text-muted max-w-xl">
        Notable projects from my time at Quizlet and Slader — each one production, at scale.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
