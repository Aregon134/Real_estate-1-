import { AboutProcess } from "@/sections/AboutProcess";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { HomeFaq } from "@/sections/HomeFaq";
import { ServicesSection2 } from "@/sections/ServicesSection2";
import { ServicesServicesTitle } from "@/sections/ServicesServicesTitle";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";

import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "Web Design, SEO & AI Services in Grimsby | Ziggloom",
  description:
    "Web design, Shopify stores, SEO and AI search, email and SMS marketing and AI automation from a founder-led Grimsby agency, serving Lincolnshire and the UK.",
};
export default function Page() {
  return (
    <>
      <HeaderBar
        nav={dataNavigation}
        site={dataAgency}
        projectCount={7}
        brandMark="™"
      />
      <main id="main" className="v3 flex-1">
        <ServicesServicesTitle />
        <ServicesSection2 />
        <AboutProcess />
        <HomeFaq />
        <ContactForm site={dataAgency} founders={dataTeam} />
      </main>
      <Footer />
    </>
  );
}
