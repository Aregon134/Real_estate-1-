import agency from "@/content/Agency.json";
import { ServiceMotionPanel } from "@/components/ServiceMotion";
import dataServicesHostingCareScenes from "@/content/ServicesHostingCareScenes.json";
export function ServicesHostingCareServiceTitle() {
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
          {"Hosting & care."}
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
              Hosting and care is everything that keeps your website online,
              fast and safe after launch: hosting, monitoring, security updates,
              tested backups and small edits, on one monthly plan, from ₹2,000 a
              month.
              {
                " It is for sites built in our own code; Shopify stores are hosted by Shopify."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                Hosting
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                care
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                is
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                everything
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                that
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                keeps
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                your
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                website
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                online,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                fast
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                safe
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                after
              </span>{" "}
              <span className="rise-word" style={{ "--i": 14 }}>
                launch:
              </span>{" "}
              <span className="rise-word" style={{ "--i": 15 }}>
                hosting,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 16 }}>
                monitoring,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 17 }}>
                security
              </span>{" "}
              <span className="rise-word" style={{ "--i": 18 }}>
                updates,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 19 }}>
                tested
              </span>{" "}
              <span className="rise-word" style={{ "--i": 20 }}>
                backups
              </span>{" "}
              <span className="rise-word" style={{ "--i": 21 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 22 }}>
                small
              </span>{" "}
              <span className="rise-word" style={{ "--i": 23 }}>
                edits,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 24 }}>
                on
              </span>{" "}
              <span className="rise-word" style={{ "--i": 25 }}>
                one
              </span>{" "}
              <span className="rise-word" style={{ "--i": 26 }}>
                monthly
              </span>{" "}
              <span className="rise-word" style={{ "--i": 27 }}>
                plan,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 28 }}>
                from
              </span>{" "}
              <span className="rise-word" style={{ "--i": 29 }}>
                ₹2,000
              </span>{" "}
              <span className="rise-word" style={{ "--i": 30 }}>
                a
              </span>{" "}
              <span className="rise-word" style={{ "--i": 31 }}>
                month.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 32 }}>
                  It
                </span>{" "}
                <span className="rise-word" style={{ "--i": 33 }}>
                  is
                </span>{" "}
                <span className="rise-word" style={{ "--i": 34 }}>
                  for
                </span>{" "}
                <span className="rise-word" style={{ "--i": 35 }}>
                  sites
                </span>{" "}
                <span className="rise-word" style={{ "--i": 36 }}>
                  built
                </span>{" "}
                <span className="rise-word" style={{ "--i": 37 }}>
                  in
                </span>{" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  our
                </span>{" "}
                <span className="rise-word" style={{ "--i": 39 }}>
                  own
                </span>{" "}
                <span className="rise-word" style={{ "--i": 40 }}>
                  code;
                </span>{" "}
                <span className="rise-word" style={{ "--i": 41 }}>
                  Shopify
                </span>{" "}
                <span className="rise-word" style={{ "--i": 42 }}>
                  stores
                </span>{" "}
                <span className="rise-word" style={{ "--i": 43 }}>
                  are
                </span>{" "}
                <span className="rise-word" style={{ "--i": 44 }}>
                  hosted
                </span>{" "}
                <span className="rise-word" style={{ "--i": 45 }}>
                  by
                </span>{" "}
                <span className="rise-word" style={{ "--i": 46 }}>
                  Shopify.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              From ₹2,000 a month, agreed in writing. Taxes confirmed in your
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
              <ServiceMotionPanel scenes={dataServicesHostingCareScenes} />
              <span className="absolute bottom-3 left-3 inline-flex h-6 items-center rounded-full bg-ink-1000/90 px-2.5 text-[0.6875rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] lg:bottom-4 lg:left-4">
                Example
              </span>
            </div>
          </div>
          <div className="mt-5 min-w-0 lg:col-span-2 lg:col-start-3 lg:mt-0">
            <article
              aria-labelledby="optimisation-title"
              className={"[&+&]:mt-[60px] lg:[&+&]:mt-[110px]"}
            >
              <h3
                id="optimisation-title"
                className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]"
              >
                {"Hosting, Care & Optimisation"}
              </h3>
              <p className="mt-4 indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Managed hosting and the behind-the-scenes work that stops a good
                site quietly decaying.
              </p>
              <p className="mt-6 max-w-[600px] lg:mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                A site is not finished when it launches. We host it, watch its
                uptime and speed, keep its backups tested and its security up to
                date, and make your small changes, with a plain-English report
                every month. It is the least glamorous thing we sell, and it
                means you have one number to call when something breaks.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Hosting, with your security certificate and domain
                        renewals managed
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Daily uptime monitoring, fixed within 1 working day
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Weekly tested backups and monthly security updates
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        A monthly speed check and technical SEO health check
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        1 hour of changes a month, done within 2 working days
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (06)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        A monthly plain-English report: uptime, visitors and
                        enquiries
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (07)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        On Scale, a monthly test to win you more enquiries
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
