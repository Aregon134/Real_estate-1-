import { StudioPage } from "@/components/StudioPage";
import founders from "@/content/Team.json";

export const metadata = {
  title: "Meet the co-founders | Ziggloom",
  description:
    "Kushagra Bhartia, Ayush Kumar and Shresth Maheshwari co-founded Ziggloom. We design websites and build online stores together.",
};
export default function Page() {
  return (
    <StudioPage
      title="Meet the co-founders"
      intro="Kushagra Bhartia, Ayush Kumar and Shresth Maheshwari co-founded Ziggloom. We design websites and build online stores together."
    >
      <ul>
        {founders.map((person) => (
          <li key={person.name}>
            <strong>{person.name}</strong> · {person.title}
          </li>
        ))}
      </ul>
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
