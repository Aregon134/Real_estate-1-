import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import Image from "next/image";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title:
    "Why doesn't my business show on Google Maps? Check this before blaming your website",
  description:
    "Not showing on Google Maps is usually a Google Business Profile problem, not a website one. Five checks you can do today, in order, and who fixes each.",
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
          <div />
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
                <time dateTime="2026-11-01">1 November 2026</time>
              </p>
              <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.06em] [text-wrap:balance] lg:text-[3.75rem] lg:leading-[1.1]">
                Why doesn't my business show on Google Maps? Check this before
                blaming your website
              </h1>
              <p className="mt-5 max-w-[46ch] text-[1rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1.125rem]">
                Not showing on Google Maps is usually a Google Business Profile
                problem, not a website one. Five checks you can do today, in
                order, and who fixes each.
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
                  When a business doesn't show on Google Maps, there are usually
                  three causes: the Google Business Profile is missing or
                  unverified, the profile says the wrong things (category,
                  address, service area), or it's there but too far down for the
                  search being made. Your website is rarely the first culprit.
                  Start by searching your exact business name on your phone.
                  What you see tells you which of the checks below to do first.
                </p>
                <h2>Check 1: Search for your own business name</h2>
                <p>
                  Open Google Maps on your phone and type your business name
                  exactly as customers know it. Then do the same in the normal
                  Google search box.
                </p>
                <ul>
                  <li>
                    <strong>
                      Your profile appears with a photo, opening hours and
                      reviews.
                    </strong>
                    {
                      " You exist on Maps. The problem is ranking, so skip to check 4."
                    }
                  </li>
                  <li>
                    <strong>
                      Something appears, but it's wrong or half empty.
                    </strong>
                    {
                      " Someone, possibly a previous owner, may have created it. Go to check 2."
                    }
                  </li>
                  <li>
                    <strong>Nothing appears at all.</strong>
                    {
                      " You probably have no profile, or it has been suspended. Go to check 2."
                    }
                  </li>
                </ul>
                <p>
                  Also look for duplicates. Two profiles for one business,
                  perhaps from a move or a rebrand, can split your reviews and
                  confuse Google about which one to show.
                </p>
                <h2>
                  Check 2: Is your Google Business Profile claimed and verified?
                </h2>
                <p>
                  Maps listings come from Google Business Profile, a free tool.
                  A profile you haven't claimed, or haven't finished verifying,
                  is much less likely to appear well, if it appears at all.
                </p>
                <p>
                  Search for your business while signed in to the Google account
                  you think owns it. If you're the owner, you'll see options to
                  edit your profile straight from the results. If you only see a
                  prompt to claim it, you aren't recognised as the owner yet.
                </p>
                <p>Things to look for:</p>
                <ul>
                  <li>
                    A "claim this business" or "verify" prompt that was never
                    completed.
                  </li>
                  <li>
                    A profile owned by an old email address, a former employee
                    or a web designer who set it up years ago.
                  </li>
                  <li>
                    A notice that the profile has been suspended. Google
                    explains the reason in your dashboard, and you can appeal
                    from there.
                  </li>
                </ul>
                <p>
                  Who fixes it: you, or whoever manages your marketing. It's
                  free, but verification can need a postcard, a phone call or a
                  short video, so start early.
                </p>
                <h2>Check 3: Do the basics match reality?</h2>
                <p>
                  Once the profile is yours, read it as a stranger would. Google
                  can only match you to a search if the details are right.
                </p>
                <ol>
                  <li>
                    <strong>Name.</strong>
                    {
                      " It should be your real trading name, as it appears on your shop front or invoices. Adding keywords to the name is against Google's guidelines and can get a profile suspended."
                    }
                  </li>
                  <li>
                    <strong>Primary category.</strong>
                    {
                      ' This is one of the strongest signals you control. "Hairdresser" and "Beauty salon" are not the same thing. Pick the one that describes the main thing customers come for, then add secondary categories for the rest.'
                    }
                  </li>
                  <li>
                    <strong>Address or service area.</strong>
                    {
                      " A shop or clinic has a public address. A plumber who works from home and travels to customers can hide the address and list the areas served instead."
                    }
                  </li>
                  <li>
                    <strong>Opening hours.</strong>
                    {
                      ' Include bank holiday changes. A profile showing "closed" at the wrong moment loses calls.'
                    }
                  </li>
                  <li>
                    <strong>Phone number and website link.</strong>
                    {" Check both work. Ring the number from another phone."}
                  </li>
                </ol>
                <p>Who fixes it: you. It's a quick job once you have access.</p>
                <h2>Check 4: Are you there, just not near the top?</h2>
                <p>
                  Plenty of businesses appear on Maps but sit below competitors
                  for the searches that matter, like "dentist near me" or
                  "plumber Grimsby". Google weighs roughly three things: how
                  relevant your profile is to the search, how close you are to
                  the person searching, and how well known and trusted you
                  appear.
                </p>
                <p>
                  Distance is the one you can't change. The other two you can:
                </p>
                <ul>
                  <li>
                    <strong>Relevance:</strong>
                    {
                      " complete every section, add your services, and write a plain description of what you do and where."
                    }
                  </li>
                  <li>
                    <strong>Reputation:</strong>
                    {
                      " ask happy customers for reviews, and reply to every one, good or bad."
                    }
                  </li>
                  <li>
                    <strong>Activity:</strong>
                    {
                      " fresh photos, and the odd update, show the business is open and working."
                    }
                  </li>
                </ul>
                <p>
                  Here is a worked example, not data. Say you run a salon and
                  appear below two others for "hairdresser near me" even though
                  your reviews are good. Compare the three profiles side by
                  side: who has more photos, who lists services, who replies to
                  reviews. The gap is usually something you can close with an
                  afternoon's work.
                </p>
                <p>
                  Nobody can promise a place at the top of Maps, and anyone who
                  does should make you cautious. You can only remove the reasons
                  for being lower.
                </p>
                <h2>Check 5: Only now, look at your website</h2>
                <p>
                  Your website does matter, just later than people expect.
                  Google looks at it to confirm what you do and where. Check
                  that:
                </p>
                <ul>
                  <li>
                    Your business name, address and phone number on the site
                    match the profile exactly.
                  </li>
                  <li>
                    The pages say what you do and which area you cover, in words
                    a customer would use.
                  </li>
                  <li>The site loads properly on a phone.</li>
                </ul>
                <p>
                  If those are fine, a redesign won't fix a Maps problem. If the
                  site is thin, out of date or hard to use on a phone, then it's
                  worth improving, but it's the last check, not the first.
                </p>
                <h2>Where we come in</h2>
                <p>
                  {
                    "If your profile is sorted and the website is what's letting you down, our "
                  }
                  <a href="/services/web-design">web design</a>
                  {
                    " service builds fast, clear sites by hand. If the profile and local search are the issue, our "
                  }
                  <a href="/services/seo">SEO</a>
                  {
                    " work covers it, and you may well be able to do checks 1 to 4 yourself for free."
                  }
                </p>
              </article>
            </div>
            <nav
              aria-label="More posts"
              className="mt-[60px] grid max-w-[600px] gap-1 lg:mt-[100px]"
            >
              <a
                href="/blog/new-website-or-redesign"
                className="blog-card group relative flex aspect-[600/182] flex-col justify-center overflow-hidden rounded-[14px] bg-[#0a0a0a] px-6 text-ink-1000 lg:px-10 "
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
                />
                <span className="relative text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000/80">
                  Previous
                </span>
                <span className="relative mt-2 max-w-[24ch] text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] text-pretty lg:text-[1.375rem]">
                  Do I need a new website or just a redesign? How to tell which
                </span>
              </a>
              <a
                href="/blog/do-you-own-your-website"
                className="blog-card group relative flex aspect-[600/182] flex-col justify-center overflow-hidden rounded-[14px] bg-[#0a0a0a] px-6 text-ink-1000 lg:px-10 items-end text-right"
              >
                <Image
                  src="/images/blog/do-you-own-your-website/strip.2026-10-28.webp"
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
                  Do you actually own your website? Questions to ask before you
                  sign
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
