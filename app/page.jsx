import { AboutProcess } from "@/sections/AboutProcess";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { HeaderSurfaceSentinel } from "@/components/HeaderBar";
import { HomeFaq } from "@/sections/HomeFaq";
import { HomeHero } from "@/sections/HomeHero";
import { HomeHiddenCost } from "@/sections/HomeHiddenCost";
import { HomeLatest } from "@/sections/HomeLatest";
import { HomeServices } from "@/sections/HomeServices";
import { HomeWhy } from "@/sections/HomeWhy";
import { HomeWork } from "@/sections/HomeWork";
import { HowWeWorkPricing } from "@/sections/HowWeWorkPricing";
import dataAgency from "@/content/Agency.json";

import dataNavigation from "@/content/Navigation.json";
import dataTeam from "@/content/Team.json";
export const metadata = {
  title: "Ziggloom | Web Design & AI Automation in India",
  description:
    "Premium web design in India: custom websites, SEO and AI automation from a founder-led agency, at fixed prices from ₹5,000. Book a 15-minute call.",
};
export default function Page() {
  return (
    <>
      <HeaderBar
        nav={dataNavigation}
        site={dataAgency}
        brandMark="™"
      />
      <main id="main" className="v3 flex-1">
        <HomeHero />
        <HeaderSurfaceSentinel />
        <HomeWork />
        <HomeServices />
        <AboutProcess />
        <HomeHiddenCost />
        <HomeWhy />
        <HowWeWorkPricing />
        <HomeFaq />
        <HomeLatest />
        <ContactForm site={dataAgency} founders={dataTeam} />
      </main>
      <Footer />
    </>
  );
}
