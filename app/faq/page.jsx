import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import dataAgency from "@/content/Agency.json";

import dataNavigation from "@/content/Navigation.json";
import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "Web Design & SEO Questions Answered | Ziggloom",
  description:
    "Straight answers on web design in India: timelines, ownership, handover, monthly plans, SEO and what we need from you before a build starts.",
};
export default function Page() {
  return (
    <>
      <HeaderBar nav={dataNavigation} site={dataAgency} brandMark="™" />
      <main id="main" className="v3 flex-1">
        <div className="flow-root bg-ink-950 px-gutter pt-[140px] text-ink-0 lg:pt-[318px]">
          <h1
            id="faq-title"
            data-reveal="mask"
            className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
          >
            FAQ.
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
              Questions
            </p>
            <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
              <span className="sr-only">
                The questions that decide whether someone works with us,
                answered before you have to ask.
                {
                  " If yours isn’t here, ask us directly and you’ll get the same kind of answer."
                }
              </span>
              <span aria-hidden="true">
                <span className="rise-word" style={{ "--i": 0 }}>
                  The
                </span>{" "}
                <span className="rise-word" style={{ "--i": 1 }}>
                  questions
                </span>{" "}
                <span className="rise-word" style={{ "--i": 2 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 3 }}>
                  decide
                </span>{" "}
                <span className="rise-word" style={{ "--i": 4 }}>
                  whether
                </span>{" "}
                <span className="rise-word" style={{ "--i": 5 }}>
                  someone
                </span>{" "}
                <span className="rise-word" style={{ "--i": 6 }}>
                  works
                </span>{" "}
                <span className="rise-word" style={{ "--i": 7 }}>
                  with
                </span>{" "}
                <span className="rise-word" style={{ "--i": 8 }}>
                  us,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 9 }}>
                  answered
                </span>{" "}
                <span className="rise-word" style={{ "--i": 10 }}>
                  before
                </span>{" "}
                <span className="rise-word" style={{ "--i": 11 }}>
                  you
                </span>{" "}
                <span className="rise-word" style={{ "--i": 12 }}>
                  have
                </span>{" "}
                <span className="rise-word" style={{ "--i": 13 }}>
                  to
                </span>{" "}
                <span className="rise-word" style={{ "--i": 14 }}>
                  ask.
                </span>
                <span className="text-ink-0/60">
                  {" "}
                  <span className="rise-word" style={{ "--i": 15 }}>
                    If
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 16 }}>
                    yours
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 17 }}>
                    isn’t
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 18 }}>
                    here,
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 19 }}>
                    ask
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 20 }}>
                    us
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 21 }}>
                    directly
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 22 }}>
                    and
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 23 }}>
                    you’ll
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 24 }}>
                    get
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 25 }}>
                    the
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 26 }}>
                    same
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 27 }}>
                    kind
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 28 }}>
                    of
                  </span>{" "}
                  <span className="rise-word" style={{ "--i": 29 }}>
                    answer.
                  </span>
                </span>
              </span>
            </p>
            <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
              <ul className="grid gap-1.5">
                <li>
                  <a
                    href="#building"
                    className="text-ink-0 underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0"
                  >
                    Your website
                  </a>{" "}
                  ({14})
                </li>
                <li>
                  <a
                    href="#owning"
                    className="text-ink-0 underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0"
                  >
                    Owning it
                  </a>{" "}
                  ({6})
                </li>
                <li>
                  <a
                    href="#more"
                    className="text-ink-0 underline decoration-ink-0/25 underline-offset-[4px] transition-colors duration-200 hover:decoration-ink-0"
                  >
                    AI, search and creative
                  </a>{" "}
                  ({13})
                </li>
              </ul>
            </div>
          </div>
          <section
            id="building"
            aria-labelledby="building-heading"
            className="mt-[50px] scroll-mt-24 lg:mt-[190px]"
          >
            <div className="grid gap-[30px] lg:grid-cols-4 lg:gap-x-1">
              <div className="lg:sticky lg:top-[100px] lg:col-span-2 lg:self-start lg:pr-[60px]">
                <p className="flex items-center gap-1.5 text-[0.8125rem] font-medium tracking-[-0.04em] lg:gap-[9px] lg:text-[1rem]">
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
                  Your website
                </p>
                <h2
                  id="building-heading"
                  className="mt-5 max-w-[560px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:mt-[30px] lg:text-[3.125rem]"
                >
                  Building your website.{" "}
                  <span className="text-ink-0/60">
                    How long it takes, what we need from you, and what it’s
                    built on.
                  </span>
                </h2>
                <ul className="mt-6 flex flex-wrap gap-1.5 lg:mt-[30px]">
                  <li>
                    <a
                      href="/services/web-design"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span
                        className="pill-roll"
                        data-label="Web design and build"
                      >
                        <span>Web design and build</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/shopify"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span className="pill-roll" data-label="Shopify stores">
                        <span>Shopify stores</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span className="pill-roll" data-label="Every price">
                        <span>Every price</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="grid content-start gap-1 lg:col-span-2">
                <li>
                  <details
                    name="faq-building"
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
                        It depends on what you need. A single page is quick:
                        usually live in 1 to 2 working days. For anything
                        bigger, we agree the timeline in your scope before we
                        start, based on the pages, features and content
                        involved. As a guide, Essential typically takes 5
                        working days, Signature 10 and Commerce about 2 weeks,
                        counted from your start date once we have your content.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-building"
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
                    name="faq-building"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        I don’t have a logo or branding.
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
                        We can create one: Logo ₹4,000, Brand Starter ₹7,500,
                        Full Brand Kit ₹15,000.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-building"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Do you build custom websites or use templates?
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
                        Custom, never templates. Signature and Commerce sites
                        are designed from scratch for your brand. Essential and
                        single-page sites are designed for your brand too, just
                        simpler, with fewer pages and sections, which is how
                        they cost less. None of them are WordPress, Wix or
                        Squarespace themes: websites are custom-built in our own
                        code, and most online shops are built on Shopify with a
                        custom design.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details
                    name="faq-building"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Do you build on Shopify?
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
                        Yes, for online shops. We design a custom Shopify store
                        for your brand, built for speed, and you manage your
                        products and orders yourself. Shopify looks after
                        hosting and security, so you won’t need our Care plan;
                        our Growth plan grows your sales with SEO, product
                        content and email campaigns. You pay Shopify’s own
                        monthly plan directly.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-building"
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
                        Book a free 15-minute call, send us a message with the
                        form, or email us. We reply within 1 working day, talk
                        it through, then send the scope and a fixed price in
                        writing. Nothing starts until you’re happy with it and
                        the 40% deposit has cleared.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-building"
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
                        A few lines on your business and what you want the
                        website to do, roughly which pages or features you need,
                        whether your logo, photos and text are ready, your
                        current website if you have one, a few sites you like,
                        your timeframe and a rough budget. The contact form asks
                        for all of it.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-building"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Can you redesign my existing website?
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
                        Yes. We redesign it as a new custom site, built in our
                        own code or on Shopify for a shop, keep the content that
                        works, and redirect your old links so you hold on to
                        your rankings. It’s priced like any build, from the
                        options on our pricing page, or scoped and quoted if
                        it’s larger. If your current site is custom-built or on
                        Shopify and only needs a refresh, we’ll quote for that
                        instead.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details
                    name="faq-building"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Can you move my site from Wix, Squarespace or WordPress?
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
                        Yes. We rebuild it in our own code, or on Shopify for an
                        online shop, move your content across and redirect your
                        old links so visitors can find the new pages. A move is
                        scoped and quoted at a fixed price before we start,
                        based on how many pages or products there are, what has
                        to come across and anything it connects to.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-building"
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
                    name="faq-building"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        How are taxes shown?
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
                        Your proposal lists the project fee and any applicable
                        taxes before you approve it.
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </section>
          <section
            id="owning"
            aria-labelledby="owning-heading"
            className="mt-[50px] scroll-mt-24 lg:mt-[190px]"
          >
            <div className="grid gap-[30px] lg:grid-cols-4 lg:gap-x-1">
              <div className="lg:sticky lg:top-[100px] lg:col-span-2 lg:self-start lg:pr-[60px]">
                <p className="flex items-center gap-1.5 text-[0.8125rem] font-medium tracking-[-0.04em] lg:gap-[9px] lg:text-[1rem]">
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
                  Owning it
                </p>
                <h2
                  id="owning-heading"
                  className="mt-5 max-w-[560px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:mt-[30px] lg:text-[3.125rem]"
                >
                  Owning and running it.{" "}
                  <span className="text-ink-0/60">
                    Editing, ownership, the monthly plans, and where we work.
                  </span>
                </h2>
                <ul className="mt-6 flex flex-wrap gap-1.5 lg:mt-[30px]">
                  <li>
                    <a
                      href="/services/hosting-care"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span className="pill-roll" data-label="Hosting and care">
                        <span>Hosting and care</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-we-work"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span className="pill-roll" data-label="How we work">
                        <span>How we work</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="grid content-start gap-1 lg:col-span-2">
                <li>
                  <details
                    name="faq-owning"
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
                        Yes, on Signature and Commerce: you change your own
                        words and images in a simple editor (or in Shopify for
                        online shops), with training at handover. On Essential
                        we make changes for you through a monthly plan or at our
                        hourly rate, or you can add editing for ₹6,500 before
                        the build or ₹8,500 after. Single-page sites don’t
                        include editing.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-owning"
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
                        Yes. Ownership of the agreed original work transfers to
                        you after final payment. Third-party fonts, software and
                        stock keep their own licences, and anything you owned
                        before the project stays yours and is never held back.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-owning"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Do you work outside India?
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
                        Yes. Kushagra works remotely from Himachal Pradesh,
                        India. Everything can be done online, and we’re always
                        happy to meet local businesses in person.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-owning"
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
                        that books with us. That’s ₹3,000 on a Signature
                        website, and there’s no limit. Just tell us who’s coming
                        before they get in touch.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-owning"
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
                        everything behind them: hosting, security updates,
                        tested backups, renewing your domain and security
                        certificate before they lapse, and fixing anything that
                        breaks. It also covers the invisible details that keep
                        you ranking, like image sizes, headings and page
                        addresses, which are easy to get wrong when editing
                        yourself. On Growth, we keep you climbing with fresh
                        content and SEO, GEO and AEO every month.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-owning"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Who hosts it, and what happens if it breaks?
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
                        We do, on every monthly plan: hosting, your security
                        certificate, backups, updates and monitoring are
                        included. If your site goes down, it is fixed within 1
                        working day. Prefer to look after it yourself? Choose a
                        handover before the build starts, and you get the code
                        files and a written setup guide.
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </section>
          <section
            id="more"
            aria-labelledby="more-heading"
            className="mt-[50px] scroll-mt-24 lg:mt-[190px]"
          >
            <div className="grid gap-[30px] lg:grid-cols-4 lg:gap-x-1">
              <div className="lg:sticky lg:top-[100px] lg:col-span-2 lg:self-start lg:pr-[60px]">
                <p className="flex items-center gap-1.5 text-[0.8125rem] font-medium tracking-[-0.04em] lg:gap-[9px] lg:text-[1rem]">
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
                  AI, search and creative
                </p>
                <h2
                  id="more-heading"
                  className="mt-5 max-w-[560px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:mt-[30px] lg:text-[3.125rem]"
                >
                  AI, search and creative.{" "}
                  <span className="text-ink-0/60">
                    The AI systems, getting found on Google and in AI answers,
                    and the content we make.
                  </span>
                </h2>
                <ul className="mt-6 flex flex-wrap gap-1.5 lg:mt-[30px]">
                  <li>
                    <a
                      href="/ai"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span className="pill-roll" data-label="AI automation">
                        <span>AI automation</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/seo"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span className="pill-roll" data-label="SEO and GEO">
                        <span>SEO and GEO</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/creative"
                      className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
                    >
                      <span
                        className="pill-roll"
                        data-label="Branding and ad creative"
                      >
                        <span>Branding and ad creative</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pill-dot size-2 rounded-full bg-ink-1000"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="grid content-start gap-1 lg:col-span-2">
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        What can you automate in my business?
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
                        The repetitive jobs that take your time or let leads go
                        cold: follow-ups, quoting, bookings and handovers;
                        confirmations, reminders and review requests by
                        WhatsApp, text and email; an instant text or call-back
                        the moment someone enquires; and a CRM that keeps every
                        customer, booking and sale in one place, with your
                        numbers at a glance. We look at how your business runs
                        first, and only build what saves you more than it costs.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        How is automation priced?
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
                        Every system is scoped to your business: we look at how
                        it runs on a short call, then price it in writing before
                        we start. Systems run on a 12-month agreement.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Do you do SEO and Google Business Profiles?
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
                        Yes. Every build includes SEO set up and Google Business
                        Profile set up. After launch, the Local plan (₹2,950 a
                        month) posts to your Google Business Profile every week,
                        asks customers for reviews automatically and keeps your
                        local listings tidy; Growth (₹4,500 a month) adds active
                        SEO, GEO and AEO, with new blog posts every month.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        What do I get with email and SMS marketing?
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
                        On Growth (₹4,500 a month), two email campaigns a month,
                        written, designed and sent to your list. Scale (₹9,500 a
                        month) adds automated welcome, birthday, win-back and
                        after-visit emails and texts, abandoned-basket and
                        launch messages on Shopify, and four extra emails or
                        texts a month, with 2,000 texts included.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Will the emails match my website?
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
                        Yes. Campaigns and automated messages are designed to
                        match your website, so a customer sees one brand whether
                        they are on your site, in their inbox or reading a text.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Can I email and text customers who haven't signed up?
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
                        Use a list of people who agreed to hear from your
                        business. We’ll review how you collect permission and
                        how recipients can opt out before a campaign goes live.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        What does the AI Website Assistant cost to run?
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
                        Pricing is custom. The running cost depends on the
                        model’s API rates and how many input and output tokens
                        your conversations use. We estimate usage and quote the
                        integration before you commit.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        What is an AI receptionist?
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
                        An AI receptionist answers your missed and out-of-hours
                        calls in a natural voice, using your own services,
                        prices, opening hours and common questions. It takes the
                        enquiry and passes it straight to you, and if you use a
                        booking system or calendar, it books the customer in.
                        Ours is ₹3,490 a month on a 12-month agreement, with the
                        setup waived on that commitment.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        How much does an AI receptionist cost?
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
                        ₹3,490 a month, or ₹2,990 a month on the Scale plan. On
                        a 12-month agreement there is no setup fee; month to
                        month, with 30 days’ notice, there is a one-time ₹4,950
                        setup. On its own it includes 600 minutes of calls a
                        month, then ₹2.50 a minute; on Scale, calls are covered
                        up to 1,500 minutes a month on a fair-use basis.
                        Always-on answering and additional sites are quoted
                        separately.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Can the voice receptionist really answer my phone?
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
                        Yes. It answers your missed and out-of-hours calls in a
                        natural, friendly voice, tailored to your business: your
                        services, prices, opening hours, location and the
                        questions your customers usually ask. It takes enquiries
                        and passes them straight to you, and if you have a
                        booking system or calendar, it books customers in
                        automatically.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        What is GEO, and do I need it?
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
                        GEO is structuring your site so AI tools like ChatGPT
                        and Google’s AI Overviews understand you and recommend
                        you. It is a different job to classic SEO: clean
                        structure, machine-readable data, and content written to
                        be quoted. Signature builds for it, and Commerce
                        includes it. Keeping it working as the engines change is
                        part of the Growth and Scale plans, with active SEO, GEO
                        and AEO every month.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Do you run Meta ads?
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
                        Yes. We set up and manage Meta ads (Facebook and
                        Instagram) as a separate service, quoted for your
                        business, and we can make the creative for them too. You
                        pay the ad spend directly to Meta, so you always see
                        where it goes. It isn’t part of the monthly plans.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details
                    name="faq-more"
                    className="faq-item group rounded-[14px] bg-ink-1000"
                  >
                    <summary
                      className={
                        "flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 lg:min-h-[75px] lg:px-[26px] [&::-webkit-details-marker]:hidden"
                      }
                    >
                      <h3 className="text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                        Can you make ad creatives as well as the website?
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
                        Yes, made in house in software from the photos, footage
                        and products you provide: ad creative videos at ₹2,500
                        each. We don't do photo shoots or filming. Most pieces
                        are delivered one to two working days from approved
                        direction, with full copyright on final payment. Running
                        the ads is separate: we manage Meta ads as its own
                        quoted service, and you pay the ad spend directly.
                      </p>
                    </div>
                  </details>
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
