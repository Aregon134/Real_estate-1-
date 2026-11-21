export function HomeLatest() {
  return (
    <>
      <section
        aria-labelledby="latest-heading"
        className="bg-ink-950 px-gutter pt-[50px] text-ink-0 lg:pt-[190px]"
      >
        <div className="grid gap-5 lg:grid-cols-4 lg:items-end lg:gap-x-1">
          <h2
            id="latest-heading"
            data-reveal="mask"
            className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.06em] lg:col-span-2 lg:text-[3.75rem]"
          >
            {"Plain answers "}
            <span className="text-ink-0/60">from Ziggloom.</span>
          </h2>
          <p className="max-w-[300px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:pb-2 lg:text-[1rem]">
            Websites, search and automation, explained for people running a
            business.
          </p>
          <a
            href="/blog"
            className="pill inline-flex h-[30px] w-fit items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000 lg:mb-2.5 lg:justify-self-end"
          >
            <span className="pill-roll" data-label="All posts">
              <span>All posts</span>
            </span>
            <span
              aria-hidden="true"
              className="pill-dot size-2 rounded-full bg-ink-1000"
            />
          </a>
        </div>
        <ul className="mt-[30px] grid gap-1 md:grid-cols-2 lg:mt-[90px] lg:grid-cols-4">
          <li className="min-w-0">
            <a
              href="/blog/new-website-or-redesign"
              className="blog-card group flex h-[420px] lg:h-full flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
                <span />
                <span className="mr-3 mt-3 lg:mr-[11px] lg:mt-[11px]">
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="blog-plus size-[18px] shrink-0"
                  >
                    <circle cx="9" cy="9" r="9" fill="#0a0a0a" />
                    <path
                      d="M9 5v8M5 9h8"
                      stroke="#fff"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-auto px-5 pb-5 lg:px-5 lg:pb-[30px]">
                <p className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                  Studio notes
                </p>
                <h3 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Does your website need a redesign or a rebuild?
                </h3>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Watch a customer use your site, then check which problems the
                  current platform can fix.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/why-not-on-google-maps"
              className="blog-card group flex h-[420px] lg:h-full flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
                <span />
                <span className="mr-3 mt-3 lg:mr-[11px] lg:mt-[11px]">
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="blog-plus size-[18px] shrink-0"
                  >
                    <circle cx="9" cy="9" r="9" fill="#0a0a0a" />
                    <path
                      d="M9 5v8M5 9h8"
                      stroke="#fff"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-auto px-5 pb-5 lg:px-5 lg:pb-[30px]">
                <p className="text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0/60">
                  Studio notes
                </p>
                <h3 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What to check when your business is missing from Google Maps
                </h3>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Compare your public details and check the account that manages
                  your Business Profile.
                </p>
              </div>
            </a>
          </li>
          <li className="md:col-span-2">
            <a
              href="/blog"
              className="blog-card group relative flex aspect-[888/1066] flex-col justify-between overflow-hidden rounded-[14px] bg-[#0a0a0a] p-6 text-ink-1000 md:aspect-[1322/1066] md:rounded-[18px] lg:p-[30px]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/50"
              />
              <span className="relative flex items-start justify-between">
                <span className="text-[1.25rem] font-semibold tracking-[-0.04em]">
                  Ziggloom™
                </span>
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="blog-plus size-5 shrink-0"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                >
                  <path d="M10 2v16M2 10h16" />
                </svg>
              </span>
              <span className="relative self-end text-right text-[2.125rem] font-semibold leading-[1] tracking-[-0.06em] lg:text-[3.25rem]">
                Read the
                <br />
                blog.
              </span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
