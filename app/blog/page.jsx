import { BlogBlog } from "@/sections/BlogBlog";
import { Footer } from "@/sections/Footer";
import { HeaderBar } from "@/components/HeaderBar";
import dataAgency from "@/content/Agency.json";
import dataNavigation from "@/content/Navigation.json";
export const metadata = {
  title: "Web Design, SEO & AI Blog | Ziggloom",
  description:
    "Plain answers on websites, SEO, AI search and automation for people running a business in Lincolnshire and beyond, from the studio team of Ziggloom.",
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
        <BlogBlog />
      </main>
      <Footer />
    </>
  );
}
