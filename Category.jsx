import { Link, useParams } from "react-router-dom";
import { products, categories } from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";

export default function Category({ wishlist, toggleWishlist }) {
  const { category: slug } = useParams();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <div className="container page empty-state">
        <h1>Category not found.</h1>
        <Link to="/collections" className="btn btn-dark">See all collections</Link>
      </div>
    );
  }

  const items = products.filter((product) => product.category === category.name);

  return (
    <div className="container page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/shop">Shop</Link> / <span>{category.name}</span>
      </nav>
      <header className="page-head">
        <h1>{category.name}</h1>
        <p className="muted">{category.blurb}</p>
      </header>
      <p className="result-count">{items.length} bags</p>
      <ProductGrid products={items} wishlist={wishlist} toggleWishlist={toggleWishlist} />
    </div>
  );
}
