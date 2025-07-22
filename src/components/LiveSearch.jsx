import { useState } from "react";
import products from "../data/products";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ Import useCart
import { toast } from 'react-toastify';

export default function LiveSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const { addToCart } = useCart(); // ✅ Grab the addToCart function

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 400); // Simulate delay
  };

  return (
    <div className="w-full max-w-xl mx-auto my-6 relative">
      {/* 🔍 Search Bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search perfumes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <FaSearch />
        </button>
      </div>

      {/* ⏳ Loading */}
      {loading && (
        <div className="mt-2 text-sm text-gray-500 animate-pulse">
          Searching...
        </div>
      )}

      {/* 🔽 Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {results.length > 0 && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
            {results.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-2 px-4 py-3 hover:bg-gray-100"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="flex gap-3 items-center w-full"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.notes}</p>
                    <p className="text-sm text-blue-600 font-medium">
                      ${product.price}
                    </p>
                  </div>
                </Link>

                {/* ✅ Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 🛑 Stop Link click
                    e.preventDefault();
                    addToCart(product); 
                    toast.success("Product added to cart!");
                    // ✅ Add to cart
                  }}
                  className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* ❌ No Results */}
      {results.length === 0 && query.length > 0 && !loading && (
        <p className="mt-2 text-gray-500 text-sm">No perfumes found.</p>
      )}
    </div>
  );
}
