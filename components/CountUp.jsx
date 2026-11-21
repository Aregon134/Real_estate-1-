"use client";

import { Fragment } from "react";
import * as React from "react";
export const CountUp = function ({ value }) {
  let elementRef = React.useRef(null),
    [displayValue, setDisplayValue] = React.useState(value);
  return (
    React.useEffect(() => {
      let e = elementRef.current;
      if (!e || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let t = (e) =>
        value.replace(/\d+(?:\.\d+)?/g, (s) =>
          (Number(s) * e).toFixed(s.split(".")[1]?.length ?? 0),
        );
      setDisplayValue(t(0));
      let l = 0,
        i = new IntersectionObserver(
          ([s]) => {
            if (!s.isIntersecting) return;
            i.disconnect();
            let e = performance.now(),
              r = (s) => {
                let i = Math.min(1, (s - e) / 1200);
                (setDisplayValue(t(1 - (1 - i) ** 4)),
                  i < 1 && (l = requestAnimationFrame(r)));
              };
            l = requestAnimationFrame(r);
          },
          {
            threshold: 0.6,
          },
        );
      return (
        i.observe(e),
        () => {
          (i.disconnect(), cancelAnimationFrame(l));
        }
      );
    }, [value]),
    (
      <Fragment>
        <span ref={elementRef} aria-hidden="true">
          {displayValue}
        </span>
        <span className="sr-only">{value}</span>
      </Fragment>
    )
  );
};
