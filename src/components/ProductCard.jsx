import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  // Fake rating and sold count
  const rating = 4.5;
  const sold = 250;

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some((item) => item.id === product.id));
  }, [product.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent navigation
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      favorites = favorites.filter((item) => item.id !== product.id);
      toast.info('Removed from favorites');
    } else {
      favorites.push(product);
      toast.success('Added to favorites');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      transition={{ type: 'spring', stiffness: 250 }}
      onClick={handleCardClick}
      className="bg-white rounded-lg overflow-hidden relative cursor-pointer group"
    >
      {/* ❤️ Favorite Icon */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 text-red-500 text-xl z-10"
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* 🏷️ Hover Label */}
      <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded shadow">
        Bestseller
      </span>

      <div className="relative h-64 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-1">{product.notes}</p>

        {/* ⭐ Rating & Sold */}
        <div className="flex items-center text-yellow-500 text-sm mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < Math.floor(rating) ? '' : 'opacity-30'} />
          ))}
          <span className="ml-2 text-gray-500">({sold}+ sold)</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-700">${product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent nav
              addToCart(product);
              toast.success('Product added to cart!');
            }}
            className="bg-blue-600 hover:bg-green-600 text-white px-3 py-1 rounded transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
