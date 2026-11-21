import agency from "@/content/Agency.json";

export async function sendStudioEmail(subject, fields) {
  const response = await fetch("https://formsubmit.co/ajax/" + agency.email, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _url: window.location.origin + window.location.pathname,
      _template: "table",
    }),
    signal: AbortSignal.timeout(60000),
  });
  const result = await response.json();
  if (!response.ok || String(result.success) !== "true")
    throw new Error("Email submission failed");
}
