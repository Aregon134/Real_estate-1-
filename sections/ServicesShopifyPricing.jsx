import Image from "next/image";
import { PricingPanel } from "@/components/PricingPanel";
import dataServicesShopifyModes from "@/content/ServicesShopifyModes.json";
export function ServicesShopifyPricing() {
  return (
    <>
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="bg-ink-950 pt-[50px] lg:px-1.5 lg:pt-[190px]"
      >
        <div
          className="px-5 py-[50px] text-ink-1000 lg:rounded-[25px] lg:px-[30px] lg:py-[200px]"
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
              Fixed prices
            </p>
            <h2
              id="pricing-heading"
              data-reveal="mask"
              className="mt-4 text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em] lg:col-span-3 lg:mt-0"
            >
              Pricing.
            </h2>
          </div>
          <PricingPanel modes={dataServicesShopifyModes} currency="£" />
          <div className="mt-[60px] grid lg:mt-[120px] lg:grid-cols-4 lg:gap-x-1">
            <p className="text-[1rem] font-medium tracking-[-0.04em] text-ink-1000/70">
              Looking for more?
            </p>
            <div className="mt-5 lg:col-span-3 lg:mt-0">
              <p className="max-w-[780px] indent-[4em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Have a larger project or specific business goal?{" "}
                <span className="text-ink-1000/60">
                  Let’s scope it, or see every price, add-on and term on our
                  pricing page.
                </span>
              </p>
              <div className="mt-[30px] flex flex-wrap items-center gap-x-8 gap-y-5 lg:mt-[50px]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/founders/avatar-bradley-hoxha.2026-10-28.webp"
                    alt=""
                    width={42}
                    height={42}
                    sizes="42px"
                    quality={90}
                    className="size-[42px] rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="text-[0.8125rem] font-medium tracking-[-0.04em] lg:text-[1rem]">
                      Studio Design
                    </p>
                    <p className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]">
                      {"Designer & developer"}
                    </p>
                  </div>
                </div>
                <a
                  href="/pricing"
                  className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-1000 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-[#0a0a0a]"
                >
                  <span className="pill-roll" data-label="Full pricing">
                    <span>Full pricing</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pill-dot size-2 rounded-full bg-[#0a0a0a]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
