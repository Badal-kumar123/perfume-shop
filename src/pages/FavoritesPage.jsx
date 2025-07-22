import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <h2 className="text-3xl font-bold mb-4">Your Favorite Perfumes</h2>

      {favorites.length === 0 && !isLoading && (
        <p className="text-gray-600 text-lg">You haven’t favorited anything yet.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? [...Array(8)].map((_, idx) => <ProductCardSkeleton key={idx} />)
          : favorites.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}
