import { ProjectBrowser } from "@/components/ProjectBrowser";
import { projects as dataPortfolioItems } from "@/sections/PortfolioCards";
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
          <p className="zg-credit">
            Reference work by Black Line Agency, shown with permission.
          </p>
          <div className="mt-3 lg:col-span-2 lg:col-start-3 lg:mt-[66px]">
            <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em]">
              (2026©)
            </p>
            <p className="mt-3 max-w-[380px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-[15px]">
              One live client site, our own Shopify store{" and "}five
              {
                " concept builds, each labelled for what it is. Here’s all of selected reference work."
              }
            </p>
          </div>
        </div>
        <ProjectBrowser items={dataPortfolioItems} />
      </section>
    </>
  );
}
