import agency from "@/content/Agency.json";
import { AiAiFaq } from "@/sections/AiAiFaq";
import { AiAiTitle } from "@/sections/AiAiTitle";
import { AiCost } from "@/sections/AiCost";
import { AiDemo } from "@/sections/AiDemo";
import { BusinessPicker } from "@/components/BusinessPicker";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import dataAgency from "@/content/Agency.json";

import dataItems from "@/content/Items.json";
import dataNavigation from "@/content/Navigation.json";
import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "AI Automation Agency in India | Ziggloom",
  description:
    "AI receptionists, speed-to-lead, CRMs, reviews and admin automation for businesses in India and online. Book a free automation audit.",
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
        <AiAiTitle />
        <AiCost />
        <div className="flow-root bg-ink-950 px-gutter text-ink-0">
          <section
            id="systems"
            aria-labelledby="systems-heading"
            className="mt-[50px] scroll-mt-24 lg:mt-[190px]"
          >
            <div className="grid gap-5 lg:grid-cols-4 lg:gap-x-1">
              <p className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-2 lg:gap-[9px] lg:text-[1rem]">
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
                Seven systems
              </p>
              <h2
                id="systems-heading"
                className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]"
              >
                Seven systems, one less job each.{" "}
                <span className="text-ink-0/60">
                  Start with the one that fixes your biggest leak.
                </span>
              </h2>
            </div>
            <ul className="mt-9 grid gap-1 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
              <li
                id="system-receptionist"
                className="flex scroll-mt-24 flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Your phone line
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    01
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    AI Voice Receptionist
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Calls ring out after hours and when the team is busy, and
                    most callers never ring back.
                  </p>
                </div>
                <div className="mt-auto border-t border-ink-0/10 pt-5">
                  <p className="text-[0.875rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[0.9375rem]">
                    Picks up when nobody else does and has a real conversation
                    about your business: it answers questions, books the caller
                    in, confirms by text and email, and texts you a summary.
                  </p>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Every caller gets an answer, and reminders let people cancel
                    in time, so the slot can be rebooked instead of lost to a
                    no-show.
                  </p>
                </div>
              </li>
              <li
                id="system-speed-to-lead"
                className="flex scroll-mt-24 flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    {"Forms, ads & missed calls"}
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    02
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Speed-to-lead
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Leads go cold while they wait hours for a reply, and the
                    fastest competitor wins the job.
                  </p>
                </div>
                <div className="mt-auto border-t border-ink-0/10 pt-5">
                  <p className="text-[0.875rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[0.9375rem]">
                    Replies to every new enquiry within a minute by text or
                    email, asks the qualifying questions and books them straight
                    into your diary.
                  </p>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    You talk to warm, qualified leads instead of chasing cold
                    ones.
                  </p>
                </div>
              </li>
              <li
                id="system-chatbot"
                className="flex scroll-mt-24 flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Your website
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    03
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    AI Website Assistant
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Visitors with a quick question leave rather than fill in a
                    form.
                  </p>
                </div>
                <div className="mt-auto border-t border-ink-0/10 pt-5">
                  <p className="text-[0.875rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[0.9375rem]">
                    A chat assistant trained on your business answers them on
                    the spot and sends every enquiry to your inbox or CRM.
                  </p>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    More of your existing traffic turns into enquiries.
                  </p>
                </div>
              </li>
              <li
                id="system-crm"
                className="flex scroll-mt-24 flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Behind the scenes
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    04
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    {"CRM & Pipeline"}
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Leads and customers live across inboxes, spreadsheets and
                    sticky notes, so follow-ups slip.
                  </p>
                </div>
                <div className="mt-auto border-t border-ink-0/10 pt-5">
                  <p className="text-[0.875rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[0.9375rem]">
                    Every lead, booking and customer in one place: the CRM you
                    already use, set up properly and optimised, or one built
                    around how you work. Follow-ups send themselves, and your
                    numbers sit on one dashboard.
                  </p>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Nothing falls through the cracks. Pair it with speed-to-lead
                    or the voice receptionist, and every enquiry and call lands
                    in it on its own.
                  </p>
                </div>
              </li>
              <li
                id="system-reviews"
                className="flex scroll-mt-24 flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    After every job
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    05
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Review Engine
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Happy customers rarely leave a review unless someone asks at
                    the right moment.
                  </p>
                </div>
                <div className="mt-auto border-t border-ink-0/10 pt-5">
                  <p className="text-[0.875rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[0.9375rem]">
                    Asks every customer for a Google review at the right time,
                    and drafts replies to the reviews you get.
                  </p>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    A steady flow of fresh reviews that helps you get found.
                  </p>
                </div>
              </li>
              <li
                id="system-win-back"
                className="flex scroll-mt-24 flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Your customer list
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    06
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Win-back Campaigns
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Past customers forget you exist, and the list you already
                    paid to build sits unused.
                  </p>
                </div>
                <div className="mt-auto border-t border-ink-0/10 pt-5">
                  <p className="text-[0.875rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[0.9375rem]">
                    Spots customers who have gone quiet and brings them back
                    with timed text and email offers.
                  </p>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Repeat business from people who already know and trust you.
                  </p>
                </div>
              </li>
              <li
                id="system-admin"
                className="flex scroll-mt-24 flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Your office
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[0.625rem] font-semibold tracking-[-0.04em] text-ink-0/60"
                  >
                    07
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    {"Quote & Admin Automation"}
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Hours every week go on quotes, chasing invoices and copying
                    details between systems.
                  </p>
                </div>
                <div className="mt-auto border-t border-ink-0/10 pt-5">
                  <p className="text-[0.875rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[0.9375rem]">
                    Turns enquiries into draft quotes, chases unpaid invoices
                    and moves data between your tools automatically.
                  </p>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Your team gets those hours back for work that earns.
                  </p>
                </div>
              </li>
              <li className="flex flex-col justify-between gap-6 rounded-[14px] bg-[#0a0a0a] p-6 text-ink-1000 sm:col-span-2 lg:col-span-2 lg:rounded-[18px] lg:p-[30px]">
                <div>
                  <p className="text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Not sure where to start?
                  </p>
                  <p className="mt-2 max-w-[24ch] text-[1.5rem] font-medium leading-[1.15] tracking-[-0.04em] lg:text-[2rem]">
                    The free audit finds your biggest leak first.
                  </p>
                  <p className="mt-3 max-w-[48ch] text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    One call. We rank where enquiries and hours slip away, and
                    tell you which system pays back first.
                  </p>
                </div>
                <a
                  href={agency.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-1000 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-[#0a0a0a] "
                >
                  <span className="pill-roll" data-label="Book a free audit">
                    <span>Book a free audit</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pill-dot size-2 rounded-full bg-[#0a0a0a]"
                  />
                  <span className="sr-only">{" (opens in a new tab)"}</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <AiDemo />
        <div className="flow-root bg-ink-950 px-gutter text-ink-0">
          <section
            id="who"
            aria-labelledby="sectors-heading"
            className="mt-[50px] scroll-mt-24 lg:mt-[190px]"
          >
            <div className="grid gap-5 lg:grid-cols-4 lg:gap-x-1">
              <p className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-2 lg:gap-[9px] lg:text-[1rem]">
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
                Who it’s for
              </p>
              <h2
                id="sectors-heading"
                className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]"
              >
                Your problem, and the system that fixes it.{" "}
                <span className="text-ink-0/60">Choose your business.</span>
              </h2>
            </div>
            <div className="mt-9 lg:mt-20">
              <BusinessPicker bookingUrl="/book/" items={dataItems} />
            </div>
          </section>
          <section
            id="process"
            aria-labelledby="process-heading"
            className="mt-[50px] scroll-mt-24 lg:mt-[190px]"
          >
            <div className="grid gap-5 lg:grid-cols-4 lg:gap-x-1">
              <p className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-2 lg:gap-[9px] lg:text-[1rem]">
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
              </p>
              <h2
                id="process-heading"
                className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]"
              >
                From audit to autopilot.{" "}
                <span className="text-ink-0/60">
                  Four steps, and you only need to be in the first one for long.
                </span>
              </h2>
            </div>
            <ol
              data-reveal="lift"
              className="mt-9 grid gap-1 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
            >
              <li
                className="flex flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
                style={{ "--c": 0 }}
              >
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className="flex gap-[3px]">
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-[#e7e7e7]" />
                    <span className="size-2 rounded-full bg-[#e7e7e7]" />
                    <span className="size-2 rounded-full bg-[#e7e7e7]" />
                  </span>
                  <span className="text-[0.625rem] font-semibold tabular-nums tracking-[-0.04em] text-ink-0/60">
                    01
                  </span>
                </div>
                <div className="rounded-[10px] bg-ink-950 px-4 py-3">
                  <div
                    aria-hidden="true"
                    className="flex h-[120px] flex-col justify-center"
                  >
                    <div className="grid gap-[7px]">
                      <p className="flex items-center justify-between text-[0.625rem] font-medium tracking-[-0.02em] text-ink-0/60">
                        <span>Example audit</span>
                        <span>Leak size</span>
                      </p>
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[0.6875rem] font-medium leading-none tracking-[-0.03em]">
                          <span className="">Calls missed after 5pm</span>
                          <span
                            className="viz-pop rounded-full bg-ink-0 px-1.5 py-[3px] text-[0.5625rem] text-ink-1000"
                            style={{ "--i": 5 }}
                          >
                            Fix first
                          </span>
                        </div>
                        <div className="mt-[5px] h-[5px] overflow-hidden rounded-full bg-ink-0/[0.07]">
                          <div
                            className="viz-bar h-full rounded-full bg-ink-0"
                            style={{ "--i": 0, width: "92%", opacity: 1 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[0.6875rem] font-medium leading-none tracking-[-0.03em]">
                          <span className="text-ink-0/60">
                            Enquiries left overnight
                          </span>
                        </div>
                        <div className="mt-[5px] h-[5px] overflow-hidden rounded-full bg-ink-0/[0.07]">
                          <div
                            className="viz-bar h-full rounded-full bg-ink-0"
                            style={{ "--i": 1, width: "74%", opacity: 0.35 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[0.6875rem] font-medium leading-none tracking-[-0.03em]">
                          <span className="text-ink-0/60">
                            Quotes typed by hand
                          </span>
                        </div>
                        <div className="mt-[5px] h-[5px] overflow-hidden rounded-full bg-ink-0/[0.07]">
                          <div
                            className="viz-bar h-full rounded-full bg-ink-0"
                            style={{ "--i": 2, width: "48%", opacity: 0.35 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[0.6875rem] font-medium leading-none tracking-[-0.03em]">
                          <span className="text-ink-0/60">
                            Reviews never asked for
                          </span>
                        </div>
                        <div className="mt-[5px] h-[5px] overflow-hidden rounded-full bg-ink-0/[0.07]">
                          <div
                            className="viz-bar h-full rounded-full bg-ink-0"
                            style={{ "--i": 3, width: "30%", opacity: 0.35 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Audit
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    A free call to map where time and enquiries leak out of your
                    business, and which system to start with.
                  </p>
                </div>
              </li>
              <li
                className="flex flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
                style={{ "--c": 1 }}
              >
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className="flex gap-[3px]">
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-[#e7e7e7]" />
                    <span className="size-2 rounded-full bg-[#e7e7e7]" />
                  </span>
                  <span className="text-[0.625rem] font-semibold tabular-nums tracking-[-0.04em] text-ink-0/60">
                    02
                  </span>
                </div>
                <div className="rounded-[10px] bg-ink-950 px-4 py-3">
                  <div
                    aria-hidden="true"
                    className="flex h-[120px] flex-col justify-center"
                  >
                    <svg
                      viewBox="0 0 240 120"
                      className="h-[120px] w-full overflow-visible"
                    >
                      <line
                        className="viz-line"
                        style={{ "--i": 0 }}
                        x1={34}
                        y1={24}
                        x2={120}
                        y2={60}
                        stroke="currentColor"
                        strokeOpacity={0.3}
                        strokeWidth={1.5}
                      />
                      <line
                        className="viz-line"
                        style={{ "--i": 1 }}
                        x1={34}
                        y1={96}
                        x2={120}
                        y2={60}
                        stroke="currentColor"
                        strokeOpacity={0.3}
                        strokeWidth={1.5}
                      />
                      <line
                        className="viz-line"
                        style={{ "--i": 2 }}
                        x1={206}
                        y1={24}
                        x2={120}
                        y2={60}
                        stroke="currentColor"
                        strokeOpacity={0.3}
                        strokeWidth={1.5}
                      />
                      <line
                        className="viz-line"
                        style={{ "--i": 3 }}
                        x1={206}
                        y1={96}
                        x2={120}
                        y2={60}
                        stroke="currentColor"
                        strokeOpacity={0.3}
                        strokeWidth={1.5}
                      />
                      <circle
                        cx={120}
                        cy={60}
                        r={22}
                        className="fill-[#0a0a0a]"
                      />
                      <text
                        x={120}
                        y={64}
                        textAnchor="middle"
                        className="fill-white text-[11px] font-semibold"
                      >
                        AI
                      </text>
                      <g className="viz-pop" style={{ "--i": 1 }}>
                        <rect
                          x={7}
                          y={13}
                          width={54}
                          height={22}
                          rx={11}
                          className="fill-[#f5f5f5]"
                        />
                        <text
                          x={34}
                          y={27.5}
                          textAnchor="middle"
                          className="fill-[#0a0a0a] text-[9.5px] font-medium"
                        >
                          Phone
                        </text>
                      </g>
                      <g className="viz-pop" style={{ "--i": 2 }}>
                        <rect
                          x={7}
                          y={85}
                          width={54}
                          height={22}
                          rx={11}
                          className="fill-[#f5f5f5]"
                        />
                        <text
                          x={34}
                          y={99.5}
                          textAnchor="middle"
                          className="fill-[#0a0a0a] text-[9.5px] font-medium"
                        >
                          Website
                        </text>
                      </g>
                      <g className="viz-pop" style={{ "--i": 3 }}>
                        <rect
                          x={179}
                          y={13}
                          width={54}
                          height={22}
                          rx={11}
                          className="fill-[#f5f5f5]"
                        />
                        <text
                          x={206}
                          y={27.5}
                          textAnchor="middle"
                          className="fill-[#0a0a0a] text-[9.5px] font-medium"
                        >
                          CRM
                        </text>
                      </g>
                      <g className="viz-pop" style={{ "--i": 4 }}>
                        <rect
                          x={179}
                          y={85}
                          width={54}
                          height={22}
                          rx={11}
                          className="fill-[#f5f5f5]"
                        />
                        <text
                          x={206}
                          y={99.5}
                          textAnchor="middle"
                          className="fill-[#0a0a0a] text-[9.5px] font-medium"
                        >
                          Diary
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Build
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    We build and train the systems around your business,
                    connected to the tools you already use.
                  </p>
                </div>
              </li>
              <li
                className="flex flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
                style={{ "--c": 2 }}
              >
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className="flex gap-[3px]">
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-[#e7e7e7]" />
                  </span>
                  <span className="text-[0.625rem] font-semibold tabular-nums tracking-[-0.04em] text-ink-0/60">
                    03
                  </span>
                </div>
                <div className="rounded-[10px] bg-ink-950 px-4 py-3">
                  <div
                    aria-hidden="true"
                    className="flex h-[120px] flex-col justify-center"
                  >
                    <div className="grid h-[120px] place-content-center justify-items-center gap-3">
                      <span className="relative block h-[34px] w-[62px] overflow-hidden rounded-full bg-ink-0/[0.12]">
                        <span
                          className="viz-fade absolute inset-0 rounded-full bg-[#0a0a0a]"
                          style={{ "--i": 2 }}
                        />
                        <span
                          className="viz-knob absolute left-1 top-1 size-[26px] rounded-full bg-white shadow-[0_1px_3px_rgb(0_0_0/0.2)]"
                          style={{ "--i": 2 }}
                        />
                      </span>
                      <span
                        className="viz-pop flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-[-0.03em]"
                        style={{ "--i": 4 }}
                      >
                        <span className="size-1.5 rounded-full bg-[#1e7e34]" />
                        Live
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Launch
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    We test everything with you before it goes live, then switch
                    it on.
                  </p>
                </div>
              </li>
              <li
                className="flex flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 lg:rounded-[18px] lg:p-[30px]"
                style={{ "--c": 3 }}
              >
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className="flex gap-[3px]">
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-ink-0" />
                    <span className="size-2 rounded-full bg-ink-0" />
                  </span>
                  <span className="text-[0.625rem] font-semibold tabular-nums tracking-[-0.04em] text-ink-0/60">
                    04
                  </span>
                </div>
                <div className="rounded-[10px] bg-ink-950 px-4 py-3">
                  <div
                    aria-hidden="true"
                    className="flex h-[120px] flex-col justify-center"
                  >
                    <ul className="grid h-[120px] content-center gap-2.5">
                      <li className="flex items-center gap-2.5 text-[0.75rem] font-medium tracking-[-0.03em]">
                        <span
                          className="viz-pop grid size-[18px] shrink-0 place-items-center rounded-full bg-[#0a0a0a] text-white"
                          style={{ "--i": 0 }}
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="size-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M2.5 6.2 5 8.5l4.5-5" />
                          </svg>
                        </span>
                        Calls and chats reviewed
                      </li>
                      <li className="flex items-center gap-2.5 text-[0.75rem] font-medium tracking-[-0.03em]">
                        <span
                          className="viz-pop grid size-[18px] shrink-0 place-items-center rounded-full bg-[#0a0a0a] text-white"
                          style={{ "--i": 2 }}
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="size-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M2.5 6.2 5 8.5l4.5-5" />
                          </svg>
                        </span>
                        Missed answers fixed
                      </li>
                      <li className="flex items-center gap-2.5 text-[0.75rem] font-medium tracking-[-0.03em]">
                        <span
                          className="viz-pop grid size-[18px] shrink-0 place-items-center rounded-full bg-[#0a0a0a] text-white"
                          style={{ "--i": 4 }}
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="size-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M2.5 6.2 5 8.5l4.5-5" />
                          </svg>
                        </span>
                        Monthly report sent
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.5rem]">
                    Optimise
                  </h3>
                  <p className="mt-3 text-ink-0/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                    Each month we check what it caught, fix what it missed and
                    improve it, on the monthly plan.
                  </p>
                </div>
              </li>
            </ol>
          </section>
        </div>
        <AiAiFaq />
        <div className="flow-root bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]">
          <section
            aria-labelledby="ai-next-heading"
            className="grid gap-5 lg:grid-cols-4 lg:gap-x-1 "
          >
            <h2
              id="ai-next-heading"
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
              Read next
            </h2>
            <div className="min-w-0 lg:col-span-2 lg:col-start-3">
              <ul>
                <li>
                  <a
                    href="/blog/ai-voice-receptionist"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.25rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.625rem]"
                  >
                    How an AI receptionist handles your calls
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
                    href="/blog/missed-calls"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.25rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.625rem]"
                  >
                    What a missed call really costs
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
                    href="/blog/five-jobs-to-automate"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.25rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.625rem]"
                  >
                    Five jobs you can hand to automation
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
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.25rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.625rem]"
                  >
                    Email and SMS marketing
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
                    href="/pricing#add-ons"
                    className="group flex items-center justify-between gap-6 border-t border-ink-0/10 py-5 text-[1.25rem] font-medium leading-[1.15] tracking-[-0.04em] lg:py-6 lg:text-[1.625rem]"
                  >
                    Every add-on and price
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
