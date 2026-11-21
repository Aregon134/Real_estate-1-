import { LossCalculator } from "@/components/LossCalculator";
export function AiCost() {
  return (
    <>
      <section
        id="cost"
        aria-labelledby="cost-heading"
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
              The leak
            </p>
            <h2
              id="cost-heading"
              className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-3 lg:text-[3.75rem]"
            >
              What missed enquiries cost you.{" "}
              <span className="text-ink-1000/60">Put in your own numbers.</span>
            </h2>
          </div>
          <div className="mt-10 rounded-[14px] bg-ink-1000/[0.04] p-6 lg:mt-20 lg:rounded-[18px] lg:p-[50px]">
            <LossCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
