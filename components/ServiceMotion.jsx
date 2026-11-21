"use client";

import { Fragment } from "react";
import * as React from "react";
let r = {
    "web-build": 4.1,
    "web-score": 4.9,
    "shop-product": 5.5,
    "shop-orders": 4.7,
    "seo-rank": 5,
    "seo-answer": 5.1,
    "ai-chat": 5.8,
    "ai-call": 5.7,
    "email-inbox": 4.1,
    "sms-thread": 4.9,
    "brand-mark": 4.6,
    "brand-kit": 4.6,
    "host-checks": 4.9,
    "host-uptime": 4.7,
  },
  l = new Set([
    "web-score",
    "shop-orders",
    "seo-answer",
    "ai-call",
    "sms-thread",
    "brand-kit",
    "host-uptime",
  ]),
  m = (s) => (void 0 === s ? void 0 : `${s}cqw`);
function Elementi({ k: s = "", children, style, ...l }) {
  return (
    <span
      className={s}
      style={(function (
        { l: s, t, r: e, b: r, w: l, h: i, d: n, fs: d, i: c },
        h,
      ) {
        return {
          left: m(s),
          top: m(t),
          right: m(e),
          bottom: m(r),
          width: m(l),
          height: m(i),
          fontSize: m(d),
          ...(void 0 !== n
            ? {
                "--d": `${n}s`,
              }
            : {}),
          ...(void 0 !== c
            ? {
                "--i": c,
              }
            : {}),
          ...h,
        };
      })(l, style)}
    >
      {children}
    </span>
  );
}
let Elementn = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  ),
  Elementd = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5c.6 4.9 2.6 8.3 10.5 10.5-7.9 2.2-9.9 5.6-10.5 10.5C11.4 17.6 9.4 14.2 1.5 12 9.4 9.8 11.4 6.4 12 1.5z" />
    </svg>
  ),
  c = [
    0.2, 0.35, 0.55, 0.4, 0.75, 0.95, 0.6, 0.8, 1, 0.7, 0.45, 0.65, 0.9, 0.55,
    0.3, 0.5, 0.85, 0.6, 0.4, 0.7, 0.5, 0.3, 0.2, 0.12,
  ],
  h =
    "M0 14C1.4 13.8 5.6 12.6 8.3 12.5C11.1 12.4 13.9 13.7 16.7 13.5C19.4 13.3 22.2 11.6 25 11.5C27.8 11.4 30.6 12.9 33.3 13C36.1 13.1 38.9 11.8 41.7 12C44.4 12.2 47.2 13.9 50 14C52.8 14.1 55.6 12.6 58.3 12.5C61.1 12.4 63.9 13.6 66.7 13.5C69.4 13.4 72.2 12.1 75 12C77.8 11.9 80.6 13 83.3 13C86.1 13 88.9 11.9 91.7 11.8C94.4 11.7 98.6 12.4 100 12.5",
  x = {
    color: "#fff",
  },
  a = {
    color: "rgb(255 255 255 / 0.55)",
  },
  o = {
    padding: "0 4cqw",
    lineHeight: "10cqw",
  };
function Elementk({ scene }) {
  switch (scene) {
    case "web-build":
      return (
        <Fragment>
          {[0, 4, 8].map((s) => (
            <Elementi k="sm-dot" l={7 + s} t={5.5} w={2.6} h={2.6} key={s} />
          ))}
          <Elementi
            k="sm-field sm-txt sm-mute"
            l={20}
            t={4.2}
            r={7}
            h={5.2}
            fs={2.5}
            style={{
              paddingLeft: "3cqw",
              lineHeight: "5.2cqw",
            }}
          >
            {"your-business.example"}
          </Elementi>
          <Elementi
            k="sm-ink"
            l={8}
            t={16}
            w={5}
            h={5}
            style={{
              borderRadius: "1.2cqw",
            }}
          />
          {[60, 70, 80].map((s) => (
            <Elementi k="sm-bar sm-soft" l={s} t={17.6} w={7} h={1.8} key={s} />
          ))}
          <Elementi
            k="sm-grow sm-bar sm-ink"
            l={8}
            t={28}
            w={48}
            h={5.6}
            d={0.3}
          />
          <Elementi
            k="sm-grow sm-bar sm-ink"
            l={8}
            t={36}
            w={34}
            h={5.6}
            d={0.5}
          />
          <Elementi
            k="sm-grow sm-bar sm-soft"
            l={8}
            t={45}
            w={40}
            h={2.4}
            d={0.7}
          />
          <Elementi
            k="sm-pop sm-pill sm-ink sm-txt"
            l={8}
            t={51}
            w={21}
            h={7.5}
            fs={2.7}
            d={0.9}
            style={x}
          >
            {"Book now"}
          </Elementi>
          <Elementi k="sm-rise sm-photo" r={8} t={26} w={30} h={33} d={0.6} />
          <Elementi k="sm-rise sm-tile" l={8} t={66} w={40} h={26} d={1.2}>
            <Elementi k="sm-bar sm-soft" l={5} b={5} w={22} h={3.2} />
          </Elementi>
          <Elementi k="sm-rise sm-tile" l={52} t={66} w={40} h={26} d={1.4}>
            <Elementi k="sm-bar sm-soft" l={5} b={5} w={22} h={3.2} />
          </Elementi>
        </Fragment>
      );
    case "web-score":
      return (
        <Fragment>
          <Elementi k="sm-ring sm-track" l={14} t={10} w={72} h={72} />
          <Elementi k="sm-ring sm-arc" l={14} t={10} w={72} h={72} />
          <Elementi k="sm-pop sm-num sm-c" l={0} r={0} t={34} fs={20} d={1.6}>
            {"100"}
          </Elementi>
          <Elementi
            k="sm-rise sm-txt sm-dim sm-c"
            l={0}
            r={0}
            t={58}
            fs={4.6}
            d={1.9}
          >
            {"Performance"}
          </Elementi>
          <Elementi
            k="sm-rise sm-txt sm-dim sm-c"
            l={0}
            r={0}
            t={88}
            fs={3.4}
            d={2.2}
          >
            {"Speed · Accessibility · SEO"}
          </Elementi>
        </Fragment>
      );
    case "shop-product":
      return (
        <Fragment>
          <Elementi k="sm-txt" l={8} t={6.5} fs={3.6}>
            {"Ardent"}
          </Elementi>
          <Elementi k="sm-basket" r={8} t={5.5} w={6} h={6} />
          <Elementi
            k="sm-pop sm-badge"
            r={6}
            t={4}
            w={4.2}
            h={4.2}
            fs={2.6}
            d={2.3}
          >
            {"1"}
          </Elementi>
          <Elementi
            k="sm-rise sm-photo sm-warm"
            l={8}
            t={17}
            w={44}
            h={52}
            d={0.2}
          >
            <Elementi k="sm-garment" l={14} t={9} w={16} h={34} />
          </Elementi>
          <Elementi k="sm-rise sm-txt" l={57} t={19} fs={4} d={0.5}>
            {"Linen shirt"}
          </Elementi>
          <Elementi k="sm-rise sm-txt sm-mute" l={57} t={26} fs={3.2} d={0.6}>
            {"₹480"}
          </Elementi>
          {["S", "M", "L"].map((s, e) => (
            <Elementi
              k={`sm-rise sm-size sm-txt${"M" === s ? " sm-on" : ""}`}
              l={57 + 9 * e}
              t={35}
              w={7}
              h={7}
              fs={2.6}
              d={0.8 + 0.08 * e}
              key={s}
            >
              {s}
            </Elementi>
          ))}
          <Elementi
            k="sm-press sm-pill sm-ink sm-txt"
            l={57}
            t={48}
            w={35}
            h={8.5}
            fs={2.7}
            d={1.9}
            style={x}
          >
            {"Add to basket"}
          </Elementi>
          <Elementi k="sm-wipe sm-toast" l={8} r={8} t={77} h={12} d={2.4}>
            <Elementi k="sm-tick sm-tick-d" l={4} t={3.6} w={4.8} h={4.8}>
              <Elementn />
            </Elementi>
            <Elementi k="sm-txt" l={12} t={4.3} fs={3} style={x}>
              {"Added to your basket"}
            </Elementi>
          </Elementi>
        </Fragment>
      );
    case "shop-orders":
      return (
        <Fragment>
          <Elementi k="sm-txt" l={8} t={8} fs={4.6}>
            {"Orders"}
          </Elementi>
          <Elementi k="sm-txt sm-dim" l={8} t={15.5} fs={3}>
            {"Today"}
          </Elementi>
          <Elementi
            k="sm-pop sm-pill sm-glass sm-txt"
            r={8}
            t={8}
            w={14}
            h={7}
            fs={2.8}
            d={2.1}
          >
            {"+3"}
          </Elementi>
          {[
            ["#1042", "2 items", "₹960"],
            ["#1043", "1 item", "₹480"],
            ["#1044", "3 items", "₹1,320"],
          ].map(([s, e, r], l) => (
            <Elementi
              k="sm-rise sm-row"
              l={8}
              r={8}
              t={26 + 22 * l}
              h={18}
              d={0.4 + 0.5 * l}
              key={s}
            >
              <Elementi k="sm-txt" l={5} t={4.4} fs={3.4}>
                {s}
              </Elementi>
              <Elementi k="sm-txt sm-dim" l={5} t={10.2} fs={2.6}>
                {e}
              </Elementi>
              <Elementi
                k="sm-pill sm-paper sm-txt"
                l={36}
                t={5.5}
                w={12}
                h={6.4}
                fs={2.5}
              >
                {"Paid"}
              </Elementi>
              <Elementi k="sm-txt" r={5} t={6.6} fs={3.4}>
                {r}
              </Elementi>
            </Elementi>
          ))}
        </Fragment>
      );
    case "seo-rank":
      return (
        <Fragment>
          <Elementi k="sm-field sm-outline" l={7} t={7} r={7} h={11.5} />
          <Elementi k="sm-lens" l={11.5} t={10.8} w={4} h={4} />
          <Elementi k="sm-wipe sm-txt" l={18.5} t={10.9} fs={3.3} d={0.2}>
            {"web design near me"}
          </Elementi>
          {[0, 1].map((s) => (
            <Elementi
              k="sm-result sm-other"
              l={7}
              r={7}
              t={0 === s ? 48 : 70}
              h={18}
              key={s}
            >
              <Elementi k="sm-fav sm-soft" l={0} t={1.5} w={7} h={7} />
              <Elementi k="sm-bar sm-soft" l={10} t={1.8} w={48} h={3.6} />
              <Elementi k="sm-bar sm-faint" l={10} t={7.6} w={30} h={2.4} />
            </Elementi>
          ))}
          <Elementi k="sm-result sm-ours" l={7} r={7} t={26} h={18}>
            <Elementi k="sm-fav sm-ink" l={0} t={1.5} w={7} h={7} />
            <Elementi k="sm-txt" l={10} t={1.6} fs={3.3}>
              {"Your Business · Web Design"}
            </Elementi>
            <Elementi k="sm-txt sm-mute" l={10} t={7.4} fs={2.5}>
              {"yourbusiness.example"}
            </Elementi>
            <Elementi k="sm-badge sm-rank" r={0} t={1.2} w={8} h={8} fs={4.2}>
              {"1"}
            </Elementi>
          </Elementi>
        </Fragment>
      );
    case "seo-answer":
      return (
        <Fragment>
          <Elementi k="sm-rise sm-bubble-in" r={7} t={8} w={66} h={13} d={0.2}>
            <Elementi k="sm-txt" l={4.5} t={4.6} fs={3}>
              {"Best web designer near me?"}
            </Elementi>
          </Elementi>
          <Elementi k="sm-pop sm-spark" l={7} t={29} w={7.5} h={7.5} d={0.9}>
            <Elementd />
          </Elementi>
          <Elementi k="sm-rise sm-answer" l={18} t={27} r={7} b={8} d={1.1}>
            <Elementi
              k="sm-grow sm-bar sm-soft"
              l={6}
              t={6}
              w={50}
              h={3}
              d={1.5}
            />
            <Elementi
              k="sm-grow sm-bar sm-soft"
              l={6}
              t={12}
              w={44}
              h={3}
              d={1.7}
            />
            <Elementi
              k="sm-grow sm-bar sm-soft"
              l={6}
              t={18}
              w={28}
              h={3}
              d={1.9}
            />
            <Elementi k="sm-pop sm-pick" l={5} r={5} b={5} h={24} d={2.5}>
              <Elementi k="sm-logo" l={4.5} t={5.5} w={13} h={13} />
              <Elementi k="sm-txt" l={21} t={6.5} fs={3.4} style={x}>
                {"Your Business"}
              </Elementi>
              <Elementi k="sm-txt" l={21} t={12.6} fs={2.6} style={a}>
                {"Recommended"}
              </Elementi>
            </Elementi>
          </Elementi>
        </Fragment>
      );
    case "ai-chat":
      return (
        <Fragment>
          <Elementi k="sm-ink" l={0} r={0} t={0} h={17} />
          <Elementi k="sm-logo" l={7} t={4.5} w={8} h={8}>
            <Elementi
              l={1.8}
              t={1.8}
              w={4.4}
              h={4.4}
              style={{
                color: "#0a0a0a",
              }}
            >
              <Elementd />
            </Elementi>
          </Elementi>
          <Elementi k="sm-txt" l={18} t={4.6} fs={3.3} style={x}>
            {"Assistant"}
          </Elementi>
          <Elementi k="sm-txt" l={18} t={9.6} fs={2.4} style={a}>
            {"Online · replies instantly"}
          </Elementi>
          <Elementi
            k="sm-rise sm-bubble sm-ink sm-txt"
            r={7}
            t={24}
            h={10}
            fs={2.9}
            d={0.4}
            style={{
              ...x,
              ...o,
              borderRadius: "4cqw 4cqw 1cqw 4cqw",
            }}
          >
            {"Can I get a quote?"}
          </Elementi>
          <Elementi
            k="sm-flash sm-transient sm-typing"
            l={7}
            t={39}
            w={15}
            h={8}
            d={0.9}
          >
            {[0, 1, 2].map((s) => (
              <Elementi
                k="sm-blink"
                l={3 + 3.6 * s}
                t={3.1}
                w={2}
                h={2}
                i={s}
                key={s}
              />
            ))}
          </Elementi>
          <Elementi
            k="sm-rise sm-bubble sm-paperd sm-txt"
            l={7}
            t={39}
            h={10}
            fs={2.9}
            d={1.7}
            style={{
              ...o,
              borderRadius: "4cqw 4cqw 4cqw 1cqw",
            }}
          >
            {"Of course. What's your PIN code?"}
          </Elementi>
          <Elementi
            k="sm-rise sm-bubble sm-ink sm-txt"
            r={7}
            t={54}
            h={10}
            fs={2.9}
            d={2.5}
            style={{
              ...x,
              ...o,
              borderRadius: "4cqw 4cqw 1cqw 4cqw",
            }}
          >
            {"110001"}
          </Elementi>
          <Elementi
            k="sm-pop sm-pill sm-outline sm-txt"
            l={7}
            r={7}
            t={78}
            h={10}
            fs={2.8}
            d={3.2}
          >
            {"Enquiry sent to your inbox"}
          </Elementi>
        </Fragment>
      );
    case "ai-call":
      return (
        <Fragment>
          <Elementi k="sm-avatar" l={8} t={9} w={13} h={13} />
          <Elementi
            k="sm-out sm-transient sm-txt"
            l={25}
            t={10}
            fs={3.6}
            d={1.2}
          >
            {"Incoming call"}
          </Elementi>
          <Elementi k="sm-rise sm-txt" l={25} t={10} fs={3.6} d={1.4}>
            {"AI receptionist"}
          </Elementi>
          <Elementi k="sm-txt sm-dim" l={25} t={16.5} fs={2.6}>
            {"Incoming call · 18:42"}
          </Elementi>
          <Elementi k="sm-rise" l={8} r={8} t={30} h={18} d={1.4}>
            {c.map((s, e) => (
              <Elementi
                k="sm-wave"
                l={3.55 * e}
                t={0}
                w={1.8}
                h={18}
                i={e}
                style={{
                  "--s": s,
                }}
                key={e}
              />
            ))}
          </Elementi>
          <Elementi
            k="sm-grow sm-bar sm-glassbar"
            l={8}
            t={55}
            w={70}
            h={3}
            d={2.1}
          />
          <Elementi
            k="sm-grow sm-bar sm-glassbar"
            l={8}
            t={61}
            w={52}
            h={3}
            d={2.4}
          />
          <Elementi
            k="sm-pop sm-pill sm-paper"
            l={8}
            r={8}
            t={74}
            h={12}
            d={3.1}
          >
            <Elementi k="sm-tick sm-tick-l" l={5} t={3.6} w={4.8} h={4.8}>
              <Elementn />
            </Elementi>
            <Elementi k="sm-txt" l={12} t={4.3} fs={3}>
              {"Booked · Thursday 8:30"}
            </Elementi>
          </Elementi>
        </Fragment>
      );
    case "email-inbox":
      return (
        <Fragment>
          <Elementi k="sm-txt" l={8} t={7} fs={4.4}>
            {"Inbox"}
          </Elementi>
          {[0, 1, 2].map((s) => (
            <Elementi k="sm-mailrow" l={8} r={8} t={34 + 14 * s} h={11} key={s}>
              <Elementi k="sm-fav sm-soft" l={0} t={1.8} w={7} h={7} />
              <Elementi k="sm-bar sm-soft" l={10} t={2.2} w={36} h={2.8} />
              <Elementi k="sm-bar sm-faint" l={10} t={6.6} w={50} h={2.2} />
            </Elementi>
          ))}
          <Elementi
            k="sm-rise sm-mailrow sm-new"
            l={8}
            r={8}
            t={19}
            h={12}
            d={0.3}
          >
            <Elementi k="sm-fav sm-ink" l={0} t={2.2} w={7} h={7} />
            <Elementi k="sm-txt" l={10} t={2.2} fs={3}>
              {"Ardent"}
            </Elementi>
            <Elementi k="sm-txt sm-mute" l={10} t={7.2} fs={2.4}>
              {"Welcome to the club"}
            </Elementi>
            <Elementi k="sm-unread" r={1} t={4.6} w={2.4} h={2.4} />
          </Elementi>
          <Elementi k="sm-rise sm-mail" l={14} r={14} t={40} b={-2} d={1.4}>
            <Elementi k="sm-photo sm-warm" l={5} r={5} t={5} h={24} />
            <Elementi k="sm-txt" l={5} t={33} fs={3.6}>
              {"Welcome to the club"}
            </Elementi>
            <Elementi k="sm-bar sm-soft" l={5} t={41} w={52} h={2.4} />
            <Elementi
              k="sm-pill sm-ink sm-txt"
              l={5}
              t={47}
              w={26}
              h={7.5}
              fs={2.6}
              style={x}
            >
              {"Shop now"}
            </Elementi>
          </Elementi>
        </Fragment>
      );
    case "sms-thread":
      return (
        <Fragment>
          <Elementi k="sm-avatar" l={43.5} t={7} w={13} h={13} />
          <Elementi k="sm-txt sm-c" l={0} r={0} t={23} fs={3}>
            {"Your Garage"}
          </Elementi>
          <Elementi k="sm-rise sm-bubble-in" l={7} t={34} w={66} h={21} d={0.4}>
            <Elementi k="sm-txt sm-wrap" l={4.5} r={4} t={4} fs={2.9}>
              {"Reminder: your service is tomorrow at 8:30. Reply C to cancel."}
            </Elementi>
          </Elementi>
          <Elementi
            k="sm-rise sm-bubble sm-paper sm-txt"
            r={7}
            t={60}
            h={10}
            fs={2.9}
            d={1.8}
            style={{
              ...o,
              borderRadius: "4cqw 4cqw 1cqw 4cqw",
            }}
          >
            {"Thanks, see you then"}
          </Elementi>
          <Elementi k="sm-pop sm-txt sm-dim" r={8} t={73} fs={2.3} d={2.3}>
            {"Delivered"}
          </Elementi>
        </Fragment>
      );
    case "brand-mark":
      return (
        <Fragment>
          <Elementi
            k="sm-grow sm-gridline"
            l={8}
            r={8}
            t={24}
            h={0.4}
            d={0.1}
          />
          <Elementi
            k="sm-grow sm-gridline"
            l={8}
            r={8}
            t={60}
            h={0.4}
            d={0.2}
          />
          <Elementi
            k="sm-growy sm-gridline"
            l={30}
            t={10}
            b={30}
            w={0.4}
            d={0.3}
          />
          <Elementi
            k="sm-growy sm-gridline"
            l={70}
            t={10}
            b={30}
            w={0.4}
            d={0.4}
          />
          <Elementi
            k="sm-pop sm-ink"
            l={30}
            t={24}
            w={23}
            h={36}
            d={0.8}
            style={{
              borderRadius: "11.5cqw 11.5cqw 0 0",
            }}
          />
          <Elementi
            k="sm-pop sm-ink sm-ink-2"
            l={47}
            t={24}
            w={23}
            h={36}
            d={1.05}
            style={{
              borderRadius: "0 0 11.5cqw 11.5cqw",
            }}
          />
          <Elementi
            k="sm-rise sm-txt sm-c"
            l={0}
            r={0}
            t={70}
            fs={7}
            d={1.6}
            style={{
              letterSpacing: "-0.05em",
            }}
          >
            {"Ardent"}
          </Elementi>
          <Elementi
            k="sm-rise sm-txt sm-mute sm-c"
            l={0}
            r={0}
            t={82}
            fs={2.5}
            d={1.9}
          >
            {"Brand guidelines"}
          </Elementi>
        </Fragment>
      );
    case "brand-kit":
      return (
        <Fragment>
          <Elementi
            k="sm-pop sm-txt"
            l={8}
            t={8}
            fs={21}
            d={0.3}
            style={{
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            {"Aa"}
          </Elementi>
          <Elementi k="sm-rise sm-txt sm-dim" l={8} t={34} fs={2.6} d={0.6}>
            {"Display · 600"}
          </Elementi>
          {["#f1ece3", "#cdbca6", "#6d2230", "#1d1d1d"].map((s, e) => (
            <Elementi
              k="sm-pop sm-swatch"
              l={8 + 21 * e}
              t={52}
              w={17}
              h={17}
              d={1 + 0.12 * e}
              style={{
                background: s,
              }}
              key={s}
            />
          ))}
          {["Cream", "Sand", "Wine", "Ink"].map((s, e) => (
            <Elementi
              k="sm-rise sm-txt sm-dim"
              l={8 + 21 * e}
              t={72}
              fs={2.4}
              d={1.2 + 0.12 * e}
              key={s}
            >
              {s}
            </Elementi>
          ))}
          <Elementi k="sm-rise sm-adcard" r={8} t={8} w={34} h={34} d={1.9}>
            <Elementi k="sm-photo sm-warm" l={4} r={4} t={4} h={16} />
            <Elementi
              k="sm-txt"
              l={4}
              t={23}
              fs={2.8}
              style={{
                color: "#0a0a0a",
              }}
            >
              {"New season"}
            </Elementi>
            <Elementi
              k="sm-pill sm-ink sm-txt"
              l={4}
              t={28}
              w={15}
              h={4.6}
              fs={2}
              style={x}
            >
              {"Shop"}
            </Elementi>
          </Elementi>
        </Fragment>
      );
    case "host-checks":
      return (
        <Fragment>
          <Elementi k="sm-txt" l={8} t={8} fs={4.4}>
            {"This month"}
          </Elementi>
          <Elementi k="sm-txt sm-mute" l={8} t={15.5} fs={2.6}>
            {"Your website · checked and looked after"}
          </Elementi>
          {[
            "Backup tested",
            "Security updates",
            "Speed check",
            "Domain renewed",
          ].map((s, e) => (
            <Elementi
              k="sm-rise sm-checkrow"
              l={8}
              r={8}
              t={26 + 14 * e}
              h={11}
              d={0.4 + 0.4 * e}
              key={s}
            >
              <Elementi
                k="sm-pop sm-tick sm-tick-d"
                l={0}
                t={2.6}
                w={5.8}
                h={5.8}
                d={0.6 + 0.4 * e}
              >
                <Elementn />
              </Elementi>
              <Elementi k="sm-txt" l={9} t={3.4} fs={3}>
                {s}
              </Elementi>
              <Elementi k="sm-txt sm-mute" r={0} t={3.8} fs={2.5}>
                {"Done"}
              </Elementi>
            </Elementi>
          ))}
          <Elementi
            k="sm-pop sm-pill sm-outline sm-txt"
            l={8}
            w={48}
            t={84}
            h={9}
            fs={2.7}
            d={2.3}
          >
            {"Monthly report sent"}
          </Elementi>
        </Fragment>
      );
    case "host-uptime":
      return (
        <Fragment>
          <Elementi k="sm-pulse" l={8} t={9.6} w={3.4} h={3.4} />
          <Elementi k="sm-txt" l={14} t={8} fs={3.8}>
            {"All systems online"}
          </Elementi>
          <Elementi k="sm-txt sm-dim" l={8} t={17} fs={2.6}>
            {"Response time · last 30 days"}
          </Elementi>
          {[28, 42, 56].map((s) => (
            <Elementi
              k="sm-glassbar"
              l={8}
              r={8}
              t={s}
              h={0.3}
              style={{
                opacity: 0.35,
              }}
              key={s}
            />
          ))}
          <Elementi k="sm-wipe" l={8} r={8} t={28} h={28} d={0.3}>
            <svg viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d={h + "L100 20L0 20Z"} fill="rgb(255 255 255 / 0.07)" />
              <path
                d={h}
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
            </svg>
          </Elementi>
          <Elementi
            k="sm-pop"
            l={90.6}
            t={44.1}
            w={2.8}
            h={2.8}
            d={1.4}
            style={{
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 0 0 1.2cqw rgb(255 255 255 / 0.14)",
            }}
          />
          <Elementi k="sm-rise sm-txt sm-dim" l={8} t={60} fs={2.4} d={1.4}>
            {"30 days ago"}
          </Elementi>
          <Elementi k="sm-rise sm-txt sm-dim" r={8} t={60} fs={2.4} d={1.4}>
            {"Today"}
          </Elementi>
          {["Online", "Secure", "Backed up"].map((s, e) => (
            <Elementi
              k="sm-pop sm-pill sm-glass sm-txt"
              l={8 + 28 * e}
              t={74}
              w={25}
              h={9}
              fs={2.7}
              d={1.8 + 0.15 * e}
              key={s}
            >
              {s}
            </Elementi>
          ))}
        </Fragment>
      );
  }
}
function Elementj({ scene }) {
  let m = React.useRef(null),
    [i, n] = React.useState(false),
    [d, c] = React.useState(false);
  React.useEffect(() => {
    let s = m.current;
    if (!s) return;
    let t = new IntersectionObserver(
      ([s]) => {
        (c(s.isIntersecting), s.isIntersecting && n(true));
      },
      {
        rootMargin: "150px 0px",
      },
    );
    return (t.observe(s), () => t.disconnect());
  }, []);
  let [h, x] = React.useState(0);
  return (
    <span
      ref={m}
      aria-hidden="true"
      className={`sm ${l.has(scene) ? "sm-d" : "sm-l"} ${d ? "" : "sm-off"}`}
      style={{
        "--loop": `${r[scene]}s`,
      }}
    >
      {i ? (
        <span
          className="sm-run"
          onAnimationEnd={(s) => {
            s.target === s.currentTarget && x((s) => s + 1);
          }}
          key={h}
        >
          <Elementk scene={scene} />
        </span>
      ) : null}
    </span>
  );
}
export const ServiceMotion = Elementj;
export const ServiceMotionPanel = function ({ scenes }) {
  let [e, r] = l.has(scenes[0]) ? [scenes[1], scenes[0]] : scenes;
  return (
    <span aria-hidden="true" className="sm-panel">
      <span className="sm-panel-a">
        <Elementj scene={e} />
      </span>
      <span className="sm-panel-b">
        <Elementj scene={r} />
      </span>
    </span>
  );
};
