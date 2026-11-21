import agency from "@/content/Agency.json";
import { ServiceMotionPanel } from "@/components/ServiceMotion";
import dataServicesShopifyScenes from "@/content/ServicesShopifyScenes.json";
export function ServicesShopifyServiceTitle() {
  return (
    <>
      <section
        aria-labelledby="service-title"
        className="bg-ink-950 px-gutter pt-[140px] text-ink-0 lg:pt-[318px]"
      >
        <h1
          id="service-title"
          data-reveal="mask"
          className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
        >
          Shopify stores.
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
            Service
          </p>
          <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
            <span className="sr-only">
              We design and build custom Shopify stores for retailers for
              independent retailers.
              {
                " A store is our Commerce build, £4,450 fixed with taxes quoted separately: a custom theme for your brand, up to 50 products loaded, and you manage products and orders yourself in Shopify."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                We
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                design
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                build
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                custom
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                Shopify
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                stores
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                as
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                a
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                Shopify
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                Partner
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                based
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                Grimsby,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 14 }}>
                for
              </span>{" "}
              <span className="rise-word" style={{ "--i": 15 }}>
                shops
              </span>{" "}
              <span className="rise-word" style={{ "--i": 16 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 17 }}>
                Lincolnshire
              </span>{" "}
              <span className="rise-word" style={{ "--i": 18 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 19 }}>
                across
              </span>{" "}
              <span className="rise-word" style={{ "--i": 20 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 21 }}>
                UK.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 22 }}>
                  A
                </span>{" "}
                <span className="rise-word" style={{ "--i": 23 }}>
                  store
                </span>{" "}
                <span className="rise-word" style={{ "--i": 24 }}>
                  is
                </span>{" "}
                <span className="rise-word" style={{ "--i": 25 }}>
                  our
                </span>{" "}
                <span className="rise-word" style={{ "--i": 26 }}>
                  Commerce
                </span>{" "}
                <span className="rise-word" style={{ "--i": 27 }}>
                  build,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 28 }}>
                  £4,450
                </span>{" "}
                <span className="rise-word" style={{ "--i": 29 }}>
                  fixed
                </span>{" "}
                <span className="rise-word" style={{ "--i": 30 }}>
                  with
                </span>{" "}
                <span className="rise-word" style={{ "--i": 31 }}>
                  no
                </span>{" "}
                <span className="rise-word" style={{ "--i": 32 }}>
                  VAT:
                </span>{" "}
                <span className="rise-word" style={{ "--i": 33 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 34 }}>
                  custom
                </span>{" "}
                <span className="rise-word" style={{ "--i": 35 }}>
                  theme
                </span>{" "}
                <span className="rise-word" style={{ "--i": 36 }}>
                  for
                </span>{" "}
                <span className="rise-word" style={{ "--i": 37 }}>
                  your
                </span>{" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  brand,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 39 }}>
                  up
                </span>{" "}
                <span className="rise-word" style={{ "--i": 40 }}>
                  to
                </span>{" "}
                <span className="rise-word" style={{ "--i": 41 }}>
                  50
                </span>{" "}
                <span className="rise-word" style={{ "--i": 42 }}>
                  products
                </span>{" "}
                <span className="rise-word" style={{ "--i": 43 }}>
                  loaded,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 44 }}>
                  and
                </span>{" "}
                <span className="rise-word" style={{ "--i": 45 }}>
                  you
                </span>{" "}
                <span className="rise-word" style={{ "--i": 46 }}>
                  manage
                </span>{" "}
                <span className="rise-word" style={{ "--i": 47 }}>
                  products
                </span>{" "}
                <span className="rise-word" style={{ "--i": 48 }}>
                  and
                </span>{" "}
                <span className="rise-word" style={{ "--i": 49 }}>
                  orders
                </span>{" "}
                <span className="rise-word" style={{ "--i": 50 }}>
                  yourself
                </span>{" "}
                <span className="rise-word" style={{ "--i": 51 }}>
                  in
                </span>{" "}
                <span className="rise-word" style={{ "--i": 52 }}>
                  Shopify.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              £4,450 fixed, agreed in writing. Taxes confirmed in your proposal.
              You pay Shopify’s own monthly plan directly.
            </p>
            <a
              href={agency.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill mt-5 inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
            >
              <span className="pill-roll" data-label="Book a call">
                <span>Book a call</span>
              </span>
              <span
                aria-hidden="true"
                className="pill-dot size-2 rounded-full bg-ink-1000"
              />
              <span className="sr-only">{" (opens in a new tab)"}</span>
            </a>
          </div>
        </div>
        <section
          aria-labelledby="service-heading"
          className="mt-[50px] grid gap-5 lg:mt-[190px] lg:grid-cols-4 lg:gap-x-1"
        >
          <div className="lg:col-span-2 lg:pr-[60px]">
            <h2
              id="service-heading"
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
              The service
            </h2>
            <div className="relative mt-5 overflow-hidden rounded-[14px] bg-ink-900 lg:sticky lg:top-[90px] lg:mt-[30px] lg:rounded-[18px]">
              <ServiceMotionPanel scenes={dataServicesShopifyScenes} />
              <span className="absolute bottom-3 left-3 inline-flex h-6 items-center rounded-full bg-ink-1000/90 px-2.5 text-[0.6875rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] lg:bottom-4 lg:left-4">
                Example
              </span>
            </div>
          </div>
          <div className="mt-5 min-w-0 lg:col-span-2 lg:col-start-3 lg:mt-0">
            <article
              aria-labelledby="shopify-title"
              className={"[&+&]:mt-[60px] lg:[&+&]:mt-[110px]"}
            >
              <h3
                id="shopify-title"
                className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]"
              >
                {"Shopify Store Design & Build"}
              </h3>
              <p className="mt-4 indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                A custom Shopify store, designed for your brand and built for
                speed.
              </p>
              <p className="mt-6 max-w-[600px] lg:mt-[30px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                We design a custom Shopify theme around your brand and your
                products, not a bought template with your logo on it. Shopify
                looks after hosting, security and checkout, so the store does
                not need our Care plan, and you manage your products, stock and
                orders yourself, with training at handover. Every store is
                tested on Google’s own speed test before launch, and old links
                are redirected if you are moving from another platform.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Custom Shopify theme for your brand
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Up to 15 pages and 50 products loaded
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Conversion-focused product pages
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Payments and order emails
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Abandoned-basket reminders
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (06)
                    </span>
                    <div>
                      <p className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                        Edit products and pages yourself in Shopify
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}
