import agency from "@/content/Agency.json";
import { DemoCall } from "@/components/DemoCall";
export function AiDemo() {
  return (
    <>
      <section
        id="demo"
        aria-labelledby="demo-heading"
        className="scroll-mt-24 bg-ink-950 pt-[50px] lg:px-1.5 lg:pt-[190px]"
      >
        <div
          className="px-5 py-[50px] text-ink-1000 lg:rounded-[25px] lg:px-[30px] lg:py-[160px]"
          style={{
            background:
              "radial-gradient(70% 55% at 100% 0%, #272727 0%, rgb(39 39 39 / 0) 65%), radial-gradient(60% 45% at 0% 100%, #151515 0%, rgb(21 21 21 / 0) 70%), #0a0a0a",
            "--plus-ink": "#0a0a0a",
          }}
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
              See it working
            </p>
            <h2
              id="demo-heading"
              className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]"
            >
              Answers when you can’t.{" "}
              <span className="text-ink-1000/60">
                Under a car, or showing a property, when the phone
                rings? Stay with the job in front of you. The receptionist
                answers, books them in and sends you the details.
              </span>
            </h2>
          </div>
          <div className="mt-10 grid gap-1 lg:mt-20 lg:grid-cols-3">
            <div className="relative rounded-[14px] bg-ink-1000/[0.04] lg:rounded-[18px]">
              <p className="absolute left-6 top-6 text-ink-1000/60 lg:left-[30px] lg:top-[30px] text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                Live demo, try it
              </p>
              <div className="flex min-h-[30rem] items-center justify-center px-6 pb-10 pt-16">
                <DemoCall maxMinutes={3} />
              </div>
            </div>
            <div className="relative rounded-[14px] bg-ink-1000/[0.04] lg:rounded-[18px]">
              <p className="absolute left-6 top-6 text-ink-1000/60 lg:left-[30px] lg:top-[30px] text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                What the customer gets next
              </p>
              <div className="flex min-h-[30rem] items-center justify-center px-6 pb-10 pt-16">
                <div className="grid w-full max-w-[19rem] gap-3 text-left [--fu-start:0.3s] lg:[--fu-start:5.2s]">
                  <div
                    className="overflow-hidden rounded-[38px] border-[6px] border-[#1c1c1e] bg-white text-black"
                    data-reveal="settle"
                    style={{ transitionDelay: "calc(var(--fu-start) + 0s)" }}
                  >
                    <div
                      style={{
                        fontFamily:
                          '-apple-system, "SF Pro Text", "Helvetica Neue", system-ui, sans-serif',
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className="flex items-center justify-between px-6 pb-1 pt-2.5 text-[0.75rem] font-semibold"
                      >
                        <span>19:46</span>
                        <span className="flex items-center gap-1">
                          <span className="flex items-end gap-[2px]">
                            <span
                              className="w-[3px] rounded-[1px] bg-black"
                              style={{ height: 4 }}
                            />
                            <span
                              className="w-[3px] rounded-[1px] bg-black"
                              style={{ height: 6 }}
                            />
                            <span
                              className="w-[3px] rounded-[1px] bg-black"
                              style={{ height: 8 }}
                            />
                            <span
                              className="w-[3px] rounded-[1px] bg-black"
                              style={{ height: 10 }}
                            />
                          </span>
                          <span className="ml-1 h-[10px] w-[20px] rounded-[3px] border border-black/40 p-[1px]">
                            <span className="block h-full w-3/4 rounded-[1px] bg-black" />
                          </span>
                        </span>
                      </div>
                      <div
                        className="mx-2.5 mt-1 rounded-[14px] bg-[#f2f2f7] px-3 py-2.5"
                        data-reveal="rise"
                        style={{
                          transitionDelay: "calc(var(--fu-start) + 0.5s)",
                          "--reveal-y": "8px",
                        }}
                      >
                        <div className="flex items-center justify-between text-[0.625rem] text-[#6e6e73]">
                          <span className="font-semibold uppercase tracking-[0.02em]">
                            Mail
                          </span>
                          <span>now</span>
                        </div>
                        <p className="mt-0.5 text-[0.75rem] font-semibold leading-snug">
                          Your vehicle service are booked
                        </p>
                        <p className="text-[0.6875rem] leading-snug text-[#3c3c43]">
                          Thursday at 8:30am. Drop the car off and we’ll be in
                          touch when it’s ready.
                        </p>
                      </div>
                      <div className="mt-2 grid justify-items-center gap-1 border-b border-black/[0.06] pb-2.5">
                        <span
                          aria-hidden="true"
                          className="grid size-9 place-items-center rounded-full bg-gradient-to-b from-[#a6a6ab] to-[#86868b] text-[0.8125rem] font-semibold text-white"
                        >
                          G
                        </span>
                        <p className="text-[0.6875rem] font-medium">
                          Your garage
                        </p>
                      </div>
                      <div className="grid gap-1.5 px-3 pb-5 pt-3">
                        <p className="justify-self-center text-[0.625rem] font-medium text-[#6e6e73]">
                          Text Message · Today 19:44
                        </p>
                        <p className="max-w-[80%] justify-self-start rounded-[18px] rounded-bl-[5px] bg-[#e9e9eb] px-3 py-[7px] text-[0.8125rem] leading-[1.3] text-black">
                          <span className="sr-only">{"The garage: "}</span>
                          You’re booked: vehicle service, Thursday 8:30am. Reply
                          CANCEL to cancel, or MOVE to change the time.
                        </p>
                        <div
                          className="justify-self-end"
                          data-reveal="rise"
                          style={{
                            transitionDelay: "calc(var(--fu-start) + 1s)",
                            "--reveal-y": "8px",
                          }}
                        >
                          <p className="max-w-[80%] rounded-[18px] rounded-br-[5px] bg-[#1e7e34] px-3 py-[7px] text-[0.8125rem] leading-[1.3] text-white">
                            <span className="sr-only">{"Customer: "}</span>
                            Perfect, thank you!
                          </p>
                        </div>
                        <div
                          className="mt-2 grid gap-1.5"
                          data-reveal="rise"
                          style={{
                            transitionDelay: "calc(var(--fu-start) + 1.6s)",
                            "--reveal-y": "8px",
                          }}
                        >
                          <p className="justify-self-center text-[0.625rem] font-medium text-[#6e6e73]">
                            Wednesday 18:00
                          </p>
                          <p className="max-w-[80%] justify-self-start rounded-[18px] rounded-bl-[5px] bg-[#e9e9eb] px-3 py-[7px] text-[0.8125rem] leading-[1.3] text-black">
                            <span className="sr-only">{"The garage: "}</span>
                            Reminder: your car’s booked in tomorrow at 8:30am.
                            Can’t make it? Reply CANCEL and we’ll free the slot.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="justify-self-center"
                    data-reveal="settle"
                    style={{ transitionDelay: "calc(var(--fu-start) + 2.2s)" }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-ink-1000 text-[0.75rem] font-medium tracking-[-0.04em]">
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      A cancelled slot can be rebooked, not lost to a no-show
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-[14px] bg-ink-1000/[0.04] lg:rounded-[18px]">
              <p className="absolute left-6 top-6 text-ink-1000/60 lg:left-[30px] lg:top-[30px] text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                Example: the website assistant
              </p>
              <div className="flex min-h-[30rem] items-center justify-center px-6 pb-10 pt-16">
                <div className="w-full max-w-[22rem] overflow-hidden rounded-[18px] border border-white/10 bg-[#0b0b0b] text-left">
                  <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                    <span
                      aria-hidden="true"
                      className="grid size-8 place-items-center rounded-full bg-white/[0.08] text-[0.6875rem] font-bold text-ink-1000"
                    >
                      AI
                    </span>
                    <div className="leading-tight">
                      <p className="text-[0.875rem] font-semibold text-ink-1000">
                        Assistant
                      </p>
                      <p className="text-[0.75rem] text-ink-700">Online</p>
                    </div>
                  </div>
                  <ol className="grid gap-2.5 px-4 pb-5 pt-4">
                    <li
                      className="justify-self-end"
                      data-reveal="rise"
                      style={{ transitionDelay: "0.3s", "--reveal-y": "12px" }}
                    >
                      <span className="block max-w-[16rem] rounded-2xl px-3.5 py-2.5 text-[0.875rem] leading-snug rounded-br-md bg-white text-black">
                        <span className="sr-only">{"Visitor: "}</span>Hi, could
                        someone quote for a new kitchen?
                      </span>
                    </li>
                    <li
                      className="justify-self-start"
                      data-reveal="rise"
                      style={{
                        transitionDelay: "0.8999999999999999s",
                        "--reveal-y": "12px",
                      }}
                    >
                      <span className="block max-w-[16rem] rounded-2xl px-3.5 py-2.5 text-[0.875rem] leading-snug rounded-bl-md bg-white/[0.08] text-ink-1000">
                        <span className="sr-only">{"Assistant: "}</span>Happy to
                        help. What's your PIN code, and the best email to reach
                        you?
                      </span>
                    </li>
                    <li
                      className="justify-self-end"
                      data-reveal="rise"
                      style={{ transitionDelay: "1.5s", "--reveal-y": "12px" }}
                    >
                      <span className="block max-w-[16rem] rounded-2xl px-3.5 py-2.5 text-[0.875rem] leading-snug rounded-br-md bg-white text-black">
                        <span className="sr-only">{"Visitor: "}</span>110001,
                        sam@example.com
                      </span>
                    </li>
                    <li
                      className="justify-self-start"
                      data-reveal="rise"
                      style={{
                        transitionDelay: "2.0999999999999996s",
                        "--reveal-y": "12px",
                      }}
                    >
                      <span className="block max-w-[16rem] rounded-2xl px-3.5 py-2.5 text-[0.875rem] leading-snug rounded-bl-md bg-white/[0.08] text-ink-1000">
                        <span className="sr-only">{"Assistant: "}</span>Thanks,
                        Sam. I've passed your details to the team.
                      </span>
                    </li>
                    <li
                      className="mt-2 justify-self-center"
                      data-reveal="settle"
                      style={{ transitionDelay: "2.6999999999999997s" }}
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-ink-1000 text-[0.75rem] font-bold uppercase tracking-[-0.02em]">
                        <span aria-hidden="true" className="text-accent">
                          ✓
                        </span>
                        Enquiry sent to your inbox
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-ink-1000/60 lg:mt-8 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
            Illustrative conversations showing how a website assistant can
            answer common questions.
          </p>
          <div id="prices" className="mt-[60px] scroll-mt-24 lg:mt-[120px]">
            <h3 className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
              {"Two fixed prices. "}
              <span className="text-ink-1000/60">
                Everything else is priced after a call.
              </span>
            </h3>
            <div className="mt-6 grid gap-1 lg:mt-8 lg:grid-cols-2">
              <div className="grid gap-1">
                <div
                  id="receptionist"
                  className="scroll-mt-24 rounded-[14px] bg-ink-1000/[0.04] p-6 lg:rounded-[18px] lg:p-[30px]"
                >
                  <h4 className="text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]">
                    AI Voice Receptionist
                  </h4>
                  <dl className="mt-5 grid gap-4 border-t border-ink-1000/10 pt-5">
                    <div>
                      <dt className="text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Monthly
                      </dt>
                      <dd className="mt-1 font-figure text-[1.375rem] font-semibold leading-none tracking-[-0.05em] lg:text-[1.625rem]">
                        ₹3,490/month
                      </dd>
                      <dd className="mt-2 text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        ₹2,990/month on the Scale plan. On a 12-month agreement,
                        or month to month with 30 days’ notice.
                      </dd>
                    </div>
                    <div>
                      <dt className="text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Setup
                      </dt>
                      <dd className="mt-1 font-figure text-[1.375rem] font-semibold leading-none tracking-[-0.05em] lg:text-[1.625rem]">
                        ₹4,950 one-time
                      </dd>
                      <dd className="mt-2 text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Month to month only. No setup fee on a 12-month
                        agreement.
                      </dd>
                    </div>
                    <div>
                      <dt className="text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Calls on Scale
                      </dt>
                      <dd className="mt-1 font-figure text-[1.375rem] font-semibold leading-none tracking-[-0.05em] lg:text-[1.625rem]">
                        Up to 1,500 minutes a month
                      </dd>
                      <dd className="mt-2 text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Covered on a fair-use basis. Missed and out-of-hours
                        calls, one site. Always-on answering and additional
                        sites are quoted separately.
                      </dd>
                    </div>
                    <div>
                      <dt className="text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Calls standalone
                      </dt>
                      <dd className="mt-1 font-figure text-[1.375rem] font-semibold leading-none tracking-[-0.05em] lg:text-[1.625rem]">
                        600 minutes included, then ₹2.50/min
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="scroll-mt-24 rounded-[14px] bg-ink-1000/[0.04] p-6 lg:rounded-[18px] lg:p-[30px]">
                  <h4 className="text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]">
                    AI Website Assistant
                  </h4>
                  <dl className="mt-5 grid gap-4 border-t border-ink-1000/10 pt-5">
                    <div>
                      <dt className="text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Monthly
                      </dt>
                      <dd className="mt-1 font-figure text-[1.375rem] font-semibold leading-none tracking-[-0.05em] lg:text-[1.625rem]">
                        ₹590/month
                      </dd>
                      <dd className="mt-2 text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        On a 12-month agreement, or month to month with 30 days’
                        notice. An add-on to any build or plan.
                      </dd>
                    </div>
                    <div>
                      <dt className="text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Setup
                      </dt>
                      <dd className="mt-1 font-figure text-[1.375rem] font-semibold leading-none tracking-[-0.05em] lg:text-[1.625rem]">
                        ₹1,990 one-time
                      </dd>
                      <dd className="mt-2 text-ink-1000/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                        Month to month only. No setup fee on a 12-month
                        agreement.
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col gap-6 rounded-[14px] bg-ink-1000 p-6 text-[#0a0a0a] lg:rounded-[18px] lg:p-[30px]">
                  <div>
                    <h4 className="text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[1.375rem]">
                      Everything else
                    </h4>
                    <p className="mt-3 text-[#0a0a0a]/60 text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] lg:text-[0.875rem]">
                      {
                        "Speed-to-lead, CRM & Pipeline, Review Engine, Win-back Campaigns"
                      }
                      {" and "}
                      {"Quote & Admin Automation"}
                      {
                        " are built around how your business runs, so we price them after a short call, in writing before we start. Systems run on a 12-month agreement."
                      }
                    </p>
                  </div>
                  <a
                    href={agency.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000 "
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
