import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products.js";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar.jsx";
import ProductGrid from "../components/ProductGrid.jsx";

function matchesPrice(price, range) {
  if (range === "under-5000") return price < 5000;
  if (range === "5000-8000") return price >= 5000 && price <= 8000;
  if (range === "over-8000") return price > 8000;
  return true;
}

export default function Shop({ wishlist, toggleWishlist }) {
  // the search text lives in the URL (?q=) so the navbar search can reuse it
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("featured");

  function updateQuery(text) {
    setSearchParams(text ? { q: text } : {}, { replace: true });
  }

  function resetAll() {
    setSearchParams({});
    setCategory("all");
    setPrice("all");
    setSort("featured");
  }

  const search = query.trim().toLowerCase();
  const visible = products
    .filter((p) => category === "all" || p.category === category)
    .filter((p) => matchesPrice(p.price, price))
    .filter((p) => p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search));

  if (sort === "price-low") visible.sort((a, b) => a.price - b.price);
  if (sort === "price-high") visible.sort((a, b) => b.price - a.price);
  if (sort === "name") visible.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container page">
      <header className="page-head">
        <h1>Shop</h1>
        <p className="muted">Every ANVA bag, made to be used daily.</p>
      </header>

      <SearchBar value={query} onChange={updateQuery} />
      <FilterBar
        category={category} onCategoryChange={setCategory}
        price={price} onPriceChange={setPrice}
        sort={sort} onSortChange={setSort}
      />

      <p className="result-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "bag" : "bags"}
      </p>

      {visible.length > 0 ? (
        <ProductGrid products={visible} wishlist={wishlist} toggleWishlist={toggleWishlist} />
      ) : (
        <div className="empty-state">
          <h2>No bags found.</h2>
          <p className="muted">Try a different search or clear your filters.</p>
          <Link to="/shop" className="btn btn-dark" onClick={resetAll}>Back to the collection</Link>
        </div>
      )}
    </div>
  );
}
