import { PricingPanel } from "@/components/PricingPanel";
import dataPricingModes from "@/content/PricingModes.json";
export function PricingPricing() {
  return (
    <>
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="bg-ink-950 pt-[50px] lg:px-1.5 lg:pt-[190px]"
      >
        <div
          className="px-5 py-[50px] text-ink-1000 lg:rounded-[25px] lg:px-[30px] lg:pb-[200px] lg:pt-[80px]"
          style={{
            background:
              "radial-gradient(70% 55% at 100% 0%, #272727 0%, rgb(39 39 39 / 0) 65%), radial-gradient(60% 45% at 0% 100%, #151515 0%, rgb(21 21 21 / 0) 70%), #0a0a0a",
          }}
        >
          <div className="grid lg:grid-cols-4 lg:gap-x-1">
            <p
              className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-2 lg:gap-[9px] lg:text-[1rem]"
              style={{ "--plus-ink": "#0a0a0a" }}
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
              At a glance
            </p>
            <h2 id="pricing-heading" className="sr-only">
              Prices at a glance
            </h2>
          </div>
          <PricingPanel modes={dataPricingModes} currency="£" />
        </div>
      </section>
    </>
  );
}
