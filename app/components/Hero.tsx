export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-5xl mx-auto"
    >
      <div>
        <p className="font-mono text-accent text-sm mb-3">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground">
          Olivier Dorvelus.
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold text-muted mt-3">
          Senior Backend Engineer.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
          7 years building reliable, high-scale backend systems in Python and Go.
          I specialize in API design, zero-downtime database migrations, and search
          infrastructure — most recently at Quizlet, where I worked across distributed
          data pipelines, ML-adjacent APIs, and search at scale.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:bg-surface transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
