import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "What makes a product page feel considered? | Ziggloom",
  description:
    "Help shoppers see the product, compare their options and act comfortably on a phone.",
};
export default function Page() {
  return (
    <StudioPage
      title="What makes a product page feel considered?"
      intro="Help shoppers see the product, compare their options and act comfortably on a phone."
    >
      <section className="max-w-2xl">
        <h2>Give the product room</h2>
        <p>
          Lead with one clear photograph and a specific description. On a
          product page, place the price, available options and buying action
          close enough that a customer can consider them together.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Review the small screens</h2>
        <p>
          Try the page on a phone with one hand. Check that text is legible,
          images explain the offer and the primary button is easy to find. Use
          movement where it helps someone understand a change on screen.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
