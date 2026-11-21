import Image from "next/image";
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
              Written by the studio team: what a website should cost, how to be
              found on Google and in AI answers, and which jobs to hand to
              automation.
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
                  15 November 2026
                </span>
                <h2 className="mt-3 max-w-[16ch] text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.05em] text-pretty lg:mt-[15px] lg:text-[2.375rem]">
                  Do I need a new website or just a redesign? How to tell which
                </h2>
                <span className="mt-3 line-clamp-2 block max-w-[44ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-1000/80 lg:mt-[15px] lg:text-[0.9375rem]">
                  Some websites need a refresh and some need rebuilding. The
                  signs for each, what each involves, and the simple things to
                  rule out first.
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
                  1 November 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Why doesn't my business show on Google Maps? Check this before
                  blaming your website
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Not showing on Google Maps is usually a Google Business
                  Profile problem, not a website one. Five checks you can do
                  today, in order, and who fixes each.
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
                <Image
                  src="/images/blog/do-you-own-your-website/thumb.2026-10-28.webp"
                  alt="A leather folio with a contract and fountain pen, brass keys and a laptop showing a website, on a walnut desk."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Do you actually own your website? Questions to ask before you
                  sign
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Who owns your domain, code and content decides how easily you
                  can leave. The questions to ask a web designer before you sign
                  anything.
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
                <Image
                  src="/images/blog/five-jobs-to-automate/thumb.2026-10-28.webp"
                  alt="A monitor on a concrete desk showing an automation workflow: new enquiry, reply sent, booking reminder, review request, invoice chased."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Five jobs you can hand to automation this month
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Missed-call text-back, enquiry follow-ups, review requests,
                  booking reminders and enquiry routing. What each does, what to
                  write and what to watch.
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
                <Image
                  src="/images/blog/ai-voice-receptionist/thumb.2026-10-28.webp"
                  alt="Inside a luxury saloon at dusk, quilted leather and wood, the dashboard screen showing an assistant answering a call and booking Thursday at 2:30."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  How an AI voice receptionist handles your missed and
                  out-of-hours calls
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  What happens when an AI receptionist picks up a call you
                  couldn't, what it knows, when it hands over to you, and how to
                  sense-check the cost.
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
                <Image
                  src="/images/blog/ai-search-recommendations/thumb.2026-10-28.webp"
                  alt="A laptop on a walnut desk at night under a brass lamp, showing an AI answer recommending three local accountants."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  How ChatGPT and Google's AI answers decide which businesses to
                  recommend
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Nobody outside these companies knows exactly how AI answers
                  pick businesses. Here's what is known, and how to be easy to
                  understand and quote.
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
                <Image
                  src="/images/blog/missed-calls/thumb.2026-10-28.webp"
                  alt="A phone on a steel workbench in a garage, its lock screen showing four missed calls."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What a missed call really costs a small business, and what to
                  do about it
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Put a figure on missed calls with a sum you can redo yourself,
                  then see the practical fixes, from a quick text-back to an AI
                  receptionist.
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
                <Image
                  src="/images/blog/what-makes-a-website-premium/thumb.2026-10-28.webp"
                  alt="A laptop on a black stone desk showing an elegant dark website, beside a steel watch."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What makes a website feel premium, and the small things that
                  quietly cheapen it
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  A premium website comes from restraint, real photos, specific
                  words and speed. The small details that quietly make a site
                  feel cheap, and how to fix them.
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
                <Image
                  src="/images/blog/before-you-hire-a-web-designer/thumb.2026-10-28.webp"
                  alt="A tablet on a joiner's bench showing what to have ready before you brief a designer."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  What to have ready before you hire a web designer
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Your goals, words, photos, logo, favourite sites, colours and
                  fonts, who decides, budget and timeline. What to gather before
                  you hire a web designer.
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
                <Image
                  src="/images/blog/why-your-website-is-slow/thumb.2026-10-28.webp"
                  alt="A phone held on a wet city street at night, showing a website still loading."
                  width={110}
                  height={110}
                  sizes="110px"
                  quality={90}
                  className="size-[110px] rounded-[12px] object-cover"
                />
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
                  24 October 2026
                </p>
                <h2 className="mt-5 text-[1.125rem] font-medium leading-[1.3] tracking-[-0.04em] text-pretty lg:mt-[30px] lg:text-[1.25rem]">
                  Why your website is slow, and why Google cares
                </h2>
                <p className="mt-2.5 line-clamp-3 max-w-[30ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60 lg:text-[0.9375rem]">
                  Core Web Vitals in plain English, the usual reasons
                  small-business websites are slow, and how to test yours for
                  free with PageSpeed Insights.
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
                  <span className="pill-roll" data-label="Ask the founders">
                    <span>Ask the founders</span>
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
