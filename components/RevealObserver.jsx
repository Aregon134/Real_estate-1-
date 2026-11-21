"use client";

import * as React from "react";
let n = "[data-reveal]:not([data-in]), [data-text-reveal]:not([data-in])";
export const RevealObserver = function () {
  return (
    React.useEffect(() => {
      let e = (e) => e.setAttribute("data-in", ""),
        t = (e) => {
          let t = [];
          return (
            e instanceof Element && e.matches(n) && t.push(e),
            e.querySelectorAll(n).forEach((e) => t.push(e)),
            t
          );
        };
      if ("u" < typeof IntersectionObserver) return void t(document).forEach(e);
      let r = new IntersectionObserver(
        (t) => {
          for (let n of t)
            n.isIntersecting && (e(n.target), r.unobserve(n.target));
        },
        {
          rootMargin: "0px 0px -12% 0px",
        },
      );
      t(document).forEach((e) => r.observe(e));
      let o = new MutationObserver((e) => {
        for (let n of e)
          n.addedNodes.forEach((e) => {
            e instanceof Element && t(e).forEach((e) => r.observe(e));
          });
      });
      return (
        o.observe(document.body, {
          childList: true,
          subtree: true,
        }),
        () => {
          (r.disconnect(), o.disconnect());
        }
      );
    }, []),
    null
  );
};
