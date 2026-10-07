// Checks that every image used by the product data exists in /public.
// Usage: npm run check:images
import fs from "fs";
import { products } from "../src/data/products.js";

let missing = 0;
for (const product of products) {
  for (const image of product.images) {
    if (!fs.existsSync("public" + image)) {
      console.log(`MISSING ${image}  (${product.name})`);
      missing++;
    }
  }
}
console.log(missing === 0 ? `All images found for ${products.length} products.` : `${missing} image(s) missing.`);
process.exit(missing === 0 ? 0 : 1);
