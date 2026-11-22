import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/sections/Footer";
import agency from "@/content/Agency.json";
import nav from "@/content/Navigation.json";
import projects from "@/content/PortfolioItems.json";
import styles from "../case.module.css";

const project = projects.find((item) => item.id === "ayush-edit-portfolio");

export const metadata = {
  title: "Ayush’s Edit Portfolio — Studio work | Ziggloom",
  description: project.summary,
};

export default function Page() {
  return (
    <>
      <HeaderBar nav={nav} site={agency} brandMark={agency.brandMark} />
      <main id="main" className={styles.case}>
        <header className={styles.title}>
          <a href="/portfolio/">← All projects</a>
          <h1>{project.title}.</h1>
          <p>{project.summary}</p>
        </header>
        <figure className={styles.cover}>
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="/images/work/timeline-pro/mobile.webp"
            />
            <img
              src={project.cover}
              alt="Ayush’s portfolio opens with a spotlight reel inside a video preview monitor."
              width="1440"
              height="900"
              fetchPriority="high"
            />
          </picture>
        </figure>
        <section className={styles.chapter}>
          <h2>The project</h2>
          <div>
            <p className={styles.lead}>
              A producer looking for a vertical reel can browse by format. An
              editor interested in the cuts can open the workstation and move
              through the sequence.
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Category</dt>
                <dd>Studio work</dd>
              </div>
              <div>
                <dt>Portfolio owner</dt>
                <dd>Ayush Kumar</dd>
              </div>
              <div>
                <dt>Discipline</dt>
                <dd>{project.sector}</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>
                  <a href={project.sourceUrl}>Project on GitHub ↗</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section className={styles.chapter}>
          <h2>Two ways to explore</h2>
          <div className={styles.decisions}>
            <div>
              <h3>Client showcase</h3>
              <p>
                The homepage puts a spotlight reel in the preview monitor. Below
                it, visitors can filter the featured edits by commercials,
                vertical reels, motion or narrative. Each thumbnail shows the
                running time and aspect ratio.
              </p>
            </div>
            <div>
              <h3>Editor workstation</h3>
              <p>
                Project names sit on a navigable 3D sphere above the timeline.
                The playhead, track markers and playback controls turn a
                collection of individual edits into a sequence you can explore.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.gallery}>
          <figure>
            <img
              src="/images/work/timeline-pro/workstation.webp"
              alt="Timeline Pro workstation with a project selected on the 3D sphere and its position marked on the timeline below."
              width="1440"
              height="900"
              loading="lazy"
            />
            <figcaption>
              The desktop workstation with Texture Motion Edit selected.
            </figcaption>
          </figure>
          <figure>
            <img
              src="/images/work/timeline-pro/mobile.webp"
              alt="Phone view of the spotlight reel and the two viewing modes."
              width="390"
              height="844"
              loading="lazy"
            />
            <figcaption>Choosing a viewing mode on a phone.</figcaption>
          </figure>
        </div>
        <a className={styles.visit} href={project.siteUrl}>
          Visit Ayush’s portfolio ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
