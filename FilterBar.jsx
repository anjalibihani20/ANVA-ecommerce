import { categories } from "../data/products.js";

export const priceRanges = [
  { value: "all", label: "Any price" },
  { value: "under-5000", label: "Under ₹5,000" },
  { value: "5000-8000", label: "₹5,000 to ₹8,000" },
  { value: "over-8000", label: "Over ₹8,000" },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name: A-Z" },
];

export default function FilterBar({ category, onCategoryChange, price, onPriceChange, sort, onSortChange }) {
  return (
    <div className="filter-bar">
      <div className="chip-row" role="group" aria-label="Filter by category">
        <button className={category === "all" ? "chip active" : "chip"} aria-pressed={category === "all"} onClick={() => onCategoryChange("all")}>
          All
        </button>
        {categories.map((item) => (
          <button
            key={item.slug}
            className={category === item.name ? "chip active" : "chip"}
            aria-pressed={category === item.name}
            onClick={() => onCategoryChange(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="select-row">
        <label>
          <span>Price</span>
          <select value={price} onChange={(event) => onPriceChange(event.target.value)}>
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Sort by</span>
          <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
