import { BookingCalendar } from "@/components/BookingCalendar";
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
        projectCount={1}
        brandMark="™"
      />
      <main
        id="main"
        className="v3 flex-1 bg-[#111] px-3 pb-20 pt-24 lg:px-8 lg:pt-36"
      >
        <BookingCalendar />
      </main>
      <Footer />
    </>
  );
}
