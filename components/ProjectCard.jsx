import Image from "next/image";

const categories = { client: "Client", own: "Studio work", concept: "Concept" };

export function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      aria-label={project.title + " case study"}
      className="pj group block rounded-[18px]"
    >
      <div className="flex min-h-[50px] gap-2 items-center rounded-[14px] bg-ink-1000 px-3 py-2 md:min-h-[58px] md:rounded-[18px] md:px-6">
        <h3 className="text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]">
          {project.title}.
        </h3>
        <span className="shrink-0 text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]">
          <span className="opacity-60">/</span>
          {project.year}
        </span>
        <span className="pj-tag ml-auto shrink-0 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:text-[0.75rem]">
          {categories[project.kind]}
        </span>
        <span aria-hidden="true" className="hidden shrink-0 gap-1 sm:flex">
          <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
            <span
              className="pj-dot absolute inset-0 rounded-full"
              style={{ background: "#fd5f59" }}
            />
          </span>
          <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
            <span
              className="pj-dot absolute inset-0 rounded-full"
              style={{ background: "#ffbb2c" }}
            />
          </span>
          <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
            <span
              className="pj-dot absolute inset-0 rounded-full"
              style={{ background: "#25c93d" }}
            />
          </span>
        </span>
      </div>
      <span className="mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]">
        <span className="pj-frame relative block aspect-[16/10] md:aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900">
          <Image
            src={project.artwork || project.cover}
            alt=""
            fill={true}
            sizes="(min-width: 768px) 48vw, 100vw"
            quality={90}
            className="pj-img object-cover"
          />
          <span
            aria-hidden="true"
            className="pj-shade absolute inset-0 bg-ink-0"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            {project.logo && (
              <img
                src={project.logo}
                alt=""
                className="pj-logo h-auto w-[16%]"
              />
            )}
          </span>
        </span>
      </span>
      <span className="sr-only">{project.summary}</span>
    </a>
  );
}
