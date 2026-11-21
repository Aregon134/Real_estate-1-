"use client";

import * as ServiceMotionModule from "./ServiceMotion";
import * as React from "react";
function Elementl() {
  return (
    <span
      aria-hidden="true"
      className="btn-arrow relative inline-block size-4 overflow-hidden"
    >
      <svg
        viewBox="0 0 16 16"
        className="btn-arrow-a absolute inset-0 size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="btn-arrow-b absolute inset-0 size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </span>
  );
}
function Elementi({ t: s, className }) {
  return (
    <span
      className={`relative block size-16 shrink-0 overflow-hidden rounded-[12px] bg-ink-900 sm:size-20 ${className}`}
    >
      <ServiceMotionModule.ServiceMotion scene={s.motion} />
    </span>
  );
}
export const ServicesList = function ({ rows, flush = false }) {
  let Heading = flush ? "h2" : "h3",
    [expandedIndex, setExpandedIndex] = React.useState(0),
    listRef = React.useRef(null),
    previousPositions = React.useRef(null);
  return (
    React.useLayoutEffect(() => {
      let s = previousPositions.current;
      ((previousPositions.current = null),
        s &&
          listRef.current &&
          !matchMedia("(prefers-reduced-motion: reduce)").matches &&
          [...listRef.current.children].forEach((e, t) => {
            let r = s[t] - e.getBoundingClientRect().top;
            Math.abs(r) > 1 &&
              e.animate(
                [
                  {
                    transform: `translateY(${r}px)`,
                  },
                  {
                    transform: "none",
                  },
                ],
                {
                  duration: 550,
                  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                },
              );
          }));
    }, [expandedIndex]),
    (
      <ol ref={listRef} className={flush ? "" : "mt-14 lg:mt-20"}>
        {rows.map((s, r) => {
          let n = expandedIndex === r,
            h = `(${String(r + 1).padStart(3, "0")})`;
          return (
            <li
              data-open={n ? "" : void 0}
              className="svc-row group relative grid grid-cols-[3.25rem_minmax(0,1fr)_auto] gap-x-3 py-5 sm:py-6 lg:grid-cols-12 lg:gap-x-6"
              key={s.title}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-ink-1000/10 transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:[clip-path:inset(0_0_0_calc(25%+6px))] lg:group-data-[open]:[clip-path:inset(0)]"
              />
              <span className="pt-1.5 text-[0.8125rem] font-semibold tabular-nums tracking-[-0.01em] text-ink-1000/50 transition-colors duration-300 group-data-[open]:text-ink-1000 lg:col-span-3 lg:text-[0.875rem]">
                {h}
              </span>
              <div
                className={`min-w-0 lg:col-span-5 ${n ? "lg:flex lg:gap-6" : ""}`}
              >
                {n ? (
                  <span
                    aria-hidden="true"
                    className="svc-in mb-5 flex lg:mb-0"
                    style={{
                      "--i": 0,
                    }}
                  >
                    <Elementi t={s.thumbs[0]} className="" />
                    <Elementi
                      t={s.thumbs[1]}
                      className="svc-thumb-2 -ml-5 ring-2 ring-ink-0"
                    />
                  </span>
                ) : null}
                <div className="min-w-0">
                  <Heading>
                    <button
                      type="button"
                      aria-expanded={n}
                      onClick={() => {
                        ((previousPositions.current = [
                          ...(listRef.current?.children ?? []),
                        ].map((s) => s.getBoundingClientRect().top)),
                          setExpandedIndex((s) => (s === r ? null : r)));
                      }}
                      className={`text-left font-semibold tracking-[-0.035em] after:absolute after:inset-0 after:content-[''] focus-visible:outline-none after:rounded-[4px] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-ink-1000/60 ${n ? "text-[1.5rem] leading-[1.1] lg:text-[1.875rem]" : "text-[1.25rem] leading-[1.2] lg:text-[1.375rem]"}`}
                    >
                      {s.title}
                    </button>
                  </Heading>
                  <div hidden={!n}>
                    <p
                      className="svc-in mt-2.5 max-w-[40ch] text-[0.9375rem] leading-[1.5] tracking-[-0.01em] text-ink-1000/60"
                      style={{
                        "--i": 1,
                      }}
                    >
                      {s.line}
                    </p>
                    <a
                      href={s.href}
                      {...(s.href.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="svc-in relative z-[1] mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-ink-1000 pl-4 pr-3.5 text-[0.875rem] font-semibold tracking-[-0.01em] text-ink-0 btn-sweep"
                      style={{
                        "--i": 2,
                      }}
                    >
                      {s.cta ?? "More"}
                      <span className="sr-only">
                        {" about "}
                        {s.title}
                      </span>
                      <Elementl />
                    </a>
                  </div>
                </div>
              </div>
              <div
                hidden={!n}
                className="col-start-2 mt-5 lg:col-span-3 lg:col-start-9 lg:mt-0"
              >
                <p
                  className="svc-in text-[0.75rem] font-semibold tracking-[-0.01em] text-ink-1000/50"
                  style={{
                    "--i": 1,
                  }}
                >
                  {"Includes"}
                </p>
                <ul
                  className="svc-in mt-2.5 flex flex-wrap gap-1.5"
                  style={{
                    "--i": 2,
                  }}
                >
                  {s.tags.map((s) => (
                    <li
                      className="rounded-full bg-ink-1000 px-3 py-1.5 text-[0.75rem] font-semibold tracking-[-0.01em] text-ink-0 lg:text-[0.8125rem]"
                      key={s}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                aria-hidden="true"
                className="col-start-3 row-start-1 grid size-9 place-items-center self-start rounded-full border border-ink-1000/25 lg:col-span-1 lg:col-start-12 lg:size-10 lg:justify-self-end"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                >
                  <path d="M2 8h12" />
                  <path
                    d="M8 2v12"
                    className={`origin-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${n ? "scale-y-0" : ""}`}
                  />
                </svg>
              </span>
            </li>
          );
        })}
      </ol>
    )
  );
};
