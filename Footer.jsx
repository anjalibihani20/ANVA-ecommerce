import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="wordmark">ANVA</p>
          <p className="muted">Carry what matters.</p>
        </div>
        <nav aria-label="Footer" className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <a href="mailto:hello@anva.example">Contact</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p className="muted">© {new Date().getFullYear()} ANVA. A student frontend project; no real products are sold.</p>
      </div>
    </footer>
  );
}
