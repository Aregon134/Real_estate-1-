export function PricingPricingTitle() {
  return (
    <>
      <section
        aria-labelledby="pricing-title"
        className="bg-ink-950 px-gutter pt-[140px] text-ink-0 lg:pt-[318px]"
      >
        <h1
          id="pricing-title"
          data-reveal="mask"
          className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
        >
          Pricing.
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
            Fixed prices
          </p>
          <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
              A single page is ₹5,000, Essential is ₹13,990, Signature is ₹30,000 and Commerce is ₹44,500. Choose a package below to see what it covers. Any applicable taxes are listed in the proposal.
            </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              This website uses Next.js and React. We agree the platform, hosting and checks for your project in the proposal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
