export function HomeWork() {
  return (
    <section
      id="projects"
      aria-labelledby="home-projects-title"
      className="scroll-mt-16 bg-ink-950 px-gutter py-16 text-ink-0 lg:py-28"
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2
          id="home-projects-title"
          className="text-5xl font-semibold tracking-tight lg:text-7xl"
        >
          Projects.
        </h2>
        <a
          href="/portfolio/"
          className="inline-flex min-h-12 items-center rounded-full bg-ink-0 px-6 font-semibold text-ink-1000"
        >
          View all projects ↗
        </a>
      </div>
    </section>
  );
}
