import agency from "@/content/Agency.json";
import { ServiceMotionPanel } from "@/components/ServiceMotion";
import dataServicesWebDesignScenes from "@/content/ServicesWebDesignScenes.json";
export function ServicesWebDesignServiceTitle() {
  return (
    <>
      <section
        aria-labelledby="service-title"
        className="bg-ink-950 px-gutter pt-[140px] text-ink-0 lg:pt-[318px]"
      >
        <h1
          id="service-title"
          data-reveal="mask"
          className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
        >
          {"Web design & build."}
        </h1>
        <div className="mt-8 grid gap-5 lg:mt-[130px] lg:grid-cols-4 lg:gap-x-1">
          <p className="hidden items-center gap-[9px] self-start text-[1rem] font-medium tracking-[-0.04em] lg:mt-1.5 lg:flex">
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
            Service
          </p>
          <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
            <span className="sr-only">
              Web design and build is a custom website, designed for your brand
              and built in our own code, never from a template.
              {
                " It is for businesses that want a fast site that looks as good as what they sell and turns visitors into enquiries. Built in India, at fixed prices from ₹5,000."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                Web
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                design
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                build
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                is
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                a
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                custom
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                website,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                designed
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                for
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                your
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                brand
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                built
              </span>{" "}
              <span className="rise-word" style={{ "--i": 14 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 15 }}>
                our
              </span>{" "}
              <span className="rise-word" style={{ "--i": 16 }}>
                own
              </span>{" "}
              <span className="rise-word" style={{ "--i": 17 }}>
                code,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 18 }}>
                never
              </span>{" "}
              <span className="rise-word" style={{ "--i": 19 }}>
                from
              </span>{" "}
              <span className="rise-word" style={{ "--i": 20 }}>
                a
              </span>{" "}
              <span className="rise-word" style={{ "--i": 21 }}>
                template.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 22 }}>
                  It
                </span>{" "}
                <span className="rise-word" style={{ "--i": 23 }}>
                  is
                </span>{" "}
                <span className="rise-word" style={{ "--i": 24 }}>
                  for
                </span>{" "}
                <span className="rise-word" style={{ "--i": 25 }}>
                  businesses
                </span>{" "}
                <span className="rise-word" style={{ "--i": 26 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 27 }}>
                  want
                </span>{" "}
                <span className="rise-word" style={{ "--i": 28 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 29 }}>
                  fast
                </span>{" "}
                <span className="rise-word" style={{ "--i": 30 }}>
                  site
                </span>{" "}
                <span className="rise-word" style={{ "--i": 31 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 32 }}>
                  looks
                </span>{" "}
                <span className="rise-word" style={{ "--i": 33 }}>
                  as
                </span>{" "}
                <span className="rise-word" style={{ "--i": 34 }}>
                  good
                </span>{" "}
                <span className="rise-word" style={{ "--i": 35 }}>
                  as
                </span>{" "}
                <span className="rise-word" style={{ "--i": 36 }}>
                  what
                </span>{" "}
                <span className="rise-word" style={{ "--i": 37 }}>
                  they
                </span>{" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  sell
                </span>{" "}
                <span className="rise-word" style={{ "--i": 39 }}>
                  and
                </span>{" "}
                <span className="rise-word" style={{ "--i": 40 }}>
                  turns
                </span>{" "}
                <span className="rise-word" style={{ "--i": 41 }}>
                  visitors
                </span>{" "}
                <span className="rise-word" style={{ "--i": 42 }}>
                  into
                </span>{" "}
                <span className="rise-word" style={{ "--i": 43 }}>
                  enquiries.
                </span>{" "}
                <span className="rise-word" style={{ "--i": 44 }}>
                  Built
                </span>{" "}
                <span className="rise-word" style={{ "--i": 45 }}>
                  in
                </span>{" "}
                <span className="rise-word" style={{ "--i": 46 }}>
                  India,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 47 }}>
                  at
                </span>{" "}
                <span className="rise-word" style={{ "--i": 48 }}>
                  fixed
                </span>{" "}
                <span className="rise-word" style={{ "--i": 49 }}>
                  prices
                </span>{" "}
                <span className="rise-word" style={{ "--i": 50 }}>
                  from
                </span>{" "}
                <span className="rise-word" style={{ "--i": 51 }}>
                  ₹5,000.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              From ₹5,000, fixed and agreed in writing. Taxes confirmed in your
              proposal.
            </p>
            <a
              href={agency.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill mt-5 inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
            >
              <span className="pill-roll" data-label="Book a call">
                <span>Book a call</span>
              </span>
              <span
                aria-hidden="true"
                className="pill-dot size-2 rounded-full bg-ink-1000"
              />
              <span className="sr-only">{" (opens in a new tab)"}</span>
            </a>
          </div>
        </div>
        <section
          aria-labelledby="service-heading"
          className="mt-[50px] grid gap-5 lg:mt-[190px] lg:grid-cols-4 lg:gap-x-1"
        >
          <div className="lg:col-span-2 lg:pr-[60px]">
            <h2
              id="service-heading"
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
              The service
            </h2>
            <div className="relative mt-5 overflow-hidden rounded-[14px] bg-ink-900 lg:sticky lg:top-[90px] lg:mt-[30px] lg:rounded-[18px]">
              <ServiceMotionPanel scenes={dataServicesWebDesignScenes} />
              <span className="absolute bottom-3 left-3 inline-flex h-6 items-center rounded-full bg-ink-1000/90 px-2.5 text-[0.6875rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] lg:bottom-4 lg:left-4">
                Example
              </span>
            </div>
          </div>
          <div className="mt-5 min-w-0 lg:col-span-2 lg:col-start-3 lg:mt-0">
            <article
              aria-labelledby="design-title"
              className={"[&+&]:mt-[60px] lg:[&+&]:mt-[110px]"}
            >
              <h3
                id="design-title"
                className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]"
              >
                {"Web Design & Build"}
              </h3>
              <p className="mt-4 indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Custom sites designed in-house and built to survive contact with
                the real world.
              </p>
              <p className="mt-6 max-w-[600px] lg:mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                We do not start from a template. Every project begins with the
                commercial question: who is landing here, what do they need to
                believe, and what should happen next. The design answers it. The
                build is custom Next.js, not a page builder, so it stays fast,
                is tested on Google's own speed test before launch, and still
                looks like nobody else's.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Art direction & visual identity"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Responsive design, mobile-first
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Next.js & React development"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Editing on Signature: change your own words and images
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Motion & interaction design"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (06)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Speed and accessibility tested before launch
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </article>
            <article
              aria-labelledby="uiux-title"
              className={"[&+&]:mt-[60px] lg:[&+&]:mt-[110px]"}
            >
              <h3
                id="uiux-title"
                className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]"
              >
                {"UI & UX Design"}
              </h3>
              <p className="mt-4 indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Interface and experience design: the part that decides whether a
                visitor acts or leaves.
              </p>
              <p className="mt-6 max-w-[600px] lg:mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                Most sites do not lose people because they are ugly. They lose
                them because the path is unclear, the form asks too much, or the
                page never says what happens next. We design the journey before
                the pixels: what a visitor sees first, what they need to
                believe, where the friction sits, and which screen carries the
                decision. Then we prototype it and test it on real devices
                rather than arguing about it in a document.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"User journeys & information architecture"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Wireframing & interactive prototypes"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Interface design systems and components
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Conversion-focused layout & hierarchy"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Usability review on real devices
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (06)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Accessibility built in, not bolted on
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}
