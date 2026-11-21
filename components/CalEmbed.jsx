import agency from "@/content/Agency.json";
export function CalEmbed() {
  return (
    <div className="rounded-[18px] bg-ink-950 p-6">
      <h2 className="text-3xl font-semibold">Request a project call</h2>
      <p className="my-4">
        Tell us about your project and include your time zone and two times that
        work for you.
      </p>
      <a
        className="hero-cta hero-cta-light"
        href={`mailto:${agency.email}?subject=Ziggloom%20project%20call`}
      >
        Request a time by email
      </a>
    </div>
  );
}
