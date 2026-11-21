import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import Image from "next/image";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";

import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "B Boutique Website Case Study, Cleethorpes",
  description:
    "How the reference studio designed and built the website for B Boutique, an independent clothing and homeware boutique on Sea View Street, Cleethorpes.",
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
        <div className="bg-ink-950 px-gutter pt-[140px] text-ink-0 lg:pt-[318px]">
          <h1
            data-reveal="mask"
            className="text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:text-[clamp(6rem,10.3vw,9.25rem)]"
          >
            B Boutique.
          </h1>
          <p className="zg-credit">
            Reference work by Black Line Agency, shown with permission.
          </p>
          <section
            aria-labelledby="intro-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[30px] lg:mt-[130px]"
          >
            <h2
              id="intro-heading"
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
              Introduction
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="indent-[4.1em] text-[1.375rem] font-medium leading-[1.2] tracking-[-0.04em]">
                B Boutique is an independent women’s clothing and homeware
                boutique on Sea View Street, Cleethorpes, run by its owner,
                Hayley Brown. The original studio designed and built its
                website: a shop online that feels like the one on the street.
              </p>
              <dl className="mt-[50px] lg:mt-[90px]">
                <div className="flex items-baseline justify-between gap-6 border-t border-ink-0/10 py-5">
                  <dt className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                    Client
                  </dt>
                  <dd className="text-right text-[0.9375rem] font-medium tracking-[-0.04em]">
                    B Boutique
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-ink-0/10 py-5">
                  <dt className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                    Industry
                  </dt>
                  <dd className="text-right text-[0.9375rem] font-medium tracking-[-0.04em]">
                    Independent retail
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-ink-0/10 py-5">
                  <dt className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                    Location
                  </dt>
                  <dd className="text-right text-[0.9375rem] font-medium tracking-[-0.04em]">
                    Cleethorpes, Lincolnshire
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-ink-0/10 py-5">
                  <dt className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                    Year
                  </dt>
                  <dd className="text-right text-[0.9375rem] font-medium tracking-[-0.04em]">
                    2026
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-ink-0/10 py-5">
                  <dt className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                    Status
                  </dt>
                  <dd className="text-right text-[0.9375rem] font-medium tracking-[-0.04em]">
                    Live
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-ink-0/10 py-5">
                  <dt className="shrink-0 text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                    Scope of work
                  </dt>
                  <dd className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-right text-[0.9375rem] font-medium tracking-[-0.04em]">
                    <span>
                      <span className="mr-1.5 text-ink-0/40">/</span>Design
                    </span>
                    <span>
                      <span className="mr-1.5 text-ink-0/40">/</span>Build
                    </span>
                    <span>
                      <span className="mr-1.5 text-ink-0/40">/</span>E-commerce
                    </span>
                    <span>
                      <span className="mr-1.5 text-ink-0/40">/</span>
                      {"Local SEO & GEO"}
                    </span>
                  </dd>
                </div>
              </dl>
              <span
                role="img"
                aria-label="B Boutique logo"
                className="mt-10 block h-9 bg-ink-0 lg:mt-[56px] lg:h-11"
                style={{
                  aspectRatio: 3.245573770491803,
                  mask: "url(/images/work/logos/b-boutique.2026-10-27.svg) left center / contain no-repeat",
                  WebkitMask:
                    "url(/images/work/logos/b-boutique.2026-10-27.svg) left center / contain no-repeat",
                }}
              />
            </div>
          </section>
          <div className="mt-[50px] grid gap-1 md:grid-cols-2 lg:mt-[134px]">
            <div className="relative aspect-[682/547] overflow-hidden rounded-[18px] bg-ink-900 lg:rounded-[25px]">
              <Image
                src="/images/work/case/b-boutique/intro-desktop.2026-10-28.webp"
                alt="The B Boutique homepage on a desktop screen: horses running across red heather under the shop's name"
                fill={true}
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[682/547] overflow-hidden rounded-[18px] bg-ink-900 lg:rounded-[25px]">
              <Image
                src="/images/work/case/b-boutique/intro-phone.2026-10-28.webp"
                alt="The B Boutique homepage on a phone"
                fill={true}
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
          <section
            aria-labelledby="brief-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="brief-heading"
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
              The brief
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                A website that feels like walking into the shop: considered
                rather than crowded, quick to shop on a phone, and clear about
                where to find it and when it’s open.
              </p>
              <p className="mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                B Boutique’s pieces are chosen one at a time, with new stock
                arriving regularly. The site had to carry that: every piece on
                its own page and ready to buy online, with the shop’s address
                and opening hours a tap away.
              </p>
              <a
                href="https://bboutiqueclee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pill mt-[30px] inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
              >
                <span className="pill-roll" data-label="Live project">
                  <span>Live project</span>
                </span>
                <span
                  aria-hidden="true"
                  className="pill-dot size-2 rounded-full bg-ink-1000"
                />
                <span className="sr-only">{" (opens in a new tab)"}</span>
              </a>
            </div>
          </section>
          <div className="mt-[50px] grid gap-[3px] overflow-hidden rounded-[18px] lg:mt-[165px] lg:rounded-[25px]">
            <div className="relative aspect-[1368/837] bg-ink-900">
              <Image
                src="/images/work/case/b-boutique/gallery-clothing.2026-10-28.webp"
                alt="The Clothing page: categories down the left with their counts, and the stock beside them"
                fill={true}
                sizes="100vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[1368/837] bg-ink-900">
              <Image
                src="/images/work/case/b-boutique/gallery-phones.2026-10-28.webp"
                alt="Three phone screens: the homepage, the Clothing page and a product page"
                fill={true}
                sizes="100vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[1368/837] bg-ink-900">
              <Image
                src="/images/work/case/b-boutique/gallery-product.2026-10-28.webp"
                alt="A product page for a hooded boucle coat, with its price, colour, quantity and checkout buttons"
                fill={true}
                sizes="100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
          <section
            aria-labelledby="approach-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="approach-heading"
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
              Approach
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <ol>
                <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                  <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                    (01)
                  </span>
                  <div>
                    <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                      One typeface, and the shop’s own logo
                    </h3>
                    <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                      Every heading, price and label is set in Hanken Grotesk,
                      with the boutique’s serif logo as the only other voice.
                      Black, white and the photography do the rest, so the
                      clothes stay the focus.
                    </p>
                  </div>
                </li>
                <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                  <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                    (02)
                  </span>
                  <div>
                    <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                      A shop built around the stock
                    </h3>
                    <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                      A page for each category, from Knitwear to Dresses, each
                      listing its own pieces. A page for every piece, with its
                      price, colour, size guide and checkout. Homeware on its
                      own page, and search across everything.
                    </p>
                  </div>
                </li>
                <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                  <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                    (03)
                  </span>
                  <div>
                    <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                      Found by Google and AI search
                    </h3>
                    <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                      Structured data on every page tells search engines that
                      this is a clothing store, where it is and when it’s open.
                      Every piece carries its own product data, and the
                      questions on the homepage are marked up so search and AI
                      answers can quote them.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
          <section
            aria-labelledby="checks-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="checks-heading"
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
              How it was checked
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <ol>
                <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                  <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                    (01)
                  </span>
                  <div>
                    <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                      Tested with axe on nine pages at phone, tablet and desktop
                      widths: no accessibility violations against WCAG 2.2 AA
                    </p>
                  </div>
                </li>
                <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                  <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                    (02)
                  </span>
                  <div>
                    <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                      Custom-built in our own code, with no page builder or
                      template
                    </p>
                  </div>
                </li>
                <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                  <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                    (03)
                  </span>
                  <div>
                    <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                      Built around the card payments the shop already used,
                      rather than on Shopify
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
          <section
            aria-labelledby="final-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="final-heading"
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
              Final thoughts
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                B Boutique now has a shop that’s open online around the clock,
                with every piece ready to buy, and the shop on Sea View Street a
                tap away for anyone who’d rather visit.
              </p>
              <p className="mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                See it live at bboutiqueclee.com. New pieces arrive regularly,
                so the rail will have moved on since these screenshots.
              </p>
            </div>
          </section>
          <section
            aria-labelledby="next-heading"
            className="mt-[50px] lg:mt-[190px]"
          >
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[1rem] font-semibold tracking-[-0.04em] lg:text-[1.25rem]">
                  Ziggloom™
                </p>
                <h2
                  id="next-heading"
                  data-reveal="mask"
                  className="mt-2 text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
                >
                  Next projects.
                </h2>
                <p className="mt-3 text-[1.25rem] font-semibold tracking-[-0.04em] lg:text-[1.875rem]">
                  (2026©)
                </p>
              </div>
              <a
                href="/portfolio"
                className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000 lg:mb-[52px]"
              >
                <span className="pill-roll" data-label="All projects">
                  <span>All projects</span>
                </span>
                <span
                  aria-hidden="true"
                  className="pill-dot size-2 rounded-full bg-ink-1000"
                />
              </a>
            </div>
            <ul className="mt-[30px] grid gap-1 md:grid-cols-2 lg:mt-[60px]">
              <li>
                <a
                  href="https://scrapeless.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj group block rounded-[18px]"
                >
                  <div className="flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6">
                    <h3 className="text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]">
                      Scrapeless.
                    </h3>
                    <span className="ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]">
                      <span className="opacity-60">/</span>2026
                    </span>
                    <span className="pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]">
                      Reference store
                    </span>
                    <span aria-hidden="true" className="flex gap-1">
                      <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
                        <span
                          className="pj-dot absolute inset-0 rounded-full"
                          style={{ background: "#fd5f59" }}
                        />
                      </span>
                      <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
                        <span
                          className="pj-dot absolute inset-0 rounded-full"
                          style={{ background: "#ffbb2c" }}
                        />
                      </span>
                      <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
                        <span
                          className="pj-dot absolute inset-0 rounded-full"
                          style={{ background: "#25c93d" }}
                        />
                      </span>
                    </span>
                  </div>
                  <span className="mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]">
                    <span className="pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900">
                      <Image
                        src="/images/work/hero/scrapeless.2026-10-29.webp"
                        alt="A car on a frosty driveway at dusk with a silver cover over its windscreen and mirrors, from the Scrapeless homepage"
                        fill={true}
                        sizes="(min-width: 768px) 48vw, 100vw"
                        quality={90}
                        className="pj-img object-cover"
                      />
                      <span
                        aria-hidden="true"
                        className="pj-shade absolute inset-0 bg-ink-0"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span
                          aria-hidden="true"
                          className="pj-logo block "
                          style={{
                            width: "34%",
                            aspectRatio: 3.774834437086093,
                            background:
                              "url(/images/work/logos/scrapeless.2026-10-29d.webp) center / contain no-repeat",
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span className="sr-only">
                    {" "}
                    A reference Shopify store, selling a magnetic windscreen
                    frost cover across the UK, on a theme the reference studio
                    designed and built.
                  </span>
                  <span className="sr-only">{" (opens in a new tab)"}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://watchclub-daydate.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj group block rounded-[18px]"
                >
                  <div className="flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6">
                    <h3 className="text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]">
                      The Watch Club.
                    </h3>
                    <span className="ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]">
                      <span className="opacity-60">/</span>2026
                    </span>
                    <span className="pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]">
                      Concept
                    </span>
                    <span aria-hidden="true" className="flex gap-1">
                      <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
                        <span
                          className="pj-dot absolute inset-0 rounded-full"
                          style={{ background: "#fd5f59" }}
                        />
                      </span>
                      <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
                        <span
                          className="pj-dot absolute inset-0 rounded-full"
                          style={{ background: "#ffbb2c" }}
                        />
                      </span>
                      <span className="relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2">
                        <span
                          className="pj-dot absolute inset-0 rounded-full"
                          style={{ background: "#25c93d" }}
                        />
                      </span>
                    </span>
                  </div>
                  <span className="mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]">
                    <span className="pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900">
                      <Image
                        src="/images/work/hero/watch-club.2026-10-28.webp"
                        alt="A steel chronograph on black silk, from The Watch Club homepage"
                        fill={true}
                        sizes="(min-width: 768px) 48vw, 100vw"
                        quality={90}
                        className="pj-img object-cover"
                      />
                      <span
                        aria-hidden="true"
                        className="pj-shade absolute inset-0 bg-ink-0"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span
                          aria-hidden="true"
                          className="pj-logo block bg-ink-1000"
                          style={{
                            width: "30%",
                            aspectRatio: 5.856980219154689,
                            mask: "url(/images/work/logos/watch-club.2026-10-27.svg) center / contain no-repeat",
                            WebkitMask:
                              "url(/images/work/logos/watch-club.2026-10-27.svg) center / contain no-repeat",
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span className="sr-only">
                    {" "}
                    A concept site for a fine and rare watch dealer in Mayfair,
                    with a 77-page catalogue.
                  </span>
                  <span className="sr-only">{" (opens in a new tab)"}</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <ContactForm site={dataAgency} founders={dataTeam} />
      </main>
      <Footer />
    </>
  );
}
