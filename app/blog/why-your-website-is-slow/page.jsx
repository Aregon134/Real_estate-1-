import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "Where is your website slowing down? | Ziggloom",
  description:
    "Find the delay on a representative page and measure the effect of each change.",
};
export default function Page() {
  return (
    <StudioPage
      title="Where is your website slowing down?"
      intro="Find the delay on a representative page and measure the effect of each change."
    >
      <section className="max-w-2xl">
        <h2>Test a representative page</h2>
        <p>
          Load a product or service page on a phone. Observe whether the delay
          comes before the first text appears, while a large photograph loads,
          or when you try to interact with a button.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Change one thing and measure again</h2>
        <p>
          Check image dimensions, unnecessary scripts and video loading. Compare
          results on the same page under similar conditions. Keep the change
          when it improves the experience without losing something customers
          need.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
