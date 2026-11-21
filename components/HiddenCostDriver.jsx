"use client";

import * as React from "react";
export const HiddenCostDriver = function ({ id: s }) {
  return (
    React.useEffect(() => {
      let e = document.getElementById(s);
      if (!e) return;
      let t = Array.from(e.querySelectorAll("[data-hc-chip]")),
        r = Array.from(
          e.querySelectorAll(".hc-title, .hc-title-2, .hc-slot, .hc-ring"),
        ),
        l = "",
        n = matchMedia("(prefers-reduced-motion: no-preference)"),
        i = 0,
        a = 0,
        m = -1,
        o = false,
        c = 0,
        d = 0,
        h = () => {
          var s;
          let n, i, o, x, u, p;
          ((d += (c - d) * 0.085),
            4e-4 > Math.abs(c - d) && (d = c),
            (n = (s = d).toFixed(4)) !== l &&
              r.forEach((s) => s.style.setProperty("--hcp", (l = n))),
            (i = t.length),
            (p =
              100 *
                (o =
                  s < 0.12
                    ? 0
                    : Math.min(i, 1 + Math.floor((s - 0.12) / 0.076))) +
              10 *
                (x =
                  s < 0.54
                    ? 0
                    : Math.min(i, 1 + Math.floor((s - 0.54) / 0.056))) +
              +!!(u = s >= 0.88)) !== m &&
              ((m = p),
              t.forEach((s, e) => {
                (s.toggleAttribute("data-on", o > e),
                  s.toggleAttribute("data-fixed", x > e));
              }),
              e.toggleAttribute("data-resolved", u)),
            (a = d === c ? 0 : requestAnimationFrame(h)));
        },
        x = () => {
          i = 0;
          let s = e.getBoundingClientRect(),
            t = s.height - window.innerHeight;
          ((c = t > 0 ? Math.min(1, Math.max(0, -s.top / t)) : 0),
            a || (a = requestAnimationFrame(h)));
        },
        u = () => {
          i || (i = requestAnimationFrame(x));
        },
        p = (s) => {
          s !== o &&
            ((o = s),
            s
              ? window.addEventListener("scroll", u, {
                  passive: true,
                })
              : window.removeEventListener("scroll", u),
            e.toggleAttribute("data-active", s));
        },
        k = new IntersectionObserver(([s]) => {
          (p(s.isIntersecting), s.isIntersecting && x());
        }),
        j = () => {
          (k.disconnect(),
            p(false),
            n.matches
              ? (e.setAttribute("data-pinned", ""), k.observe(e))
              : (e.removeAttribute("data-pinned"),
                r.forEach((s) => s.style.removeProperty("--hcp")),
                (l = "")));
        };
      return (
        j(),
        n.addEventListener("change", j),
        () => {
          (n.removeEventListener("change", j),
            k.disconnect(),
            p(false),
            cancelAnimationFrame(i),
            cancelAnimationFrame(a));
        }
      );
    }, [s]),
    null
  );
};
