export function AboutProcess() {
  return (
    <>
      <section
        id="process"
        aria-labelledby="process-heading"
        className="bg-ink-950 pb-[50px] pt-[50px] text-ink-0 lg:pb-[190px] lg:pt-[190px]"
      >
        <div className="px-gutter">
          <div className="grid lg:grid-cols-4 lg:gap-x-1">
            <p className="flex items-center gap-1.5 self-start text-[0.8125rem] font-medium tracking-[-0.04em] lg:mt-[3px] lg:gap-[9px] lg:text-[1rem]">
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
              How we work
            </p>
            <div className="mt-6 flex flex-col lg:col-span-3 lg:mt-0">
              <p className="order-3 mt-6 text-[1.25rem] font-semibold tracking-[-0.04em] lg:order-none lg:mt-0">
                Ziggloom™
              </p>
              <h2
                id="process-heading"
                data-reveal="mask"
                className="max-w-[830px] text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:mt-5 lg:text-[3.75rem]"
              >
                {"How we take your website "}
                <span className="text-ink-0/60">from first call to launch</span>
              </h2>
              <p className="mt-5 max-w-[375px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1rem]">
                The same four stages of work on every project (the full
                timeline, payments included, is on How we work). You see every
                page planned, and approve the design before it costs anything to
                change.
              </p>
            </div>
          </div>
          <ol
            data-reveal="lift"
            className="mt-[30px] grid gap-1 md:grid-cols-2 lg:mt-[120px] lg:grid-cols-4"
          >
            <li className="rounded-[14px] bg-ink-1000 p-6 md:rounded-[18px] lg:p-[30px]">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className="flex gap-[3px]">
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-[#e7e7e7]" />
                  <span className="size-2 rounded-full bg-[#e7e7e7]" />
                  <span className="size-2 rounded-full bg-[#e7e7e7]" />
                </span>
                <span className="text-[0.625rem] font-semibold leading-none tabular-nums text-ink-0/60">
                  01
                </span>
              </div>
              <div className="mt-[22px] flex items-center gap-5 lg:mt-[30px]">
                <h3 className="max-w-[208px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  The problem first, then every page planned
                </h3>
              </div>
            </li>
            <li className="rounded-[14px] bg-ink-1000 p-6 md:rounded-[18px] lg:p-[30px]">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className="flex gap-[3px]">
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-[#e7e7e7]" />
                  <span className="size-2 rounded-full bg-[#e7e7e7]" />
                </span>
                <span className="text-[0.625rem] font-semibold leading-none tabular-nums text-ink-0/60">
                  02
                </span>
              </div>
              <div className="mt-[22px] flex items-center gap-5 lg:mt-[30px]">
                <h3 className="max-w-[208px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  A design you sign off before we build
                </h3>
              </div>
            </li>
            <li className="rounded-[14px] bg-ink-1000 p-6 md:rounded-[18px] lg:p-[30px]">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className="flex gap-[3px]">
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-[#e7e7e7]" />
                </span>
                <span className="text-[0.625rem] font-semibold leading-none tabular-nums text-ink-0/60">
                  03
                </span>
              </div>
              <div className="mt-[22px] flex items-center gap-5 lg:mt-[30px]">
                <h3 className="max-w-[208px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  Built in our own code, fast from day one
                </h3>
              </div>
            </li>
            <li className="rounded-[14px] bg-ink-1000 p-6 md:rounded-[18px] lg:p-[30px]">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className="flex gap-[3px]">
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-ink-0" />
                  <span className="size-2 rounded-full bg-ink-0" />
                </span>
                <span className="text-[0.625rem] font-semibold leading-none tabular-nums text-ink-0/60">
                  04
                </span>
              </div>
              <div className="mt-[22px] flex items-center gap-5 lg:mt-[30px]">
                <h3 className="max-w-[208px] text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]">
                  Launched only after every check passes
                </h3>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
