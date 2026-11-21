export function ServicesServicesTitle() {
  return (
    <>
      <section
        aria-labelledby="services-title"
        className="bg-ink-950 px-gutter pb-[50px] pt-[140px] text-ink-0 lg:pb-[190px] lg:pt-[318px]"
      >
        <h1
          id="services-title"
          data-reveal="mask"
          className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
        >
          Services.
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
            What we do
          </p>
          <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
            <span className="sr-only">
              We design and build your website, then grow it with search,
              content and email.
              {
                " Beyond websites, we build the systems that run your business behind the scenes."
              }
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                We
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                design
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                build
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                your
              </span>{" "}
              <span className="rise-word" style={{ "--i": 5 }}>
                website,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 6 }}>
                then
              </span>{" "}
              <span className="rise-word" style={{ "--i": 7 }}>
                grow
              </span>{" "}
              <span className="rise-word" style={{ "--i": 8 }}>
                it
              </span>{" "}
              <span className="rise-word" style={{ "--i": 9 }}>
                with
              </span>{" "}
              <span className="rise-word" style={{ "--i": 10 }}>
                search,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 11 }}>
                content
              </span>{" "}
              <span className="rise-word" style={{ "--i": 12 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 13 }}>
                email.
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 14 }}>
                  Beyond
                </span>{" "}
                <span className="rise-word" style={{ "--i": 15 }}>
                  websites,
                </span>{" "}
                <span className="rise-word" style={{ "--i": 16 }}>
                  we
                </span>{" "}
                <span className="rise-word" style={{ "--i": 17 }}>
                  build
                </span>{" "}
                <span className="rise-word" style={{ "--i": 18 }}>
                  the
                </span>{" "}
                <span className="rise-word" style={{ "--i": 19 }}>
                  systems
                </span>{" "}
                <span className="rise-word" style={{ "--i": 20 }}>
                  that
                </span>{" "}
                <span className="rise-word" style={{ "--i": 21 }}>
                  run
                </span>{" "}
                <span className="rise-word" style={{ "--i": 22 }}>
                  your
                </span>{" "}
                <span className="rise-word" style={{ "--i": 23 }}>
                  business
                </span>{" "}
                <span className="rise-word" style={{ "--i": 24 }}>
                  behind
                </span>{" "}
                <span className="rise-word" style={{ "--i": 25 }}>
                  the
                </span>{" "}
                <span className="rise-word" style={{ "--i": 26 }}>
                  scenes.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              Websites are built in Next.js and React, written in TypeScript and
              hosted on Vercel’s global network; Shopify stores on Shopify.
              Every one is tested on Google Lighthouse and to WCAG 2.2 AA before
              launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
