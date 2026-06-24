import { skills } from "@/data/portfolio"
import { SectionHeading, SkillBadge } from "@/app/components/ui"

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <SkillBadge key={item}>{item}</SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
