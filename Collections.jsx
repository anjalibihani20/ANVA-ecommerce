import { Link } from "react-router-dom";
import { categories } from "../data/products.js";
import CategoryCard from "../components/CategoryCard.jsx";

export default function Collections({ notFound = false }) {
  return (
    <div className="container page">
      <header className="page-head">
        <h1>{notFound ? "Page not found." : "Collections"}</h1>
        <p className="muted">
          {notFound ? "That page doesn't exist. Try one of our collections." : "Five ways to carry your day."}
        </p>
      </header>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
      {notFound && <p style={{ marginTop: "2rem" }}><Link to="/" className="link-underline">Go home</Link></p>}
    </div>
  );
}
