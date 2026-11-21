import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

function walk(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(folder, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

const routes = walk("app").filter((file) => path.basename(file) === "page.jsx");
for (const route of routes) {
  const dir = path.dirname(path.relative("app", route));
  const html = fs.readFileSync(path.join("out", dir, "index.html"), "utf8");
  assert.match(html, /<main\b/, route);
  for (const match of html.matchAll(
    /(?:src|poster)="(\/(?:images|media|fonts)\/[^"#?]+)"/g,
  )) {
    assert.ok(
      fs.existsSync(path.join("out", decodeURIComponent(match[1]))),
      route + " references " + match[1],
    );
  }
  assert.ok(
    !html.includes("/_next/image?url="),
    route + " needs an unavailable image server",
  );
}
console.log(`Verified output for ${routes.length} routes.`);
