import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export default function Navbar({ cartCount, wishlistCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
    closeMenu();
  }

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <Link to="/" className="wordmark" onClick={closeMenu} aria-label="ANVA home">ANVA</Link>

        <nav id="main-nav" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main">
          <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink>
          <NavLink to="/collections" onClick={closeMenu}>Collections</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </nav>

        <div className="nav-actions">
          <button className="text-button" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}>
            Search
          </button>
          <NavLink to="/wishlist" aria-label={`Wishlist, ${wishlistCount} saved`}>
            Wishlist{wishlistCount > 0 && <span className="count">{wishlistCount}</span>}
          </NavLink>
          <NavLink to="/cart" aria-label={`Cart, ${cartCount} items`}>
            Cart{cartCount > 0 && <span className="count">{cartCount}</span>}
          </NavLink>
        </div>
      </div>

      {searchOpen && (
        <form className="navbar-search container" onSubmit={handleSearch} role="search">
          <SearchBar value={query} onChange={setQuery} autoFocus />
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      )}
    </header>
  );
}
