export function HomeWork() {
  return (
    <section className="bg-ink-950 px-gutter py-20 text-ink-0 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight lg:text-6xl">
          Inside the Ziggloom website.
        </h2>
        <p className="my-6 max-w-2xl text-lg">
          Explore the studio’s own website, from choosing a service to
          requesting a project call.
        </p>
        <a href="/" aria-label="Open the Ziggloom homepage">
          <img
            src="/images/studio/agency-website.webp"
            width="1200"
            height="758"
            loading="lazy"
            alt="Ziggloom homepage with its studio wordmark, service menu and call booking card"
            className="my-8 w-full rounded-2xl"
          />
        </a>
        <a className="underline underline-offset-4" href="/portfolio/">
          View studio work
        </a>
      </div>
    </section>
  );
}
