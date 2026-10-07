import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, wishlist, toggleWishlist }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          onToggleWishlist={toggleWishlist}
        />
      ))}
    </div>
  );
}
