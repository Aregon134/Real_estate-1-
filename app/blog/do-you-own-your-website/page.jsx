import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import Image from "next/image";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title: "Do you own your website? Questions to ask before you sign",
  description:
    "Who owns your domain, code and content decides how easily you can leave. The questions to ask a web designer before you sign anything.",
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
                src="/images/blog/do-you-own-your-website/post.2026-10-28-2.webp"
                alt="A leather folio with a contract and fountain pen, brass keys and a laptop showing a website, on a walnut desk."
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
                Do you actually own your website? Questions to ask before you
                sign
              </h1>
              <p className="mt-5 max-w-[46ch] text-[1rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:mt-[30px] lg:text-[1.125rem]">
                Who owns your domain, code and content decides how easily you
                can leave. The questions to ask a web designer before you sign
                anything.
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
                  You own your website when the contract says ownership passes
                  to you, the domain is registered in your name, and you can
                  take your code and content with you if you leave. Paying for a
                  website doesn't, on its own, make it yours. The time to settle
                  this is before you sign, with a handful of plain questions.
                </p>
                <h2>When does the website become yours?</h2>
                <p>
                  In the UK, the person or company that creates a design or
                  writes code usually owns the copyright in it, and transferring
                  that copyright has to be done in writing. Paying the invoice
                  doesn't, by itself, transfer it. So the contract should say,
                  in plain words, that ownership passes to you, and when.
                </p>
                <p>Ask:</p>
                <ul>
                  <li>
                    When does ownership pass to me? On final payment, or at some
                    other point?
                  </li>
                  <li>
                    Is it ownership, or a licence to use the site for as long as
                    I keep paying?
                  </li>
                  <li>
                    Which parts aren't covered (fonts, stock photos, plugins,
                    themes), and what licences come with them?
                  </li>
                </ul>
                <p>
                  Third-party parts are normal. A font or a stock photo is
                  usually licensed rather than owned. What matters is that the
                  licence covers how you use it, and carries on if you change
                  supplier.
                </p>
                <p>
                  This isn't legal advice. If your website is central to your
                  business, it's worth having a solicitor read the contract
                  before you sign.
                </p>
                <h2>Is the domain in your name?</h2>
                <p>
                  Your domain (yourbusiness.co.uk) is the single most important
                  thing to own outright. It's where your website lives, and
                  usually where your email lives too. Whoever controls the
                  domain controls where both of them point.
                </p>
                <p>Check that:</p>
                <ul>
                  <li>
                    you or your company is the registrant, not the designer or
                    their agency
                  </li>
                  <li>
                    you have your own login to the registrar (the company the
                    domain is registered with), or can get one
                  </li>
                  <li>
                    renewal is set up so it can't lapse quietly, and you know
                    who pays and who gets the reminders
                  </li>
                </ul>
                <p>
                  It's fine for a designer to manage the domain day to day. It
                  just needs to be yours on paper, with a way in that doesn't
                  depend on them.
                </p>
                <h2>Hosting, and what you pay for each month</h2>
                <p>
                  Hosting is the computer your website lives on. Somebody pays
                  for it, keeps it updated and fixes it when something breaks.
                  Ask:
                </p>
                <ul>
                  <li>
                    Is hosting included in a monthly fee, or billed separately?
                  </li>
                  <li>
                    What else does the fee cover: security certificate, backups,
                    updates, monitoring?
                  </li>
                  <li>If the site goes down, how quickly is it fixed?</li>
                  <li>
                    If I stop paying the monthly fee, does the site go offline,
                    and can I move it somewhere else?
                  </li>
                </ul>
                <p>
                  The last question matters most. A monthly plan that looks
                  after your site is a service. A monthly plan that's the only
                  thing keeping your site in existence is a different
                  arrangement, and you should know which one you're signing up
                  to.
                </p>
                <h2>Platform lock-in</h2>
                <p>
                  Some websites can only live on the platform they were built
                  on. Hosted website builders are quick and inexpensive to start
                  with, but you usually can't take the design with you. You can
                  export some content, such as blog posts or product lists, and
                  then rebuild elsewhere.
                </p>
                <p>
                  Online shop platforms work in a similar way: the shop runs on
                  the platform, while your products, customers and orders can be
                  exported. That applies to shops we build too. They run on
                  Shopify, which looks after hosting and security, and you pay
                  Shopify's own monthly plan directly, with the shop set up in
                  your name.
                </p>
                <p>
                  None of this is a reason to avoid a platform. It's a reason to
                  know, before you start, what you'd be able to take with you.
                  Ask:
                </p>
                <ul>
                  <li>What is the site built on?</li>
                  <li>
                    If I leave, what can I take (code, content, images), and in
                    what form?
                  </li>
                  <li>Will it run anywhere else, or only here?</li>
                </ul>
                <h2>Access now, and a way out later</h2>
                <p>
                  You should be able to get at your own words, photos and data
                  whenever you like, not only when the relationship ends. Make
                  sure you have:
                </p>
                <ul>
                  <li>copies of all your original photos and logo files</li>
                  <li>
                    a way to change your own text, or a clear process for asking
                  </li>
                  <li>
                    your analytics and Google Search Console set up under your
                    own Google account, with the designer added as a user
                  </li>
                  <li>your Google Business Profile owned by you</li>
                </ul>
                <p>
                  Then ask the designer to walk you through leaving, before
                  you've even started:
                </p>
                <ul>
                  <li>
                    How would I move the domain? For .uk domains this is a tag
                    change; for most others it's an authorisation code.
                  </li>
                  <li>
                    Would I get the code files, and instructions to set them up
                    somewhere else?
                  </li>
                  <li>Is there an exit fee, and how much notice do I give?</li>
                </ul>
                <p>
                  A good answer is specific and in writing. "We'll sort it out
                  if it comes to that" is worth pressing on.
                </p>
                <h2>Where we come in</h2>
                <p>
                  {
                    "With us, ownership of the agreed original work passes to you once the final payment is made. Third-party fonts, software and stock photos keep their own licences, and anything you owned before the project, from your logo to your accounts, stays yours and is never held back. Hosting, the security certificate, backups, updates and monitoring are included on every monthly plan. Or, if you'd rather look after it yourself, choose a handover before the build starts and you get the code files, a written setup guide, and the accounts, training and support set out in your scope. You can compare the options on our "
                  }
                  <a href="/pricing">pricing page</a>.
                </p>
              </article>
            </div>
            <nav
              aria-label="More posts"
              className="mt-[60px] grid max-w-[600px] gap-1 lg:mt-[100px]"
            >
              <a
                href="/blog/why-not-on-google-maps"
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
                  Why doesn't my business show on Google Maps? Check this before
                  blaming your website
                </span>
              </a>
              <a
                href="/blog/five-jobs-to-automate"
                className="blog-card group relative flex aspect-[600/182] flex-col justify-center overflow-hidden rounded-[14px] bg-[#0a0a0a] px-6 text-ink-1000 lg:px-10 items-end text-right"
              >
                <Image
                  src="/images/blog/five-jobs-to-automate/strip.2026-10-28.webp"
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
                  Five jobs you can hand to automation this month
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
