import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "Who controls your website after launch? | Ziggloom",
  description:
    "Check who controls the domain, hosting, content and licences before you sign.",
};
export default function Page() {
  return (
    <StudioPage
      title="Who controls your website after launch?"
      intro="Check who controls the domain, hosting, content and licences before you sign."
    >
      <section className="max-w-2xl">
        <h2>Look at the accounts</h2>
        <p>
          Find the account that controls the domain, the hosting plan and the
          store. Check who can renew each one and which email receives the bill.
          Get a second administrator or recovery method in place.
        </p>
      </section>
      <section className="max-w-2xl">
        <h2>Write down the handover</h2>
        <p>
          Ask for an itemised list covering the source files, content, artwork
          and licences. Agree which assets can move to another host and what
          ongoing platform subscriptions you will need.
        </p>
      </section>
      <a href="/blog/">More studio notes</a>
    </StudioPage>
  );
}
