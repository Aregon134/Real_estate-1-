import agency from "@/content/Agency.json";
import { FounderCard } from "@/components/FounderCard";
import { SmokeCanvas } from "@/components/SmokeCanvas";
import dataTeam from "@/content/Team.json";
export function HomeHero() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="j5buJW_variable uBJf4W_variable home-hero relative z-[1] flex flex-col bg-ink-950 px-0.5 pb-0.5 pt-[61px] sm:px-1.5 sm:pb-1.5 xl:h-[100svh] xl:min-h-[720px]"
      >
        <div className="relative isolate flex flex-1 flex-col overflow-hidden rounded-[16px] bg-ink-0 px-[18px] pb-[35px] pt-[55px] text-ink-1000 sm:rounded-[25px] sm:px-[34px] sm:pb-10 sm:pt-12 xl:pb-[88px] xl:pt-[91px]">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="hero-ground absolute inset-0" />
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet="/images/hero/smoke-wide.2026-10-29.webp"
                width={1920}
                height={1080}
              />
              <img
                src="/images/hero/smoke-tall.2026-10-29.webp"
                width={780}
                height={1520}
                alt=""
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
            </picture>
            <SmokeCanvas />
            <div className="hero-shade absolute inset-0" />
            <div className="absolute inset-x-[34px] top-[55.1%] hidden justify-between xl:flex">
              <svg
                viewBox="0 0 16 16"
                className="size-4 text-ink-1000/40"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path d="M8 1v14M1 8h14" />
              </svg>
              <svg
                viewBox="0 0 16 16"
                className="size-4 text-ink-1000/40"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path d="M8 1v14M1 8h14" />
              </svg>
              <svg
                viewBox="0 0 16 16"
                className="size-4 text-ink-1000/40"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path d="M8 1v14M1 8h14" />
              </svg>
              <svg
                viewBox="0 0 16 16"
                className="size-4 text-ink-1000/40"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path d="M8 1v14M1 8h14" />
              </svg>
              <span />
            </div>
          </div>
          <div className="grid gap-[70px] sm:gap-10 xl:grid-cols-4 xl:items-center xl:gap-0">
            <div
              aria-hidden="true"
              className="relative w-fit pb-[4.5vw] xl:col-span-3 xl:pb-[2.6vw]"
            >
              <p className="hero-wm" style={{ mixBlendMode: "normal" }}>
                <span className="hero-wm-solid">
                  <span>{agency.name.toLowerCase()}</span>
                </span>
                <span className="hero-wm-base">
                  <span>{agency.name.toLowerCase()}</span>
                </span>
              </p>
              <p className="hero-script hero-in absolute bottom-0 right-[1%] translate-y-[8%] whitespace-nowrap font-[family-name:var(--font-script)] leading-none text-accent">
                {agency.tagline}
              </p>
            </div>
            <ul className="grid justify-items-end gap-2.5 text-right text-[0.9375rem] font-semibold leading-[1.2] tracking-[-0.04em] sm:text-[1.0625rem] xl:col-start-4 xl:mt-[5.63vw] xl:self-start xl:justify-items-start xl:gap-3 xl:text-left xl:text-[1.125rem]">
              <li className="hero-in" style={{ "--i": 0 }}>
                <a
                  href="/services/web-design"
                  className="transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-60"
                >
                  Web Design and Development
                </a>
              </li>
              <li className="hero-in" style={{ "--i": 1 }}>
                <a
                  href="/services/shopify"
                  className="transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-60"
                >
                  Shopify and E-commerce
                </a>
              </li>
              <li className="hero-in" style={{ "--i": 2 }}>
                <a
                  href="/services/seo"
                  className="transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-60"
                >
                  SEO and GEO
                </a>
              </li>
              <li className="hero-in" style={{ "--i": 3 }}>
                <a
                  href="/ai"
                  className="transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-60"
                >
                  AI and Workflow Automation
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-[38px] flex flex-col gap-[42px] sm:mt-11 sm:gap-10 xl:mt-auto xl:grid xl:grid-cols-4 xl:items-end xl:gap-0">
            <div
              className="hero-in w-full max-w-[350px] xl:order-3 xl:col-start-4 xl:max-w-none"
              style={{ "--i": 6 }}
            >
              <FounderCard
                founders={dataTeam}
                bookingUrl="/book/"
                brand="Ziggloom™"
              />
            </div>
            <div className="flex flex-col gap-[30px] sm:gap-6 xl:contents">
              <h1
                id="hero-heading"
                className="hero-in max-w-[24em] indent-[4em] text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] sm:text-[1.375rem] xl:order-1 xl:col-span-2 xl:max-w-[20em]"
                style={{ "--i": 5 }}
              >
                Premium web design by Ziggloom.{" "}
                <span className="text-ink-1000/70">
                  Websites, Shopify stores and workflows for businesses in India.
                </span>
              </h1>
              <p
                className="hero-in text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000 sm:text-[0.875rem] xl:order-2 xl:col-start-3 xl:mr-[110px] xl:justify-self-end"
                style={{ "--i": 5 }}
              >
                {"© "}
                {2026} Ziggloom™
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
