import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import { PortfolioProjectsTitle } from "@/sections/PortfolioProjectsTitle";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title: "Projects | Ziggloom",
  description: "Browse Ziggloom projects by category or search.",
};
export default function Page() {
  return (
    <>
      <HeaderBar nav={dataNavigation} site={dataAgency} brandMark="™" />
      <main id="main" className="v3 flex-1">
        <PortfolioProjectsTitle />
      </main>
      <Footer />
    </>
  );
}
