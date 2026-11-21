import agency from "@/content/Agency.json";
import { ServiceMotionPanel } from "@/components/ServiceMotion";
import dataServicesSeoScenes from "@/content/ServicesSeoScenes.json";
export function ServicesSeoServiceTitle() {
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
          {"SEO & GEO."}
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
              SEO and GEO is the work that helps customers find you: on Google,
              in local search, and in the answers AI tools such as ChatGPT give.
              {
                " It is for businesses that want steady enquiries from search, with a plain monthly report on what moved and no promised rankings. Local SEO starts at ₹2,950 a month."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                SEO
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                GEO
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                is
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                work
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                that
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                helps
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                customers
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                find
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                you:
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                on
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                Google,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 14 }}>
                local
              </span>{" "}
              <span className="rise-word" style={{ "--i": 15 }}>
                search,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 16 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 17 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 18 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 19 }}>
                answers
              </span>{" "}
              <span className="rise-word" style={{ "--i": 20 }}>
                AI
              </span>{" "}
              <span className="rise-word" style={{ "--i": 21 }}>
                tools
              </span>{" "}
              <span className="rise-word" style={{ "--i": 22 }}>
                such
              </span>{" "}
              <span className="rise-word" style={{ "--i": 23 }}>
                as
              </span>{" "}
              <span className="rise-word" style={{ "--i": 24 }}>
                ChatGPT
              </span>{" "}
              <span className="rise-word" style={{ "--i": 25 }}>
                give.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 26 }}>
                  It
                </span>{" "}
                <span className="rise-word" style={{ "--i": 27 }}>
                  is
                </span>{" "}
                <span className="rise-word" style={{ "--i": 28 }}>
                  for
                </span>{" "}
                <span className="rise-word" style={{ "--i": 29 }}>
                  businesses
                </span>{" "}
                <span className="rise-word" style={{ "--i": 30 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 31 }}>
                  want
                </span>{" "}
                <span className="rise-word" style={{ "--i": 32 }}>
                  steady
                </span>{" "}
                <span className="rise-word" style={{ "--i": 33 }}>
                  enquiries
                </span>{" "}
                <span className="rise-word" style={{ "--i": 34 }}>
                  from
                </span>{" "}
                <span className="rise-word" style={{ "--i": 35 }}>
                  search,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 36 }}>
                  with
                </span>{" "}
                <span className="rise-word" style={{ "--i": 37 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  plain
                </span>{" "}
                <span className="rise-word" style={{ "--i": 39 }}>
                  monthly
                </span>{" "}
                <span className="rise-word" style={{ "--i": 40 }}>
                  report
                </span>{" "}
                <span className="rise-word" style={{ "--i": 41 }}>
                  on
                </span>{" "}
                <span className="rise-word" style={{ "--i": 42 }}>
                  what
                </span>{" "}
                <span className="rise-word" style={{ "--i": 43 }}>
                  moved
                </span>{" "}
                <span className="rise-word" style={{ "--i": 44 }}>
                  and
                </span>{" "}
                <span className="rise-word" style={{ "--i": 45 }}>
                  no
                </span>{" "}
                <span className="rise-word" style={{ "--i": 46 }}>
                  promised
                </span>{" "}
                <span className="rise-word" style={{ "--i": 47 }}>
                  rankings.
                </span>{" "}
                <span className="rise-word" style={{ "--i": 48 }}>
                  Local
                </span>{" "}
                <span className="rise-word" style={{ "--i": 49 }}>
                  SEO
                </span>{" "}
                <span className="rise-word" style={{ "--i": 50 }}>
                  starts
                </span>{" "}
                <span className="rise-word" style={{ "--i": 51 }}>
                  at
                </span>{" "}
                <span className="rise-word" style={{ "--i": 52 }}>
                  ₹2,950
                </span>{" "}
                <span className="rise-word" style={{ "--i": 53 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 54 }}>
                  month.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              From ₹2,950 a month, agreed in writing. Taxes confirmed in your
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
              <ServiceMotionPanel scenes={dataServicesSeoScenes} />
              <span className="absolute bottom-3 left-3 inline-flex h-6 items-center rounded-full bg-ink-1000/90 px-2.5 text-[0.6875rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] lg:bottom-4 lg:left-4">
                Example
              </span>
            </div>
          </div>
          <div className="mt-5 min-w-0 lg:col-span-2 lg:col-start-3 lg:mt-0">
            <article
              aria-labelledby="seo-title"
              className={"[&+&]:mt-[60px] lg:[&+&]:mt-[110px]"}
            >
              <h3
                id="seo-title"
                className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]"
              >
                {"GEO / SEO & Search"}
              </h3>
              <p className="mt-4 indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Found on Google, and cited by the AI engines that increasingly
                answer before Google does.
              </p>
              <p className="mt-6 max-w-[600px] lg:mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                We treat SEO as engineering, not a monthly report: crawlability,
                structured data, internal linking and page speed first, because
                no amount of content fixes a site Google struggles to render.
                Then content and authority, measured against revenue rather than
                vanity rankings. GEO (generative engine optimisation) is that
                same discipline pointed at the answer engines. ChatGPT, Google’s
                AI Overviews, Perplexity and Copilot increasingly answer the
                question before anyone reaches a results page, and they quote
                the sources they can parse and trust. We structure your pages so
                a model can lift a clean, attributable answer out of them, and
                we check which engines are actually naming you.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Technical audits & fixes"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Keyword, intent & prompt mapping"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"On-page & structured data"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Answer-ready content a model can cite
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"AI citation & visibility checks"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (06)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Local SEO and Google Business Profile
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (07)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Monthly reporting against pipeline
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
