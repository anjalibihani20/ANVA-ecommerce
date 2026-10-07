import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";

export default function Cart({ cart, changeQuantity, removeFromCart }) {
  const [demoNote, setDemoNote] = useState(false);

  // join cart entries ({ id, quantity }) with full product data
  const lines = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      const color = product && (product.colors.find((c) => c.name === item.color) || product.colors[0]);
      return { ...item, product, color };
    })
    .filter((line) => line.product);
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  if (lines.length === 0) {
    return (
      <div className="container page">
        <header className="page-head"><h1>Cart</h1></header>
        <div className="empty-state">
          <h2>Your cart is empty.</h2>
          <p className="muted">Find something to carry every day.</p>
          <Link to="/shop" className="btn btn-dark">Continue shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container page">
      <header className="page-head"><h1>Cart</h1></header>
      <div className="cart-layout">
        <ul className="cart-list">
          {lines.map(({ product, color, quantity }) => (
            <li key={`${product.id}-${color.name}`} className="cart-item">
              <Link to={`/product/${product.id}`}>
                <img src={color.image} alt={`${product.name} in ${color.name.toLowerCase()}`} width="800" height="1000" loading="lazy" />
              </Link>
              <div className="cart-item-info">
                <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
                <p className="muted">{color.name}</p>
                <div className="qty" role="group" aria-label={`Quantity for ${product.name}`}>
                  <button onClick={() => changeQuantity(product.id, color.name, -1)} aria-label="Decrease quantity">−</button>
                  <span>{quantity}</span>
                  <button onClick={() => changeQuantity(product.id, color.name, 1)} aria-label="Increase quantity">+</button>
                </div>
                <button className="text-button" onClick={() => removeFromCart(product.id, color.name)}>Remove</button>
              </div>
              <p className="price">{formatPrice(product.price * quantity)}</p>
            </li>
          ))}
        </ul>

        <aside className="summary" aria-label="Order summary">
          <h2>Summary</h2>
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>Free</span></div>
          <div className="summary-row total"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
          <button className="btn btn-dark" onClick={() => setDemoNote(true)}>Checkout (demo)</button>
          <p className="muted small" role="status">
            {demoNote
              ? "Checkout is a demo feature. No payment is taken and no order is placed."
              : "Checkout is a demo. No real payments are processed."}
          </p>
        </aside>
      </div>
    </div>
  );
}
