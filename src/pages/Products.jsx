import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import products from '../data/products';
import LiveSearch from "../components/LiveSearch";

export default function Products() {
  const [isLoading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // simulate loading delay
    setTimeout(() => setLoading(false), 1500);

    // load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 space-y-6">
  <h2 className="text-3xl font-bold">All Perfumes</h2>

  <div className="relative z-10">
    <LiveSearch />
  </div>

  <div className="relative z-0 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {isLoading
      ? [...Array(8)].map((_, idx) => <ProductCardSkeleton key={idx} />)
      : products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
  </div>
</div>

  );
}
