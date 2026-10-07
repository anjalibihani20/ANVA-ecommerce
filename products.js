// All catalog data lives here.
// Images: real product photographs in /public/images/products/<product-slug>.jpg (800x1000, 4:5).
// One photo per product - all of its colour variants share that photo.
const PHOTO_BASE = "https://images.pexels.com/photos";

const PHOTO_IDS = {
  "mira-tote": "9869067",
  "noa-shoulder-bag": "14837855",
  "kai-sling": "39969363",
  "vea-handbag": "5670",
  "aria-mini": "8801091",
  "rue-backpack": "19956439",
  "nola-laptop-bag": "29359845",
  "sula-hobo": "27100523",
  "bria-bucket": "8909025",
  "ivy-clutch": "13576989",
  "tessa-satchel": "1656",
  "dara-belt-bag": "4279140",
  "orla-weekender": "13872590",
  "aven-office-bag": "10992839",
  "lune-everyday-bag": "7128339"
};
const PHOTO_FILES = {
  "mira-tote": "pexels-photo-9869067.jpeg",
  "noa-shoulder-bag": "pexels-photo-14837855.jpeg",
  "kai-sling": "pexels-photo-39969363.jpeg",
  "vea-handbag": "wood-fashion-black-stylish.jpg",
  "aria-mini": "pexels-photo-8801091.jpeg",
  "rue-backpack": "pexels-photo-19956439.jpeg",
  "nola-laptop-bag": "pexels-photo-29359845.jpeg",
  "sula-hobo": "pexels-photo-27100523.jpeg",
  "bria-bucket": "pexels-photo-8909025.jpeg",
  "ivy-clutch": "pexels-photo-13576989.jpeg",
  "tessa-satchel": "road-fashion-vintage-bag.jpg",
  "dara-belt-bag": "pexels-photo-4279140.jpeg",
  "orla-weekender": "pexels-photo-13872590.jpeg",
  "aven-office-bag": "pexels-photo-10992839.jpeg",
  "lune-everyday-bag": "pexels-photo-7128339.jpeg",
};

const COLOR_VALUES = {
  Black: "#1f1f1d", Ivory: "#e9e2d0", Beige: "#cdbb9d", Brown: "#6b4a33", Tan: "#b88a5a",
  Olive: "#6b7457", Burgundy: "#6e2a35", Navy: "#26354f", Grey: "#8a8a86",
};

// Turns ["Black", "Tan"] into [{ name, value, image }, ...]
function makeColors(slug, names) {
  return names.map((name) => ({
    name,
    value: COLOR_VALUES[name],
    image: `${PHOTO_BASE}/${PHOTO_IDS[slug]}/${PHOTO_FILES[slug]}`,
  }));
}

const rawProducts = [
  { id: 1, slug: "mira-tote", name: "ANVA Mira Tote", category: "Totes", price: 5490, rating: 4.7, featured: true, material: "Heavy organic cotton canvas", colorNames: ["Beige", "Black", "Olive"], description: "A wide, unlined tote with a flat base and reinforced handles. Holds a day's worth of things without ever looking full." },
  { id: 2, slug: "noa-shoulder-bag", name: "ANVA Noa Shoulder Bag", category: "Shoulder Bags", price: 6990, rating: 4.8, featured: true, material: "Pebbled vegan leather", colorNames: ["Black", "Tan", "Burgundy"], description: "A soft shoulder bag with a magnetic flap and a wide strap. Sits neatly under the arm." },
  { id: 3, slug: "kai-sling", name: "ANVA Kai Sling", category: "Sling & Crossbody", price: 3990, rating: 4.4, featured: false, material: "Water-resistant ripstop nylon", colorNames: ["Olive", "Black", "Grey"], description: "A compact crossbody with an adjustable strap and a zipped front pocket. Light enough to forget you are wearing it." },
  { id: 4, slug: "vea-handbag", name: "ANVA Vea Handbag", category: "Handbags", price: 9490, rating: 4.9, featured: true, material: "Smooth vegan leather", colorNames: ["Black", "Burgundy"], description: "Our most considered handbag. A firm trapezoid structure, rigid top handle, turn-lock closure and a lined interior." },
  { id: 5, slug: "aria-mini", name: "ANVA Aria Mini", category: "Mini Bags", price: 4290, rating: 4.5, featured: true, material: "Smooth vegan leather", colorNames: ["Ivory", "Black", "Tan"], description: "A small top-handle bag with a detachable chain. Fits a phone, keys, cards and a lip balm." },
  { id: 6, slug: "rue-backpack", name: "ANVA Rue Backpack", category: "Backpacks", price: 7990, rating: 4.7, featured: false, material: "Coated canvas", colorNames: ["Black", "Grey", "Navy"], description: "A clean, minimal backpack with a front zip pocket and padded straps for long commutes." },
  { id: 7, slug: "nola-laptop-bag", name: "ANVA Nola Laptop Bag", category: "Laptop Bags", price: 8990, rating: 4.9, featured: false, material: "Padded recycled nylon", colorNames: ["Grey", "Navy", "Black"], description: "A slim padded bag that fits a 15-inch laptop, with a front organiser pocket and a detachable shoulder strap." },
  { id: 8, slug: "sula-hobo", name: "ANVA Sula Hobo", category: "Hobo Bags", price: 6490, rating: 4.6, featured: false, material: "Soft grained vegan leather", colorNames: ["Brown", "Beige", "Black"], description: "A slouchy crescent shape that softens with use. The curved strap keeps it comfortable on the shoulder." },
  { id: 9, slug: "bria-bucket", name: "ANVA Bria Bucket", category: "Bucket Bags", price: 5990, rating: 4.5, featured: false, material: "Suede-finish microfibre", colorNames: ["Tan", "Ivory"], description: "A drawstring bucket bag with a roomy open interior and a removable shoulder strap." },
  { id: 10, slug: "ivy-clutch", name: "ANVA Ivy Clutch", category: "Clutches", price: 3490, rating: 4.3, featured: false, material: "Satin-finish vegan leather", colorNames: ["Black", "Burgundy"], description: "A flat envelope clutch for evenings out. Comes with a slim chain you can tuck away." },
  { id: 11, slug: "tessa-satchel", name: "ANVA Tessa Satchel", category: "Satchels", price: 8490, rating: 4.7, featured: true, material: "Full-grain vegan leather", colorNames: ["Brown", "Tan"], description: "A classic satchel with a deep flap, two buckle straps and a top handle. Built to look better with age." },
  { id: 12, slug: "dara-belt-bag", name: "ANVA Dara Belt Bag", category: "Belt Bags", price: 2990, rating: 4.4, featured: false, material: "Soft-touch nylon", colorNames: ["Black", "Olive", "Grey"], description: "A small belt bag that keeps your hands free. Two zip compartments and an adjustable belt." },
  { id: 13, slug: "orla-weekender", name: "ANVA Orla Weekender", category: "Weekenders", price: 11990, rating: 4.8, featured: false, material: "Waxed cotton canvas", colorNames: ["Navy", "Grey", "Tan"], description: "A roomy duffel for two nights away, with a full-length zip, a front pocket and a detachable strap." },
  { id: 14, slug: "aven-office-bag", name: "ANVA Aven Office Bag", category: "Office Bags", price: 10990, rating: 4.8, featured: false, material: "Structured vegan leather", colorNames: ["Black", "Brown"], description: "A firm, boxy briefcase with a rigid handle, twin locks and a padded document compartment." },
  { id: 15, slug: "lune-everyday-bag", name: "ANVA Lune Everyday Bag", category: "Everyday Bags", price: 4490, rating: 4.2, featured: false, material: "Washed cotton canvas", colorNames: ["Ivory", "Olive", "Navy"], description: "A casual zip-top bag with a wide flat strap and a front pocket. Easy to wear with anything." },
];

// Add `colors`, `images` (one per colour) and a default `image` to every product
export const products = rawProducts.map(({ colorNames, ...product }) => {
  const colors = makeColors(product.slug, colorNames);
  return { ...product, colors, images: [...new Set(colors.map((color) => color.image))], image: colors[0].image };
});

// One entry per bag type. Each shows the first product of that type as its picture.
const categoryList = [
  ["totes", "Totes", "Open, roomy and easy. The bag you reach for first."],
  ["shoulder-bags", "Shoulder Bags", "Soft shapes that sit comfortably under the arm."],
  ["sling-crossbody", "Sling & Crossbody", "Small, light and worn close for days on the move."],
  ["handbags", "Handbags", "Structured shapes for work, dinners and everything between."],
  ["mini-bags", "Mini Bags", "Just the essentials, carried with a little polish."],
  ["backpacks", "Backpacks", "Carry more, feel less. Clean lines with real capacity."],
  ["laptop-bags", "Laptop Bags", "Padded, slim and made for a 15-inch laptop."],
  ["hobo-bags", "Hobo Bags", "Slouchy, relaxed and softer the longer you use them."],
  ["bucket-bags", "Bucket Bags", "A drawstring shape with a surprisingly deep interior."],
  ["clutches", "Clutches", "Flat, small and made for evenings out."],
  ["satchels", "Satchels", "A classic flap-and-buckle shape that ages well."],
  ["belt-bags", "Belt Bags", "Hands-free carrying for city days and travel."],
  ["weekenders", "Weekenders", "Roomy duffels for short trips."],
  ["office-bags", "Office Bags", "Structured and sharp for the working day."],
  ["everyday-bags", "Everyday Bags", "Casual, easy and ready for anything."],
];

export const categories = categoryList.map(([slug, name, blurb]) => ({
  slug,
  name,
  blurb,
  image: products.find((product) => product.category === name).image,
}));

// The five types shown on the home page (all of them are on the Collections page)
export const homeCategorySlugs = ["totes", "handbags", "backpacks", "bucket-bags", "satchels"];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
