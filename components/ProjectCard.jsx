const categories = {
  client: "Client work",
  own: "Studio work",
  concept: "Concept",
};

export function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      aria-label={project.title + " case study"}
      className="group block overflow-hidden rounded-[18px] bg-ink-1000 p-2.5 text-ink-0 focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <div className="overflow-hidden rounded-xl bg-ink-0">
        <img
          src={project.cover}
          width="1440"
          height="900"
          alt=""
          loading="lazy"
          className="block aspect-[16/10] w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
        />
      </div>
      <div className="px-3 py-5 lg:p-6">
        <p className="text-sm text-ink-0/60">
          {categories[project.kind]} · {project.sector}
        </p>
        <div className="mt-2 flex items-center justify-between gap-4">
          <h3 className="text-3xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p className="mt-3 max-w-[48ch] leading-snug">{project.summary}</p>
      </div>
    </a>
  );
}
