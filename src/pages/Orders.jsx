import React from 'react';
import { useCart } from '../context/CartContext';

export default function Orders() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold">No Orders Yet</h2>
        <p className="mt-4">Place an order and it will show up here!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Your Orders</h2>
      {orders.map(order => (
        <div key={order.id} className="bg-white shadow p-4 mb-6 rounded">
          <div className="mb-2 text-sm text-gray-600">Placed At: {order.placedAt}</div>
          {order.items.map(item => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="mt-2 text-right font-semibold">Total: ${order.total.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}
