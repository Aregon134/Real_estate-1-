import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "Five routine jobs to consider automating | Ziggloom",
  description:
    "Choose a repeatable task and plan how your team will handle exceptions.",
};
export default function Page() {
  return (
    <StudioPage
      title="Five routine jobs to consider automating"
      intro="Choose a repeatable task and plan how your team will handle exceptions."
    >
      <section className="max-w-2xl">
        <h2>Start where work repeats</h2>
        <p>
          Consider an enquiry acknowledgement, a booking reminder, an internal
          task after a sale, a draft quote or a weekly sales summary. Pick the
          one your team already handles consistently.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Design the exception</h2>
        <p>
          Write down what starts the task, which data it needs and who takes
          over if something is missing. Run a few sample cases, including a
          cancellation and a duplicate, before enabling it for customers.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
