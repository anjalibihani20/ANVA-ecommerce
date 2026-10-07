import { Link } from "react-router-dom";
import { products, categories, homeCategorySlugs, getProductBySlug } from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";
import CategoryCard from "../components/CategoryCard.jsx";

export default function Home({ wishlist, toggleWishlist }) {
  const heroProduct = getProductBySlug("mira-tote");
  const editorialProduct = getProductBySlug("rue-backpack");
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const homeCategories = homeCategorySlugs.map((slug) => categories.find((c) => c.slug === slug));

  return (
    <>
      <section className="hero container">
        <div className="hero-text">
          <h1>Carry what matters.</h1>
          <p>
            Everyday bags designed around modern life. Clean shapes, honest materials
            and room for exactly what you need.
          </p>
          <Link to="/shop" className="btn btn-dark">Shop the collection</Link>
        </div>
        <div className="hero-image">
          <img src={heroProduct.image} alt={`${heroProduct.name}`} width="800" height="1000" />
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Designed for everyday.</h2>
          <Link to="/shop" className="link-underline">View all bags</Link>
        </div>
        <ProductGrid products={featured} wishlist={wishlist} toggleWishlist={toggleWishlist} />
      </section>

      <section className="editorial">
        <div className="container editorial-inner">
          <div className="editorial-image">
            <img src={editorialProduct.image} alt={`${editorialProduct.name}`} width="800" height="1000" loading="lazy" />
          </div>
          <div className="editorial-text">
            <h2>Made for the way you move.</h2>
            <p>
              We design bags for people who are always on their way somewhere: to work,
              across the city, home again. Every ANVA bag starts with how you carry it, and
              ends with a shape simple enough to stay out of the way.
            </p>
            <Link to="/about" className="link-underline">Read our story</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Shop by bag type</h2>
          <Link to="/collections" className="link-underline">All 15 styles</Link>
        </div>
        <div className="category-grid">
          {homeCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Find your everyday.</h2>
          <Link to="/shop" className="btn btn-light">Explore ANVA</Link>
        </div>
      </section>
    </>
  );
}
