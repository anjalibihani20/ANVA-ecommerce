// Downloads the photos listed in scripts/photo-sources.json into public/images/products/.
// Usage: npm run photos   (needs Node 18+ and internet)
import fs from "fs";

const sources = JSON.parse(fs.readFileSync("scripts/photo-sources.json", "utf8"));
fs.mkdirSync("public/images/products", { recursive: true });

for (const [slug, url] of Object.entries(sources)) {
  if (!url) {
    console.log(`skip   ${slug} (no URL yet)`);
    continue;
  }
  const response = await fetch(url);
  if (!response.ok) {
    console.log(`FAILED ${slug} (${response.status})`);
    continue;
  }
  fs.writeFileSync(`public/images/products/${slug}.jpg`, Buffer.from(await response.arrayBuffer()));
  console.log(`saved  ${slug}.jpg`);
}
