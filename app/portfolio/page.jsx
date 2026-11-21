import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "Studio projects | Ziggloom",
  description: "Explore the work behind Ziggloom.",
};
export default function Page() {
  return (
    <StudioPage
      title="Studio projects"
      intro="Explore the work behind Ziggloom."
    >
      <a href="/" aria-label="Open the Ziggloom homepage">
        <img
          src="/images/studio/agency-website.webp"
          width="1200"
          height="758"
          loading="lazy"
          alt="Ziggloom homepage with its studio wordmark, service menu and call booking card"
          className="my-8 w-full rounded-2xl"
        />
      </a>
      <h2>Ziggloom agency website</h2>
      <p>
        The site you’re viewing is our studio project. Explore the service
        selector, compare project packages, or try the call-request calendar.
      </p>
      <a href="/">Explore the website</a>
    </StudioPage>
  );
}
