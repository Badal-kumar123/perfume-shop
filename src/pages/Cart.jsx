import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    total
  } = useCart();

  const DELIVERY_CHARGE = 5;
  const TAX_RATE = 0.18;

  const tax = total * TAX_RATE;
  const grandTotal = total + tax + DELIVERY_CHARGE;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <p className="mt-4">Browse our perfumes and add something lovely!</p>
        <Link to="/products" className="mt-6 inline-block bg-primary text-white px-4 py-2 rounded">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {/* 🛒 Cart Items */}
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 shadow rounded-md">
            <div className="flex items-center space-x-4">
              {/* ✅ Product image and name now link to product detail */}
              <Link to={`/product/${item.id}`}>
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
              </Link>
              <div>
                <Link to={`/product/${item.id}`} className="font-semibold hover:underline">
                  {item.name}
                </Link>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>

                {/* ➕➖ Quantity Controls */}
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => {
                      decrementQuantity(item.id);
                      toast.info("Quantity decreased");
                    }}
                    className="px-2 py-1 bg-gray-200 text-black rounded"
                  >
                    –
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => {
                      incrementQuantity(item.id);
                      toast.success("Quantity increased");
                    }}
                    className="px-2 py-1 bg-gray-200 text-black rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => {
                  removeFromCart(item.id);
                  toast.error("Product removed from cart");
                }}
                className="text-red-500 text-sm mt-1 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 💰 Price Summary */}
      <div className="mt-8 text-right border-t pt-4">
        <p className="text-lg">Subtotal: <span className="font-medium">${total.toFixed(2)}</span></p>
        <p className="text-lg">Tax (18% GST): <span className="font-medium">${tax.toFixed(2)}</span></p>
        <p className="text-lg">Delivery Charges: <span className="font-medium">${DELIVERY_CHARGE.toFixed(2)}</span></p>
        <p className="text-xl mt-2 font-bold">Grand Total: <span className="text-green-600">${grandTotal.toFixed(2)}</span></p>

        {/* 🧹 Buttons */}
        <div className="mt-6">
          <button
            onClick={clearCart}
            className="mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate('/checkout')}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
