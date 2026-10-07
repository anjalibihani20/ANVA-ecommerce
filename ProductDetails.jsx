import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products, categories } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";

export default function ProductDetails({ wishlist, toggleWishlist, addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container page empty-state">
        <h1>Bag not found.</h1>
        <Link to="/shop" className="btn btn-dark">Back to shop</Link>
      </div>
    );
  }

  // key={product.id} resets the colour and quantity when you open a different product
  return <ProductView key={product.id} product={product} wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />;
}

function ProductView({ product, wishlist, toggleWishlist, addToCart }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const isWishlisted = wishlist.includes(product.id);
  const category = categories.find((item) => item.name === product.category);

  function handleAdd() {
    addToCart(product.id, selectedColor.name, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="container page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/shop">Shop</Link> / <Link to={`/category/${category.slug}`}>{product.category}</Link> / <span>{product.name}</span>
      </nav>

      <div className="detail">
        <div className="detail-image">
          <img src={selectedColor.image} alt={`${product.name} in ${selectedColor.name.toLowerCase()}`} width="800" height="1000" />
        </div>

        <div className="detail-info">
          <p className="muted">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="price detail-price">{formatPrice(product.price)}</p>
          <p className="detail-description">{product.description}</p>

          <div>
            <p id="color-label" className="color-label">Colour: <strong>{selectedColor.name}</strong></p>
            <div className="swatches" role="group" aria-labelledby="color-label">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={color.name === selectedColor.name ? "swatch selected" : "swatch"}
                  style={{ "--swatch": color.value }}
                  onClick={() => setSelectedColor(color)}
                  aria-pressed={color.name === selectedColor.name}
                  aria-label={color.name}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <p className="muted small">The photo shows the main colour. Other colours are made in the same style.</p>

          <dl className="specs">
            <div><dt>Material</dt><dd>{product.material}</dd></div>
            <div><dt>Colours</dt><dd>{product.colors.map((c) => c.name).join(", ")}</dd></div>
            <div><dt>Rating</dt><dd>{product.rating} out of 5</dd></div>
          </dl>

          <div className="qty-row">
            <span id="qty-label">Quantity</span>
            <div className="qty" role="group" aria-labelledby="qty-label">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">−</button>
              <span aria-live="polite">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div className="detail-actions">
            <button className="btn btn-dark" onClick={handleAdd}>Add to cart</button>
            <button className="btn btn-outline" onClick={() => toggleWishlist(product.id)} aria-pressed={isWishlisted}>
              {isWishlisted ? "Saved to wishlist" : "Add to wishlist"}
            </button>
          </div>
          <p className="added-note" role="status">
            {added && <>Added to cart. <Link to="/cart" className="link-underline">View cart</Link></>}
          </p>
        </div>
      </div>
    </div>
  );
}
