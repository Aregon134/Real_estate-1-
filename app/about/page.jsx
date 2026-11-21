import { StudioPage } from "@/components/StudioPage";
export const metadata = {
  title: "Meet Kushagra Bhartia | Ziggloom",
  description:
    "I run Ziggloom from Himachal Pradesh, India. You’ll speak directly with me about your website, store or automation project.",
};
export default function Page() {
  return (
    <StudioPage
      title="Meet Kushagra Bhartia"
      intro="I run Ziggloom from Himachal Pradesh, India. You’ll speak directly with me about your website, store or automation project."
    >
      <h2>From a brief to a working site</h2>
      <p>
        Bring a page you want to improve, a product you want to sell, or a task
        you repeat every week. We can use the first call to agree on what to
        build and how to judge the result.
      </p>
      <a href="/book/">Book a 15-minute call</a>
    </StudioPage>
  );
}
