"use client";

import * as React from "react";
import Image from "next/image";
function Elementl({ className: s = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      overflow="visible"
      className={`size-[1.1em] shrink-0 ${s}`}
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M10 5.5v9M5.5 10h9"
        stroke="var(--plus-ink, #fff)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
let n = "/media/showreel.2026-10-29c",
  i = "/images/hero/smoke-wide.2026-10-29.webp",
  a = "0:29",
  m =
    "A reference film showing websites, online stores and automated customer enquiries.";
export const StatementReel = function () {
  let [isPlaying, setIsPlaying] = React.useState(false),
    dialogRef = React.useRef(null);
  return (
    <section
      aria-labelledby="statement-heading"
      className="bg-ink-950 px-gutter pt-16 lg:pt-24"
    >
      <p className="mx-auto mb-6 flex max-w-[68rem] items-center gap-2.5 text-[1rem] font-semibold tracking-[-0.02em] text-ink-0">
        <Elementl />
        {"See it in action"}
      </p>
      <h2 id="statement-heading" className="sr-only">
        {"AI systems, built around your business."}
      </h2>
      <button
        type="button"
        onClick={function () {
          (setIsPlaying(true),
            dialogRef.current?.showModal(),
            window.__lenis?.stop());
        }}
        aria-haspopup="dialog"
        className="reel group relative mx-auto block aspect-[16/9] w-full max-w-[68rem] cursor-pointer overflow-hidden rounded-[26px] bg-ink-0 text-left"
      >
        <Image
          src={i}
          alt=""
          fill={true}
          sizes="(min-width: 1088px) 68rem, 100vw"
          className="reel-still object-cover"
        />
        <span aria-hidden="true" className="absolute inset-0 bg-ink-0/30" />
        <span className="sr-only">
          {"Watch showreel ("}
          {a}
          {", with sound). "}
          {m}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center"
        >
          <span className="reel-pill flex items-center gap-4 rounded-full py-3 pl-3 pr-6 sm:gap-7 sm:py-5 sm:pl-5 sm:pr-9">
            <span className="reel-play grid size-14 shrink-0 place-items-center rounded-full bg-ink-1000 text-ink-0 sm:size-24">
              <svg
                viewBox="0 0 24 24"
                className="ml-[8%] size-[30%]"
                fill="currentColor"
              >
                <path d="M7 4.5v15a.8.8 0 0 0 1.2.7l12.4-7.5a.8.8 0 0 0 0-1.4L8.2 3.8A.8.8 0 0 0 7 4.5z" />
              </svg>
            </span>
            <span className="whitespace-nowrap">
              <span className="block font-figure text-[1.25rem] font-semibold leading-[1.1] tracking-[-0.045em] text-ink-1000 sm:text-[2rem]">
                {"Watch showreel"}
              </span>
              <span className="mt-1 block text-[0.8125rem] font-medium tabular-nums text-ink-1000/60 sm:mt-1.5 sm:text-[1rem]">
                {"("}
                {a}
                {", with sound)"}
              </span>
            </span>
          </span>
        </span>
      </button>
      <dialog
        ref={dialogRef}
        aria-label="The showreel"
        onClose={function () {
          (setIsPlaying(false), window.__lenis?.start());
        }}
        onClick={(s) => {
          s.target === s.currentTarget && s.currentTarget.close();
        }}
        data-lenis-prevent={true}
        className="reel-dialog m-auto w-[min(calc(100vw-2rem),75rem,calc((100dvh-3rem)*16/9))] max-w-none overflow-visible bg-transparent p-0"
      >
        <div className="reel-frame relative aspect-[16/9] w-full overflow-hidden rounded-[26px] bg-ink-0">
          <form
            method="dialog"
            className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4"
          >
            <button
              aria-label="Close showreel"
              className="reel-close grid size-11 place-items-center rounded-full text-ink-1000"
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="size-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              >
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </button>
          </form>
          {isPlaying ? (
            <video
              controls={true}
              autoPlay={true}
              playsInline={true}
              preload="auto"
              poster={i}
              aria-label={m}
              className="absolute inset-0 size-full object-contain"
            >
              <source src={`${n}.mp4`} type="video/mp4" />
              <source src={`${n}.webm`} type="video/webm" />
            </video>
          ) : null}
        </div>
      </dialog>
    </section>
  );
};
