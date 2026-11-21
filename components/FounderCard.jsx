"use client";

import * as RollingLabelModule from "./RollingLabel";
import * as React from "react";
import Image from "next/image";
function a(e) {
  let [t, r] = React.useState(0),
    [n, a] = React.useState(false),
    [i, l] = React.useState(false);
  return (
    React.useEffect(() => {
      if (
        i ||
        n ||
        e < 2 ||
        matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      let t = window.setInterval(() => r((t) => (t + 1) % e), 6e3);
      return () => window.clearInterval(t);
    }, [i, n, e]),
    {
      active: t,
      choose: (e) => {
        (r(e), l(true));
      },
      hold: {
        onPointerEnter: () => a(true),
        onPointerLeave: () => a(false),
        onFocus: () => a(true),
        onBlur: () => a(false),
      },
    }
  );
}
export const FounderCard = function ({ founders, bookingUrl, brand }) {
  let { active, choose, hold } = a(founders.length);
  return (
    <div className="group/fc relative isolate flex w-full" {...hold}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[16px] bg-ink-1000 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/fc:opacity-100 group-hover/fc:opacity-100"
      />
      <div className="relative w-[125px] shrink-0 overflow-hidden rounded-[16px] bg-ink-1000">
        {founders.map((e, o) => (
          <Image
            src={e.photo}
            alt={o === active ? e.name : ""}
            aria-hidden={o !== active}
            width={339}
            height={522}
            sizes="113px"
            style={{
              objectPosition: e.focus ?? "50% 25%",
            }}
            className={`founder-slide absolute inset-1.5 h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-[12px] object-contain p-4 ${o === active ? "is-on" : ""}`}
            key={e.name}
          />
        ))}
        {founders.length > 1 ? (
          <div className="absolute inset-x-0 bottom-2 flex justify-center">
            {founders.map((e, r) => (
              <button
                type="button"
                aria-label={`Show ${e.name}`}
                aria-pressed={r === active}
                onClick={() => choose(r)}
                className="grid size-7 place-items-center"
                key={e.name}
              >
                <span
                  className={`block size-1.5 rounded-full shadow-[0_0_0_1px_rgb(0_0_0/0.25)] transition-colors duration-200 ${r === active ? "bg-ink-1000" : "bg-ink-1000/45"}`}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="@container relative min-w-0 flex-1 rounded-[16px] bg-ink-1000 p-6 text-ink-0">
        <div className="grid">
          {founders.map((e, r) => (
            <div
              aria-hidden={r !== active}
              className={`founder-slide [grid-area:1/1] ${r === active ? "is-on" : ""}`}
              key={e.name}
            >
              <p className="whitespace-nowrap text-[0.875rem] font-semibold leading-none tracking-[-0.04em]">
                {e.role || e.title}
              </p>
              <p className="mt-1 whitespace-nowrap text-[0.75rem] font-semibold leading-[1.1] tracking-[-0.04em] text-ink-0/60">
                {brand}
              </p>
              <p className="mt-1.5 whitespace-nowrap text-[1.375rem] font-semibold leading-[1.15] tracking-[-0.04em]">
                {e.name.split(" ")[0]} <br className="@min-[9rem]:hidden" />
                {e.name.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group -mb-[7px] mt-[13px] inline-flex h-11 items-center"
        >
          <span className="pill inline-flex h-[30px] items-center gap-5 whitespace-nowrap rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-px group-active:translate-y-0">
            <RollingLabelModule.RollingLabel>
              {"Book a call"}
            </RollingLabelModule.RollingLabel>
            <span
              aria-hidden="true"
              className="pill-dot size-2 rounded-full bg-ink-1000"
            />
          </span>
          <span className="sr-only">{" (opens in a new tab)"}</span>
        </a>
      </div>
    </div>
  );
};
export const useFounderTurn = a;
