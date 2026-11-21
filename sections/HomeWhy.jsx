import { CountUp } from "@/components/CountUp";
import Image from "next/image";
export function HomeWhy() {
  return (
    <>
      <section
        aria-labelledby="why-heading"
        className="bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]"
      >
        <div className="grid gap-5 lg:grid-cols-4 lg:gap-x-1">
          <p className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-2 lg:gap-[9px] lg:text-[1rem]">
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
            Why work with us
          </p>
          <h2
            id="why-heading"
            data-reveal="mask"
            className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]"
          >
            {"Built on what the research shows, "}
            <span className="text-ink-0/60">
              by studio team who do the work themselves.
            </span>
          </h2>
        </div>
        <div className="mt-9 grid gap-10 lg:mt-[112px] lg:grid-cols-4 lg:gap-x-1">
          <div className="adv-photo relative self-start overflow-hidden rounded-[14px] bg-ink-900 md:max-w-[420px] lg:max-w-none lg:rounded-[18px]">
            <div className="adv-zoom relative">
              <Image
                src="/images/why/founder-phone.2026-10-28.webp"
                alt="Studio Design, studio team, on a bridge over the Seine at night, the Eiffel Tower behind him"
                width={1050}
                height={1590}
                sizes="(min-width: 768px) 420px, 100vw"
                quality={90}
                className="aspect-[350/530] w-full object-cover lg:hidden"
              />
              <Image
                src="/images/why/founder-tall.2026-10-28.webp"
                alt="Studio Design, studio team, on a bridge over the Seine at night, the Eiffel Tower behind him"
                width={682}
                height={1246}
                sizes="25vw"
                quality={90}
                className="hidden aspect-[341/623] w-full object-cover lg:block"
              />
              <div aria-hidden="true" className="adv-soft absolute inset-0">
                <Image
                  src="/images/why/founder-phone.2026-10-28.webp"
                  alt=""
                  width={1050}
                  height={1590}
                  sizes="(min-width: 768px) 420px, 100vw"
                  quality={90}
                  className="aspect-[350/530] w-full object-cover lg:hidden"
                />
                <Image
                  src="/images/why/founder-tall.2026-10-28.webp"
                  alt=""
                  width={682}
                  height={1246}
                  sizes="25vw"
                  quality={90}
                  className="hidden aspect-[341/623] w-full object-cover lg:block"
                />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute right-3 top-3 grid size-[18px] place-items-center rounded-full bg-[#0a0a0a]"
            >
              <span className="absolute h-2 w-0.5 bg-ink-1000" />
              <span className="absolute h-0.5 w-2 bg-ink-1000" />
            </span>
            <div className="adv-reveal absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-6 pt-28 text-ink-1000 lg:p-[34px] lg:pt-32">
              <p className="max-w-[270px] text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1rem]">
                You deal with Studio and Systems, from the first call to launch
                day and after.
              </p>
              <a
                href="#contact"
                className="pill mt-4 inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-1000 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-[#0a0a0a]"
              >
                <span className="pill-roll" data-label="Let’s talk">
                  <span>Let’s talk</span>
                </span>
                <span
                  aria-hidden="true"
                  className="pill-dot size-2 rounded-full bg-[#0a0a0a]"
                />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-3">
            <p className="max-w-[550px] indent-[4.1em] text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] text-ink-0/60 lg:text-[1.375rem] lg:leading-[1.2]">
              <span className="text-ink-0">No templates, no hand-offs.</span>
              {
                " You talk to the people building your site, not an account manager. Every price is agreed in writing, and the code is yours at handover."
              }
            </p>
            <ul className="mt-8 grid gap-1 lg:mt-20 lg:grid-cols-2">
              <li className="grid content-start gap-1">
                <div className="flex items-start justify-between rounded-[14px] bg-ink-1000 p-6 lg:h-[115px] lg:rounded-[18px] lg:p-[30px]">
                  <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[2.8125rem]">
                    <CountUp value="60 – 70%" />
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    0{1}
                  </span>
                </div>
                <div className="flex min-h-[243px] flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:h-[343px] lg:rounded-[18px] lg:p-[30px]">
                  <h3 className="max-w-[210px] self-end text-right text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Of work time is technically automatable, by McKinsey’s
                    estimate
                  </h3>
                  <div>
                    <p className="max-w-[290px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                      McKinsey estimates today’s AI and automation could, in
                      principle, take on activities that fill 60 to 70% of
                      employees’ time. Not every business, and not overnight,
                      but the routine work goes first.
                    </p>
                    <a
                      href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-6 items-center text-[0.75rem] font-medium tracking-[-0.02em] text-ink-0/60 underline decoration-ink-0/25 underline-offset-[3px] transition-colors duration-200 hover:text-ink-0"
                    >
                      {"Source: "}McKinsey Global Institute, 2023
                      <span className="sr-only">{" (opens in a new tab)"}</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="grid content-start gap-1">
                <div className="flex items-start justify-between rounded-[14px] bg-ink-1000 p-6 lg:h-[115px] lg:rounded-[18px] lg:p-[30px]">
                  <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[2.8125rem]">
                    <CountUp value="8.4%" />
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    0{2}
                  </span>
                </div>
                <div className="flex min-h-[243px] flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:h-[343px] lg:rounded-[18px] lg:p-[30px]">
                  <h3 className="max-w-[210px] self-end text-right text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    More retail sales from a faster site
                  </h3>
                  <div>
                    <p className="max-w-[290px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                      Across 37 brands, making every mobile page 0.1 seconds
                      faster lifted retail conversions by 8.4% and order values
                      by 9.2%.
                    </p>
                    <a
                      href="https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-6 items-center text-[0.75rem] font-medium tracking-[-0.02em] text-ink-0/60 underline decoration-ink-0/25 underline-offset-[3px] transition-colors duration-200 hover:text-ink-0"
                    >
                      {"Source: "}Deloitte for Google, Milliseconds Make
                      Millions
                      <span className="sr-only">{" (opens in a new tab)"}</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
