export function Alias({ destination }) {
  return (
    <main id="main">
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <a href={destination}>Continue to Ziggloom</a>
    </main>
  );
}
