"use client";

import agency from "@/content/Agency.json";
import * as React from "react";
import * as Navigation from "next/navigation";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
function HeaderContact({ site, className: t = "" }) {
  return (
    <div className={`grid ${t}`}>
      <a
        href={site.phoneHref}
        className="inline-flex min-h-6 items-center text-[1.125rem] font-medium leading-[1.2] tracking-[-0.04em] transition-opacity duration-200 hover:opacity-60"
      >
        {site.phone}
      </a>
      <a
        href={`mailto:${site.email}`}
        className="group inline-flex items-center gap-[7px]"
      >
        <span
          aria-hidden="true"
          className="relative grid size-[18px] shrink-0 place-items-center rounded-full bg-ink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90"
        >
          <span className="absolute h-2 w-0.5 bg-ink-1000" />
          <span className="absolute h-0.5 w-2 bg-ink-1000" />
        </span>
        <span className="relative whitespace-nowrap pb-[3px] text-[min(1.625rem,calc((100vw-4.5rem)/14.2))] font-semibold leading-[1.15] tracking-[-0.05em] lg:text-[2.125rem]">
          {site.email}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-0.5 bg-ink-0 transition-opacity duration-200 group-hover:opacity-0"
          />
        </span>
      </a>
    </div>
  );
}
let e_ = "header-surface-sentinel",
  eN = (e, t) =>
    t.startsWith("/") && !t.includes("#") && (e === t || e.startsWith(`${t}/`));
function ElementeS() {
  return (
    <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-[1.25em] font-normal leading-none tracking-[-0.02em]">
      {agency.name + " "}
      <span className="opacity-55">{"Agency"}</span>
    </span>
  );
}
export const HeaderBar = function ({ nav, site, projectCount, brandMark }) {
  let n = [
      {
        label: "Home",
        href: "/",
      },
      ...nav,
      { label: "Book a call", href: site.bookingUrl },
      {
        label: "Contact",
        href: "/#contact",
      },
    ],
    a = ["/faq", "/ai", "/pricing"],
    i = [
      {
        label: "Home",
        href: "/",
      },
      ...nav.filter((e) => !a.includes(e.href)),
      {
        label: "Book a call",
        href: site.bookingUrl,
      },
    ],
    [m, u] = React.useState(false),
    [p, f] = React.useState(false),
    g = Navigation.usePathname(),
    b = React.useRef(null),
    h = React.useRef(null);
  (React.useEffect(() => {
    let e = document.getElementById(e_),
      t = 0,
      r = () => {
        t = 0;
        let r = e ? e.getBoundingClientRect().top <= 60 : window.scrollY > 24;
        f((e) => (e === r ? e : r));
      },
      o = () => {
        t || (t = requestAnimationFrame(r));
      };
    return (
      r(),
      window.addEventListener("scroll", o, {
        passive: true,
      }),
      window.addEventListener("resize", o, {
        passive: true,
      }),
      () => {
        (t && cancelAnimationFrame(t),
          window.removeEventListener("scroll", o),
          window.removeEventListener("resize", o));
      }
    );
  }, []),
    React.useEffect(() => {
      if (!m) return;
      let e = b.current,
        t = () =>
          Array.from(
            e?.querySelectorAll(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ) ?? [],
          ),
        r = (e) => {
          if ("Escape" === e.key) return void u(false);
          if ("Tab" !== e.key) return;
          let r = h.current,
            o = [...(r ? [r] : []), ...t()];
          if (0 === o.length) return;
          let n = o[0],
            a = o[o.length - 1],
            i = document.activeElement;
          e.shiftKey && (i === n || !o.includes(i))
            ? (e.preventDefault(), a.focus())
            : e.shiftKey || i !== a || (e.preventDefault(), n.focus());
        };
      document.addEventListener("keydown", r);
      let o = document.body.style.overflow;
      ((document.body.style.overflow = "hidden"), t()[0]?.focus());
      let n = h.current;
      return () => {
        (document.removeEventListener("keydown", r),
          (document.body.style.overflow = o),
          n?.focus());
      };
    }, [m]));
  let x = () => u(false),
    w = (e) => (t) => {
      if (
        (x(), "/" === e && "/" === g) &&
        !t.metaKey &&
        !t.ctrlKey &&
        !t.shiftKey &&
        !t.altKey &&
        0 === t.button
      ) {
        let e, r;
        (t.preventDefault(),
          (e = window.scrollY > 5 * window.innerHeight),
          (r = window.__lenis)
            ? r.scrollTo(0, {
                immediate: e,
              })
            : window.scrollTo({
                top: 0,
                behavior: e ? "auto" : "smooth",
              }));
      }
    };
  return (
    <Fragment>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 [view-transition-name:site-header]">
        <div
          className={twMerge(
            "pointer-events-auto relative grid h-[60px] grid-cols-[1fr_auto] items-center px-5 text-ink-0 sm:px-9 lg:grid-cols-3",
            m
              ? "bg-ink-1000 shadow-[0_1px_0_rgb(0_0_0/0.06),0_10px_24px_-12px_rgb(0_0_0/0.28)]"
              : "bg-ink-950",
            m ? null : p && "shadow-[0_1px_0_rgb(0_0_0/0.1)]",
          )}
        >
          <a
            href="/"
            aria-label={`${site.name}, home`}
            onClick={w("/")}
            className="flex min-h-11 items-center text-[0.9rem] font-semibold tracking-[-0.04em] lg:hidden"
          >
            <ElementeS />
          </a>
          <nav
            aria-label="Primary"
            className="relative col-span-3 hidden lg:block"
          >
            <ul className="flex items-center justify-between pr-[100px]">
              {i.map((e) => {
                let o = eN(g, e.href),
                  n =
                    "/portfolio" === e.href ? (
                      <span
                        aria-hidden="true"
                        className="ml-1 inline-block align-top text-[0.625rem] font-medium leading-[1.2]"
                      >
                        {projectCount}
                      </span>
                    ) : null,
                  a = "/" === e.href,
                  i = a ? <ElementeS /> : e.label,
                  s = e.href.startsWith("http");
                return (
                  <li key={e.href}>
                    <a
                      href={e.href}
                      {...(s
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      aria-current={o ? "page" : void 0}
                      aria-label={a ? `${site.name}, home` : void 0}
                      onClick={w(e.href)}
                      className={twMerge(
                        "nav-lift-trigger relative flex min-h-11 items-center transition-colors duration-300",
                        a
                          ? "text-[1.25rem] font-semibold tracking-[-0.045em]"
                          : "text-[1rem] font-semibold tracking-[-0.025em]",
                        s
                          ? "text-accent-ink hover:text-ink-0 focus-visible:text-ink-0"
                          : "text-ink-0",
                      )}
                    >
                      <span className="nav-lift">
                        {i}
                        {n}
                      </span>
                      {s ? (
                        <span className="sr-only">
                          {" (opens in a new tab)"}
                        </span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            ref={h}
            type="button"
            onClick={() => u((e) => !e)}
            aria-expanded={m}
            aria-controls="site-menu"
            className="relative flex h-11 w-[59px] items-center justify-center justify-self-end lg:absolute lg:right-9"
          >
            <span className="sr-only">{m ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-[59px]">
              <span
                className={twMerge(
                  "absolute inset-x-0 top-0 block h-0.5 bg-ink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  m && "translate-y-[5px] rotate-[10deg]",
                )}
              />
              <span
                className={twMerge(
                  "absolute inset-x-0 top-[10px] block h-0.5 bg-ink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  m && "-translate-y-[5px] -rotate-[10deg]",
                )}
              />
            </span>
          </button>
        </div>
      </header>
      {m ? (
        <Fragment>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={x}
            className="menu-dim fixed inset-0 z-40 cursor-default bg-ink-0/35"
          />
          <div
            ref={b}
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            data-lenis-prevent={true}
            className="menu-panel fixed inset-x-0 top-[60px] z-[45] max-h-[calc(100dvh-60px)] overflow-y-auto rounded-b-[22px] bg-ink-1000 text-ink-0 [scrollbar-width:none] sm:rounded-b-[28px]"
          >
            <div className="flex flex-col px-5 pb-[41px] pt-[47px] sm:px-9 lg:min-h-[min(calc(100dvh-60px),48rem)] lg:pb-[35px] lg:pt-12">
              <nav aria-label="Site" className="lg:my-auto lg:py-6">
                <ul className="menu-list flex flex-col items-center">
                  {n.map((e, t) => {
                    let o = eN(g, e.href);
                    return (
                      <li
                        className="menu-item"
                        style={{
                          "--i": t,
                        }}
                        key={e.href}
                      >
                        <a
                          href={e.href}
                          aria-current={o ? "page" : void 0}
                          onClick={w(e.href)}
                          className="relative flex min-h-11 items-center gap-3 text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.05em] transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        >
                          {e.label}
                          {"/portfolio" === e.href ? (
                            <sup
                              aria-hidden="true"
                              className="text-[0.3em] font-semibold tracking-[-0.02em] text-ink-0/55"
                            >
                              {"("}
                              {projectCount}
                              {")"}
                            </sup>
                          ) : null}
                          {o ? (
                            <span
                              aria-hidden="true"
                              className="absolute -left-5 top-1/2 size-2 -translate-y-1/2 rounded-full bg-ink-0"
                            />
                          ) : null}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div
                className="menu-item mt-[68px] grid justify-items-center gap-[33px] text-center lg:mt-0 lg:grid-cols-[1fr_auto_1fr] lg:items-end lg:justify-items-stretch lg:gap-0 lg:text-left"
                style={{
                  "--i": n.length,
                }}
              >
                <HeaderContact
                  site={site}
                  className="justify-items-center gap-[3px] lg:justify-items-start"
                />
                <div className="flex flex-col items-center gap-1.5 text-[0.8125rem] font-medium tracking-[-0.04em] lg:flex-row lg:gap-[42px] lg:text-[0.9375rem]">
                  <a
                    href="/legal/privacy"
                    onClick={x}
                    className="inline-flex min-h-6 items-center transition-opacity duration-200 hover:opacity-60"
                  >
                    {"Privacy Policy"}
                  </a>
                  <a
                    href="/legal/terms"
                    onClick={x}
                    className="inline-flex min-h-6 items-center transition-opacity duration-200 hover:opacity-60"
                  >
                    {"Terms of Service"}
                  </a>
                </div>
                <p className="text-[0.75rem] font-medium tracking-[-0.04em] lg:justify-self-end lg:text-[0.875rem]">
                  {"© "}
                  {new Date().getFullYear()} {site.name}
                  {brandMark}
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
export const HeaderSurfaceSentinel = function () {
  return <div id={e_} aria-hidden="true" />;
};
