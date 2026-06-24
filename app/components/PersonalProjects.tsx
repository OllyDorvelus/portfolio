import { personalProjects, type PersonalProject } from "@/data/portfolio"
import { SectionHeading, TechTag } from "@/app/components/ui"

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function VideoThumbnail({ videoUrl }: { videoUrl: string }) {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-full aspect-video rounded-md bg-surface border border-border overflow-hidden group hover:border-accent transition-colors mt-4"
      aria-label="Watch demo video"
    >
      <div className="flex flex-col items-center gap-2 text-muted group-hover:text-accent transition-colors">
        <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
          <PlayIcon />
        </div>
        <span className="text-xs font-mono">Watch Demo</span>
      </div>
    </a>
  )
}

function PersonalProjectCard({ project }: { project: PersonalProject }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface p-6 hover:border-accent transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-foreground text-base leading-snug">{project.title}</h3>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors shrink-0"
            aria-label="View source on GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
      <p className="mt-3 text-muted text-sm leading-relaxed flex-1">{project.description}</p>
      {project.videoUrl && <VideoThumbnail videoUrl={project.videoUrl} />}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>
    </div>
  )
}

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeading>Personal Projects</SectionHeading>
      <p className="mt-4 text-sm text-muted max-w-xl">
        Things I build outside of work — tools, experiments, and projects I ship to learn.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {personalProjects.map((project) => (
          <PersonalProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
