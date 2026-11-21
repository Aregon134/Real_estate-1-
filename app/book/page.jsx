import agency from "@/content/Agency.json";
import { CalEmbed } from "@/components/CalEmbed";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title: "Book a 15-Minute Call | Ziggloom",
  description:
    "Book a 15-minute call with Ziggloom, by phone or Google Meet, to talk through your website, online shop or systems.",
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
      <main id="main" className="v3 flex-1 bg-ink-950 px-6 py-24 text-ink-0">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-semibold">Book a project call.</h1>
          <CalEmbed />
        </div>
      </main>
      <Footer />
    </>
  );
}
