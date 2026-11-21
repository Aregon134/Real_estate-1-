export function PricingPricingFaq() {
  return (
    <>
      <section
        aria-labelledby="pricing-faq-heading"
        className="bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]"
      >
        <div className="grid gap-[30px] lg:grid-cols-4 lg:gap-x-1">
          <div className="lg:col-span-2">
            <h2
              id="pricing-faq-heading"
              data-reveal="mask"
              className="text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
            >
              FAQ.
            </h2>
            <p className="mt-5 max-w-[380px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1rem]">
              Before you book: what we get asked most about paying, timings and
              what you own.
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
                name="pricing-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    How long does a website take to build?
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
                    It depends on what you need. A single page is quick: usually
                    live in 1 to 2 working days. For anything bigger, we agree
                    the timeline in your scope before we start, based on the
                    pages, features and content involved. As a guide, Essential
                    typically takes 5 working days, Signature 10 and Commerce
                    about 2 weeks, counted from your start date once we have
                    your content.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="pricing-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    What do I need to give you?
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
                    Your text, photos and logo, plus sites you like and your
                    colours and fonts.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="pricing-faq"
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
                name="pricing-faq"
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
                name="pricing-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Do you do referrals?
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
                    Yes: 10% of the project fee for every business you refer
                    that books with us. That’s £300 on a Signature website, and
                    there’s no limit. Just tell us who’s coming before they get
                    in touch.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="pricing-faq"
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
                name="pricing-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    How do I get started?
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
                    Book a free 15-minute call, send us a message with the form,
                    or email us. We reply within 1 working day, talk it through,
                    then send the scope and a fixed price in writing. Nothing
                    starts until you’re happy with it and the 40% deposit has
                    cleared.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="pricing-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    What do you need from me for a quote?
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
                    A few lines on your business and what you want the website
                    to do, roughly which pages or features you need, whether
                    your logo, photos and text are ready, your current website
                    if you have one, a few sites you like, your timeframe and a
                    rough budget. The contact form asks for all of it.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="pricing-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Is the deposit refundable?
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
                    No. It covers planning and secures your slot.
                  </p>
                </div>
              </details>
            </li>
            <li>
              <details
                name="pricing-faq"
                className="faq-item group rounded-[14px] bg-ink-1000"
              >
                <summary
                  className={
                    "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                  }
                >
                  <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                    Do you charge VAT?
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
                    Taxes confirmed in your proposal. We’re not VAT registered.
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
