import agency from "@/content/Agency.json";
import { ServiceMotionPanel } from "@/components/ServiceMotion";
import dataServicesEmailSmsScenes from "@/content/ServicesEmailSmsScenes.json";
export function ServicesEmailSmsServiceTitle() {
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
          {"Email & SMS marketing."}
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
              Email and SMS marketing is the emails and texts that bring
              customers back: welcome and win-back emails, regular campaigns,
              and texts for the moments that cannot wait.
              {
                " It is for businesses with a customer list who want more repeat sales. Email campaigns start at ₹4,500 a month on Growth; texts and automated messages come with Scale at ₹9,500 a month."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                Email
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                SMS
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                marketing
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                is
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                emails
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                texts
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                that
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                bring
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                customers
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                back:
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                welcome
              </span>{" "}
              <span className="rise-word" style={{ "--i": 14 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 15 }}>
                win-back
              </span>{" "}
              <span className="rise-word" style={{ "--i": 16 }}>
                emails,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 17 }}>
                regular
              </span>{" "}
              <span className="rise-word" style={{ "--i": 18 }}>
                campaigns,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 19 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 20 }}>
                texts
              </span>{" "}
              <span className="rise-word" style={{ "--i": 21 }}>
                for
              </span>{" "}
              <span className="rise-word" style={{ "--i": 22 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 23 }}>
                moments
              </span>{" "}
              <span className="rise-word" style={{ "--i": 24 }}>
                that
              </span>{" "}
              <span className="rise-word" style={{ "--i": 25 }}>
                cannot
              </span>{" "}
              <span className="rise-word" style={{ "--i": 26 }}>
                wait.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 27 }}>
                  It
                </span>{" "}
                <span className="rise-word" style={{ "--i": 28 }}>
                  is
                </span>{" "}
                <span className="rise-word" style={{ "--i": 29 }}>
                  for
                </span>{" "}
                <span className="rise-word" style={{ "--i": 30 }}>
                  businesses
                </span>{" "}
                <span className="rise-word" style={{ "--i": 31 }}>
                  with
                </span>{" "}
                <span className="rise-word" style={{ "--i": 32 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 33 }}>
                  customer
                </span>{" "}
                <span className="rise-word" style={{ "--i": 34 }}>
                  list
                </span>{" "}
                <span className="rise-word" style={{ "--i": 35 }}>
                  who
                </span>{" "}
                <span className="rise-word" style={{ "--i": 36 }}>
                  want
                </span>{" "}
                <span className="rise-word" style={{ "--i": 37 }}>
                  more
                </span>{" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  repeat
                </span>{" "}
                <span className="rise-word" style={{ "--i": 39 }}>
                  sales.
                </span>{" "}
                <span className="rise-word" style={{ "--i": 40 }}>
                  Email
                </span>{" "}
                <span className="rise-word" style={{ "--i": 41 }}>
                  campaigns
                </span>{" "}
                <span className="rise-word" style={{ "--i": 42 }}>
                  start
                </span>{" "}
                <span className="rise-word" style={{ "--i": 43 }}>
                  at
                </span>{" "}
                <span className="rise-word" style={{ "--i": 44 }}>
                  ₹4,500
                </span>{" "}
                <span className="rise-word" style={{ "--i": 45 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 46 }}>
                  month
                </span>{" "}
                <span className="rise-word" style={{ "--i": 47 }}>
                  on
                </span>{" "}
                <span className="rise-word" style={{ "--i": 48 }}>
                  Growth;
                </span>{" "}
                <span className="rise-word" style={{ "--i": 49 }}>
                  texts
                </span>{" "}
                <span className="rise-word" style={{ "--i": 50 }}>
                  and
                </span>{" "}
                <span className="rise-word" style={{ "--i": 51 }}>
                  automated
                </span>{" "}
                <span className="rise-word" style={{ "--i": 52 }}>
                  messages
                </span>{" "}
                <span className="rise-word" style={{ "--i": 53 }}>
                  come
                </span>{" "}
                <span className="rise-word" style={{ "--i": 54 }}>
                  with
                </span>{" "}
                <span className="rise-word" style={{ "--i": 55 }}>
                  Scale
                </span>{" "}
                <span className="rise-word" style={{ "--i": 56 }}>
                  at
                </span>{" "}
                <span className="rise-word" style={{ "--i": 57 }}>
                  ₹9,500
                </span>{" "}
                <span className="rise-word" style={{ "--i": 58 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 59 }}>
                  month.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              From ₹4,500 a month, agreed in writing. Taxes confirmed in your
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
              <ServiceMotionPanel scenes={dataServicesEmailSmsScenes} />
              <span className="absolute bottom-3 left-3 inline-flex h-6 items-center rounded-full bg-ink-1000/90 px-2.5 text-[0.6875rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] lg:bottom-4 lg:left-4">
                Example
              </span>
            </div>
          </div>
          <div className="mt-5 min-w-0 lg:col-span-2 lg:col-start-3 lg:mt-0">
            <article
              aria-labelledby="email-title"
              className={"[&+&]:mt-[60px] lg:[&+&]:mt-[110px]"}
            >
              <h3
                id="email-title"
                className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]"
              >
                Email Marketing
              </h3>
              <p className="mt-4 indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Lifecycle flows that keep earning long after the campaign has
                gone quiet.
              </p>
              <p className="mt-6 max-w-[600px] lg:mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                People who have already found you or bought from you are worth
                staying in touch with. We build the welcome, abandonment,
                win-back and post-purchase sequences that convert it, designed
                to match the site, written to sound like you, and tested
                properly rather than sent on a hunch.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Lifecycle & automation flows"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Campaign design and build
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"List segmentation & hygiene"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Deliverability and domain authentication
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Two campaigns a month on Growth, written, designed and
                        sent
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </article>
            <article
              aria-labelledby="sms-title"
              className={"[&+&]:mt-[60px] lg:[&+&]:mt-[110px]"}
            >
              <h3
                id="sms-title"
                className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]"
              >
                SMS Marketing
              </h3>
              <p className="mt-4 indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Short, well-timed texts, used with enough restraint that
                customers keep reading them.
              </p>
              <p className="mt-6 max-w-[600px] lg:mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                SMS works because it is scarce. We treat the channel
                accordingly: tight segmentation, genuine reasons to message, and
                compliance handled properly so the list stays healthy. Used
                well, it puts a launch or an offer in front of your customers
                the moment it matters.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Opt-in capture & list growth"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Campaign and automation build
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Segmentation & send-time strategy"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        {"Consent and unsubscribe settings"}
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Integration with email lifecycle
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (06)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Performance reporting
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
