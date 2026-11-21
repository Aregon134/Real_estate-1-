import agency from "@/content/Agency.json";
import { ServiceMotionPanel } from "@/components/ServiceMotion";
import dataScenes from "@/content/Scenes.json";
export function ServicesCreativeServiceTitle() {
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
          {"Branding & ad creative."}
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
              Branding and ad creative is the logo, copy, static ads, ad videos
              and motion graphics your brand needs for its website, ads and
              social media, made in house in software from the photos, footage
              and products you provide.
              {
                " It is for brands that want ads that match their site, in every size each platform asks for, with full commercial use."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                Branding
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                ad
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                creative
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                is
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                logo,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                copy,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                static
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                ads,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                ad
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                videos
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                motion
              </span>{" "}
              <span className="rise-word" style={{ "--i": 14 }}>
                graphics
              </span>{" "}
              <span className="rise-word" style={{ "--i": 15 }}>
                your
              </span>{" "}
              <span className="rise-word" style={{ "--i": 16 }}>
                brand
              </span>{" "}
              <span className="rise-word" style={{ "--i": 17 }}>
                needs
              </span>{" "}
              <span className="rise-word" style={{ "--i": 18 }}>
                for
              </span>{" "}
              <span className="rise-word" style={{ "--i": 19 }}>
                its
              </span>{" "}
              <span className="rise-word" style={{ "--i": 20 }}>
                website,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 21 }}>
                ads
              </span>{" "}
              <span className="rise-word" style={{ "--i": 22 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 23 }}>
                social
              </span>{" "}
              <span className="rise-word" style={{ "--i": 24 }}>
                media,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 25 }}>
                made
              </span>{" "}
              <span className="rise-word" style={{ "--i": 26 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 27 }}>
                house
              </span>{" "}
              <span className="rise-word" style={{ "--i": 28 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 29 }}>
                software
              </span>{" "}
              <span className="rise-word" style={{ "--i": 30 }}>
                from
              </span>{" "}
              <span className="rise-word" style={{ "--i": 31 }}>
                the
              </span>{" "}
              <span className="rise-word" style={{ "--i": 32 }}>
                photos,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 33 }}>
                footage
              </span>{" "}
              <span className="rise-word" style={{ "--i": 34 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 35 }}>
                products
              </span>{" "}
              <span className="rise-word" style={{ "--i": 36 }}>
                you
              </span>{" "}
              <span className="rise-word" style={{ "--i": 37 }}>
                provide.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  It
                </span>{" "}
                <span className="rise-word" style={{ "--i": 39 }}>
                  is
                </span>{" "}
                <span className="rise-word" style={{ "--i": 40 }}>
                  for
                </span>{" "}
                <span className="rise-word" style={{ "--i": 41 }}>
                  brands
                </span>{" "}
                <span className="rise-word" style={{ "--i": 42 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 43 }}>
                  want
                </span>{" "}
                <span className="rise-word" style={{ "--i": 44 }}>
                  ads
                </span>{" "}
                <span className="rise-word" style={{ "--i": 45 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 46 }}>
                  match
                </span>{" "}
                <span className="rise-word" style={{ "--i": 47 }}>
                  their
                </span>{" "}
                <span className="rise-word" style={{ "--i": 48 }}>
                  site,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 49 }}>
                  in
                </span>{" "}
                <span className="rise-word" style={{ "--i": 50 }}>
                  every
                </span>{" "}
                <span className="rise-word" style={{ "--i": 51 }}>
                  size
                </span>{" "}
                <span className="rise-word" style={{ "--i": 52 }}>
                  each
                </span>{" "}
                <span className="rise-word" style={{ "--i": 53 }}>
                  platform
                </span>{" "}
                <span className="rise-word" style={{ "--i": 54 }}>
                  asks
                </span>{" "}
                <span className="rise-word" style={{ "--i": 55 }}>
                  for,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 56 }}>
                  with
                </span>{" "}
                <span className="rise-word" style={{ "--i": 57 }}>
                  full
                </span>{" "}
                <span className="rise-word" style={{ "--i": 58 }}>
                  commercial
                </span>{" "}
                <span className="rise-word" style={{ "--i": 59 }}>
                  use.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              Logos from £400, ad videos £250 each. Taxes confirmed in your
              proposal.
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
              What we make
            </h2>
            <div className="relative mt-5 overflow-hidden rounded-[14px] bg-ink-900 lg:sticky lg:top-[90px] lg:mt-[30px] lg:rounded-[18px]">
              <ServiceMotionPanel scenes={dataScenes} />
              <span className="absolute bottom-3 left-3 inline-flex h-6 items-center rounded-full bg-ink-1000/90 px-2.5 text-[0.6875rem] font-semibold tracking-[-0.02em] text-[#0a0a0a] lg:bottom-4 lg:left-4">
                Example
              </span>
            </div>
          </div>
          <div className="mt-5 min-w-0 lg:col-span-2 lg:col-start-3 lg:mt-0">
            <ol>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (01)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Ad creative sets
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    One concept delivered as a set, with several hooks, cuts and
                    ratios, made from your own product photos and footage, so
                    there is something real to test rather than one asset to
                    gamble on.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (02)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Ad creative videos
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Short ad videos made in software from the photos, footage
                    and products you provide, with hooks, captions and end
                    cards, cut for TikTok, Reels and Shorts.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (03)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Built to your brand
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Made against your palette, type and tone, so the tenth asset
                    looks like it came from the same brand as the first.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (04)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    {"Logos & brand marks"}
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Wordmarks, monograms and icon sets, drawn as proper vector
                    files with the variants a real brand needs: light, dark,
                    stacked, favicon.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (05)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    {"Motion & animated graphics"}
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Logo stings, animated banners, kinetic text and looping
                    social graphics: the moving version of the brand you already
                    have.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (06)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Whatever else you need drawn
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Menus, signage, packaging mockups, event graphics, social
                    templates, illustration. If it is a visual and you need it
                    made, ask; the answer is usually yes.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section
          aria-labelledby="steps-heading"
          className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
        >
          <h2
            id="steps-heading"
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
            How it runs
          </h2>
          <div className="min-w-0 lg:col-span-2 lg:col-start-3">
            <ol>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (01)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Brief
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Product, audience, and what the ad has to make someone do.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (02)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Direction
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Concepts and hooks agreed in writing before anything is
                    produced.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (03)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Produce
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Made from your content and checked against your brand
                    system.
                  </p>
                </div>
              </li>
              <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                  (04)
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                    Deliver
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                    Every ratio, every cut, exported and handed over ready to
                    run.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section
          aria-labelledby="included-heading"
          className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
        >
          <h2
            id="included-heading"
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
            What you get
          </h2>
          <div className="min-w-0 lg:col-span-2 lg:col-start-3">
            <ul className="grid gap-2.5">
              <li className="flex items-start gap-2.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  overflow="visible"
                  className="size-[1.1em] shrink-0 mt-[0.1em] size-[18px]! shrink-0"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M10 5.5v9M5.5 10h9"
                    stroke="var(--plus-ink, #fff)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Master files plus every ratio cut: 9:16, 4:5, 1:1, 16:9
              </li>
              <li className="flex items-start gap-2.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  overflow="visible"
                  className="size-[1.1em] shrink-0 mt-[0.1em] size-[18px]! shrink-0"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M10 5.5v9M5.5 10h9"
                    stroke="var(--plus-ink, #fff)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Platform-ready exports for Meta, TikTok and Google
              </li>
              <li className="flex items-start gap-2.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  overflow="visible"
                  className="size-[1.1em] shrink-0 mt-[0.1em] size-[18px]! shrink-0"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M10 5.5v9M5.5 10h9"
                    stroke="var(--plus-ink, #fff)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Alternate hooks and end cards for testing
              </li>
              <li className="flex items-start gap-2.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  overflow="visible"
                  className="size-[1.1em] shrink-0 mt-[0.1em] size-[18px]! shrink-0"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M10 5.5v9M5.5 10h9"
                    stroke="var(--plus-ink, #fff)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Full commercial usage. The files are yours
              </li>
              <li className="flex items-start gap-2.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  overflow="visible"
                  className="size-[1.1em] shrink-0 mt-[0.1em] size-[18px]! shrink-0"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M10 5.5v9M5.5 10h9"
                    stroke="var(--plus-ink, #fff)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Captions and on-screen text where the format needs them
              </li>
              <li className="flex items-start gap-2.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  overflow="visible"
                  className="size-[1.1em] shrink-0 mt-[0.1em] size-[18px]! shrink-0"
                >
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path
                    d="M10 5.5v9M5.5 10h9"
                    stroke="var(--plus-ink, #fff)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Logos supplied as vector: SVG, PDF and PNG, in every variant
              </li>
            </ul>
            <h3 className="mt-10 text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:mt-[60px] lg:text-[1rem]">
              Not part of the creative service
            </h3>
            <ul className="mt-4 grid gap-2.5">
              <li className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                Running your ads: Meta ads management is a separate, quoted
                service
              </li>
              <li className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                Ad spend, which you pay to Meta directly
              </li>
              <li className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                Sourcing, casting or paying influencers
              </li>
              <li className="text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                Community management: replying to comments and messages
              </li>
            </ul>
            <p className="mt-6 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
              We are the creative supplier, not the media agency. If you already
              have someone running spend, we slot in behind them. If you don't,
              we will say so.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
