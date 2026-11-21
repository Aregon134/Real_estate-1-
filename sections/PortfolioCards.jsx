import Image from "next/image";
import items from "@/content/PortfolioItems.json";
export const projects = [
  {
    ...items[0],
    card: (
      <a
        href={"/portfolio/b-boutique"}
        className={"pj group block rounded-[18px]"}
      >
        <div
          className={
            "flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6"
          }
        >
          <h2
            className={
              "text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]"
            }
          >
            {"B Boutique"}
            {"."}
          </h2>
          <span
            className={
              "ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]"
            }
          >
            <span className={"opacity-60"}>{"/"}</span>
            {"2026"}
          </span>
          <span
            className={
              "pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]"
            }
          >
            {"Client"}
          </span>
          <span aria-hidden={"true"} className={"flex gap-1"}>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#fd5f59" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#ffbb2c" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#25c93d" }}
              />
            </span>
          </span>
        </div>
        <span
          className={
            "mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]"
          }
        >
          <span
            className={
              "pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900"
            }
          >
            <Image
              src={"/images/work/hero/b-boutique.2026-10-28.webp"}
              alt={
                "Two horses running across red heather at golden hour, from the B Boutique homepage"
              }
              fill={true}
              sizes={"(min-width: 768px) 48vw, 100vw"}
              quality={90}
              loading={"eager"}
              fetchPriority={"high"}
              className={"pj-img object-cover"}
            />
            <span
              aria-hidden={"true"}
              className={"pj-shade absolute inset-0 bg-ink-0"}
            />
            <span
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <span
                aria-hidden={"true"}
                className={"pj-logo block bg-ink-1000"}
                style={{
                  width: "27%",
                  aspectRatio: 3.245573770491803,
                  mask: "url(/images/work/logos/b-boutique.2026-10-27.svg) center / contain no-repeat",
                  WebkitMask:
                    "url(/images/work/logos/b-boutique.2026-10-27.svg) center / contain no-repeat",
                }}
              />
            </span>
          </span>
        </span>
        <span className={"sr-only"}>
          {" "}
          {
            "A women’s clothing boutique in Cleethorpes, now selling online from a site the reference studio designed and built."
          }
        </span>
      </a>
    ),
  },
  {
    ...items[1],
    card: (
      <a
        href={"https://scrapeless.store/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"pj group block rounded-[18px]"}
      >
        <div
          className={
            "flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6"
          }
        >
          <h2
            className={
              "text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]"
            }
          >
            {"Scrapeless"}
            {"."}
          </h2>
          <span
            className={
              "ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]"
            }
          >
            <span className={"opacity-60"}>{"/"}</span>
            {"2026"}
          </span>
          <span
            className={
              "pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]"
            }
          >
            {"Reference store"}
          </span>
          <span aria-hidden={"true"} className={"flex gap-1"}>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#fd5f59" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#ffbb2c" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#25c93d" }}
              />
            </span>
          </span>
        </div>
        <span
          className={
            "mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]"
          }
        >
          <span
            className={
              "pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900"
            }
          >
            <Image
              src={"/images/work/hero/scrapeless.2026-10-29.webp"}
              alt={
                "A car on a frosty driveway at dusk with a silver cover over its windscreen and mirrors, from the Scrapeless homepage"
              }
              fill={true}
              sizes={"(min-width: 768px) 48vw, 100vw"}
              quality={90}
              loading={"eager"}
              fetchPriority={"high"}
              className={"pj-img object-cover"}
            />
            <span
              aria-hidden={"true"}
              className={"pj-shade absolute inset-0 bg-ink-0"}
            />
            <span
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <span
                aria-hidden={"true"}
                className={"pj-logo block "}
                style={{
                  width: "34%",
                  aspectRatio: 3.774834437086093,
                  background:
                    "url(/images/work/logos/scrapeless.2026-10-29d.webp) center / contain no-repeat",
                }}
              />
            </span>
          </span>
        </span>
        <span className={"sr-only"}>
          {" "}
          {
            "A reference Shopify store, selling a magnetic windscreen frost cover across the UK, on a theme the reference studio designed and built."
          }
        </span>
        <span className={"sr-only"}>{" (opens in a new tab)"}</span>
      </a>
    ),
  },
  {
    ...items[2],
    card: (
      <a
        href={"https://watchclub-daydate.vercel.app/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"pj group block rounded-[18px]"}
      >
        <div
          className={
            "flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6"
          }
        >
          <h2
            className={
              "text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]"
            }
          >
            {"The Watch Club"}
            {"."}
          </h2>
          <span
            className={
              "ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]"
            }
          >
            <span className={"opacity-60"}>{"/"}</span>
            {"2026"}
          </span>
          <span
            className={
              "pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]"
            }
          >
            {"Concept"}
          </span>
          <span aria-hidden={"true"} className={"flex gap-1"}>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#fd5f59" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#ffbb2c" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#25c93d" }}
              />
            </span>
          </span>
        </div>
        <span
          className={
            "mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]"
          }
        >
          <span
            className={
              "pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900"
            }
          >
            <Image
              src={"/images/work/hero/watch-club.2026-10-28.webp"}
              alt={
                "A steel chronograph on black silk, from The Watch Club homepage"
              }
              fill={true}
              sizes={"(min-width: 768px) 48vw, 100vw"}
              quality={90}
              className={"pj-img object-cover"}
            />
            <span
              aria-hidden={"true"}
              className={"pj-shade absolute inset-0 bg-ink-0"}
            />
            <span
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <span
                aria-hidden={"true"}
                className={"pj-logo block bg-ink-1000"}
                style={{
                  width: "30%",
                  aspectRatio: 5.856980219154689,
                  mask: "url(/images/work/logos/watch-club.2026-10-27.svg) center / contain no-repeat",
                  WebkitMask:
                    "url(/images/work/logos/watch-club.2026-10-27.svg) center / contain no-repeat",
                }}
              />
            </span>
          </span>
        </span>
        <span className={"sr-only"}>
          {" "}
          {
            "A concept site for a fine and rare watch dealer in Mayfair, with a 77-page catalogue."
          }
        </span>
        <span className={"sr-only"}>{" (opens in a new tab)"}</span>
      </a>
    ),
  },
  {
    ...items[3],
    card: (
      <a
        href={"https://new-home-agents.vercel.app/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"pj group block rounded-[18px]"}
      >
        <div
          className={
            "flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6"
          }
        >
          <h2
            className={
              "text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]"
            }
          >
            {"New Home Agents"}
            {"."}
          </h2>
          <span
            className={
              "ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]"
            }
          >
            <span className={"opacity-60"}>{"/"}</span>
            {"2026"}
          </span>
          <span
            className={
              "pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]"
            }
          >
            {"Concept"}
          </span>
          <span aria-hidden={"true"} className={"flex gap-1"}>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#fd5f59" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#ffbb2c" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#25c93d" }}
              />
            </span>
          </span>
        </div>
        <span
          className={
            "mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]"
          }
        >
          <span
            className={
              "pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900"
            }
          >
            <Image
              src={"/images/work/hero/new-home-agents.2026-10-28.webp"}
              alt={
                "A stone villa on a cliff with an infinity pool at dusk, from the New Home Agents homepage"
              }
              fill={true}
              sizes={"(min-width: 768px) 48vw, 100vw"}
              quality={90}
              className={"pj-img object-cover"}
            />
            <span
              aria-hidden={"true"}
              className={"pj-shade absolute inset-0 bg-ink-0"}
            />
            <span
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <span
                aria-hidden={"true"}
                className={
                  "pj-logo whitespace-nowrap text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-ink-1000 md:text-[1rem] xl:text-[1.125rem]"
                }
              >
                {"New Home Agents"}
              </span>
            </span>
          </span>
        </span>
        <span className={"sr-only"}>
          {" "}
          {
            "A concept site for a nationwide new-homes agent, with property search, part exchange and a film hero that plays as you scroll."
          }
        </span>
        <span className={"sr-only"}>{" (opens in a new tab)"}</span>
      </a>
    ),
  },
  {
    ...items[4],
    card: (
      <a
        href={"https://breathe-pilates-studio.vercel.app/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"pj group block rounded-[18px]"}
      >
        <div
          className={
            "flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6"
          }
        >
          <h2
            className={
              "text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]"
            }
          >
            {"Breathe Pilates Studio"}
            {"."}
          </h2>
          <span
            className={
              "ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]"
            }
          >
            <span className={"opacity-60"}>{"/"}</span>
            {"2026"}
          </span>
          <span
            className={
              "pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]"
            }
          >
            {"Concept"}
          </span>
          <span aria-hidden={"true"} className={"flex gap-1"}>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#fd5f59" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#ffbb2c" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#25c93d" }}
              />
            </span>
          </span>
        </div>
        <span
          className={
            "mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]"
          }
        >
          <span
            className={
              "pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900"
            }
          >
            <Image
              src={"/images/work/hero/breathe.2026-10-28.webp"}
              alt={
                "A sunlit Pilates studio with reformers and arched mirrors, from the Breathe homepage"
              }
              fill={true}
              sizes={"(min-width: 768px) 48vw, 100vw"}
              quality={90}
              className={"pj-img object-cover"}
            />
            <span
              aria-hidden={"true"}
              className={"pj-shade absolute inset-0 bg-ink-0"}
            />
            <span
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <span
                aria-hidden={"true"}
                className={"pj-logo block bg-ink-1000"}
                style={{
                  width: "22%",
                  aspectRatio: 2.3346303501945527,
                  mask: "url(/images/work/logos/breathe.2026-10-27.webp) center / contain no-repeat",
                  WebkitMask:
                    "url(/images/work/logos/breathe.2026-10-27.webp) center / contain no-repeat",
                }}
              />
            </span>
          </span>
        </span>
        <span className={"sr-only"}>
          {" "}
          {
            "A concept site for a reformer Pilates studio in Holton-le-Clay, with membership tiers and a Founding 25 offer."
          }
        </span>
        <span className={"sr-only"}>{" (opens in a new tab)"}</span>
      </a>
    ),
  },
  {
    ...items[5],
    card: (
      <a
        href={"https://89-sets.vercel.app/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"pj group block rounded-[18px]"}
      >
        <div
          className={
            "flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6"
          }
        >
          <h2
            className={
              "text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]"
            }
          >
            {"89 Sets"}
            {"."}
          </h2>
          <span
            className={
              "ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]"
            }
          >
            <span className={"opacity-60"}>{"/"}</span>
            {"2026"}
          </span>
          <span
            className={
              "pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]"
            }
          >
            {"Concept"}
          </span>
          <span aria-hidden={"true"} className={"flex gap-1"}>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#fd5f59" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#ffbb2c" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#25c93d" }}
              />
            </span>
          </span>
        </div>
        <span
          className={
            "mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]"
          }
        >
          <span
            className={
              "pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900"
            }
          >
            <Image
              src={"/images/work/hero/89-sets.2026-10-28.webp"}
              alt={
                "A red and black Air Max Plus on a dark background, from the 89 Sets homepage"
              }
              fill={true}
              sizes={"(min-width: 768px) 48vw, 100vw"}
              quality={90}
              className={"pj-img object-cover"}
            />
            <span
              aria-hidden={"true"}
              className={"pj-shade absolute inset-0 bg-ink-0"}
            />
            <span
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <span
                aria-hidden={"true"}
                className={"pj-logo block "}
                style={{
                  width: "22%",
                  aspectRatio: 2.644628099173554,
                  background:
                    "url(/images/work/logos/89-sets.2026-10-27b.webp) center / contain no-repeat",
                }}
              />
            </span>
          </span>
        </span>
        <span className={"sr-only"}>
          {" "}
          {
            "A concept online store for a Cleethorpes sneaker shop, with its own product film."
          }
        </span>
        <span className={"sr-only"}>{" (opens in a new tab)"}</span>
      </a>
    ),
  },
  {
    ...items[6],
    card: (
      <a
        href={"https://rime-research.vercel.app/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"pj group block rounded-[18px]"}
      >
        <div
          className={
            "flex h-[50px] items-center rounded-[14px] bg-ink-1000 px-4 md:h-[58px] md:rounded-[18px] md:px-6"
          }
        >
          <h2
            className={
              "text-[0.9375rem] font-semibold tracking-[-0.04em] md:text-[1.125rem]"
            }
          >
            {"Rime Research"}
            {"."}
          </h2>
          <span
            className={
              "ml-[18px] text-[0.75rem] font-medium tabular-nums tracking-[-0.04em]"
            }
          >
            <span className={"opacity-60"}>{"/"}</span>
            {"2026"}
          </span>
          <span
            className={
              "pj-tag ml-auto mr-3 rounded-full bg-ink-950 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[-0.02em] md:mr-4 md:text-[0.75rem]"
            }
          >
            {"Concept"}
          </span>
          <span aria-hidden={"true"} className={"flex gap-1"}>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#fd5f59" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#ffbb2c" }}
              />
            </span>
            <span
              className={
                "relative size-1.5 rounded-full bg-[#e7e7e7] md:size-2"
              }
            >
              <span
                className={"pj-dot absolute inset-0 rounded-full"}
                style={{ background: "#25c93d" }}
              />
            </span>
          </span>
        </div>
        <span
          className={
            "mt-1 block overflow-hidden rounded-[14px] bg-ink-1000 p-1 md:rounded-[18px]"
          }
        >
          <span
            className={
              "pj-frame relative block aspect-[674/491] overflow-hidden rounded-[11px] md:rounded-[16px] bg-ink-900"
            }
          >
            <Image
              src={"/images/work/hero/rime-research.2026-10-28.webp"}
              alt={
                "A helix of frosted spheres standing in snow, from the Rime Research homepage"
              }
              fill={true}
              sizes={"(min-width: 768px) 48vw, 100vw"}
              quality={90}
              className={"pj-img object-cover"}
            />
            <span
              aria-hidden={"true"}
              className={"pj-shade absolute inset-0 bg-ink-0"}
            />
            <span
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <span
                aria-hidden={"true"}
                className={"pj-logo block "}
                style={{
                  width: "32%",
                  aspectRatio: 7.407407407407407,
                  background:
                    "url(/images/work/logos/rime-research.2026-10-27.webp) center / contain no-repeat",
                }}
              />
            </span>
          </span>
        </span>
        <span className={"sr-only"}>
          {" "}
          {
            "A concept site for a UK research peptide supplier, with a batch report on every product page."
          }
        </span>
        <span className={"sr-only"}>{" (opens in a new tab)"}</span>
      </a>
    ),
  },
];
