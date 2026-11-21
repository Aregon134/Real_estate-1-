import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { HowWeWorkHowTitle } from "@/sections/HowWeWorkHowTitle";
import { HowWeWorkPricing } from "@/sections/HowWeWorkPricing";
import dataAgency from "@/content/Agency.json";

import dataNavigation from "@/content/Navigation.json";
import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "How We Design & Build Websites | Ziggloom",
  description:
    "How a website project with Ziggloom runs: the steps, 40/30/30 payments, plans, changes, ownership and what happens after launch.",
};
export default function Page() {
  return (
    <>
      <HeaderBar
        nav={dataNavigation}
        site={dataAgency}
        projectCount={1}
        brandMark="™"
      />
      <main id="main" className="v3 flex-1">
        <HowWeWorkHowTitle />
        <HowWeWorkPricing />
        <div className="flow-root bg-ink-950 px-gutter text-ink-0">
          <section
            aria-labelledby="after-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="after-heading"
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
              After launch
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Before we start, you choose.{" "}
                <span className="text-ink-0/60">
                  A monthly plan that looks after everything, or a handover so
                  you can run it yourself.
                </span>
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Need something specific?
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        A plan scoped to you
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        If your business needs something these plans don’t
                        cover, we’ll scope a monthly plan around it, with its
                        own deliverables, fee and terms agreed in writing.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Prefer to do it yourself?
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        The handover
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        You get the code files and a written setup guide. Your
                        scope sets out training, repositories, domains, hosting
                        and access. We can set it up on your own hosting at ₹850
                        an hour, with your domain and hosting in your name.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Need a hand later?
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Hourly rates
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        ₹500 an hour on a plan, beyond what’s included. ₹850 an
                        hour without one, one-hour minimum. Quick jobs on
                        single-page sites: ₹425 for up to 30 minutes.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <p className="mt-6 max-w-[600px] text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                Not included on any plan: ad spend or ad management, new pages,
                new features or design changes. We price those separately.
                Growth and Scale have a 3-month minimum, because search results
                take time to show.
              </p>
              <a
                href="/pricing#plans"
                className="pill mt-6 inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
              >
                <span className="pill-roll" data-label="Every plan in full">
                  <span>Every plan in full</span>
                </span>
                <span
                  aria-hidden="true"
                  className="pill-dot size-2 rounded-full bg-ink-1000"
                />
              </a>
            </div>
          </section>
          <section
            aria-labelledby="changes-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="changes-heading"
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
              Changes, done right
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                {"Changes are part of every build. "}
                <span className="text-ink-0/60">
                  Here’s how we keep them clear and fair.
                </span>
              </p>
              <div className="mt-10 grid gap-1 lg:mt-[60px]">
                <div className="rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]">
                  <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                    A revision round
                  </p>
                  <h3 className="mt-1.5 text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    One list, one go
                  </h3>
                  <div className="mt-5 border-t border-ink-0/10 pt-5 lg:mt-6 lg:pt-6">
                    <ul className="grid gap-3">
                      <li className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          overflow="visible"
                          className="size-[1.1em] shrink-0 mt-[0.15em] size-4!"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M10 5.5v9M5.5 10h9"
                            stroke="var(--plus-ink, #fff)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>
                          <span className="text-ink-0">Rounds by option:</span>
                          {
                            " one on a single page and on Essential, two on Signature, three on Commerce. Your scope sets the stages they cover."
                          }
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          overflow="visible"
                          className="size-[1.1em] shrink-0 mt-[0.15em] size-4!"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M10 5.5v9M5.5 10h9"
                            stroke="var(--plus-ink, #fff)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>
                          <span className="text-ink-0">One round</span>
                          {
                            " is one consolidated set of notes, then our response and changes."
                          }
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          overflow="visible"
                          className="size-[1.1em] shrink-0 mt-[0.15em] size-4!"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M10 5.5v9M5.5 10h9"
                            stroke="var(--plus-ink, #fff)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>
                          <span className="text-ink-0">Rounds refine</span>
                          {
                            " the agreed work. Our mistakes and defects never use your allowance."
                          }
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]">
                  <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                    A scope change
                  </p>
                  <h3 className="mt-1.5 text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Something new
                  </h3>
                  <div className="mt-5 border-t border-ink-0/10 pt-5 lg:mt-6 lg:pt-6">
                    <ul className="grid gap-3">
                      <li className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          overflow="visible"
                          className="size-[1.1em] shrink-0 mt-[0.15em] size-4!"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M10 5.5v9M5.5 10h9"
                            stroke="var(--plus-ink, #fff)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>
                          <span className="text-ink-0">
                            New pages, features
                          </span>
                          , replacement concepts or changes to approved work may
                          need a separate quote.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          overflow="visible"
                          className="size-[1.1em] shrink-0 mt-[0.15em] size-4!"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M10 5.5v9M5.5 10h9"
                            stroke="var(--plus-ink, #fff)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>
                          <span className="text-ink-0">Before we start</span>,
                          we confirm what changes, the fee, payment timing and
                          any effect on dates.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          overflow="visible"
                          className="size-[1.1em] shrink-0 mt-[0.15em] size-4!"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M10 5.5v9M5.5 10h9"
                            stroke="var(--plus-ink, #fff)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>
                          <span className="text-ink-0">You choose:</span>
                          {
                            " approve it, swap something out, save it for later, or keep the original scope. Nothing extra happens without your written approval."
                          }
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1rem]">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          overflow="visible"
                          className="size-[1.1em] shrink-0 mt-[0.15em] size-4!"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M10 5.5v9M5.5 10h9"
                            stroke="var(--plus-ink, #fff)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>
                          <span className="text-ink-0">
                            Extra work is invoiced
                          </span>
                          {
                            " on top of your project fee, including extra pages, new features and changes beyond your included rounds, at the price and payment time you approved."
                          }
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            aria-labelledby="small-print-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="small-print-heading"
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
              The small print, simply
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                The everyday details that keep every project clear.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Third-party costs
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Paid by you, in your name
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        Some services are needed just for your website to run,
                        like your domain, Shopify’s monthly plan, paid apps,
                        stock photos or fonts. You pay the provider directly,
                        usually monthly, and they’re set up in your name. We
                        don’t cover them, and we’ll always tell you before
                        adding one.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        After launch
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        15 days of free fixes
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        We fix any defects you report within 15 days of launch,
                        free. New content, features and changes are separate.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Staying in touch
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Replies within 1 working day
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        We reply to messages within 1 working day and send a
                        progress update every week. A reply isn’t always a
                        finished change, but you’ll always know where things
                        stand.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Need it sooner?
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Rush jobs
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        We’ll check our availability and confirm any rush fee
                        before you commit. We never skip essential checks to hit
                        a date.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Your content
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Yours to use
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        You confirm the text, photos, logos and other material
                        you send us are accurate and that you have the right to
                        use them.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (06)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Quotes
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Valid for 3 months
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        Every quote is valid for 3 months from the date we send
                        it. After that, we’ll confirm the price again before you
                        book.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <section
            aria-labelledby="yours-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="yours-heading"
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
              Yours, and worth sharing
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                What you own, how we share your project, and how you can earn by
                sending friends our way.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Ownership
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Your original work
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        Ownership of the agreed original work transfers to you
                        after final payment, as set out in your agreement.
                        Third-party fonts, software and stock keep their own
                        licence terms.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Your property
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Always yours
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        Anything you owned before the project, from your logo to
                        your accounts, stays yours and is never held back.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Portfolio and feedback
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Showing your project
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        Your agreement gives us the right to show your project
                        on our website, portfolio and social media. Once you’re
                        live, we’ll ask for a short written testimonial and a
                        review on our Google Business Profile.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Referrals
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        10%
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        of the project fee for every business you refer that
                        books with us. No limit. Just tell us who’s coming
                        before they get in touch.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <section
            aria-labelledby="moving-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 mt-[50px] lg:mt-[190px]"
          >
            <h2
              id="moving-heading"
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
              Keeping things moving
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.875rem]">
                Rarely needed, but clear, so nobody is left guessing.
              </p>
              <div className="mt-10 lg:mt-[60px]">
                <ol>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (01)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Late content or feedback
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Work pauses
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        If content, access, feedback or approval is late, we
                        pause work and it moves to our next available slot. We
                        send reminders and explain the impact. Silence never
                        counts as approval.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (02)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Gone quiet
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Project on hold
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        After 30 calendar days without a required response, we
                        may place the project on hold by written notice. Nothing
                        is approved automatically. We restart when you’re ready,
                        subject to our availability, confirm the new dates, and
                        never charge an unexplained restart fee.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (03)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Late payment
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Work pauses
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        If a milestone payment is overdue, we pause work after
                        letting you know, and pick it back up once it’s paid.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (04)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Postponing or cancelling
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        Settled clearly
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        Need to postpone launch? Tell us early and we’ll agree
                        revised arrangements in writing. If you cancel a build,
                        the deposit is kept and any completed stages are paid
                        for.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-2 border-t border-ink-0/10 py-6 first:border-t-0 first:pt-0 lg:grid-cols-[3.5rem_1fr] lg:py-[30px]">
                    <span className="text-[0.75rem] font-medium tabular-nums tracking-[-0.04em] text-ink-0/60 lg:pt-1.5">
                      (05)
                    </span>
                    <div>
                      <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                        Cancelling a plan
                      </p>
                      <h3 className="mt-1.5 text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                        30 days’ notice
                      </h3>
                      <p className="mt-2.5 max-w-[600px] text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[1.125rem] lg:leading-[1.3]">
                        After any minimum term: 3 months on Growth and Scale, 12
                        months on systems, and on AI add-ons taken on a 12-month
                        agreement.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <div className="mt-[50px] grid border-t border-ink-0/10 py-8 lg:mt-[190px] lg:grid-cols-4 lg:gap-x-1 lg:py-10">
            <p className="lg:col-span-2 lg:col-start-3 text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
              How We Work, version Studio notes. Your project scope and
              agreement set out the full terms for your project.
            </p>
          </div>
        </div>
        <ContactForm site={dataAgency} founders={dataTeam} />
      </main>
      <Footer />
    </>
  );
}
