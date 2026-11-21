import agency from "@/content/Agency.json";
import { HiddenCostDriver } from "@/components/HiddenCostDriver";
export function HomeHiddenCost() {
  return (
    <>
      <section
        id="hidden-cost"
        aria-labelledby="hidden-cost-heading"
        className="hc relative bg-ink-0 text-ink-1000"
      >
        <HiddenCostDriver id="hidden-cost" />
        <div className="hc-track">
          <div className="hc-stage relative overflow-hidden px-5 py-24 sm:px-9">
            <div
              aria-hidden="true"
              className="hc-rings pointer-events-none absolute inset-0 grid place-items-center"
            >
              <svg
                viewBox="0 0 1000 1000"
                className="hc-ring absolute size-[150vmax] lg:size-[110vmax]"
                style={{ "--s0": 0.82, "--k": 0.32, "--rot": "50deg" }}
              >
                <defs>
                  <linearGradient id="hc-arc-0" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="500"
                  cy="500"
                  r={170}
                  fill="none"
                  stroke="rgb(255 255 255 / 0.08)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx="500"
                  cy="500"
                  r={170}
                  fill="none"
                  stroke="url(#hc-arc-0)"
                  strokeWidth="1"
                  strokeDasharray="192.26547039969535 1068.1415022205297"
                  strokeDashoffset={106.81415022205297}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <svg
                viewBox="0 0 1000 1000"
                className="hc-ring absolute size-[150vmax] lg:size-[110vmax]"
                style={{ "--s0": 0.86, "--k": 0.26, "--rot": "-36deg" }}
              >
                <defs>
                  <linearGradient id="hc-arc-1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="500"
                  cy="500"
                  r={260}
                  fill="none"
                  stroke="rgb(255 255 255 / 0.08)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx="500"
                  cy="500"
                  r={260}
                  fill="none"
                  stroke="url(#hc-arc-1)"
                  strokeWidth="1"
                  strokeDasharray="196.03538158400306 1633.6281798666923"
                  strokeDashoffset={604.4424265506761}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <svg
                viewBox="0 0 1000 1000"
                className="hc-ring absolute size-[150vmax] lg:size-[110vmax]"
                style={{ "--s0": 0.9, "--k": 0.2, "--rot": "28deg" }}
              >
                <defs>
                  <linearGradient id="hc-arc-2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="500"
                  cy="500"
                  r={350}
                  fill="none"
                  stroke="rgb(255 255 255 / 0.08)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx="500"
                  cy="500"
                  r={350}
                  fill="none"
                  stroke="url(#hc-arc-2)"
                  strokeWidth="1"
                  strokeDasharray="219.9114857512855 2199.114857512855"
                  strokeDashoffset={1407.4335088082273}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <svg
                viewBox="0 0 1000 1000"
                className="hc-ring absolute size-[150vmax] lg:size-[110vmax]"
                style={{ "--s0": 0.94, "--k": 0.14, "--rot": "-20deg" }}
              >
                <defs>
                  <linearGradient id="hc-arc-3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="500"
                  cy="500"
                  r={445}
                  fill="none"
                  stroke="rgb(255 255 255 / 0.08)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx="500"
                  cy="500"
                  r={445}
                  fill="none"
                  stroke="url(#hc-arc-3)"
                  strokeWidth="1"
                  strokeDasharray="223.68139693559326 2796.0174616949157"
                  strokeDashoffset={2544.3758901423735}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            <div className="hc-copy">
              <h2
                id="hidden-cost-heading"
                className="hc-title text-center text-[clamp(2.25rem,4.2vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.045em]"
              >
                The hidden cost
                <br />
                <span className="hc-title-2">of manual work.</span>
              </h2>
              <div className="hc-resolve text-center">
                <p className="text-[clamp(2.25rem,4.2vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.045em]">
                  We take it off
                  <br />
                  your hands.
                </p>
                <p className="mx-auto mt-5 max-w-[36ch] text-[1rem] leading-[1.5] tracking-[-0.015em] text-ink-1000/65">
                  AI systems and automated workflows, built around how your
                  business runs. They answer, follow up, remind and record, so
                  you get your hours back.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                  <a
                    href="/ai"
                    className="btn-sweep inline-flex h-12 items-center gap-3 rounded-full bg-ink-1000 pl-6 pr-5 text-[0.9375rem] font-semibold tracking-[-0.02em] text-ink-0"
                  >
                    See what we automate
                    <span
                      aria-hidden="true"
                      className="btn-arrow relative inline-block size-4 overflow-hidden"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="btn-arrow-a absolute inset-0 size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                      <svg
                        viewBox="0 0 16 16"
                        className="btn-arrow-b absolute inset-0 size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href={agency.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center rounded-full border border-ink-1000/20 px-6 text-[0.9375rem] font-semibold tracking-[-0.02em] transition-colors duration-300 hover:border-ink-1000/60"
                  >
                    Book a 15-minute call
                    <span className="sr-only">{" (opens in a new tab)"}</span>
                  </a>
                </div>
              </div>
            </div>
            <ul className="hc-chips">
              <li
                className="hc-slot"
                style={{ "--x": "50%", "--y": "15%", "--i": 0 }}
              >
                <div data-hc-chip={true} className="hc-chip">
                  <p className="hc-pill">
                    <span aria-hidden="true" className="hc-dot" />
                    <span className="hc-texts">
                      <span className="hc-pain">Missed calls</span>
                      <span className="hc-fix">
                        <span className="sr-only">{": "}</span>An AI
                        receptionist answers
                      </span>
                    </span>
                  </p>
                </div>
              </li>
              <li
                className="hc-slot"
                style={{ "--x": "81%", "--y": "31%", "--i": 1 }}
              >
                <div data-hc-chip={true} className="hc-chip">
                  <p className="hc-pill">
                    <span aria-hidden="true" className="hc-dot" />
                    <span className="hc-texts">
                      <span className="hc-pain">Slow follow-ups</span>
                      <span className="hc-fix">
                        <span className="sr-only">{": "}</span>Instant text-back
                      </span>
                    </span>
                  </p>
                </div>
              </li>
              <li
                className="hc-slot"
                style={{ "--x": "77%", "--y": "71%", "--i": 2 }}
              >
                <div data-hc-chip={true} className="hc-chip">
                  <p className="hc-pill">
                    <span aria-hidden="true" className="hc-dot" />
                    <span className="hc-texts">
                      <span className="hc-pain">Wasted hours</span>
                      <span className="hc-fix">
                        <span className="sr-only">{": "}</span>Admin that runs
                        itself
                      </span>
                    </span>
                  </p>
                </div>
              </li>
              <li
                className="hc-slot"
                style={{ "--x": "25%", "--y": "76%", "--i": 3 }}
              >
                <div data-hc-chip={true} className="hc-chip">
                  <p className="hc-pill">
                    <span aria-hidden="true" className="hc-dot" />
                    <span className="hc-texts">
                      <span className="hc-pain">Lack of visibility</span>
                      <span className="hc-fix">
                        <span className="sr-only">{": "}</span>One CRM, every
                        number
                      </span>
                    </span>
                  </p>
                </div>
              </li>
              <li
                className="hc-slot"
                style={{ "--x": "17%", "--y": "37%", "--i": 4 }}
              >
                <div data-hc-chip={true} className="hc-chip">
                  <p className="hc-pill">
                    <span aria-hidden="true" className="hc-dot" />
                    <span className="hc-texts">
                      <span className="hc-pain">No-shows</span>
                      <span className="hc-fix">
                        <span className="sr-only">{": "}</span>Automatic
                        reminders
                      </span>
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
