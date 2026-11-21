import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { WebDesignGrimsbyLocalFaq } from "@/sections/WebDesignGrimsbyLocalFaq";
import { WebDesignGrimsbyLocalTitle } from "@/sections/WebDesignGrimsbyLocalTitle";
import { WebDesignGrimsbyPricing } from "@/sections/WebDesignGrimsbyPricing";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
import dataTeam from "@/content/Team.json";

export const metadata = {
  title: "Web Design in Grimsby & Cleethorpes | Ziggloom",
  description:
    "Web design in Grimsby, Cleethorpes and North East Lincolnshire: custom websites from a founder-led agency based in Grimsby, at fixed prices from £500.",
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
        <WebDesignGrimsbyLocalTitle />
        <WebDesignGrimsbyPricing />
        <WebDesignGrimsbyLocalFaq />
        <div className="flow-root bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]">
          <section
            aria-labelledby="next-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 "
          >
            <h2
              id="next-heading"
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
              Where next
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <ul>
                <li>
                  <a
                    href="/portfolio/b-boutique"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    B Boutique website in Cleethorpes
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
                    href="/services/web-design"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    Web design and build
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
                    Local SEO in Grimsby
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
                    href="/pricing"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    Every price
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
                    href="/book"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.375rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.875rem]"
                  >
                    Book a call
                    <span
                      aria-hidden="true"
                      className="text-[1.125rem] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
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
