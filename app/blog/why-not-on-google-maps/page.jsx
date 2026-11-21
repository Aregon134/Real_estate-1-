import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title:
    "What to check when your business is missing from Google Maps | Ziggloom",
  description:
    "Compare your public details and check the account that manages your Business Profile.",
};
export default function Page() {
  return (
    <StudioPage
      title="What to check when your business is missing from Google Maps"
      intro="Compare your public details and check the account that manages your Business Profile."
    >
      <section className="max-w-2xl">
        <h2>Check what the customer sees</h2>
        <p>
          Search for the exact business name and town. Compare the phone, hours
          and address on the listing with the details on your website. Check for
          duplicate listings before creating another one.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Check the account</h2>
        <p>
          Sign in to the account that manages the Business Profile and look for
          verification or update requests. Search results vary by location, so a
          single search cannot establish your position for every customer.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
