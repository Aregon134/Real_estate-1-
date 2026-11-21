import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "How much could a missed enquiry be worth? | Ziggloom",
  description:
    "Use your call log, conversion rate and order value to estimate the cost of missed follow-up.",
};
export default function Page() {
  return (
    <StudioPage
      title="How much could a missed enquiry be worth?"
      intro="Use your call log, conversion rate and order value to estimate the cost of missed follow-up."
    >
      <section className="max-w-2xl">
        <h2>Read a week of call logs</h2>
        <p>
          Count distinct enquiries that received no reply. Exclude repeat
          attempts, existing customers chasing an order and calls you returned
          later. This gives a better starting point for an estimate.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Put a value on follow-up</h2>
        <p>
          For example, eight missed enquiries a week, a one-in-four sale rate
          and ₹1,500 per sale imply ₹3,000 in potential weekly revenue. Compare
          the cost of a callback process with the margin on the sales you could
          realistically recover.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
