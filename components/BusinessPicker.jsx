"use client";

import * as RollingLabelModule from "./RollingLabel";
import * as React from "react";
export const BusinessPicker = function ({ items, bookingUrl }) {
  let [selectedIndex, setSelectedIndex] = React.useState(0),
    tabRefs = React.useRef([]);
  return (
    <div className="grid gap-6 lg:grid-cols-4 lg:gap-x-1">
      <div
        role="tablist"
        aria-label="Your business"
        aria-orientation="vertical"
        className="flex flex-wrap gap-1.5 lg:col-span-2 lg:block lg:pr-[60px]"
      >
        {items.map((a, n) => {
          let i = n === selectedIndex;
          return (
            <button
              ref={(e) => {
                tabRefs.current[n] = e;
              }}
              id={`biz-tab-${n}`}
              role="tab"
              type="button"
              aria-selected={i}
              aria-controls={`biz-panel-${n}`}
              tabIndex={i ? 0 : -1}
              data-track="AI business chosen"
              data-track-choice={a.name}
              onClick={() => setSelectedIndex(n)}
              onKeyDown={(t) =>
                ((t, a) => {
                  let n =
                    "ArrowDown" === t.key || "ArrowRight" === t.key
                      ? a + 1
                      : "ArrowUp" === t.key || "ArrowLeft" === t.key
                        ? a - 1
                        : null;
                  if (null === n) return;
                  t.preventDefault();
                  let i = (n + items.length) % items.length;
                  (setSelectedIndex(i), tabRefs.current[i]?.focus());
                })(t, n)
              }
              className={`group rounded-full px-3.5 py-2 text-[0.8125rem] font-medium tracking-[-0.04em] transition-colors duration-200 lg:flex lg:w-full lg:items-baseline lg:gap-4 lg:rounded-none lg:border-t lg:border-ink-0/10 lg:px-0 lg:py-[18px] lg:text-left lg:text-[1.875rem] lg:leading-[1.1] lg:last:border-b ${i ? "bg-ink-0 text-ink-1000 lg:bg-transparent lg:text-ink-0" : "bg-ink-1000 text-ink-0 lg:bg-transparent lg:text-ink-0/60 lg:hover:text-ink-0"}`}
              key={a.name}
            >
              <span
                aria-hidden="true"
                className="hidden text-[0.75rem] tabular-nums tracking-[-0.04em] lg:inline"
              >
                {"("}
                {String(n + 1).padStart(2, "0")}
                {")"}
              </span>
              {a.name}
              <span
                aria-hidden="true"
                className={`ml-auto hidden text-[1.25rem] transition-[opacity,transform] duration-200 lg:inline ${i ? "opacity-100" : "-translate-x-2 opacity-0"}`}
              >
                {"→"}
              </span>
            </button>
          );
        })}
      </div>
      <div className="lg:col-span-2">
        {items.map((e, a) => (
          <div
            id={`biz-panel-${a}`}
            role="tabpanel"
            aria-labelledby={`biz-tab-${a}`}
            hidden={a !== selectedIndex}
            className="rounded-[14px] bg-[#0a0a0a] p-6 text-ink-1000 lg:sticky lg:top-[100px] lg:rounded-[18px] lg:p-[40px]"
            key={e.name}
          >
            <p
              className="pp-in text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]"
              style={{
                "--i": 0,
              }}
            >
              {"The problem"}
            </p>
            <p
              className="pp-in mt-3 text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:text-[2rem]"
              style={{
                "--i": 1,
              }}
            >
              {e.problem}
            </p>
            <div
              className="pp-in mt-8 border-t border-ink-1000/10 pt-6 lg:mt-12"
              style={{
                "--i": 2,
              }}
            >
              <p className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]">
                {"How we fix it"}
              </p>
              <p className="mt-3 text-[1rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1.125rem]">
                {e.fix}
              </p>
            </div>
            <div
              className="pp-in mt-8 flex flex-wrap items-center justify-between gap-4 lg:mt-12"
              style={{
                "--i": 3,
              }}
            >
              <a
                href={`#system-${e.system.id}`}
                className="text-[0.875rem] font-medium tracking-[-0.04em]"
              >
                <span className="text-ink-1000/60">{"The system: "}</span>
                <span className="underline decoration-ink-1000/30 underline-offset-[4px]">
                  {e.system.name}
                </span>
                {e.system.price ? (
                  <span className="text-ink-1000/60">
                    {", "}
                    {e.system.price}
                  </span>
                ) : null}
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill inline-flex h-[30px] w-fit items-center gap-5 rounded-full bg-ink-1000 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-[#0a0a0a]"
              >
                <RollingLabelModule.RollingLabel>
                  {"Book a free audit"}
                </RollingLabelModule.RollingLabel>
                <span
                  aria-hidden="true"
                  className="pill-dot size-2 rounded-full bg-[#0a0a0a]"
                />
                <span className="sr-only">{" (opens in a new tab)"}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
