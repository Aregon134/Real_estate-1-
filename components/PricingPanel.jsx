"use client";

import { Fragment } from "react";
import * as React from "react";
let r = new Intl.NumberFormat("en-IN"),
  i = (
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
      className="size-[18px] shrink-0"
    >
      <circle cx="9" cy="9" r="9" fill="rgb(255 255 255 / 0.1)" />
      <path
        d="M9 5v8M5 9h8"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
function Elementa({ value }) {
  let [i, l] = React.useState(value),
    o = React.useRef(value);
  return (
    React.useEffect(() => {
      let t = o.current;
      if (((o.current = value), t === value)) return;
      let n = 0;
      if (matchMedia("(prefers-reduced-motion: reduce)").matches)
        return (
          (n = requestAnimationFrame(() => l(value))),
          () => cancelAnimationFrame(n)
        );
      let r = performance.now(),
        i = (a) => {
          let o = Math.min(1, (a - r) / 900);
          (l(
            Math.round(
              t + (value - t) * (1 === o ? 1 : 1 - Math.pow(2, -10 * o)),
            ),
          ),
            o < 1 && (n = requestAnimationFrame(i)));
        };
      return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
    }, [value]),
    (<Fragment>{r.format(i)}</Fragment>)
  );
}
export const PricingPanel = function ({ modes, currency }) {
  let [activeModeId, setActiveModeId] = React.useState(modes[0].id),
    [selectedTiers, setSelectedTiers] = React.useState(() =>
      Object.fromEntries(modes.map((e) => [e.id, e.initial])),
    ),
    [m, u] = React.useState({}),
    modeIndex = Math.max(
      0,
      modes.findIndex((e) => e.id === activeModeId),
    ),
    activeMode = modes[modeIndex],
    activeTier =
      activeMode.tiers.find((e) => e.id === selectedTiers[activeMode.id]) ??
      activeMode.tiers[0],
    x = !!m[activeMode.id] && void 0 !== activeMode.addOn.price,
    g = activeMode.cta ?? {
      label: "Get in touch",
      href: "#contact",
    },
    b = g.href.startsWith("http"),
    v = (e) => ({
      "--i": e,
    });
  return (
    React.useEffect(() => {
      let t = () => {
        let t = modes.find((e) => e.anchor && `#${e.anchor}` === location.hash);
        t && setActiveModeId(t.id);
      };
      return (
        t(),
        addEventListener("hashchange", t),
        () => removeEventListener("hashchange", t)
      );
    }, [modes]),
    (
      <div className="mt-10 lg:mt-20">
        {modes.length > 1 ? (
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-1">
            <div
              role="group"
              aria-label="Pricing"
              className="relative inline-grid auto-cols-fr grid-flow-col rounded-full bg-ink-1000/[0.04] p-1 lg:col-start-2 lg:justify-self-start"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-1 left-1 rounded-full bg-ink-1000 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  width: `calc((100% - 8px) / ${modes.length})`,
                  transform: `translateX(${100 * modeIndex}%)`,
                }}
              />
              {modes.map((e) => (
                <button
                  type="button"
                  aria-pressed={e.id === activeModeId}
                  data-track="Pricing tab"
                  data-track-choice={e.label}
                  onClick={() => setActiveModeId(e.id)}
                  className={`relative h-10 whitespace-nowrap rounded-full px-[18px] text-[0.75rem] lg:px-[22px] font-medium tracking-[-0.04em] lg:h-[42px] lg:text-[0.875rem] ${e.id === activeModeId ? "text-[#0a0a0a]" : "text-ink-1000"}`}
                  key={e.id}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <div className="mt-10 grid gap-1 lg:grid-cols-4">
          <div className="flex flex-col rounded-[14px] bg-ink-1000/[0.04] p-6 lg:order-2 lg:col-span-3 lg:min-h-[429px] lg:rounded-[18px] lg:p-[50px]">
            <p className="sr-only" aria-live="polite">
              {null === activeTier.price
                ? `${activeTier.name}: ${activeTier.priceLabel ?? ""} ${activeMode.suffix}`
                : `${activeTier.name}: ${currency}${r.format(activeTier.price)} ${activeMode.suffix.replace("/", "a ")}`}
            </p>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-[120px]">
              <div>
                <p aria-hidden="true" className="flex items-baseline gap-1.5">
                  <span
                    className={`text-[2rem] font-semibold leading-none tabular-nums tracking-[-0.06em] lg:text-[3.5rem] ${null === activeTier.price ? "" : "font-figure"}`}
                  >
                    {null === activeTier.price ? (
                      activeTier.priceLabel
                    ) : (
                      <Fragment>
                        {currency}
                        <Elementa value={activeTier.price} />
                      </Fragment>
                    )}
                  </span>
                  <span className="text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-1000/60 lg:text-[1rem]">
                    {activeMode.suffix}
                  </span>
                </p>
                <p
                  aria-hidden={!x}
                  className={`mt-2 text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-1000/70 transition-opacity duration-300 lg:text-[0.875rem] ${x ? "opacity-100" : "opacity-0"}`}
                >
                  {"+ "}
                  {activeMode.addOn.name}
                  {", "}
                  {currency}
                  {r.format(activeMode.addOn.price ?? 0)}
                  {" a month"}
                </p>
                <div
                  hidden={activeMode.tiers.length < 2}
                  role="group"
                  aria-label={
                    "monthly" === activeMode.id
                      ? "Choose a plan"
                      : "Choose a build"
                  }
                  className="mt-5 flex flex-wrap gap-1 lg:mt-6"
                >
                  {activeMode.tiers.map((e) => (
                    <button
                      type="button"
                      aria-pressed={e.id === activeTier.id}
                      data-track="Pricing choice"
                      data-track-choice={e.name}
                      onClick={() =>
                        setSelectedTiers((t) => ({
                          ...t,
                          [activeMode.id]: e.id,
                        }))
                      }
                      className={`h-[30px] rounded-full px-3 text-[0.75rem] font-semibold tracking-[-0.02em] ${e.id === activeTier.id ? "bg-ink-1000 text-[#0a0a0a]" : "bg-ink-1000/[0.06] text-ink-1000/80 hover:text-ink-1000"}`}
                      key={e.id}
                    >
                      {e.name}
                    </button>
                  ))}
                </div>
                {activeTier.meta ? (
                  <p
                    className="pp-in mt-4 max-w-[40ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]"
                    style={v(0)}
                    key={`${activeTier.id}-meta`}
                  >
                    {activeTier.meta}
                  </p>
                ) : null}
              </div>
              <div>
                {modes.flatMap((e) =>
                  e.tiers.map((n) => (
                    <div
                      hidden={e.id !== activeMode.id || n.id !== activeTier.id}
                      key={`${e.id}-${n.id}`}
                    >
                      <ul className="grid content-start gap-2.5 lg:gap-3">
                        {n.highlights.map((e, n) => (
                          <li
                            className="pp-in flex items-start gap-2.5 text-[0.8125rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1rem]"
                            style={v(Math.min(n + 1, 6))}
                            key={e}
                          >
                            <span className="mt-[0.05em]">{i}</span>
                            {e}
                          </li>
                        ))}
                      </ul>
                      {n.note ? (
                        <p
                          className="pp-in mt-5 max-w-[52ch] text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-1000/60 lg:text-[0.875rem]"
                          style={v(6)}
                        >
                          {n.note}
                        </p>
                      ) : null}
                    </div>
                  )),
                )}
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:mt-auto lg:grid-cols-2 lg:items-end lg:gap-x-[120px] lg:pt-14">
              <dl
                className="flex items-center justify-between border-b border-ink-1000/10 pb-3 text-[0.75rem] font-medium tracking-[-0.04em] lg:text-[0.875rem]"
                key={`${activeTier.id}-row`}
              >
                <dt className="text-ink-1000/60">{activeTier.rowLabel}</dt>
                <dd>{activeTier.rowValue}</dd>
              </dl>
              <a
                href={g.href}
                {...(b
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="btn-sweep flex h-[58px] items-center justify-center rounded-full bg-ink-1000 text-[1rem] font-semibold tracking-[-0.04em] text-[#0a0a0a] lg:text-[1.125rem]"
              >
                {g.label}
                {b ? (
                  <span className="sr-only">{" (opens in a new tab)"}</span>
                ) : null}
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-[14px] bg-ink-1000/[0.04] p-6 lg:order-1 lg:rounded-[18px] lg:p-[50px]">
            <div key={`${activeMode.id}-addon`}>
              <p
                className="pp-in text-[0.9375rem] font-medium leading-[1.3] tracking-[-0.04em] lg:text-[1.125rem]"
                style={v(0)}
              >
                {activeMode.addOn.title}
              </p>
              <p
                className="pp-in mt-[14px] max-w-[24ch] text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-1000/60 lg:text-[1rem]"
                style={v(1)}
              >
                {activeMode.addOn.text}
              </p>
            </div>
            <div
              hidden={void 0 === activeMode.addOn.price}
              className="mt-8 flex items-center gap-5"
            >
              <span
                className={`font-figure text-[1.6875rem] font-semibold leading-none tabular-nums tracking-[-0.06em] transition-opacity duration-300 ${x ? "opacity-100" : "opacity-60"}`}
              >
                {"+"}
                {currency}
                {r.format(activeMode.addOn.price ?? 0)}
                <span className="ml-1 font-sans text-[0.8125rem] font-medium tracking-[-0.04em] text-ink-1000/60">
                  {"/month"}
                </span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={x}
                aria-label={`Add the ${activeMode.addOn.name}`}
                data-track={x ? "Add-on removed" : "Add-on added"}
                data-track-choice={activeMode.addOn.name}
                onClick={() =>
                  u((e) => ({
                    ...e,
                    [activeMode.id]: !e[activeMode.id],
                  }))
                }
                className="relative h-11 w-[76px] shrink-0 rounded-full bg-ink-1000/20"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-full bg-ink-1000 transition-opacity duration-300 ${x ? "opacity-100" : "opacity-0"}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-1 top-1 size-[34px] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${x ? "translate-x-8 bg-[#131313]" : "bg-ink-1000"}`}
                />
              </button>
            </div>
          </div>
        </div>
        {activeMode.note ? (
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-1">
            {"string" == typeof activeMode.note ? (
              <p
                className="pp-in mt-6 max-w-[62ch] text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-1000/60 lg:col-span-3 lg:col-start-2 lg:mt-8 lg:text-[0.9375rem]"
                style={v(0)}
                key={`${activeMode.id}-note`}
              >
                {activeMode.note}
              </p>
            ) : (
              <ul
                className="mt-6 grid gap-x-10 gap-y-2.5 lg:col-span-3 lg:col-start-2 lg:mt-8 lg:grid-cols-2"
                key={`${activeMode.id}-note`}
              >
                {activeMode.note.map((e, n) => (
                  <li
                    className="pp-in max-w-[62ch] text-[0.8125rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink-1000/60 lg:text-[0.9375rem]"
                    style={v(n)}
                    key={e}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}
      </div>
    )
  );
};
