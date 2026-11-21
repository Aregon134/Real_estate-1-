export function BlogBlog() {
  return (
    <>
      <section
        aria-labelledby="blog-heading"
        className="bg-ink-950 px-gutter pb-[50px] pt-[140px] text-ink-0 lg:pb-[190px] lg:pt-[318px]"
      >
        <h1
          id="blog-heading"
          data-reveal="mask"
          className="max-w-[10ch] text-[4rem] font-semibold leading-[0.96] tracking-[-0.06em] lg:max-w-none lg:text-[clamp(6rem,10.3vw,9.25rem)]"
        >
          Plain answers.
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
            Blog
          </p>
          <p className="indent-[4.1em] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:col-span-2 lg:text-[1.875rem]">
            <span className="sr-only">
              Websites, search and automation, explained
              {" for people running a business."}
            </span>
            <span aria-hidden="true">
              <span className="rise-word" style={{ "--i": 0 }}>
                Websites,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 1 }}>
                search
              </span>{" "}
              <span className="rise-word" style={{ "--i": 2 }}>
                and
              </span>{" "}
              <span className="rise-word" style={{ "--i": 3 }}>
                automation,
              </span>{" "}
              <span className="rise-word" style={{ "--i": 4 }}>
                explained
              </span>
              <span className="text-ink-0/60">
                {" "}
                <span className="rise-word" style={{ "--i": 5 }}>
                  for
                </span>{" "}
                <span className="rise-word" style={{ "--i": 6 }}>
                  people
                </span>{" "}
                <span className="rise-word" style={{ "--i": 7 }}>
                  running
                </span>{" "}
                <span className="rise-word" style={{ "--i": 8 }}>
                  a
                </span>{" "}
                <span className="rise-word" style={{ "--i": 9 }}>
                  business.
                </span>
              </span>
            </span>
          </p>
          <div className="max-w-[260px] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:mt-1.5 lg:justify-self-end">
            <p>
              From Ziggloom: what a website should cost, how to be found on
              Google and in AI answers, and which jobs to hand to automation.
            </p>
          </div>
        </div>
        <ul className="mt-[30px] grid gap-1 md:grid-cols-2 lg:mt-[184px] lg:grid-cols-4">
          <li className="md:col-span-2">
            <a
              href="/blog/new-website-or-redesign"
              className="blog-card group relative flex aspect-[350/470] flex-col justify-between overflow-hidden rounded-[14px] bg-[#0a0a0a] p-6 text-ink-1000 md:aspect-[682/520] md:rounded-[18px] lg:p-[30px]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/0"
              />
              <span className="relative self-end">
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
              <span className="relative">
                <span className="block text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/80">
                  Studio notes
                </span>
                <h2 className="mt-3 max-w-[16ch] text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.05em] text-pretty lg:mt-[15px] lg:text-[2.375rem]">
                  Does your website need a redesign or a rebuild?
                </h2>
                <span className="mt-3 line-clamp-2 block max-w-[44ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-1000/80 lg:mt-[15px] lg:text-[0.9375rem]">
                  Watch a customer use your site, then check which problems the
                  current platform can fix.
                </span>
              </span>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/why-not-on-google-maps"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What to check when your business is missing from Google Maps
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Compare your public details and check the account that manages
                  your Business Profile.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/do-you-own-your-website"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Who controls your website after launch?
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Check who controls the domain, hosting, content and licences
                  before you sign.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/five-jobs-to-automate"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Five routine jobs to consider automating
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Choose a repeatable task and plan how your team will handle
                  exceptions.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/ai-voice-receptionist"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What should an AI receptionist handle?
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Choose the calls it can answer, decide when to involve a
                  person and test a booking before launch.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/ai-search-recommendations"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  How to describe your business for AI search
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Make your services, location and contact details clear across
                  the public profiles you control.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/missed-calls"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  How much could a missed enquiry be worth?
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Use your call log, conversion rate and order value to estimate
                  the cost of missed follow-up.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/what-makes-a-website-premium"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What makes a product page feel considered?
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Help shoppers see the product, compare their options and act
                  comfortably on a phone.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/before-you-hire-a-web-designer"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What to bring to a web design brief
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Gather the content, decisions and account details a designer
                  needs to scope your project.
                </p>
              </div>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href="/blog/why-your-website-is-slow"
              className="blog-card group flex h-[420px] lg:h-[520px] flex-col rounded-[14px] bg-ink-1000 p-2.5 text-ink-0 md:rounded-[18px]"
            >
              <div className="flex items-start justify-between">
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
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Where is your website slowing down?
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Find the delay on a representative page and measure the effect
                  of each change.
                </p>
              </div>
            </a>
          </li>
          <li
            className="md:[grid-column:span_var(--md)/span_var(--md)] lg:[grid-column:span_var(--lg)/span_var(--lg)]"
            style={{ "--md": 1, "--lg": 1 }}
          >
            <a
              href="/#contact"
              className="flex h-[300px] flex-col justify-between rounded-[14px] p-6 text-ink-1000 md:rounded-[18px] lg:h-[520px] lg:p-[30px]"
              style={{
                background:
                  "radial-gradient(70% 55% at 100% 0%, #272727 0%, rgb(39 39 39 / 0) 65%), radial-gradient(60% 45% at 0% 100%, #151515 0%, rgb(21 21 21 / 0) 70%), #0a0a0a",
              }}
            >
              <span className="self-end">
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
              <span>
                <span className="block max-w-[18ch] text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.05em] lg:text-[2.375rem]">
                  Got a question we haven’t answered?
                </span>
                <span className="pill mt-5 inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-1000 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                  <span className="pill-roll" data-label="Ask Kushagra">
                    <span>Ask Kushagra</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pill-dot size-2 rounded-full bg-[#0a0a0a]"
                  />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
