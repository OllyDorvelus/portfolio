export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-foreground border-l-4 border-accent pl-4">
      {children}
    </h2>
  )
}

export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-0.5 text-xs font-mono rounded border border-border bg-surface text-muted">
      {children}
    </span>
  )
}

export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-sm font-mono rounded-full border border-border bg-surface text-foreground">
      {children}
    </span>
  )
}
