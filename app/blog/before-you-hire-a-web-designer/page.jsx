import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "What to bring to a web design brief | Ziggloom",
  description:
    "Gather the content, decisions and account details a designer needs to scope your project.",
};
export default function Page() {
  return (
    <StudioPage
      title="What to bring to a web design brief"
      intro="Gather the content, decisions and account details a designer needs to scope your project."
    >
      <section className="max-w-2xl">
        <h2>Bring a short brief</h2>
        <p>
          Write down your audience, the action they should take and the pages or
          products you need. Gather the logo, copy and photos you have
          permission to use, and identify who will approve changes.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Agree what happens after launch</h2>
        <p>
          Ask which edits you can make, what hosting costs and who owns the
          domain account. Put the deliverables, review dates, support period and
          payment schedule in the proposal.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
