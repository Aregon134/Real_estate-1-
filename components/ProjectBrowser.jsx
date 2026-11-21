"use client";

import { Fragment } from "react";
import * as RollingLabelModule from "./RollingLabel";
import * as React from "react";
let o =
  "h-12 rounded-[14px] bg-ink-1000 text-[1rem] font-medium tracking-[-0.04em] text-ink-0 outline-none transition-shadow duration-200 focus-visible:shadow-[0_0_0_2px_#0a0a0a]";
export const ProjectBrowser = function ({ items }) {
  let l = React.useId(),
    [i, a] = React.useState(""),
    [u, s] = React.useState("all"),
    c = i.trim().toLowerCase(),
    f = items.filter(
      (e) =>
        ("all" === u || u === e.kind) &&
        (!c || `${e.title} ${e.sector}`.toLowerCase().includes(c)),
    );
  return (
    <Fragment>
      <div className="mt-[30px] flex flex-col gap-1 lg:mt-[86px] lg:flex-row">
        <label className="relative order-2 lg:order-1 lg:w-[270px]">
          <span className="sr-only">{"Search projects"}</span>
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 size-3.5 -translate-y-1/2 text-ink-0/50"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
          >
            <circle cx="7" cy="7" r="5" />
            <path d="M11 11l3.5 3.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={i}
            onChange={(e) => a(e.target.value)}
            placeholder="Search..."
            aria-controls={`${l}-grid`}
            className={`${o} w-full pl-10 pr-4 placeholder:text-ink-0/50`}
          />
        </label>
        <label className="relative order-1 lg:order-2 lg:w-[150px]">
          <span className="sr-only">{"Category"}</span>
          <select
            value={u}
            onChange={(e) => s(e.target.value)}
            aria-controls={`${l}-grid`}
            className={`${o} w-full appearance-none pl-4 pr-10`}
          >
            <option value="all">{"Category"}</option>
            <option value="client">{"Client work"}</option>
            <option value="own">{"Reference store"}</option>
            <option value="concept">{"Concepts"}</option>
          </select>
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 size-3.5 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </label>
      </div>
      <p role="status" className="sr-only">
        {1 === f.length ? "1 project" : `${f.length} projects`}
      </p>
      {f.length ? (
        <ol
          id={`${l}-grid`}
          className="mt-1 grid gap-1 md:grid-cols-2 lg:mt-10"
        >
          {f.map((e) => (
            <li key={e.id}>{e.card}</li>
          ))}
        </ol>
      ) : (
        <div
          id={`${l}-grid`}
          className="mt-1 flex flex-col items-start gap-5 rounded-[18px] bg-ink-1000 p-6 lg:mt-10 lg:p-[30px]"
        >
          <p className="text-[1.125rem] font-medium tracking-[-0.04em]">
            {"No projects match that."}
          </p>
          <button
            type="button"
            onClick={() => {
              (a(""), s("all"));
            }}
            className="pill inline-flex h-[30px] items-center gap-5 rounded-full bg-ink-0 pl-3 pr-[11px] text-[0.75rem] font-semibold tracking-[-0.04em] text-ink-1000"
          >
            <RollingLabelModule.RollingLabel>
              {"Show all projects"}
            </RollingLabelModule.RollingLabel>
            <span
              aria-hidden="true"
              className="pill-dot size-2 rounded-full bg-ink-1000"
            />
          </button>
        </div>
      )}
    </Fragment>
  );
};
