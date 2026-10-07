import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";

export default function Wishlist({ wishlist, toggleWishlist }) {
  const saved = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className="container page">
      <header className="page-head">
        <h1>Wishlist</h1>
        <p className="muted">{saved.length} saved</p>
      </header>
      {saved.length > 0 ? (
        <ProductGrid products={saved} wishlist={wishlist} toggleWishlist={toggleWishlist} />
      ) : (
        <div className="empty-state">
          <h2>Nothing saved yet.</h2>
          <p className="muted">Tap the heart on any bag to keep it here.</p>
          <Link to="/shop" className="btn btn-dark">Browse the collection</Link>
        </div>
      )}
    </div>
  );
}
