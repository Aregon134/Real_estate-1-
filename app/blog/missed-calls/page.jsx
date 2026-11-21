import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import Image from "next/image";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title: "What a missed call costs a small business, and the fix",
  description:
    "Put a figure on missed calls with a sum you can redo yourself, then see the practical fixes, from a quick text-back to an AI receptionist.",
};
export default function Page() {
  return (
    <>
      <HeaderBar
        nav={dataNavigation}
        site={dataAgency}
        projectCount={7}
        brandMark="™"
      />
      <main id="main" className="v3 flex-1 bg-ink-950 text-ink-0">
        <article className="lg:grid lg:grid-cols-2">
          <div className="px-1.5 pt-[66px] lg:sticky lg:top-[60px] lg:self-start lg:pt-0">
            <div className="relative aspect-[605/834] w-full overflow-hidden rounded-[18px] bg-ink-900 lg:h-[min(834px,calc(100svh-66px))] lg:w-auto lg:rounded-[25px]">
              <Image
                src="/images/blog/missed-calls/post.2026-10-28-2.webp"
                alt="A phone on a steel workbench in a garage, its lock screen showing four missed calls."
                fill={true}
                sizes="(min-width: 1024px) 42vw, 100vw"
                quality={90}
                loading="eager"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          </div>
          <div className="px-gutter pb-[50px] pt-10 lg:pb-[190px] lg:pl-0 lg:pr-9 lg:pt-[402px]">
            <div className="max-w-[600px]">
              <p className="text-[0.75rem] font-medium tracking-[-0.04em] lg:text-[0.875rem]">
                <a
                  href="/blog"
                  className="text-ink-0/60 transition-colors duration-200 hover:text-ink-0"
                >
                  Blog
                </a>
                <span aria-hidden="true" className="mx-2 text-ink-0/30">
                  /
                </span>
                <time dateTime="2026-10-24">24 October 2026</time>
              </p>
              <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.06em] [text-wrap:balance] lg:text-[3.75rem] lg:leading-[1.1]">
                What a missed call really costs a small business, and what to do
                about it
              </h1>
              <p className="mt-5 max-w-[46ch] text-[1rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1.125rem]">
                Put a figure on missed calls with a sum you can redo yourself,
                then see the practical fixes, from a quick text-back to an AI
                receptionist.
              </p>
              <div className="mt-[30px] flex items-center gap-3.5 lg:mt-10">
                <span className="flex">
                  <Image
                    src="/images/founders/avatar-bradley-hoxha.2026-10-28.webp"
                    alt=""
                    width={42}
                    height={42}
                    sizes="42px"
                    quality={90}
                    className="size-[42px] rounded-full object-cover ring-2 ring-ink-950 "
                  />
                  <Image
                    src="/images/founders/avatar-shaun-padley.webp"
                    alt=""
                    width={42}
                    height={42}
                    sizes="42px"
                    quality={90}
                    className="size-[42px] rounded-full object-cover ring-2 ring-ink-950 -ml-3"
                  />
                </span>
                <span>
                  <span className="block text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1rem]">
                    {"Studio Design & Systems Team"}
                  </span>
                  <span className="block text-[0.75rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
                    {"Founders, "}Ziggloom
                  </span>
                </span>
              </div>
            </div>
            <hr className="mt-10 border-ink-0/10 lg:mt-[60px]" />
            <div className="post-body mt-10 max-w-[600px] lg:mt-[60px]">
              <article>
                <p>
                  A missed call costs you the job that caller wanted to give
                  you, plus any repeat business that would have followed.
                  Someone who can't get through can ring the next business on
                  the list in seconds, so the real cost is rarely the call
                  itself. You can work out your own figure from your call log in
                  a few minutes, and the fixes range from a faster call-back to
                  an assistant that answers when you can't.
                </p>
                <h2>Why a missed call is rarely just a missed call</h2>
                <p>
                  People phone when they want something sorted. They have a
                  leak, a free afternoon, an event coming up or a question that
                  decides whether they book. If nobody answers, they have three
                  choices: leave a voicemail, try again later, or try someone
                  else. Only the first two keep them with you.
                </p>
                <p>
                  Voicemail helps less than it seems. Some callers won't leave a
                  message at all, and the ones who do are waiting for you to
                  ring back while they carry on looking. By the time you finish
                  the job in front of you and return the call, they may already
                  have booked elsewhere. Nobody tells you that happened. The
                  call just sits in your log as one more number you meant to
                  ring.
                </p>
                <h2>Work out your own number</h2>
                <p>
                  You don't need anyone else's statistics for this. Your phone
                  already has the data.
                </p>
                <ol>
                  <li>
                    Look at your missed calls for the last two weeks. Most
                    mobiles and business phone systems keep a list.
                  </li>
                  <li>
                    Count the ones from numbers that never left a message and
                    never called again.
                  </li>
                  <li>
                    Estimate how many of those would have turned into work. Be
                    honest, not hopeful.
                  </li>
                  <li>Multiply by what a typical job is worth to you.</li>
                </ol>
                <p>
                  Here is a worked example, not data. Say you miss three calls a
                  week, and one in three would have booked a £60 job. That's one
                  lost job a week, or £60. Over 52 weeks, it comes to £3,120. If
                  a typical customer comes back twice more in a year, each lost
                  caller was really worth £180, and the yearly figure becomes
                  £9,360.
                </p>
                <p>
                  Your numbers will be different, so plug in your own. The point
                  is that a handful of unanswered calls a week can add up to a
                  real sum, and it's worth knowing yours before you decide what
                  to do.
                </p>
                <h2>The costs that don't show up on the call log</h2>
                <p>
                  Some of the cost isn't lost work at all. It's the time and
                  attention spent chasing.
                </p>
                <ul>
                  <li>
                    <strong>Phone tag.</strong>
                    {
                      " You call back and they're busy. They call again and you're on a job. Each round eats a few minutes and a little goodwill."
                    }
                  </li>
                  <li>
                    <strong>Interrupted work.</strong>
                    {
                      " Answering every call means stopping what you're doing, often with a customer in front of you. Not answering means losing some calls. Neither is free."
                    }
                  </li>
                  <li>
                    <strong>The evening catch-up.</strong>
                    {
                      " Returning calls after hours turns a working day into a longer one."
                    }
                  </li>
                  <li>
                    <strong>First impressions.</strong>
                    {
                      " A caller who gets no answer, or a full voicemail box, forms a view of how organised you are before you've said a word."
                    }
                  </li>
                </ul>
                <p>
                  None of this is a reason to panic. It's a reason to decide, on
                  purpose, what happens when you can't pick up.
                </p>
                <h2>What to do about it</h2>
                <p>Start with the cheapest fixes and work up.</p>
                <p>
                  <strong>Check the basics.</strong>
                  {
                    " Make sure your opening hours are right on your website and your Google Business Profile, so people ring when you're actually there. Record a voicemail greeting that says when you'll call back, and don't let the mailbox fill up."
                  }
                </p>
                <p>
                  <strong>Call back faster.</strong>
                  {
                    " A call returned within minutes lands very differently from one returned the next morning. If you can, block out two or three short slots a day just for returning calls."
                  }
                </p>
                <p>
                  <strong>Send a missed-call text-back.</strong>
                  {
                    " This is an automatic text the moment a call goes unanswered: who you are, that you'll ring back shortly, and a link to book or send details. It keeps the caller talking to you instead of searching for someone else. A reply to someone who has just called you, sticking to what they asked about, is generally treated as a service message. Promotional texts are different: under PECR they need the person's consent, or the \"soft opt-in\" for existing customers. This isn't legal advice, and the ICO's guidance is the place to check."
                  }
                </p>
                <p>
                  <strong>Let something answer for you.</strong>
                  {
                    " An AI voice receptionist picks up the calls you miss and the ones that come in after hours. It answers common questions about your services, prices, hours and location, takes the caller's details and passes the enquiry straight to you. If you use a booking system or calendar, it can book them in."
                  }
                </p>
                <p>
                  Whichever you choose, compare its cost with your own figure
                  from earlier. As a worked example, if a fix costs £349 a month
                  and a typical job is worth £60, it needs to win you about six
                  jobs a month to pay for itself. Run the sum with your own
                  numbers before you spend anything.
                </p>
                <h2>Where we come in</h2>
                <p>
                  {
                    "We set up speed-to-lead replies, which text or call people back the moment they get in touch, and AI voice receptionists tailored to the services, prices and questions each business deals with. If you'd like to talk through your own missed-call numbers, "
                  }
                  <a href="/book">book a 15-minute call</a>
                  {" and we'll go through them with you."}
                </p>
              </article>
            </div>
            <nav
              aria-label="More posts"
              className="mt-[60px] grid max-w-[600px] gap-1 lg:mt-[100px]"
            >
              <a
                href="/blog/ai-search-recommendations"
                className="blog-card group relative flex aspect-[600/182] flex-col justify-center overflow-hidden rounded-[14px] bg-[#0a0a0a] px-6 text-ink-1000 lg:px-10 "
              >
                <Image
                  src="/images/blog/ai-search-recommendations/strip.2026-10-28.webp"
                  alt=""
                  fill={true}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  quality={90}
                  className="blog-photo object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
                />
                <span className="relative text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/80">
                  Previous
                </span>
                <span className="relative mt-2 max-w-[24ch] text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] text-pretty lg:text-[1.375rem]">
                  How ChatGPT and Google's AI answers decide which businesses to
                  recommend
                </span>
              </a>
              <a
                href="/blog/what-makes-a-website-premium"
                className="blog-card group relative flex aspect-[600/182] flex-col justify-center overflow-hidden rounded-[14px] bg-[#0a0a0a] px-6 text-ink-1000 lg:px-10 items-end text-right"
              >
                <Image
                  src="/images/blog/what-makes-a-website-premium/strip.2026-10-28.webp"
                  alt=""
                  fill={true}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  quality={90}
                  className="blog-photo object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-black/20"
                />
                <span className="relative text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/80">
                  Next
                </span>
                <span className="relative mt-2 max-w-[24ch] text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] text-pretty lg:text-[1.375rem]">
                  What makes a website feel premium, and the small things that
                  quietly cheapen it
                </span>
              </a>
            </nav>
            <div className="mt-[50px] max-w-[600px] lg:mt-[60px]">
              <p className="text-[1rem] font-medium tracking-[-0.04em]">
                Let’s keep in touch.
              </p>
              <p className="mt-2 max-w-[38ch] text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-0/60">
                New posts and the work behind them, on LinkedIn, Instagram,
                Facebook and TikTok.
              </p>
              <ul className="mt-5 flex gap-1.5">
                <li>
                  <a
                    href="https://www.linkedin.com/company/blacklineagency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn (opens in a new tab)"
                    className="grid size-11 place-items-center rounded-full bg-ink-0/[0.06] transition-colors duration-200 hover:bg-ink-0 hover:text-ink-1000"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block bg-current size-4"
                      style={{
                        mask: "url(/images/brand/linkedin-in.2026-10-28.png) center / contain no-repeat",
                        WebkitMask:
                          "url(/images/brand/linkedin-in.2026-10-28.png) center / contain no-repeat",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/blacklineagency0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram (opens in a new tab)"
                    className="grid size-11 place-items-center rounded-full bg-ink-0/[0.06] transition-colors duration-200 hover:bg-ink-0 hover:text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current size-4"
                    >
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/BlackLineAgency0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook (opens in a new tab)"
                    className="grid size-11 place-items-center rounded-full bg-ink-0/[0.06] transition-colors duration-200 hover:bg-ink-0 hover:text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current size-4"
                    >
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@blacklineagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok (opens in a new tab)"
                    className="grid size-11 place-items-center rounded-full bg-ink-0/[0.06] transition-colors duration-200 hover:bg-ink-0 hover:text-ink-1000"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current size-4"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
