"use client";

import * as SmokeCanvasModule from "./SmokeCanvas";
import * as FounderCardModule from "./FounderCard";
import * as React from "react";
function Elementl({ id: e, show, children }) {
  return (
    <p
      id={e}
      aria-live="polite"
      className={`mt-2 min-h-[1.125rem] text-xs leading-[1.125rem] transition-opacity duration-300 ${show ? "text-ink-0/70 opacity-100" : "opacity-0"}`}
    >
      {show ? children : " "}
    </p>
  );
}
export const ContactForm = function ({ site, founders }) {
  let [c, d] = React.useState("idle"),
    [detailsOpen, setDetailsOpen] = React.useState(false),
    detailsButton = React.useRef(null),
    detailsPanel = React.useRef(null),
    closeDetails = () => {
      (setDetailsOpen(false),
        requestAnimationFrame(() => detailsButton.current?.focus()));
    },
    [message, setMessage] = React.useState(""),
    [invalidFields, setInvalidFields] = React.useState({}),
    [contactProvided, setContactProvided] = React.useState({
      email: false,
      phone: false,
    }),
    [contactPreference, setContactPreference] = React.useState(""),
    prefersContact = (e) =>
      "email" === e
        ? "email" === contactPreference
        : "text" === contactPreference;
  function checkField(e) {
    let t = e.currentTarget;
    ("email" !== t.name || t.value || prefersContact("email")) &&
      setInvalidFields((e) => ({
        ...e,
        [t.name]: !t.validity.valid,
      }));
  }
  function updateField(e) {
    let t = e.currentTarget;
    if ("email" === t.name || "phone" === t.name) {
      let e = "" !== t.value.trim();
      setContactProvided((n) =>
        n[t.name] === e
          ? n
          : {
              ...n,
              [t.name]: e,
            },
      );
      let n = t.form?.elements.namedItem(
        "email" === t.name ? "phone" : "email",
      );
      e &&
        n instanceof HTMLInputElement &&
        !n.value &&
        !prefersContact(n.name) &&
        setInvalidFields((e) => ({
          ...e,
          [n.name]: false,
        }));
    }
    invalidFields[t.name] &&
      t.validity.valid &&
      setInvalidFields((e) => ({
        ...e,
        [t.name]: false,
      }));
  }
  function openEmailDraft(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = Array.from(new FormData(form)).filter(
      ([key, value]) => value && key !== "website",
    );
    const body = fields
      .map(([label, value]) => label + ": " + value)
      .join("\n");
    location.href =
      "mailto:" +
      site.email +
      "?subject=Project%20enquiry&body=" +
      encodeURIComponent(body);
    setMessage("Review and send your enquiry in your email app.");
  }
  let inputClass =
      "field-fill mt-2 block w-full min-h-[58px] rounded-[10px] bg-ink-950 px-4 py-4 text-[1rem] font-medium tracking-[-0.04em] text-ink-0 placeholder:text-ink-0/45 lg:text-[1.125rem]",
    labelClass =
      "block text-[0.75rem] font-medium tracking-[-0.04em] text-ink-0",
    budgets = [
      ["under-13990", `Under ${site.currencySymbol}13,990`],
      [
        "13990-30000",
        `${site.currencySymbol}13,990 – ${site.currencySymbol}30,000`,
      ],
      [
        "30000-44500",
        `${site.currencySymbol}30,000 – ${site.currencySymbol}44,500`,
      ],
      ["44500+", `${site.currencySymbol}44,500+`],
      ["unsure", "Not sure yet"],
    ],
    renderChoices = (e, n, r) => (
      <div className="flex flex-wrap gap-2">
        {n.map(([n, i]) => (
          <label
            className="relative flex min-h-11 cursor-pointer items-center justify-center rounded-full border border-ink-0/15 px-4 text-center text-[0.8125rem] font-semibold text-ink-0/75 transition-colors duration-200 hover:border-ink-0/40 hover:text-ink-0 has-[:checked]:border-ink-0 has-[:checked]:bg-ink-0 has-[:checked]:text-ink-1000 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink-0"
            key={n}
          >
            <input
              type="radio"
              name={e}
              value={n}
              className="sr-only"
              onChange={r ? () => r(n) : void 0}
            />
            {i}
          </label>
        ))}
      </div>
    ),
    renderField = (e, n, r, i) => (
      <div>
        <label htmlFor={e} className={labelClass}>
          {n}
        </label>
        <input
          id={e}
          name={e}
          type="text"
          maxLength={200}
          autoComplete={i}
          className={inputClass}
          placeholder={r}
        />
        <div aria-hidden="true" className="mt-2 min-h-[1.125rem]" />
      </div>
    ),
    M = new Date().getFullYear();
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="cv-below scroll-mt-14 bg-ink-950 pt-[50px] [--cis:2000px] lg:px-1.5 lg:pt-[190px] lg:[--cis:1350px]"
    >
      <div className="relative isolate overflow-hidden bg-ink-0 lg:rounded-[25px]">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="hero-ground absolute inset-0" />
          <SmokeCanvasModule.SmokeCanvas />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-0/20 via-transparent to-ink-0/50" />
        </div>
        <div className="relative grid px-5 py-[50px] lg:grid-cols-4 lg:gap-x-1 lg:px-[30px] lg:py-[200px]">
          <div className="flex flex-col lg:col-span-2">
            <div className="relative overflow-hidden rounded-[12px] bg-ink-1000 p-[30px] text-ink-0 lg:max-w-[471px] lg:rounded-[18px] lg:p-10">
              <p className="text-[1.125rem] font-semibold tracking-[-0.04em] lg:text-[1.25rem]">
                {site.name}
                {site.brandMark}
              </p>
              <p className="mt-1.5 text-[1.5rem] font-semibold leading-[1.1] tracking-[-0.05em] lg:mt-2.5 lg:text-[2.375rem]">
                {"Have a project "}
                <span className="text-ink-0/60">{"in mind?"}</span>
              </p>
              <form
                onSubmit={openEmailDraft}
                className="mt-6 lg:mt-8"
                noValidate={false}
              >
                <div inert={detailsOpen} className="space-y-4">
                  <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="company-website">
                      {"Leave this empty"}
                    </label>
                    <input
                      id="company-website"
                      name="company-website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      {"Your name*"}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required={true}
                      maxLength={200}
                      autoComplete="name"
                      aria-invalid={invalidFields.name || void 0}
                      aria-describedby={
                        invalidFields.name ? "name-hint" : void 0
                      }
                      onBlur={checkField}
                      onInvalid={checkField}
                      onInput={updateField}
                      className={inputClass}
                      placeholder="Jane Smith"
                    />
                    <Elementl id="name-hint" show={invalidFields.name}>
                      {"We need a name to reply to."}
                    </Elementl>
                  </div>
                  <div className="grid gap-x-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        {"Email"}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required={
                          prefersContact("email") || !contactProvided.phone
                        }
                        maxLength={200}
                        autoComplete="email"
                        aria-invalid={invalidFields.email || void 0}
                        aria-describedby={
                          invalidFields.email ? "email-hint" : void 0
                        }
                        onBlur={checkField}
                        onInvalid={checkField}
                        onInput={updateField}
                        className={inputClass}
                        placeholder="you@business.com"
                      />
                      <Elementl id="email-hint" show={invalidFields.email}>
                        {contactProvided.email
                          ? "That address needs an @ and a domain, so the reply reaches you."
                          : "Add your email, so we can reply by email."}
                      </Elementl>
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        {"Phone"}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required={
                          prefersContact("phone") || !contactProvided.email
                        }
                        pattern="[0-9+\\(\\)\\s\\-]{7,20}"
                        maxLength={20}
                        autoComplete="tel"
                        aria-invalid={invalidFields.phone || void 0}
                        aria-describedby={
                          invalidFields.phone ? "phone-hint" : void 0
                        }
                        onBlur={checkField}
                        onInvalid={checkField}
                        onInput={updateField}
                        className={inputClass}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <Elementl id="phone-hint" show={invalidFields.phone}>
                        {contactProvided.phone
                          ? "That number does not look right: digits, spaces and + only."
                          : "text" === contactPreference
                            ? "Add a mobile number, so we can text you."
                            : "Add an email or a phone number, so we can reply."}
                      </Elementl>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="brief" className={labelClass}>
                      {"What do you need?*"}
                    </label>
                    <textarea
                      id="brief"
                      name="brief"
                      required={true}
                      rows={3}
                      aria-invalid={invalidFields.brief || void 0}
                      aria-describedby={
                        invalidFields.brief ? "brief-hint" : void 0
                      }
                      onBlur={checkField}
                      onInvalid={checkField}
                      onInput={updateField}
                      className={`${inputClass} resize-none`}
                      placeholder="A sentence or two is plenty."
                    />
                    <Elementl id="brief-hint" show={invalidFields.brief}>
                      {"One line about the project is plenty."}
                    </Elementl>
                  </div>
                  <button
                    ref={detailsButton}
                    type="button"
                    onClick={() => {
                      (setDetailsOpen(true),
                        requestAnimationFrame(() =>
                          detailsPanel.current?.focus(),
                        ));
                    }}
                    aria-expanded={detailsOpen}
                    aria-controls="contact-more"
                    className="flex min-h-12 w-full items-center justify-between gap-4 rounded-[12px] border border-ink-0/10 px-4 text-left text-[0.875rem] font-semibold tracking-[-0.01em] transition-colors duration-200 hover:border-ink-0/25"
                  >
                    <span>
                      {"Add more detail "}
                      <span className="font-medium text-ink-0/55">
                        {"(optional)"}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-6 place-items-center rounded-full bg-ink-0 text-ink-1000"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="size-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </button>
                  <p className="text-[0.75rem] leading-relaxed text-ink-0/60">
                    {
                      "We use what you send here to reply to you, and nothing else. No mailing list, no third parties."
                    }{" "}
                    <a
                      href="/legal/privacy"
                      className="font-semibold text-ink-0 underline underline-offset-4"
                    >
                      {"How we handle your information"}
                    </a>
                    {"."}
                  </p>
                  <button
                    type="submit"
                    disabled={"sending" === c || "sent" === c}
                    className="btn-sweep flex h-[58px] w-full items-center justify-center rounded-full bg-[#0a0a0a] text-[1rem] font-semibold tracking-[-0.04em] text-ink-1000 disabled:pointer-events-none disabled:opacity-50 lg:text-[1.125rem]"
                  >
                    {"sending" === c ? "Sending…" : "Open email draft"}
                  </button>
                  <p
                    aria-live="polite"
                    className="min-h-[1.25rem] text-[0.875rem] text-ink-0"
                  >
                    {message}
                  </p>
                </div>
                <div
                  id="contact-more"
                  hidden={!detailsOpen}
                  role="group"
                  aria-labelledby="contact-more-title"
                  onKeyDown={(e) => {
                    "Escape" === e.key && closeDetails();
                  }}
                  className="more-in absolute inset-0 z-10 flex flex-col bg-ink-1000"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-ink-0/10 px-6 py-5 sm:px-9">
                    <p
                      id="contact-more-title"
                      ref={detailsPanel}
                      tabIndex={-1}
                      className="text-[1.125rem] font-semibold tracking-[-0.03em] outline-none"
                    >
                      {"More detail "}
                      <span className="font-medium text-ink-0/50">
                        {"(optional)"}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={closeDetails}
                      className="inline-flex h-10 items-center rounded-full bg-ink-0 px-5 text-[0.8125rem] font-semibold text-ink-1000 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px"
                    >
                      {"Done"}
                    </button>
                  </div>
                  <div
                    data-lenis-prevent={true}
                    className="flex-1 space-y-5 overflow-y-auto px-6 py-6 [scrollbar-width:thin] sm:px-9"
                  >
                    {renderField(
                      "business",
                      "What does your business do?",
                      "A bridal boutique in India",
                    )}
                    <fieldset>
                      <legend className={`mb-3 ${labelClass}`}>
                        {"How would you like us to contact you?"}
                      </legend>
                      {renderChoices(
                        "contact",
                        [
                          ["email", "Email"],
                          ["text", "Text"],
                        ],
                        (e) => {
                          (setContactPreference(e),
                            setInvalidFields((e) => ({
                              ...e,
                              email: false,
                              phone: false,
                            })));
                        },
                      )}
                    </fieldset>
                    <fieldset>
                      <legend className={`mb-3 ${labelClass}`}>
                        {"Approximate budget"}
                      </legend>
                      {renderChoices("budget", budgets)}
                    </fieldset>
                    <fieldset>
                      <legend className={`mb-3 ${labelClass}`}>
                        {
                          "Do you already have a logo, photos and your own text?"
                        }
                      </legend>
                      {renderChoices("assets", [
                        ["yes", "Yes"],
                        ["some", "Some"],
                        ["no", "No"],
                      ])}
                    </fieldset>
                    {renderField(
                      "decision",
                      "Who will make the final decision?",
                      "Me, a partner, a board",
                    )}
                    {renderField(
                      "referral",
                      "Did someone refer you to us?",
                      "Their name",
                    )}
                  </div>
                </div>
              </form>
            </div>
            <p className="mt-8 hidden text-[0.875rem] font-medium tracking-[-0.04em] text-ink-1000 lg:mt-[100px] lg:block">
              {"© "}
              {M} {site.name}
              {site.brandMark}
            </p>
          </div>
          <div className="mt-[50px] flex flex-col text-ink-1000 lg:col-span-2 lg:col-start-3 lg:mt-0">
            <h2
              id="contact-heading"
              data-reveal="mask"
              className="text-[clamp(3.875rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
            >
              {"Let’s talk."}
            </h2>
            <p className="mt-6 max-w-[560px] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.04em] lg:mt-[70px] lg:text-[1.875rem]">
              {"Tell us what’s not working"}{" "}
              <span className="text-ink-1000/60">
                {"and we’ll tell you straight whether we can fix it."}
              </span>
            </p>
            <h3 className="sr-only">{"What happens next"}</h3>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 border-t border-ink-1000/15 pt-8 lg:mt-16 lg:gap-x-1 lg:pt-16">
              {[
                {
                  title: "Quick response.",
                  body: "Kushagra will reply to discuss the brief and agree a time.",
                  icon: "M4 15a8 8 0 1 1 16 0M12 15l4.5-4.5M7 18h10",
                },
                {
                  title: "Clear next steps.",
                  body: "After the call, the scope and a fixed price in writing, before anything starts.",
                  icon: "M3 18h4v-4h4v-4h4V6h6",
                },
              ].map((e) => (
                <li className="lg:pr-10" key={e.title}>
                  <p className="flex items-center gap-2.5 text-[0.9375rem] font-semibold tracking-[-0.04em] lg:gap-3 lg:text-[1.125rem]">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-4 shrink-0 lg:size-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={e.icon} />
                    </svg>
                    {e.title}
                  </p>
                  <p className="mt-3 text-[0.8125rem] font-medium leading-[1.4] tracking-[-0.04em] text-ink-1000/60 lg:mt-6 lg:text-[0.9375rem]">
                    {e.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10 w-full max-w-[410px] lg:mt-[110px]">
              <FounderCardModule.FounderCard
                founders={founders}
                bookingUrl={site.bookingUrl}
                brand={`Ziggloom${site.brandMark}`}
              />
            </div>
            <p className="mt-10 text-[0.75rem] font-medium tracking-[-0.04em] text-ink-1000 lg:hidden">
              {"© "}
              {M} {site.name}
              {site.brandMark}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
