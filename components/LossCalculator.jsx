"use client";

import * as React from "react";
let n = "text-[0.8125rem] font-medium tracking-[-0.04em] lg:text-[0.875rem]",
  i = (e) => `\xa3${Math.round(e).toLocaleString("en-GB")}`;
export const LossCalculator = function () {
  let inputId = React.useId(),
    [missedCalls, setMissedCalls] = React.useState(10),
    [conversionRate, setConversionRate] = React.useState(30),
    [customerValue, setCustomerValue] = React.useState(150),
    annualLoss = (conversionRate / 100) * missedCalls * customerValue * 52,
    sliders = [
      {
        id: "missed",
        label: "Missed calls & enquiries a week",
        min: 1,
        max: 100,
        step: 1,
        v: missedCalls,
        set: setMissedCalls,
        show: String(missedCalls),
      },
      {
        id: "rate",
        label: "Share that would have become customers",
        min: 5,
        max: 80,
        step: 5,
        v: conversionRate,
        set: setConversionRate,
        show: `${conversionRate}%`,
      },
      {
        id: "value",
        label: "Average value of a customer",
        min: 20,
        max: 5e3,
        step: 10,
        v: customerValue,
        set: setCustomerValue,
        show: i(customerValue),
      },
    ];
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
      <div className="grid gap-8">
        {sliders.map((a) => (
          <div key={a.id}>
            <div className="flex items-baseline justify-between gap-4">
              <label
                htmlFor={`${inputId}-${a.id}`}
                className={`${n} text-ink-700`}
              >
                {a.label}
              </label>
              <output
                htmlFor={`${inputId}-${a.id}`}
                className="text-[1.125rem] font-semibold tabular-nums tracking-[-0.03em] text-ink-1000"
              >
                {a.show}
              </output>
            </div>
            <input
              id={`${inputId}-${a.id}`}
              type="range"
              min={a.min}
              max={a.max}
              step={a.step}
              value={a.v}
              onChange={(e) => a.set(Number(e.target.value))}
              className="loss-range -mb-[21px] -mt-[5px] w-full"
            />
          </div>
        ))}
        <p className="text-[0.8125rem] leading-relaxed text-ink-600">
          {
            "Your figures, your estimate. Start from a normal week; the defaults are only a starting point."
          }
        </p>
      </div>
      <div className="relative flex flex-col justify-between rounded-[14px] bg-white/[0.04] p-6 lg:rounded-[18px] lg:p-8">
        <div>
          <p className={`${n} text-ink-700`}>
            {"Walking out of the door each year"}
          </p>
          <p
            aria-live="polite"
            className="mt-4 font-figure text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-ink-1000 tabular-nums"
          >
            {i(annualLoss)
              .split(/(,)/)
              .map((e, a) =>
                "," === e ? (
                  <span className="[font-variant-numeric:normal]" key={a}>
                    {","}
                  </span>
                ) : (
                  e
                ),
              )}
          </p>
        </div>
        <p className="mt-10 text-[0.875rem] leading-relaxed text-ink-700">
          {missedCalls}
          {" a week × "}
          {conversionRate}
          {"% × "}
          {i(customerValue)}
          {
            " × 52 weeks. The free audit works out how much of it a system could catch, and whether that is worth more than it costs."
          }
        </p>
      </div>
    </div>
  );
};
