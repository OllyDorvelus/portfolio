import { SectionHeading } from "@/app/components/ui"

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-xs text-accent uppercase tracking-widest">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeading>About</SectionHeading>
      <div className="mt-10 grid sm:grid-cols-2 gap-12">
        <div className="space-y-4 text-muted leading-relaxed text-sm">
          <p>
            I&apos;m a backend engineer who cares deeply about systems that scale without drama —
            services that stay up during migrations, APIs that don&apos;t break mobile clients, and
            pipelines that ship on deadline. Most of my career has been at the intersection of
            data infrastructure and product impact.
          </p>
          <p>
            At Quizlet, I led database migrations at a scale most engineers don&apos;t get near
            (600M+ records, zero downtime), built the backend powering ML-driven recommendations,
            and owned a full Elasticsearch cluster upgrade across the organization. I work in
            Python and Go day-to-day and have enough TypeScript and React to deliver full-stack
            features when needed.
          </p>
          <p>
            Outside of work I build personal projects, mostly tools I actually want to use —
            usually involving data pipelines, APIs, or something I can learn from by shipping it.
          </p>
        </div>
        <div className="space-y-5">
          <QuickFact label="Education" value="BS Software Engineering, Indiana Institute of Technology — GPA 3.8" />
          <QuickFact label="Location" value="New York, NY" />
          <QuickFact label="Email" value="ollydorvelus@gmail.com" />
          <QuickFact label="Stack" value="Python · Go · TypeScript · PostgreSQL · Elasticsearch" />
        </div>
      </div>
    </section>
  )
}
