import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  const { clearCart } = useCart();

  // Clear the cart only once when the page loads
  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 👈 This ensures the effect only runs once

  return (
    <div className="max-w-xl mx-auto py-20 text-center">
      <h1 className="text-3xl font-bold text-green-600">🎉 Order Placed Successfully!</h1>
      <p className="mt-4 text-lg">Thank you for shopping with us.</p>
      <Link to="/products" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded">
        Continue Shopping
      </Link>
    </div>
  );
}
