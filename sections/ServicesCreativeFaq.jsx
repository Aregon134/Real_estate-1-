export function ServicesCreativeFaq() {
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
                name="creative-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Do I own the website?
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
                    Yes. Ownership of the agreed original work transfers to you
                    after final payment. Third-party fonts, software and stock
                    keep their own licences, and anything you owned before the
                    project stays yours and is never held back.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="creative-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    I don’t have a logo or branding.
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
                    We can create one: Logo ₹4,000, Brand Starter ₹7,500, Full Brand
                    Kit ₹15,000.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="creative-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Do you run Meta ads?
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
                    Yes. We set up and manage Meta ads (Facebook and Instagram)
                    as a separate service, quoted for your business, and we can
                    make the creative for them too. You pay the ad spend
                    directly to Meta, so you always see where it goes. It isn’t
                    part of the monthly plans.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="creative-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Can you make ad creatives as well as the website?
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
                    Yes, made in house in software from the photos, footage and
                    products you provide: ad creative videos at ₹2,500 each. We
                    don't do photo shoots or filming. Most pieces are delivered
                    one to two working days from approved direction, with full
                    copyright on final payment. Running the ads is separate: we
                    manage Meta ads as its own quoted service, and you pay the
                    ad spend directly.
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
