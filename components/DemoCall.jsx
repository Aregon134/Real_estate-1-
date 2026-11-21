import agency from "@/content/Agency.json";
export function DemoCall() {
  return (
    <div className="p-6">
      <h3 className="text-3xl font-semibold">
        Hear how a receptionist would handle your calls
      </h3>
      <p className="my-4">
        Send an example enquiry and we can walk through the conversation
        together.
      </p>
      <a
        className="hero-cta hero-cta-light"
        href={`mailto:${agency.email}?subject=AI%20receptionist%20walkthrough`}
      >
        Request a walkthrough
      </a>
    </div>
  );
}
