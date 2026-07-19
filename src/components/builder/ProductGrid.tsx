import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ProductCard />

      <ProductCard />

      <ProductCard />
    </div>
  );
}
