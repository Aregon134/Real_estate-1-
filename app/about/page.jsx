import { AboutProcess } from "@/sections/AboutProcess";
import { AboutStudioTitle } from "@/sections/AboutStudioTitle";
import { ContactForm } from "@/components/ContactForm";
import { CountUp } from "@/components/CountUp";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import Image from "next/image";
import { TiltIn } from "@/components/TiltIn";

import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "About Us, Web Design Agency in Grimsby | Ziggloom",
  description:
    "Meet Brad Design and Systems Team, the studio team of Ziggloom in Grimsby, and how we design, build and look after your website.",
};
export default function Page() {
  return (
    <>
      <HeaderBar
        nav={dataNavigation}
        site={dataAgency}
        projectCount={7}
        brandMark="™"
      />
      <main id="main" className="v3 flex-1">
        <AboutStudioTitle />
        <div className="bg-ink-950 pt-[50px] lg:px-1.5 lg:pt-[100px]">
          <TiltIn className="relative overflow-hidden bg-ink-900 lg:rounded-[25px]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={
                  "/images/pages/studio.webp 640w, /images/pages/studio.webp 750w, /images/pages/studio.webp 828w, /images/pages/studio.webp 1080w, /images/pages/studio.webp 1200w, /images/pages/studio.webp 1366w, /images/pages/studio.webp 1920w, /images/pages/studio.webp 2048w, /images/pages/studio.webp 2880w, /images/pages/studio.webp 3840w"
                }
                sizes="100vw"
              />
              <img
                alt="Two empty director’s chairs side by side under a single spotlight on a dark stage"
                loading="eager"
                fetchPriority="high"
                width={700}
                height={875}
                decoding="async"
                style={{ color: "transparent" }}
                sizes="100vw"
                srcSet={
                  "/images/pages/studio-phone.2026-10-28.webp 640w, /images/pages/studio-phone.2026-10-28.webp 750w, /images/pages/studio-phone.2026-10-28.webp 828w, /images/pages/studio-phone.2026-10-28.webp 1080w, /images/pages/studio-phone.2026-10-28.webp 1200w, /images/pages/studio-phone.2026-10-28.webp 1366w, /images/pages/studio-phone.2026-10-28.webp 1920w, /images/pages/studio-phone.2026-10-28.webp 2048w, /images/pages/studio-phone.2026-10-28.webp 2880w, /images/pages/studio-phone.2026-10-28.webp 3840w"
                }
                src={"/images/pages/studio-phone.2026-10-28.webp"}
                className="aspect-[700/875] h-auto w-full object-cover md:aspect-[2000/875]"
              />
            </picture>
          </TiltIn>
        </div>
        <div className="flow-root bg-ink-950 px-gutter text-ink-0">
          <ul className="mt-1 grid gap-1 pt-[50px] sm:grid-cols-2 lg:grid-cols-4 lg:pt-[100px]">
            <li className="flex min-h-[160px] flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[230px] lg:rounded-[18px] lg:p-[30px]">
              <div className="flex items-start justify-between">
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[2.8125rem]">
                  <CountUp value="100" />
                </p>
                <span
                  aria-hidden="true"
                  className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                >
                  01
                </span>
              </div>
              <div>
                <p className="max-w-[220px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  Performance score
                </p>
                <p className="mt-2 text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.8125rem]">
                  Google Lighthouse, desktop
                </p>
              </div>
            </li>
            <li className="flex min-h-[160px] flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[230px] lg:rounded-[18px] lg:p-[30px]">
              <div className="flex items-start justify-between">
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[2.8125rem]">
                  <CountUp value="100" />
                </p>
                <span
                  aria-hidden="true"
                  className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                >
                  02
                </span>
              </div>
              <div>
                <p className="max-w-[220px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  Accessibility score
                </p>
                <p className="mt-2 text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.8125rem]">
                  Lighthouse, desktop and mobile
                </p>
              </div>
            </li>
            <li className="flex min-h-[160px] flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[230px] lg:rounded-[18px] lg:p-[30px]">
              <div className="flex items-start justify-between">
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[2.8125rem]">
                  <CountUp value="100" />
                </p>
                <span
                  aria-hidden="true"
                  className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                >
                  03
                </span>
              </div>
              <div>
                <p className="max-w-[220px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  Best practices score
                </p>
                <p className="mt-2 text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.8125rem]">
                  Lighthouse, desktop and mobile
                </p>
              </div>
            </li>
            <li className="flex min-h-[160px] flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[230px] lg:rounded-[18px] lg:p-[30px]">
              <div className="flex items-start justify-between">
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[2.8125rem]">
                  <CountUp value="0.8s" />
                </p>
                <span
                  aria-hidden="true"
                  className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                >
                  04
                </span>
              </div>
              <div>
                <p className="max-w-[220px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  Until the page’s main content shows
                </p>
                <p className="mt-2 text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.8125rem]">
                  Largest Contentful Paint, desktop
                </p>
              </div>
            </li>
          </ul>
          <p className="mt-5 max-w-[640px] text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
            This website’s own scores on Google Lighthouse, Google’s test of
            speed and quality. It’s the standard every site we build is held to.
            Check any page yourself at{" "}
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-0 underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0"
            >
              pagespeed.web.dev
              <span className="sr-only">{" (opens in a new tab)"}</span>
            </a>
            .
          </p>
          <section
            aria-labelledby="approach-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="approach-heading"
              className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-1.5 lg:gap-[9px] lg:text-[1rem]"
            >
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                overflow="visible"
                className="size-[1.1em] shrink-0 size-[18px]!"
              >
                <circle cx="10" cy="10" r="10" fill="currentColor" />
                <path
                  d="M10 5.5v9M5.5 10h9"
                  stroke="var(--plus-ink, #fff)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              Our approach
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                There’s no account manager between you and the people doing the
                work.{" "}
                <span className="text-ink-0/60">
                  We take on fewer projects than a larger agency would, and
                  we’re direct about scope and timelines, because we’re the ones
                  who deliver them.
                </span>
              </p>
              <p className="mt-8 max-w-[600px] lg:mt-10 text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                You get senior attention on every detail, not a junior working
                from a brief handed over second-hand. Our own brand is black and
                white with a single red accent, on purpose: without colour, the
                hierarchy, spacing, type and motion have to do the work. If a
                layout works in black and white, it works.
              </p>
            </div>
          </section>
          <section
            aria-labelledby="founders-heading"
            className="mt-[50px] lg:mt-[190px]"
          >
            <div className="grid gap-5 lg:grid-cols-4 lg:gap-x-1">
              <h2
                id="founders-heading"
                className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-2 lg:gap-[9px] lg:text-[1rem]"
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  overflow="visible"
                  className="size-[1.1em] shrink-0 size-[18px]!"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M10 5.5v9M5.5 10h9"
                    stroke="var(--plus-ink, #fff)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Meet the studio
              </h2>
              <p className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]">
                {"One studio. "}
                <span className="text-ink-0/60">
                  {"No "}
                  <span className="whitespace-nowrap">hand-offs.</span>
                </span>
              </p>
            </div>
            <ul className="mt-9 grid gap-1 md:grid-cols-2 lg:mt-20">
              <li
                id="bradley-hoxha"
                className="flex flex-col justify-between gap-10 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[300px] lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <Image
                    src="/images/founders/avatar-bradley-hoxha.2026-10-28.webp"
                    alt=""
                    width={176}
                    height={176}
                    sizes="64px"
                    quality={90}
                    className="size-16 rounded-full object-cover grayscale"
                  />
                  <span className="flex items-center gap-3">
                    <span className="rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] lg:text-[0.75rem]">
                      Studio team
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                    >
                      01
                    </span>
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.375rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                    Studio Design
                  </h3>
                  <p className="mt-1 text-[0.875rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                    {"Designer & developer"}
                  </p>
                  <p className="mt-4 max-w-[46ch] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Our studio designs and builds every site, from the first
                    structure to launch, and handles sales: the call where we
                    scope your project and agree the price.
                  </p>
                </div>
              </li>
              <li
                id="shaun-padley"
                className="flex flex-col justify-between gap-10 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[300px] lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <Image
                    src="/images/founders/avatar-shaun-padley.webp"
                    alt=""
                    width={176}
                    height={176}
                    sizes="64px"
                    quality={90}
                    className="size-16 rounded-full object-cover grayscale"
                  />
                  <span className="flex items-center gap-3">
                    <span className="rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] lg:text-[0.75rem]">
                      Studio team
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                    >
                      02
                    </span>
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.375rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                    Systems Team
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Systems is the first person you reach with a general
                    enquiry, and keeps each project moving from first call to
                    handover.
                  </p>
                </div>
              </li>
            </ul>
            <p className="mt-6 text-[0.875rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:mt-8 lg:text-[1rem]">
              Want to see the work first?{" "}
              <a
                href="/portfolio"
                className="text-ink-0 underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0"
              >
                Our recent projects
              </a>
              , or{" "}
              <a
                href="/web-design-grimsby"
                className="text-ink-0 underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0"
              >
                web design in Grimsby
              </a>
              .
            </p>
          </section>
        </div>
        <AboutProcess />
        <ContactForm site={dataAgency} founders={dataTeam} />
      </main>
      <Footer />
    </>
  );
}
