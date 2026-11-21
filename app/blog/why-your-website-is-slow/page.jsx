import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import Image from "next/image";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title: "Why your website is slow, and why Google cares",
  description:
    "Core Web Vitals in plain English, the usual reasons small-business websites are slow, and how to test yours for free with PageSpeed Insights.",
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
                src="/images/blog/why-your-website-is-slow/post.2026-10-28-2.webp"
                alt="A phone held on a wet city street at night, showing a website still loading."
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
                Why your website is slow, and why Google cares
              </h1>
              <p className="mt-5 max-w-[46ch] text-[1rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1.125rem]">
                Core Web Vitals in plain English, the usual reasons
                small-business websites are slow, and how to test yours for free
                with PageSpeed Insights.
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
                  A website is usually slow for a handful of ordinary reasons:
                  images far bigger than they need to be, too many scripts and
                  plugins, a heavy page builder, or slow hosting. Google cares
                  because it wants to send people to pages that are good to use,
                  and it measures that with three Core Web Vitals: how quickly
                  the main content loads, how quickly the page responds when you
                  tap something, and whether the layout stays still. You can
                  check your own site in a few minutes with PageSpeed Insights,
                  Google's free testing tool.
                </p>
                <h2>What Google measures</h2>
                <p>
                  Core Web Vitals are three measurements of how a page feels to
                  real visitors.
                </p>
                <ul>
                  <li>
                    <strong>Loading: Largest Contentful Paint (LCP).</strong>
                    {
                      " How long until the biggest thing in view (usually the main image or headline) has appeared. Google counts 2.5 seconds or less as good."
                    }
                  </li>
                  <li>
                    <strong>
                      Responsiveness: Interaction to Next Paint (INP).
                    </strong>
                    {
                      " When someone taps a button, opens a menu or types into a form, how long before the page visibly reacts. Good is 200 milliseconds or less. INP replaced an older measure, First Input Delay, in March 2024."
                    }
                  </li>
                  <li>
                    <strong>
                      Visual stability: Cumulative Layout Shift (CLS).
                    </strong>
                    {
                      " How much things jump around as the page loads. It's a score rather than a time, and good is 0.1 or less."
                    }
                  </li>
                </ul>
                <p>
                  To pass, at least three out of four visits need to hit the
                  "good" mark on each one. So visitors on older phones and
                  patchy mobile signal count, not just you on the office wifi.
                </p>
                <h2>Why Google cares</h2>
                <p>
                  Google has said that Core Web Vitals are used by its ranking
                  systems, as part of what it calls page experience. It has also
                  been clear that they aren't the whole story. A fast page with
                  thin content won't beat a slower page that answers the
                  question better. Think of speed as something that can hold a
                  good page back, rather than something that lifts a weak one.
                </p>
                <p>
                  The bigger reason to care is the people on the page. A slow,
                  sluggish or jumpy page tests their patience before they've
                  read a word. None of that shows in a ranking report, but all
                  of it gets between a visitor and your phone number.
                </p>
                <h2>The usual culprits</h2>
                <p>
                  <strong>Huge images.</strong>
                  {
                    " Photos go straight from a phone or camera onto the page at full size, then get shown at a fraction of that width."
                  }
                </p>
                <p>
                  Here's a worked example you can redo with your own numbers.
                  Say your homepage has eight photos and each file is 4 MB.
                  That's 32 MB for a visitor to download, quite possibly on
                  mobile data, before the page settles. Resize each photo to the
                  largest width it's actually shown at, save it in a modern
                  format such as WebP or AVIF, and each file can often come down
                  to a few hundred kilobytes. PageSpeed Insights lists your
                  heaviest images, so you can do the sum for your own page.
                </p>
                <p>
                  <strong>Too many scripts.</strong>
                  {
                    " Every chat widget, tracking pixel, booking embed, review badge, social feed and cookie tool adds code the browser has to download and run. Each is small; together they make a page slow to respond, which is exactly what INP picks up."
                  }
                </p>
                <p>
                  <strong>Plugins and page builders.</strong>
                  {
                    " On platforms like WordPress, each plugin can add its own files to every page, whether that page uses it or not. Drag-and-drop page builders are convenient, but they tend to produce far more code than the design needs. That can be a fair trade for ease of editing. It's still a trade."
                  }
                </p>
                <p>
                  <strong>Slow hosting.</strong>
                  {
                    " If the server takes a long time to start sending the page, everything after it is late too. Budget shared hosting puts your site on a machine alongside many others, and when they're busy, so is yours. In PageSpeed Insights this shows up as a slow Time to First Byte (TTFB) or a warning about server response time."
                  }
                </p>
                <p>
                  <strong>Things that load late.</strong>
                  {
                    " Images without set dimensions, adverts and banners that arrive after the page, and web fonts swapping in all push content around. That's what CLS measures, and the fix is usually to reserve space before things arrive."
                  }
                </p>
                <h2>How to check your own site</h2>
                <ol>
                  <li>
                    Go to pagespeed.web.dev and paste in your homepage address.
                  </li>
                  <li>
                    Look at the mobile results first. It's the tougher test.
                  </li>
                  <li>
                    The top section shows field data: how real Chrome users
                    experienced your page over the previous 28 days, with a pass
                    or fail for Core Web Vitals. If your site doesn't get many
                    visits, it may say there isn't enough data. That's normal
                    for a small business.
                  </li>
                  <li>
                    The section below is a lab test run by Lighthouse, Google's
                    own test of speed and quality. It gives a performance score
                    out of 100 and a list of suggestions, each with an estimate
                    of what it would save.
                  </li>
                  <li>
                    Run it two or three times; lab scores move a little between
                    runs.
                  </li>
                  <li>
                    Test your busiest pages as well, not only the homepage.
                  </li>
                </ol>
                <p>
                  If you use Google Search Console, its Core Web Vitals report
                  groups your pages into good, needs improvement and poor, using
                  the same real-visitor data.
                </p>
                <h2>What to fix first</h2>
                <p>
                  Start with images, because it's usually the simplest fix and
                  you can often do it yourself. Then go through every
                  third-party script and plugin and ask whether it still earns
                  its place.
                </p>
                <p>
                  If the server itself is slow, tidying the page will only get
                  you so far; that's a conversation with your host. And if the
                  site sits on a heavy theme or page builder, there may be a
                  limit to how fast it can go without a rebuild.
                </p>
                <p>
                  Retest after every change, so you know which fix made the
                  difference.
                </p>
                <h2>Where we come in</h2>
                <p>
                  {
                    "We build sites in our own code, not on WordPress or a page builder, and every site is tested on Google's own speed test before launch. If yours is slow and you'd like a second opinion, "
                  }
                  <a href="/book">book a 15-minute call</a>.
                </p>
              </article>
            </div>
            <nav
              aria-label="More posts"
              className="mt-[60px] grid max-w-[600px] gap-1 lg:mt-[100px]"
            >
              <a
                href="/blog/before-you-hire-a-web-designer"
                className="blog-card group relative flex aspect-[600/182] flex-col justify-center overflow-hidden rounded-[14px] bg-[#0a0a0a] px-6 text-ink-1000 lg:px-10 "
              >
                <Image
                  src="/images/blog/before-you-hire-a-web-designer/strip.2026-10-28.webp"
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
                  What to have ready before you hire a web designer
                </span>
              </a>
              <a
                href="/blog/new-website-or-redesign"
                className="blog-card group relative flex aspect-[600/182] flex-col justify-center overflow-hidden rounded-[14px] bg-[#0a0a0a] px-6 text-ink-1000 lg:px-10 items-end text-right"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-black/20"
                />
                <span className="relative text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/80">
                  Next
                </span>
                <span className="relative mt-2 max-w-[24ch] text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] text-pretty lg:text-[1.375rem]">
                  Do I need a new website or just a redesign? How to tell which
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
