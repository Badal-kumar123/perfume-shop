import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import HomeShowcase from '../components/HomeShowcase';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const recommended = selectedProduct
    ? products
        .filter(
          (p) =>
            p.id !== selectedProduct.id &&
            p.notes.split(',')[0] === selectedProduct.notes.split(',')[0]
        )
        .slice(0, 3)
    : [];

  return (
    <div>
      {/* Hero section */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center"
      >
        <section className="bg-hero-pattern bg-center bg-cover h-64 flex items-center justify-center text-black text-4xl font-bold">
          Discover Your Signature Scent
        </section>
      </motion.h1>

      {/* Showcase Section */}
      <HomeShowcase />

      {/* Product Grid */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.id}>
            <ProductCard
              product={p}
              onImageClick={() => handleClick(p)}
            />
          </div>
        ))}
      </section>

      {/* Recommended Products if any selected */}
      {selectedProduct && (
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            You might also like
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommended.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">Notes: {item.notes}</p>
                <p className="text-blue-600 font-semibold mt-1">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
