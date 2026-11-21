import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "How to describe your business for AI search | Ziggloom",
  description:
    "Make your services, location and contact details clear across the public profiles you control.",
};
export default function Page() {
  return (
    <StudioPage
      title="How to describe your business for AI search"
      intro="Make your services, location and contact details clear across the public profiles you control."
    >
      <section className="max-w-2xl">
        <h2>Write the details someone needs to decide</h2>
        <p>
          State what you offer, where you work and how a customer can contact
          you. A specific answer about the service is easier to use than a page
          full of broad claims.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Check how the business is described</h2>
        <p>
          Compare the details on your website with the profiles you control. If
          an AI answer describes the business inaccurately, correct the
          underlying public information. Inclusion in an answer is outside the
          studio’s control.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
