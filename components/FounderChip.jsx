"use client";

import * as FounderCardModule from "./FounderCard";
import Image from "next/image";
export const FounderChip = function ({ people }) {
  let { active, choose, hold } = FounderCardModule.useFounderTurn(
    people.length,
  );
  return (
    <div className="mt-7 flex items-center gap-3.5 lg:mt-[41px]" {...hold}>
      <Image
        src={people[active].photo}
        style={{ objectPosition: people[active].focus }}
        alt=""
        width={42}
        height={42}
        className="size-[42px] shrink-0 rounded-full object-cover"
      />
      <div className="grid">
        {people.map((e, r) => (
          <div
            aria-hidden={r !== active}
            className={`founder-slide [grid-area:1/1] ${r === active ? "is-on" : ""}`}
            key={e.name}
          >
            <p className="whitespace-nowrap text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] lg:text-[1rem]">
              {e.name}
            </p>
            <p className="whitespace-nowrap text-[0.75rem] font-medium leading-[1.3] tracking-[-0.04em] text-ink-0/60 lg:text-[0.875rem]">
              {e.role}
            </p>
          </div>
        ))}
      </div>
      {people.length > 1 ? (
        <div className="flex">
          {people.map((e, r) => (
            <button
              type="button"
              aria-label={`Show ${e.name}`}
              aria-pressed={r === active}
              onClick={() => choose(r)}
              className="grid size-6 place-items-center"
              key={e.name}
            >
              <span
                className={`block size-1.5 rounded-full transition-colors duration-200 ${r === active ? "bg-ink-0" : "bg-ink-0/25"}`}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};
