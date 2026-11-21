import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { ServicesWebDesignFaq } from "@/sections/ServicesWebDesignFaq";
import { ServicesWebDesignPricing } from "@/sections/ServicesWebDesignPricing";
import { ServicesWebDesignServiceTitle } from "@/sections/ServicesWebDesignServiceTitle";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";

import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "Web Design & Build in Grimsby | Ziggloom",
  description:
    "Custom-designed websites, never templates, custom-built in Next.js by a founder-led agency in Grimsby. Clear, fixed prices for defined services.",
};
export default function Page() {
  return (
    <>
      <HeaderBar
        nav={dataNavigation}
        site={dataAgency}
        projectCount={7}
        brandMark="™"
      />
      <main id="main" className="v3 flex-1">
        <ServicesWebDesignServiceTitle />
        <ServicesWebDesignPricing />
        <ServicesWebDesignFaq />
        <div className="bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]">
          <section
            aria-labelledby="other-services-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 "
          >
            <h2
              id="other-services-heading"
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
              Other services
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <ul>
                <li>
                  <a
                    href="/services/shopify"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    Shopify Stores
                    <span
                      aria-hidden="true"
                      className="text-[1.125rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services/seo"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    {"SEO & GEO"}
                    <span
                      aria-hidden="true"
                      className="text-[1.125rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services/email-sms"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    {"Email & SMS Marketing"}
                    <span
                      aria-hidden="true"
                      className="text-[1.125rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services/hosting-care"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    {"Hosting & Care"}
                    <span
                      aria-hidden="true"
                      className="text-[1.125rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/services/creative"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    {"Branding & Ad Creative"}
                    <span
                      aria-hidden="true"
                      className="text-[1.125rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ai"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    AI Automation
                    <span
                      aria-hidden="true"
                      className="text-[1.125rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
              <h3 className="mt-[50px] border-t border-ink-0/10 pt-[50px] text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:mt-[60px] lg:pt-[60px] lg:text-[1rem]">
                Read next
              </h3>
              <ul className="mt-4 grid gap-3">
                <li>
                  <a
                    href="/web-design-grimsby"
                    className="text-[1rem] font-medium tracking-[-0.04em] underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0 lg:text-[1.125rem]"
                  >
                    Web design in Grimsby
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio/b-boutique"
                    className="text-[1rem] font-medium tracking-[-0.04em] underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0 lg:text-[1.125rem]"
                  >
                    The B Boutique case study
                  </a>
                </li>
                <li>
                  <a
                    href="/how-we-work"
                    className="text-[1rem] font-medium tracking-[-0.04em] underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0 lg:text-[1.125rem]"
                  >
                    How we work
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <ContactForm site={dataAgency} founders={dataTeam} />
      </main>
      <Footer />
    </>
  );
}
