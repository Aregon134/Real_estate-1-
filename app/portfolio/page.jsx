import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { PortfolioProjectsTitle } from "@/sections/PortfolioProjectsTitle";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title: "Web Design Portfolio, Lincolnshire | Ziggloom",
  description:
    "Websites from a founder-led agency in Grimsby: a live client site in Cleethorpes and concept projects, each labelled for what it is, with the decisions written up.",
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
        <PortfolioProjectsTitle />
      </main>
      <Footer />
    </>
  );
}
