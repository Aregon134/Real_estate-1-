export function ServicesHostingCareFaq() {
  return (
    <>
      <section
        aria-labelledby="faq-heading"
        className="bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]"
      >
        <div className="grid gap-[30px] lg:grid-cols-4 lg:gap-x-1">
          <div className="lg:col-span-2">
            <h2
              id="faq-heading"
              data-reveal="mask"
              className="text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
            >
              FAQ.
            </h2>
            <p className="mt-5 max-w-[380px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1rem]">
              The questions we get asked most about this service, answered in
              full.
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
                name="hosting-care-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Can I edit my site myself?
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
                    Yes, on Signature and Commerce: you change your own words
                    and images in a simple editor (or in Shopify for online
                    shops), with training at handover. On Essential we make
                    changes for you through a monthly plan or at our hourly
                    rate, or you can add editing for £650 before the build or
                    £850 after. Single-page sites don’t include editing.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="hosting-care-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Why do I need a plan if I can edit it myself?
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
                    The editor covers your words and photos. A plan covers
                    everything behind them: hosting, security updates, tested
                    backups, renewing your domain and security certificate
                    before they lapse, and fixing anything that breaks. It also
                    covers the invisible details that keep you ranking, like
                    image sizes, headings and page addresses, which are easy to
                    get wrong when editing yourself. On Growth, we keep you
                    climbing with fresh content and SEO, GEO and AEO every
                    month.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="hosting-care-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Who hosts it, and what happens if it breaks?
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
                    We do, on every monthly plan: hosting, your security
                    certificate, backups, updates and monitoring are included.
                    If your site goes down, it is fixed within 1 working day.
                    Prefer to look after it yourself? Choose a handover before
                    the build starts, and you get the code files and a written
                    setup guide.
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
