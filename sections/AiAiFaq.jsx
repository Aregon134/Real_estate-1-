export function AiAiFaq() {
  return (
    <>
      <section
        aria-labelledby="ai-faq-heading"
        className="bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]"
      >
        <div className="grid gap-[30px] lg:grid-cols-4 lg:gap-x-1">
          <div className="lg:col-span-2">
            <h2
              id="ai-faq-heading"
              data-reveal="mask"
              className="text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
            >
              FAQ.
            </h2>
            <p className="mt-5 max-w-[380px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1rem]">
              Before you book: what people ask us about AI, from their
              customers’ data to what it costs.
            </p>
            <a
              href="/faq"
              className="pill mt-6 inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000 lg:mt-[30px]"
            >
              <span className="pill-roll" data-label="All questions">
                <span>All questions</span>
              </span>
              <span
                aria-hidden="true"
                className="pill-dot size-2 rounded-full bg-ink-1000"
              />
            </a>
          </div>
          <ul className="grid content-start gap-1 lg:col-span-2">
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Is my customers' data safe?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    We only connect the systems a job needs, and set each one up
                    to store no more than it has to. Before anything goes live
                    we walk you through exactly what is stored, where, and who
                    can see it.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Does the voice receptionist sound robotic?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    It uses a natural-sounding voice and is trained on your
                    business, so it can answer real questions. The best test is
                    to hear it yourself, and we will happily set up a demo
                    trained on your business during the audit.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    What if it gets something wrong?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    Each system is set up to hand over to a person when it is
                    unsure, rather than guess. You get a summary of every
                    conversation, and the monthly review is where we fix
                    anything it handled badly.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Do I need new software?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    Usually not. We connect to the tools you already use where
                    we can, and only build something new, like a CRM, when it
                    saves you more than it costs.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    What does it cost?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    Every system is scoped to your business: we look at how it
                    runs on a short call, then price it in writing before we
                    start. Systems run on a 12-month agreement. The two AI
                    add-ons have their own fixed prices, higher up this page.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    What does the AI Website Assistant cost to run?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    Pricing is custom. The running cost depends on the model’s API rates and how many input and output tokens your conversations use. We estimate usage and quote the integration before you commit.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    What is an AI receptionist?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    An AI receptionist answers your missed and out-of-hours
                    calls in a natural voice, using your own services, prices,
                    opening hours and common questions. It takes the enquiry and
                    passes it straight to you, and if you use a booking system
                    or calendar, it books the customer in. Ours is ₹3,490 a month
                    on a 12-month agreement, with the setup waived on that
                    commitment.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    How much does an AI receptionist cost?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    ₹3,490 a month, or ₹2,990 a month on the Scale plan. On a
                    12-month agreement there is no setup fee; month to month,
                    with 30 days’ notice, there is a one-time ₹4,950 setup. On its
                    own it includes 600 minutes of calls a month, then ₹2.50 a
                    minute; on Scale, calls are covered up to 1,500 minutes a
                    month on a fair-use basis. Always-on answering and
                    additional sites are quoted separately.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="ai-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Can the voice receptionist really answer my phone?
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-x grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                    >
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 lg:px-[26px] lg:pb-[26px]">
                  <p className="max-w-[62ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                    Yes. It answers your missed and out-of-hours calls in a
                    natural, friendly voice, tailored to your business: your
                    services, prices, opening hours, location and the questions
                    your customers usually ask. It takes enquiries and passes
                    them straight to you, and if you have a booking system or
                    calendar, it books customers in automatically.
                  </p>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
