"use client";

import { useEffect, useRef, useState } from "react";
import agency from "@/content/Agency.json";
import styles from "./BookingCalendar.module.css";

const dayMs = 86400000;
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dateKey = (date) => date.toISOString().slice(0, 10);
const indianDay = (instant) =>
  new Date(instant + 330 * 60000).toISOString().slice(0, 10);
const asDate = (key) => new Date(key + "T00:00:00Z");
const formatDate = (date, options) =>
  date.toLocaleDateString("en-IN", { ...options, timeZone: "UTC" });
const times = Array.from({ length: 10 }, (_, i) => 14 * 60 + 30 + i * 15);
function clockTime(minutes, use24 = false) {
  const hour = Math.floor(minutes / 60);
  const minute = String(minutes % 60).padStart(2, "0");
  return use24
    ? hour + ":" + minute
    : (hour % 12 || 12) + ":" + minute + (hour >= 12 ? " pm" : " am");
}
function available(key, minutes, now) {
  const day = asDate(key).getUTCDay();
  return (
    day > 0 && day < 6 && asDate(key).getTime() + (minutes - 330) * 60000 > now
  );
}
function nextDay(now) {
  const first = asDate(indianDay(now));
  for (let offset = 0; offset < 7; offset++) {
    const key = dateKey(new Date(+first + offset * dayMs));
    if (times.some((minutes) => available(key, minutes, now))) return key;
  }
}

export function BookingCalendar() {
  const [now, setNow] = useState(null);
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [minutes, setMinutes] = useState(null);
  const [use24, setUse24] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const sending = useRef(false);
  const formHeading = useRef(null);
  useEffect(() => {
    const time = Date.now();
    const first = nextDay(time);
    setNow(time);
    setDate(first);
    setMonth(first.slice(0, 7));
    const interval = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (minutes !== null) formHeading.current?.focus();
  }, [minutes]);
  if (!now) return <p className={styles.loading}>Loading call times…</p>;

  const first = asDate(month + "-01");
  const lastKey = dateKey(new Date(+asDate(indianDay(now)) + 60 * dayMs));
  const offset = (first.getUTCDay() + 6) % 7;
  const days = new Date(
    Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0),
  ).getUTCDate();
  const shift = (n) =>
    dateKey(
      new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + n, 1)),
    ).slice(0, 7);
  const fullDate = formatDate(asDate(date), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const slots = times.filter((t) => available(date, t, now));
  function changeMonth(n) {
    const next = shift(n);
    setMonth(next);
    const firstChoice = nextDay(
      Math.max(now, +asDate(next + "-01") - 330 * 60000),
    );
    setDate(firstChoice);
  }
  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!available(date, minutes, Date.now())) {
      setError("That time has passed. Please choose another.");
      setNow(Date.now());
      setMinutes(null);
      return;
    }
    const fields = Object.fromEntries(new FormData(form));
    if (
      !fields.name.trim() ||
      !fields.business.trim() ||
      !/^\+?[\d\s().-]{7,24}$/.test(fields.phone) ||
      fields.phone.replace(/\D/g, "").length < 7
    ) {
      setError(
        "Please enter your name, business and a phone number with country code.",
      );
      return;
    }
    sending.current = true;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/" + agency.email,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...fields,
            requested_time:
              fullDate +
              ", " +
              clockTime(minutes) +
              " – " +
              clockTime(minutes + 15) +
              " (Asia/Kolkata)",
            _subject:
              "Ziggloom call request · " +
              date +
              " · " +
              clockTime(minutes) +
              " IST",
            _url: window.location.origin + "/book/",
            _template: "table",
          }),
          signal: AbortSignal.timeout(25000),
        },
      );
      const reply = await response.json();
      if (!response.ok || String(reply.success) !== "true")
        throw new Error("delivery");
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(
        "Email delivery could not be confirmed. Your details are still here. Retry or email " +
          agency.email +
          " directly.",
      );
    } finally {
      sending.current = false;
    }
  }
  return (
    <div className={styles.shell}>
      <aside className={styles.summary}>
        <img src="/icon.svg" width="38" height="38" alt="" />
        <p className={styles.studio}>Ziggloom</p>
        <h1>15-minute call with Kushagra</h1>
        <p>
          Tell me what you’re building and where you need help. Choose a phone
          call or Google Meet and I’ll email you to confirm the time.
        </p>
        <ul>
          <li>15 minutes</li>
          <li>Google Meet or phone</li>
          <li>Asia/Kolkata (IST)</li>
        </ul>
        {minutes !== null && (
          <p className={styles.when}>
            {fullDate}
            <br />
            {clockTime(minutes, use24)} – {clockTime(minutes + 15, use24)}
          </p>
        )}
      </aside>
      {status === "sent" ? (
        <div className={styles.form} role="status">
          <h2>Call request sent</h2>
          <p>
            Kushagra will reply by email to confirm the time and share the call
            details.
          </p>
          <a href="/">Back to Ziggloom</a>
        </div>
      ) : minutes === null ? (
        <>
          <section className={styles.calendar} aria-label="Choose a date">
            <div className={styles.row}>
              <h2 aria-live="polite">
                {formatDate(first, { month: "long", year: "numeric" })}
              </h2>
              <div>
                <button
                  type="button"
                  aria-label="Previous month"
                  disabled={month <= indianDay(now).slice(0, 7)}
                  onClick={() => changeMonth(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next month"
                  disabled={
                    shift(1) > lastKey.slice(0, 7) ||
                    nextDay(+asDate(shift(1) + "-01") - 330 * 60000) > lastKey
                  }
                  onClick={() => changeMonth(1)}
                >
                  ›
                </button>
              </div>
            </div>
            <div className={styles.grid}>
              {weekdays.map((d) => (
                <span key={d}>{d}</span>
              ))}
              {Array.from({ length: offset }, (_, i) => (
                <i key={"blank" + i} />
              ))}
              {Array.from({ length: days }, (_, i) => {
                const key = month + "-" + String(i + 1).padStart(2, "0");
                return (
                  <button
                    key={key}
                    type="button"
                    disabled={
                      key > lastKey ||
                      !times.some((t) => available(key, t, now))
                    }
                    aria-pressed={key === date}
                    aria-label={formatDate(asDate(key), {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                    onClick={() => {
                      setDate(key);
                      setError("");
                    }}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </section>
          <section className={styles.slots} aria-label="Choose a time">
            <div className={styles.row}>
              <h2>
                {formatDate(asDate(date), {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </h2>
              <div>
                {[false, true].map((v) => (
                  <button
                    key={String(v)}
                    type="button"
                    aria-pressed={v === use24}
                    onClick={() => setUse24(v)}
                  >
                    {v ? "24h" : "12h"}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.times}>
              {slots.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => {
                    setMinutes(t);
                    setError("");
                  }}
                >
                  {clockTime(t, use24)}
                </button>
              ))}
            </div>
            {slots.length === 0 && <p>Choose another day for a future time.</p>}
            {error && <p role="alert">{error}</p>}
          </section>
        </>
      ) : (
        <form className={styles.form} onSubmit={submit}>
          <button
            type="button"
            disabled={status === "sending"}
            className={styles.back}
            onClick={() => {
              setMinutes(null);
              setError("");
            }}
          >
            ‹ Change time
          </button>
          <h2 tabIndex={-1} ref={formHeading}>
            Your details
          </h2>
          <label>
            Your name *
            <input name="name" autoComplete="name" maxLength={120} required />
          </label>
          <label>
            Email address *
            <input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>
          <label>
            Phone number *
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={24}
              placeholder="+91"
              required
            />
          </label>
          <fieldset>
            <legend>Location</legend>
            {["Google Meet", "Phone call"].map((v, i) => (
              <label key={v}>
                <input
                  type="radio"
                  name="location"
                  value={v}
                  defaultChecked={i === 0}
                />{" "}
                {v}
              </label>
            ))}
          </fieldset>
          <label>
            Business name *
            <input
              name="business"
              autoComplete="organization"
              maxLength={160}
              required
            />
          </label>
          <label>
            Additional notes
            <textarea
              name="notes"
              rows={3}
              maxLength={2000}
              placeholder="What would you like to discuss?"
            />
          </label>
          <p>
            FormSubmit forwards your request to Kushagra.{" "}
            <a href="/legal/privacy/">Privacy policy</a>
          </p>
          {error && <p role="alert">{error}</p>}
          <button className={styles.submit} disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request call"}
          </button>
        </form>
      )}
    </div>
  );
}
