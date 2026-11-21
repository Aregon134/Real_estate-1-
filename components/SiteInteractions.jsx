"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import agency from "@/content/Agency.json";
export function SiteInteractions() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const panel = useRef(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector("a")?.focus();
    function escape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  useEffect(() => {
    let curtain;
    function reset() {
      curtain?.remove();
      curtain = null;
    }
    function navigate(event) {
      const link = event.target.closest?.("a[href]");
      if (
        !link ||
        link.hasAttribute("download") ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        (link.target && link.target !== "_self")
      )
        return;
      const next = new URL(link.href);
      if (
        next.origin !== location.origin ||
        !["https:", "http:"].includes(next.protocol)
      )
        return;
      setOpen(false);
      if (
        next.pathname.replace(/\/$/, "") ===
          location.pathname.replace(/\/$/, "") ||
        matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      event.preventDefault();
      event.stopPropagation();
      if (curtain) return;
      curtain = document.createElement("div");
      curtain.className = "zg-navigation-curtain";
      curtain.setAttribute("aria-hidden", "true");
      const name = document.createElement("span");
      name.textContent = agency.name;
      const tagline = document.createElement("em");
      tagline.textContent = agency.tagline;
      curtain.append(name, tagline);
      document.body.append(curtain);
      curtain
        .animate(
          [
            {
              transform: "translateY(100%)",
            },
            {
              transform: "translateY(0)",
            },
          ],
          {
            duration: 580,
            easing: "cubic-bezier(.65,0,.35,1)",
            fill: "both",
          },
        )
        .finished.then(() => location.assign(next.href))
        .catch(reset);
    }
    document.addEventListener("click", navigate, true);
    window.addEventListener("pageshow", reset);
    return () => {
      document.removeEventListener("click", navigate, true);
      window.removeEventListener("pageshow", reset);
      reset();
    };
  }, [pathname]);
  return (
    <>
      {open && (
        <aside
          ref={panel}
          id="zg-guide"
          aria-label="Ziggloom guide"
          className="zg-guide"
        >
          <strong>Explore Ziggloom</strong>
          <a href="/services/">Our services</a>
          <a href="/pricing/">Project pricing</a>
          <a href="/faq/">Common questions</a>
          <a href="/#contact">Discuss a project</a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              trigger.current?.focus();
            }}
          >
            Close
          </button>
        </aside>
      )}
      <button
        ref={trigger}
        className="zg-guide-trigger"
        aria-expanded={open}
        aria-controls="zg-guide"
        type="button"
        onClick={() => setOpen(!open)}
      >
        Studio guide
      </button>
    </>
  );
}
