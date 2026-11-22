import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/content/PortfolioItems.json";

const count = String(projects.length).padStart(2, "0");
export function HomeWork() {
  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="scroll-mt-16 bg-ink-950 pb-[50px] pt-[50px] text-ink-0 lg:pb-[190px] lg:pt-[190px]"
      >
        <div className="px-gutter">
          <div className="grid lg:grid-cols-4 lg:gap-x-1">
            <p className="text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 tabular-nums lg:text-[1rem]">
              ({count})
            </p>
            <div className="mt-3 lg:col-span-2 lg:mt-0">
              <h2
                id="projects-heading"
                data-reveal="mask"
                className="text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              >
                Projects
              </h2>
              <p
                aria-hidden="true"
                className="mt-[10px] text-[1.4375rem] font-semibold leading-none tracking-[-0.06em] lg:mt-[22px] lg:text-[2.25rem]"
              >
                ©{new Date().getFullYear()}
              </p>
            </div>
            <p className="mt-5 max-w-[299px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-16 lg:pl-10 lg:text-[1rem]">
              A coaching website for Rahul Fitness and a video-editing portfolio
              for our co-founder Ayush Kumar.
            </p>
          </div>
          <ol className="mt-[30px] grid gap-x-2 gap-y-6 md:grid-cols-2 lg:mt-[90px]">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ol>
          <div className="mt-[30px] flex justify-center lg:mt-[60px]">
            <a
              href="/portfolio/"
              className="btn-sweep inline-flex h-12 items-center gap-2 rounded-full bg-ink-0 pl-5 pr-4 text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink-1000"
            >
              View all projects
              <span aria-hidden="true" className="tabular-nums opacity-60">
                ({count})
              </span>
              <span
                aria-hidden="true"
                className="btn-arrow relative inline-block size-4 overflow-hidden"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="btn-arrow-a absolute inset-0 size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
                <svg
                  viewBox="0 0 16 16"
                  className="btn-arrow-b absolute inset-0 size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
