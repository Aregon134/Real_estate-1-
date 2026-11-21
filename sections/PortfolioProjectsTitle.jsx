import { ProjectBrowser } from "@/components/ProjectBrowser";
import projects from "@/content/PortfolioItems.json";
export function PortfolioProjectsTitle() {
  return (
    <>
      <section
        aria-labelledby="projects-title"
        className="bg-ink-950 px-gutter pb-[50px] pt-[140px] text-ink-0 lg:pb-[190px] lg:pt-[318px]"
      >
        <div className="grid lg:grid-cols-4 lg:gap-x-1">
          <h1
            id="projects-title"
            data-reveal="mask"
            className="text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:col-span-2 lg:text-[clamp(6rem,10.3vw,9.25rem)]"
          >
            Projects.
          </h1>
        </div>
        <ProjectBrowser items={projects} />
      </section>
    </>
  );
}
