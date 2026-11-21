"use client";

import * as React from "react";
export const TiltIn = function ({ children, className: r = "" }) {
  let i = React.useRef(null),
    a = React.useRef(null);
  return (
    React.useEffect(() => {
      let e = i.current,
        t = a.current;
      if (
        !e ||
        !t ||
        !matchMedia(
          "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        ).matches
      )
        return;
      let n = 0,
        r = () => {
          n = 0;
          let r = e.getBoundingClientRect(),
            i =
              1 -
              Math.min(
                1,
                Math.max(
                  0,
                  (innerHeight - r.top) / Math.max(1, innerHeight - 80),
                ),
              );
          t.style.transform = `perspective(1200px) translateY(${(-0.27 * r.height * i).toFixed(1)}px) scale(${(1 + 0.2 * i).toFixed(4)}) rotateX(${(20 * i).toFixed(2)}deg)`;
        },
        o = () => {
          n || (n = requestAnimationFrame(r));
        },
        l = new IntersectionObserver(([e]) => {
          e.isIntersecting
            ? ((t.style.willChange = "transform"),
              addEventListener("scroll", o, {
                passive: true,
              }),
              r())
            : ((t.style.willChange = ""), removeEventListener("scroll", o));
        });
      return (
        l.observe(e),
        r(),
        () => {
          (l.disconnect(),
            removeEventListener("scroll", o),
            cancelAnimationFrame(n));
        }
      );
    }, []),
    (
      <div ref={i} className={r}>
        <div ref={a}>{children}</div>
        <span aria-hidden="true" className="photo-grain" />
      </div>
    )
  );
};
