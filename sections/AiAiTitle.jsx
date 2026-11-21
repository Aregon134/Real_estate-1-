import agency from "@/content/Agency.json";
import { CountUp } from "@/components/CountUp";
export function AiAiTitle() {
  return (
    <>
      <section
        aria-labelledby="ai-title"
        className="bg-ink-950 px-gutter pt-[140px] text-ink-0 lg:pt-[318px]"
      >
        <h1
          id="ai-title"
          data-reveal="mask"
          className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
        >
          AI automation.
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
            Grimsby and the UK
          </p>
          <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
            <span className="sr-only">
              AI automation is software that answers, follows up and books for
              you while you get on with the work, connected to the tools you
              already use.
              {
                " Every business leaks somewhere: missed calls, enquiries left overnight, quotes typed by hand. We find yours first, then build the system that fixes it, so you can grow without adding admin."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                AI
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                automation
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                is
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                software
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                that
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                answers,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                follows
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                up
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                books
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                for
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                you
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                while
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                you
              </span>{" "}
              <span className="rise-word" style={{ "--i": 14 }}>
                get
              </span>{" "}
              <span className="rise-word" style={{ "--i": 15 }}>
                on
              </span>{" "}
              <span className="rise-word" style={{ "--i": 16 }}>
                with
              </span>{" "}
              <span className="rise-word" style={{ "--i": 17 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 18 }}>
                work,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 19 }}>
                connected
              </span>{" "}
              <span className="rise-word" style={{ "--i": 20 }}>
                to
              </span>{" "}
              <span className="rise-word" style={{ "--i": 21 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 22 }}>
                tools
              </span>{" "}
              <span className="rise-word" style={{ "--i": 23 }}>
                you
              </span>{" "}
              <span className="rise-word" style={{ "--i": 24 }}>
                already
              </span>{" "}
              <span className="rise-word" style={{ "--i": 25 }}>
                use.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 26 }}>
                  Every
                </span>{" "}
                <span className="rise-word" style={{ "--i": 27 }}>
                  business
                </span>{" "}
                <span className="rise-word" style={{ "--i": 28 }}>
                  leaks
                </span>{" "}
                <span className="rise-word" style={{ "--i": 29 }}>
                  somewhere:
                </span>{" "}
                <span className="rise-word" style={{ "--i": 30 }}>
                  missed
                </span>{" "}
                <span className="rise-word" style={{ "--i": 31 }}>
                  calls,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 32 }}>
                  enquiries
                </span>{" "}
                <span className="rise-word" style={{ "--i": 33 }}>
                  left
                </span>{" "}
                <span className="rise-word" style={{ "--i": 34 }}>
                  overnight,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 35 }}>
                  quotes
                </span>{" "}
                <span className="rise-word" style={{ "--i": 36 }}>
                  typed
                </span>{" "}
                <span className="rise-word" style={{ "--i": 37 }}>
                  by
                </span>{" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  hand.
                </span>{" "}
                <span className="rise-word" style={{ "--i": 39 }}>
                  We
                </span>{" "}
                <span className="rise-word" style={{ "--i": 40 }}>
                  find
                </span>{" "}
                <span className="rise-word" style={{ "--i": 41 }}>
                  yours
                </span>{" "}
                <span className="rise-word" style={{ "--i": 42 }}>
                  first,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 43 }}>
                  then
                </span>{" "}
                <span className="rise-word" style={{ "--i": 44 }}>
                  build
                </span>{" "}
                <span className="rise-word" style={{ "--i": 45 }}>
                  the
                </span>{" "}
                <span className="rise-word" style={{ "--i": 46 }}>
                  system
                </span>{" "}
                <span className="rise-word" style={{ "--i": 47 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 48 }}>
                  fixes
                </span>{" "}
                <span className="rise-word" style={{ "--i": 49 }}>
                  it,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 50 }}>
                  so
                </span>{" "}
                <span className="rise-word" style={{ "--i": 51 }}>
                  you
                </span>{" "}
                <span className="rise-word" style={{ "--i": 52 }}>
                  can
                </span>{" "}
                <span className="rise-word" style={{ "--i": 53 }}>
                  grow
                </span>{" "}
                <span className="rise-word" style={{ "--i": 54 }}>
                  without
                </span>{" "}
                <span className="rise-word" style={{ "--i": 55 }}>
                  adding
                </span>{" "}
                <span className="rise-word" style={{ "--i": 56 }}>
                  admin.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>It starts with a free call to find your biggest leak.</p>
            <a
              href={agency.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000 mt-5"
            >
              <span className="pill-roll" data-label="Book a free audit">
                <span>Book a free audit</span>
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
          id="research"
          aria-labelledby="research-heading"
          className="mt-[50px] scroll-mt-24 lg:mt-[190px]"
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
              Why speed matters
            </p>
            <h2
              id="research-heading"
              className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]"
            >
              Enquiries go cold in minutes, not days.{" "}
              <span className="text-ink-0/60">
                Interest peaks the moment someone gets in touch, and falls away
                fast.
              </span>
            </h2>
          </div>
          <ul className="mt-9 grid gap-1 sm:grid-cols-3 lg:mt-20">
            <li className="flex flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[300px] lg:rounded-[18px] lg:p-[30px]">
              <div className="flex items-start justify-between">
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[3.5rem]">
                  <CountUp value="100×" />
                </p>
                <span
                  aria-hidden="true"
                  className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                >
                  01
                </span>
              </div>
              <div>
                <p className="text-[0.9375rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.0625rem]">
                  Calling a new lead back at 30 minutes instead of 5 cut the
                  odds of reaching them a hundredfold.
                </p>
                <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                  Lead Response Management Study, InsideSales.com and MIT, 2007
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[300px] lg:rounded-[18px] lg:p-[30px]">
              <div className="flex items-start justify-between">
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[3.5rem]">
                  <CountUp value="21×" />
                </p>
                <span
                  aria-hidden="true"
                  className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                >
                  02
                </span>
              </div>
              <div>
                <p className="text-[0.9375rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.0625rem]">
                  Over the same 25 minutes, the odds of the lead agreeing to a
                  next step, such as a call or an appointment, fell 21 times.
                </p>
                <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                  Lead Response Management Study, InsideSales.com and MIT, 2007
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between gap-8 rounded-[14px] bg-ink-1000 p-6 lg:min-h-[300px] lg:rounded-[18px] lg:p-[30px]">
              <div className="flex items-start justify-between">
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[3.5rem]">
                  <CountUp value="7×" />
                </p>
                <span
                  aria-hidden="true"
                  className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                >
                  03
                </span>
              </div>
              <div>
                <p className="text-[0.9375rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.0625rem]">
                  Firms that tried to reply within an hour were nearly seven
                  times as likely to get that next step as firms that tried even
                  an hour later.
                </p>
                <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                  Harvard Business Review, 2011
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-1 grid gap-8 rounded-[14px] bg-ink-1000 p-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-x-[60px] lg:rounded-[18px] lg:p-[30px]">
            <div>
              <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                How 2,241 US companies answered a test enquiry
              </h3>
              <ul className="mt-6 grid gap-4">
                <li>
                  <div className="flex items-baseline justify-between gap-4 text-[0.875rem] font-medium tracking-[-0.04em] lg:text-[0.9375rem]">
                    <span>Within an hour</span>
                    <span className="font-figure font-semibold tracking-[-0.04em]">
                      <CountUp value="37%" />
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-0/[0.06]">
                    <div
                      className="h-full rounded-full bg-ink-0"
                      style={{ width: "37%" }}
                    />
                  </div>
                </li>
                <li>
                  <div className="flex items-baseline justify-between gap-4 text-[0.875rem] font-medium tracking-[-0.04em] lg:text-[0.9375rem]">
                    <span>1 to 24 hours</span>
                    <span className="font-figure font-semibold tracking-[-0.04em]">
                      <CountUp value="16%" />
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-0/[0.06]">
                    <div
                      className="h-full rounded-full bg-ink-0"
                      style={{ width: "16%" }}
                    />
                  </div>
                </li>
                <li>
                  <div className="flex items-baseline justify-between gap-4 text-[0.875rem] font-medium tracking-[-0.04em] lg:text-[0.9375rem]">
                    <span>Over 24 hours</span>
                    <span className="font-figure font-semibold tracking-[-0.04em]">
                      <CountUp value="24%" />
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-0/[0.06]">
                    <div
                      className="h-full rounded-full bg-ink-0"
                      style={{ width: "24%" }}
                    />
                  </div>
                </li>
                <li>
                  <div className="flex items-baseline justify-between gap-4 text-[0.875rem] font-medium tracking-[-0.04em] lg:text-[0.9375rem]">
                    <span>Never replied</span>
                    <span className="font-figure font-semibold tracking-[-0.04em]">
                      <CountUp value="23%" />
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-0/[0.06]">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: "23%" }}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-6 border-t border-ink-0/10 pt-6 lg:border-l lg:border-t-0 lg:pl-[60px] lg:pt-0">
              <div>
                <p className="font-figure text-[2.5rem] font-semibold leading-none tracking-[-0.07em] lg:text-[3.5rem]">
                  <CountUp value="42" />
                  <span className="ml-1.5 font-sans text-[0.875rem] font-medium tracking-[-0.04em] text-ink-0/60">
                    hours
                  </span>
                </p>
                <p className="mt-3 text-[0.9375rem] font-medium leading-[1.35] tracking-[-0.04em]">
                  Average wait, among those that replied within 30 days
                </p>
              </div>
              <a
                href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-0/60 underline decoration-ink-0/25 underline-offset-[3px] transition-colors duration-200 hover:text-ink-0 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]"
              >
                {"Source: "}
                {
                  "Oldroyd, McElheran & Elkington, “The Short Life of Online Sales Leads”, Harvard Business Review, March 2011"
                }
                <span className="sr-only">{" (opens in a new tab)"}</span>
              </a>
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-4 lg:gap-x-1">
            <p className="text-ink-0/60 lg:col-span-3 lg:col-start-2 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
              That gap, between the first five minutes and the next working day,
              is what these systems close. Published US research, quoted as
              published. Not results from our clients.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
