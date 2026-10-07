import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <div className="category-card-media">
        <img src={category.image} alt="" width="800" height="1000" loading="lazy" />
      </div>
      <span>{category.name}</span>
    </Link>
  );
}
