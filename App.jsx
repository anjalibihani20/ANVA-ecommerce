import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Category from "./pages/Category.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import Collections from "./pages/Collections.jsx";
import About from "./pages/About.jsx";

export default function App() {
  // wishlist = array of product ids, cart = array of { id, color, quantity }
  const [wishlist, setWishlist] = useLocalStorage("anva-wishlist", []);
  const [cart, setCart] = useLocalStorage("anva-cart-v2", []);
  const { pathname } = useLocation();

  // start each page at the top when the route changes
  useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  function toggleWishlist(id) {
    setWishlist((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  // a cart line is identified by product id + colour name
  function addToCart(id, color, quantity = 1) {
    setCart((current) => {
      const existing = current.find((item) => item.id === id && item.color === color);
      if (existing) {
        return current.map((item) => (item === existing ? { ...item, quantity: item.quantity + quantity } : item));
      }
      return [...current, { id, color, quantity }];
    });
  }

  function changeQuantity(id, color, change) {
    setCart((current) =>
      current.map((item) =>
        item.id === id && item.color === color ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  }

  function removeFromCart(id, color) {
    setCart((current) => current.filter((item) => !(item.id === id && item.color === color)));
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const shared = { wishlist, toggleWishlist };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home {...shared} />} />
          <Route path="/shop" element={<Shop {...shared} />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/category/:category" element={<Category {...shared} />} />
          <Route path="/product/:id" element={<ProductDetails {...shared} addToCart={addToCart} />} />
          <Route path="/wishlist" element={<Wishlist {...shared} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Collections notFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
