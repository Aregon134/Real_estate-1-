import agency from "@/content/Agency.json";
import Image from "next/image";
export function PricingPartnership() {
  return (
    <>
      <section
        id="partnership"
        aria-labelledby="partnership-heading"
        className="scroll-mt-24 bg-ink-950 pt-[50px] lg:px-1.5 lg:pt-[190px]"
      >
        <div
          className="grain-panel px-5 py-[50px] text-ink-1000 lg:rounded-[25px] lg:px-[30px] lg:py-[200px]"
          style={{
            background:
              "radial-gradient(70% 55% at 0% 0%, #272727 0%, rgb(39 39 39 / 0) 65%), radial-gradient(60% 45% at 100% 100%, #151515 0%, rgb(21 21 21 / 0) 70%), #0a0a0a",
            "--plus-ink": "#0a0a0a",
          }}
        >
          <div className="grid lg:grid-cols-4 lg:gap-x-1">
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
              Scoped to your goals
            </p>
            <h2
              id="partnership-heading"
              data-reveal="mask"
              className="mt-4 text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em] lg:col-span-3 lg:mt-0"
            >
              Partnership.
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:mt-[100px] lg:grid-cols-4 lg:gap-x-1">
            <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:col-start-2 lg:text-[1.875rem]">
              For established businesses that want one team behind their
              website, their search optimisation and the AI software that runs
              their day-to-day work
              <span className="text-ink-1000/60">
                {", "}rather than a one-off build.
              </span>
            </p>
            <div className="flex items-center gap-3.5 lg:self-start lg:justify-self-end">
              <span className="flex">
                <Image
                  src="/icon.svg"
                  alt=""
                  width={42}
                  height={42}
                  sizes="42px"
                  quality={90}
                  className="size-[42px] rounded-full object-cover ring-2 ring-[#111] "
                />
              </span>
              <span>
                <span className="block text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1rem]">
                  {"Kushagra Bhartia"}
                </span>
                <span className="block text-[0.75rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]">
                  Your project contact
                </span>
              </span>
            </div>
          </div>
          <ul className="mt-10 grid gap-1 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            <li className="flex flex-col justify-between gap-4 rounded-[14px] bg-ink-1000/[0.04] p-6 lg:min-h-[240px] lg:gap-8 lg:rounded-[18px] lg:p-[30px]">
              <span
                aria-hidden="true"
                className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/60"
              >
                (01)
              </span>
              <p className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                Your website and search optimisation, run by one team
              </p>
            </li>
            <li className="flex flex-col justify-between gap-4 rounded-[14px] bg-ink-1000/[0.04] p-6 lg:min-h-[240px] lg:gap-8 lg:rounded-[18px] lg:p-[30px]">
              <span
                aria-hidden="true"
                className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/60"
              >
                (02)
              </span>
              <p className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                Custom AI software built around how your business runs:
                workflows, assistants, CRMs and reporting that take repetitive
                work off your team
              </p>
            </li>
            <li className="flex flex-col justify-between gap-4 rounded-[14px] bg-ink-1000/[0.04] p-6 lg:min-h-[240px] lg:gap-8 lg:rounded-[18px] lg:p-[30px]">
              <span
                aria-hidden="true"
                className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/60"
              >
                (03)
              </span>
              <p className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                Scoped around your goals on a call
              </p>
            </li>
            <li className="flex flex-col justify-between gap-4 rounded-[14px] bg-ink-1000/[0.04] p-6 lg:min-h-[240px] lg:gap-8 lg:rounded-[18px] lg:p-[30px]">
              <span
                aria-hidden="true"
                className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/60"
              >
                (04)
              </span>
              <p className="text-[1.125rem] font-medium leading-[1.25] tracking-[-0.04em] lg:text-[1.375rem]">
                The monthly fee and terms agreed in writing
              </p>
            </li>
          </ul>
          <div className="mt-1 grid gap-1 lg:grid-cols-4">
            <div className="rounded-[14px] bg-ink-1000/[0.04] p-6 lg:col-span-2 lg:rounded-[18px] lg:p-[30px]">
              <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]">
                How does it start?
              </p>
              <p className="mt-3 max-w-[46ch] text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                A call about where you want the business to go. Then the scope,
                fee and terms, agreed together in writing.
              </p>
            </div>
            <div className="rounded-[14px] bg-ink-1000/[0.04] p-6 lg:rounded-[18px] lg:p-[30px]">
              <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]">
                More than one site?
              </p>
              <p className="mt-3 text-[1rem] font-medium leading-[1.35] tracking-[-0.04em] lg:text-[1.125rem]">
                {"A "}multi-site discount, scoped to the number of sites.
              </p>
            </div>
            <div className="flex items-end rounded-[14px] bg-ink-1000/[0.04] p-6 lg:rounded-[18px] lg:p-[30px]">
              <a
                href={agency.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sweep flex h-[58px] w-full items-center justify-center rounded-full bg-ink-1000 text-[1rem] font-semibold tracking-[-0.04em] text-[#0a0a0a] lg:text-[1.125rem]"
              >
                Book a scoping call
                <span className="sr-only">{" (opens in a new tab)"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
