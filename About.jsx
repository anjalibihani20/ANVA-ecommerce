import { Link } from "react-router-dom";
import { getProductBySlug } from "../data/products.js";

export default function About() {
  const product = getProductBySlug("nola-laptop-bag");
  return (
    <div className="container page about">
      <header className="page-head">
        <h1>About ANVA</h1>
      </header>
      <div className="about-body">
        <img src={product.image} alt={product.name} width="800" height="1000" loading="lazy" />
        <div>
          <p className="lead">ANVA is a fictional bag label made for a web development capstone.</p>
          <p>
            The idea is simple: a small range of bags, each designed around one daily routine.
            Minimal shapes, practical pockets and materials chosen to age well.
          </p>
          <p>
            This site is a frontend-only project. Products are sample data, product photos are
            stock photography and checkout is a demo. Nothing here can be bought.
          </p>
          <Link to="/shop" className="btn btn-dark">Shop the collection</Link>
        </div>
      </div>
    </div>
  );
}
