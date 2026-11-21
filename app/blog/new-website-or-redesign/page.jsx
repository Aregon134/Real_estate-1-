import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "Does your website need a redesign or a rebuild? | Ziggloom",
  description:
    "Watch a customer use your site, then check which problems the current platform can fix.",
};
export default function Page() {
  return (
    <StudioPage
      title="Does your website need a redesign or a rebuild?"
      intro="Watch a customer use your site, then check which problems the current platform can fix."
    >
      <section className="max-w-2xl">
        <h2>Start with the task</h2>
        <p>
          Ask someone to find your offer on their phone and get in touch. Watch
          where they hesitate. If they can complete the task and the underlying
          site is easy to edit, start with the wording, navigation and layout.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>When to rebuild</h2>
        <p>
          Make a list of changes the current system prevents. An unreliable
          checkout, a catalogue you cannot maintain or an inaccessible domain
          account warrants investigation before paying for a visual refresh.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
