import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/sections/Footer";
import agency from "@/content/Agency.json";
import nav from "@/content/Navigation.json";
import projects from "@/content/PortfolioItems.json";
import styles from "../case.module.css";

const project = projects.find((item) => item.id === "rahul-fitness");
export const metadata = {
  title: "Rahul Fitness — Client case study | Ziggloom",
  description: project.summary,
};

export default function Page() {
  return (
    <>
      <HeaderBar nav={nav} site={agency} brandMark={agency.brandMark} />
      <main id="main" className={styles.case}>
        <header className={styles.title}>
          <a href="/portfolio/">← All projects</a>
          <h1>Rahul Fitness.</h1>
          <p>{project.summary}</p>
        </header>
        <figure className={styles.cover}>
          <img
            src={project.cover}
            alt="Rahul Fitness homepage with a training portrait and the X Frame Method headline"
            width="1440"
            height="900"
            fetchPriority="high"
          />
        </figure>
        <section className={styles.chapter}>
          <h2>Introduction</h2>
          <div>
            <p className={styles.lead}>
              Some visitors arrive looking for a workout program they can follow
              on their own. Others want to talk to Rahul about coaching or
              nutrition. The homepage gives each goal its own route.
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Client</dt>
                <dd>Rahul Fitness</dd>
              </div>
              <div>
                <dt>Industry</dt>
                <dd>{project.sector}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>
                  Responsive web design, program finder and three offer pages
                </dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>
                  <a href={project.siteUrl}>View live website ↗</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section className={styles.chapter}>
          <h2>The brief</h2>
          <p className={styles.lead}>
            Make it easy to answer two questions on a phone: “Which program
            suits me?” and “How do I start?” An annual membership and a personal
            coaching enquiry need different next steps.
          </p>
        </section>
        <section className={styles.chapter}>
          <h2>Approach</h2>
          <div className={styles.decisions}>
            <div>
              <h3>Let the visitor choose by goal</h3>
              <p>
                The program finder asks what kind of support someone wants.
                Choosing a training system opens the X Frame Method. Individual
                guidance leads to coaching, and a focus on nutrition leads to
                the diet plan.
              </p>
            </div>
            <div>
              <h3>Give each offer the same reading order</h3>
              <p>
                Each program opens with an overview, then explains what’s
                included and what the visitor will need. Large headings and
                training photography give the three pages a common identity.
              </p>
            </div>
            <div>
              <h3>Match the action to the offer</h3>
              <p>
                The membership page links to Rahul’s Skool community. The
                coaching and diet-plan pages direct visitors to Instagram to
                discuss their needs with him.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.gallery}>
          <figure>
            <img
              src="/images/work/rahul-fitness/membership.webp"
              alt="Desktop X Frame Method page pairing a training portrait with the membership overview"
              width="1440"
              height="900"
              loading="lazy"
            />
            <figcaption>The membership overview on desktop.</figcaption>
          </figure>
          <figure>
            <img
              src="/images/work/rahul-fitness/mobile-menu.webp"
              alt="Open mobile menu above the Rahul Fitness homepage"
              width="390"
              height="844"
              loading="lazy"
            />
            <figcaption>Navigation on a phone.</figcaption>
          </figure>
        </div>
        <section className={styles.chapter}>
          <h2>How it was checked</h2>
          <p>
            We opened the homepage and all three offer pages, checked the
            destinations in the program finder and verified the membership link
            to Skool. At a 390px phone width, the menu opened and the homepage
            fit without horizontal scrolling.
          </p>
        </section>
        <section className={styles.chapter}>
          <h2>Final thoughts</h2>
          <div>
            <p className={styles.lead}>
              A visitor ready to join can go straight to the community. Someone
              who needs individual advice can start a conversation with Rahul
              from the relevant program page.
            </p>
            <a className={styles.visit} href={project.siteUrl}>
              Visit Rahul Fitness ↗
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
