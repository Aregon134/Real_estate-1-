"use client";

import { useId, useState } from "react";
import * as RollingLabelModule from "./RollingLabel";
const controlClass =
  "h-12 rounded-[14px] bg-ink-1000 text-[1rem] font-medium tracking-[-0.04em] text-ink-0 outline-none transition-shadow duration-200 focus-visible:shadow-[0_0_0_2px_#0a0a0a]";
export const ProjectBrowser = function ({ items }) {
  const gridId = useId();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const term = query.trim().toLowerCase();
  const matches = items.filter(
    (project) =>
      (category === "all" || category === project.kind) &&
      `${project.title} ${project.sector}`.toLowerCase().includes(term),
  );
  return (
    <>
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            aria-controls={`${gridId}-grid`}
            className={`${controlClass} w-full pl-10 pr-4 placeholder:text-ink-0/50`}
          />
        </label>
        <label className="relative order-1 lg:order-2 lg:w-[150px]">
          <span className="sr-only">{"Category"}</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-controls={`${gridId}-grid`}
            className={`${controlClass} w-full appearance-none pl-4 pr-10`}
          >
            <option value="all">{"Category"}</option>
            <option value="client">{"Client work"}</option>
            <option value="own">{"Studio work"}</option>
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
        {1 === matches.length ? "1 project" : `${matches.length} projects`}
      </p>
      {matches.length ? (
        <ol
          id={`${gridId}-grid`}
          className="mt-1 grid gap-1 md:grid-cols-2 lg:mt-10"
        >
          {matches.map((project) => (
            <li key={project.id}>
              <a href={project.href}>{project.title}</a>
            </li>
          ))}
        </ol>
      ) : (
        <div
          id={`${gridId}-grid`}
          className="mt-1 flex flex-col items-start gap-5 rounded-[18px] bg-ink-1000 p-6 lg:mt-10 lg:p-[30px]"
        >
          <p className="text-[1.125rem] font-medium tracking-[-0.04em]">
            {items.length
              ? "No matching projects."
              : "No projects published yet."}
          </p>
          {(query || category !== "all") && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
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
          )}
        </div>
      )}
    </>
  );
};
