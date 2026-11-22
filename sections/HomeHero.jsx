import agency from "@/content/Agency.json";
import team from "@/content/Team.json";
import { FounderCard } from "@/components/FounderCard";
import { SmokeCanvas } from "@/components/SmokeCanvas";
import styles from "./HomeHero.module.css";

const services = [
  ["Web design and development", "/services/web-design"],
  ["Shopify & e-commerce", "/services/shopify"],
  ["SEO and GEO", "/services/seo"],
  ["AI and workflow automation", "/ai"],
];

export function HomeHero() {
  return (
    <section
      className={`j5buJW_variable uBJf4W_variable ${styles.hero}`}
      aria-labelledby="hero-heading"
    >
      <div className={styles.panel}>
        <div className={styles.backdrop} aria-hidden="true">
          <picture>
            <source
              media="(min-aspect-ratio: 1/1)"
              srcSet="/images/hero/smoke-wide.2026-10-29.webp"
            />
            <img
              src="/images/hero/smoke-tall.2026-10-29.webp"
              alt=""
              fetchPriority="high"
            />
          </picture>
          <SmokeCanvas />
        </div>
        <div className={styles.brand}>
          <h1 id="hero-heading">{agency.name.toLowerCase()}</h1>
          <p>{agency.tagline}</p>
        </div>
        <nav className={styles.services} aria-label="Agency services">
          {services.map(([name, href]) => (
            <a href={href} key={href}>
              {name}
            </a>
          ))}
        </nav>
        <div className={styles.card}>
          <FounderCard
            founders={team}
            bookingUrl={agency.bookingUrl}
            brand={agency.name}
          />
        </div>
        <div className={styles.intro}>
          <p>Websites, Shopify stores and workflows for businesses in India.</p>
          <a href="#projects" className={styles.projects}>
            See projects <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
