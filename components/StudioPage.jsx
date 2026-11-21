import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/sections/Footer";
import agency from "@/content/Agency.json";
import nav from "@/content/Navigation.json";

export function StudioPage({ title, intro, children }) {
  return (
    <>
      <HeaderBar
        site={agency}
        nav={nav}
        projectCount={1}
        brandMark={agency.brandMark}
      />
      <main
        id="main"
        className="v3 flex-1 bg-ink-950 px-gutter pb-24 pt-36 text-ink-0 lg:pt-52"
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-tight lg:text-8xl">
            {title}
          </h1>
          <p className="my-8 max-w-2xl text-xl leading-relaxed">{intro}</p>
          <div className="space-y-6 text-lg leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-2xl [&_h2]:font-semibold">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
