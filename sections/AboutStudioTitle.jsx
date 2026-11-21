export function AboutStudioTitle() {
  return (
    <>
      <section
        aria-labelledby="studio-title"
        className="bg-ink-950 px-gutter pt-[140px] text-ink-0 lg:pt-[318px]"
      >
        <h1
          id="studio-title"
          data-reveal="mask"
          className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
        >
          About us.
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
            Ziggloom
          </p>
          <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
            <span className="sr-only">
              We’re a founder-led agency specialising in websites, SEO, ad
              marketing and AI software.
              {
                " We build websites that bring in customers, and AI software that gives your team its time back, so your business can grow without the extra admin."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                We’re
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                a
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                founder-led
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                agency
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                specialising
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                in
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                websites,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                SEO,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                ad
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                marketing
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                AI
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                software.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 13 }}>
                  We
                </span>{" "}
                <span className="rise-word" style={{ "--i": 14 }}>
                  build
                </span>{" "}
                <span className="rise-word" style={{ "--i": 15 }}>
                  websites
                </span>{" "}
                <span className="rise-word" style={{ "--i": 16 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 17 }}>
                  bring
                </span>{" "}
                <span className="rise-word" style={{ "--i": 18 }}>
                  in
                </span>{" "}
                <span className="rise-word" style={{ "--i": 19 }}>
                  customers,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 20 }}>
                  and
                </span>{" "}
                <span className="rise-word" style={{ "--i": 21 }}>
                  AI
                </span>{" "}
                <span className="rise-word" style={{ "--i": 22 }}>
                  software
                </span>{" "}
                <span className="rise-word" style={{ "--i": 23 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 24 }}>
                  gives
                </span>{" "}
                <span className="rise-word" style={{ "--i": 25 }}>
                  your
                </span>{" "}
                <span className="rise-word" style={{ "--i": 26 }}>
                  team
                </span>{" "}
                <span className="rise-word" style={{ "--i": 27 }}>
                  its
                </span>{" "}
                <span className="rise-word" style={{ "--i": 28 }}>
                  time
                </span>{" "}
                <span className="rise-word" style={{ "--i": 29 }}>
                  back,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 30 }}>
                  so
                </span>{" "}
                <span className="rise-word" style={{ "--i": 31 }}>
                  your
                </span>{" "}
                <span className="rise-word" style={{ "--i": 32 }}>
                  business
                </span>{" "}
                <span className="rise-word" style={{ "--i": 33 }}>
                  can
                </span>{" "}
                <span className="rise-word" style={{ "--i": 34 }}>
                  grow
                </span>{" "}
                <span className="rise-word" style={{ "--i": 35 }}>
                  without
                </span>{" "}
                <span className="rise-word" style={{ "--i": 36 }}>
                  the
                </span>{" "}
                <span className="rise-word" style={{ "--i": 37 }}>
                  extra
                </span>{" "}
                <span className="rise-word" style={{ "--i": 38 }}>
                  admin.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              No templates and no jargon, just work built around how your
              business runs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
