"use client";

import { useEffect, useState } from "react";

export function useFounderTurn(count) {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    if (
      held ||
      chosen ||
      count < 2 ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % count),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [count, held, chosen]);

  return {
    active,
    choose(index) {
      setActive(index);
      setChosen(true);
    },
    hold: {
      onPointerEnter: () => setHeld(true),
      onPointerLeave: (event) =>
        setHeld(event.currentTarget.contains(document.activeElement)),
      onFocus: () => setHeld(true),
      onBlur: (event) =>
        setHeld(
          event.currentTarget.contains(event.relatedTarget) ||
            event.currentTarget.matches(":hover"),
        ),
    },
  };
}

export function FounderCard({ founders, bookingUrl, brand }) {
  const { active, choose, hold } = useFounderTurn(founders.length);
  const person = founders[active];
  return (
    <div className="founder-card" {...hold}>
      <div className="founder-tile">
        <div className="founder-monogram" aria-hidden="true">
          {person.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
        <div
          className="founder-controls"
          role="group"
          aria-label="Choose a co-founder"
        >
          {founders.map((founder, index) => (
            <button
              key={founder.name}
              type="button"
              aria-label={`Show ${founder.name}`}
              aria-pressed={active === index}
              onClick={() => choose(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
      <div className="founder-details">
        <div className="founder-identity">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              aria-hidden={active !== index}
              className={`founder-slide ${index === active ? "is-on" : ""}`}
            >
              <p>{founder.title}</p>
              <small>
                {founder.role} at {brand}
              </small>
              <strong>{founder.name}</strong>
            </div>
          ))}
        </div>
        <a href={bookingUrl} className="founder-book">
          Book a call <span aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
