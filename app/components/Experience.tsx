import { experience, type ExperienceEntry } from "@/data/portfolio"
import { SectionHeading, TechTag } from "@/app/components/ui"

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-border last:border-l-transparent last:pb-0">
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-background" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-semibold text-foreground text-base">{entry.role}</h3>
        <span className="font-mono text-xs text-muted shrink-0">{entry.period}</span>
      </div>
      <p className="text-accent font-medium text-sm mt-0.5">{entry.company} · {entry.location}</p>
      <ul className="mt-4 space-y-2">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="text-muted text-sm leading-relaxed flex gap-2">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeading>Experience</SectionHeading>
      <div className="mt-10">
        {experience.map((entry) => (
          <ExperienceCard key={`${entry.company}-${entry.role}`} entry={entry} />
        ))}
      </div>
    </section>
  )
}
