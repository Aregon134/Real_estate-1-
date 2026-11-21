import agency from "@/content/Agency.json";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { PricingPartnership } from "@/sections/PricingPartnership";
import { PricingPricing } from "@/sections/PricingPricing";
import { PricingPricingFaq } from "@/sections/PricingPricingFaq";
import { PricingPricingTitle } from "@/sections/PricingPricingTitle";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";

import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "Web Design Prices & Plans, India | Ziggloom",
  description:
    "Fixed-price websites from ₹5,000 and monthly plans from ₹2,000. Taxes confirmed in your proposal. Larger projects, systems and automation are scoped to your business.",
};
export default function Page() {
  return (
    <>
      <HeaderBar
        nav={dataNavigation}
        site={dataAgency}
        brandMark="™"
      />
      <main id="main" className="v3 flex-1">
        <PricingPricingTitle />
        <span id="builds" aria-hidden="true" className="block scroll-mt-10" />
        <span id="plans" aria-hidden="true" className="block scroll-mt-10" />
        <PricingPricing />
        <div className="flow-root bg-ink-950 px-gutter text-ink-0">
          <section
            aria-labelledby="add-ons-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="add-ons-heading"
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
              Add-ons
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <span id="add-ons" className="block scroll-mt-24" />
              <ul>
                <li>
                  <a
                    href="/ai#prices"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:py-6 lg:text-[1.375rem]"
                  >
                    AI Voice Receptionist
                    <span className="flex shrink-0 items-center gap-5">
                      <span className="text-ink-0/60">₹3,490/month</span>
                      <span
                        aria-hidden="true"
                        className="text-[1rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ai#prices"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:py-6 lg:text-[1.375rem]"
                  >
                    AI Website Assistant
                    <span className="flex shrink-0 items-center gap-5">
                      <span className="text-ink-0/60">Custom · API usage</span>
                      <span
                        aria-hidden="true"
                        className="text-[1rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services/creative#pricing"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:py-6 lg:text-[1.375rem]"
                  >
                    Branding
                    <span className="flex shrink-0 items-center gap-5">
                      <span className="text-ink-0/60">from ₹4,000</span>
                      <span
                        aria-hidden="true"
                        className="text-[1rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services/creative#pricing"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:py-6 lg:text-[1.375rem]"
                  >
                    Ad creative video
                    <span className="flex shrink-0 items-center gap-5">
                      <span className="text-ink-0/60">₹2,500</span>
                      <span
                        aria-hidden="true"
                        className="text-[1rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ai"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:py-6 lg:text-[1.375rem]"
                  >
                    Custom AI systems
                    <span className="flex shrink-0 items-center gap-5">
                      <span className="text-ink-0/60">Priced after a call</span>
                      <span
                        aria-hidden="true"
                        className="text-[1rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <div className="mt-[50px] scroll-mt-24 lg:mt-[190px] flex flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 md:flex-row md:items-center md:justify-between lg:rounded-[18px] lg:px-[30px] lg:py-[34px]">
            <div>
              <p className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.625rem]">
                Have a larger project or specific business goal?
              </p>
              <p className="mt-2 max-w-[62ch] text-[0.875rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                We scope it with you on a call, then agree the price and
                timeline in writing before anything starts.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <a
                href="#partnership"
                className="text-[0.875rem] font-medium tracking-[-0.04em] underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0"
              >
                Or see Partnership
              </a>
              <a
                href={agency.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000 "
              >
                <span className="pill-roll" data-label="Let’s scope it">
                  <span>Let’s scope it</span>
                </span>
                <span
                  aria-hidden="true"
                  className="pill-dot size-2 rounded-full bg-ink-1000"
                />
                <span className="sr-only">{" (opens in a new tab)"}</span>
              </a>
            </div>
          </div>
        </div>
        <PricingPartnership />
        <PricingPricingFaq />
        <div className="flow-root bg-ink-950 px-gutter text-ink-0">
          <section
            id="terms"
            aria-labelledby="terms-heading"
            className="mt-[50px] scroll-mt-24 lg:mt-[190px] border-t border-ink-0/10 pt-8 lg:pt-10"
          >
            <h2
              id="terms-heading"
              className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-2 lg:gap-[9px] lg:text-[1rem]"
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
              The small print
            </h2>
            <div className="mt-8 grid gap-1 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              <div className="rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.125rem]">
                    Paying for a project
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    01
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5 border-t border-ink-0/10 pt-5 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-0/60 lg:mt-6 lg:pt-6">
                  <li>
                    Sign the agreement and pay the 40% deposit. It covers
                    planning and secures your slot, so it’s non-refundable. Once
                    it clears, we confirm your start date.
                  </li>
                  <li>
                    You approve the design in writing and 30% is due.
                    Development begins once it clears.
                  </li>
                  <li>
                    You approve the final website. The last 30% is due on launch
                    day, and we publish once it clears.
                  </li>
                  <li>
                    Extra pages, new features and changes beyond your included
                    rounds are quoted first and need your written approval.
                    They’re invoiced on top of the project fee, at the agreed
                    price and payment time.
                  </li>
                  <li>
                    <a
                      href="/how-we-work"
                      className="text-ink-0 underline decoration-ink-0/25 underline-offset-[3px] transition-colors duration-200 hover:decoration-ink-0"
                    >
                      How we work, step by step
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.125rem]">
                    Hourly rates
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    02
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5 border-t border-ink-0/10 pt-5 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-0/60 lg:mt-6 lg:pt-6">
                  <li>
                    On a plan: ₹500 an hour beyond what your plan includes.
                  </li>
                  <li>Not on a plan: ₹850 an hour, one-hour minimum.</li>
                  <li>
                    Single-page quick jobs (opening hours, a photo swap): ₹425
                    for up to 30 minutes.
                  </li>
                  <li>Bigger jobs are quoted before we start.</li>
                  <li>
                    Fixes and single features are for custom-built websites and
                    Shopify stores, not template builds (Wix, Squarespace or
                    WordPress themes).
                  </li>
                </ul>
              </div>
              <div className="rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.125rem]">
                    Handover
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    03
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5 border-t border-ink-0/10 pt-5 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-0/60 lg:mt-6 lg:pt-6">
                  <li>
                    Prefer to look after it yourself? You get the code files, a
                    written setup guide, and the accounts, training and support
                    set out in your scope. We can set it up on your own hosting
                    at ₹850 an hour, with your domain and hosting in your name.
                  </li>
                </ul>
              </div>
              <div className="rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.125rem]">
                    Plan and payment terms
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    04
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5 border-t border-ink-0/10 pt-5 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-0/60 lg:mt-6 lg:pt-6">
                  <li>Monthly plans are billed monthly in advance.</li>
                  <li>
                    Single-page hosting is ₹1,200 a year: hosting, security
                    certificate and domain renewals. Changes at our hourly
                    rates.
                  </li>
                  <li>
                    Revision rounds: one on a single page and on Essential, two
                    on Signature, three on Commerce.
                  </li>
                  <li>Quotes are valid for 3 months.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <ContactForm site={dataAgency} founders={dataTeam} />
      </main>
      <Footer />
    </>
  );
}
