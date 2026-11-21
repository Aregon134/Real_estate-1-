import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "What should an AI receptionist handle? | Ziggloom",
  description:
    "Choose the calls it can answer, decide when to involve a person and test a booking before launch.",
};
export default function Page() {
  return (
    <StudioPage
      title="What should an AI receptionist handle?"
      intro="Choose the calls it can answer, decide when to involve a person and test a booking before launch."
    >
      <section className="max-w-2xl">
        <h2>Decide which calls it can handle</h2>
        <p>
          Start with opening hours, service areas and taking a callback request.
          Supply a short list of approved answers and a clear way to reach a
          person when the caller asks something outside that list.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Try a real booking scenario</h2>
        <p>
          Test how the system handles a changed date, an unavailable slot and a
          caller correcting their number. A booking should appear as confirmed
          only after the calendar accepts it.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
