"use client";

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
    <div className="founder-card" {...hold}>
      <div className="founder-identity">
        <Image src={founders[active].photo} alt="" width={48} height={48} />
        <div>
          <p>
            {founders[active].role || founders[active].title} · {brand}
          </p>
          <strong>{founders[active].name}</strong>
        </div>
      </div>
      {founders.length > 1 && (
        <div>
          {founders.map((person, index) => (
            <button
              type="button"
              key={person.name}
              aria-pressed={active === index}
              onClick={() => choose(index)}
            >
              {person.name}
            </button>
          ))}
        </div>
      )}
      <a href={bookingUrl} className="founder-book">
        Book a call <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
};
export const useFounderTurn = a;
