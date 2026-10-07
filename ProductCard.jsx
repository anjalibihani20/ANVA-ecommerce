import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice.js";

export default function ProductCard({ product, isWishlisted, onToggleWishlist }) {
  return (
    <article className="product-card">
      <div className="product-card-media">
        <Link to={`/product/${product.id}`} tabIndex={-1} aria-hidden="true">
          <img src={product.image} alt="" width="800" height="1000" loading="lazy" />
        </Link>
        <button
          className={isWishlisted ? "wish-btn active" : "wish-btn"}
          onClick={() => onToggleWishlist(product.id)}
          aria-pressed={isWishlisted}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M12 20s-7-4.4-7-9.6A4 4 0 0 1 12 8a4 4 0 0 1 7 2.400C19 15.600 12 20 12 20Z" />
          </svg>
        </button>
      </div>
      <div className="product-card-info">
        <div>
          <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
          <p className="muted">{product.category}</p>
          <ul className="swatch-row" aria-label={`Available in ${product.colors.map((c) => c.name).join(", ")}`}>
            {product.colors.map((color) => (
              <li key={color.name} className="swatch-dot" style={{ background: color.value }} title={color.name} />
            ))}
          </ul>
        </div>
        <p className="price">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
