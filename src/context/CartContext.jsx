import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // ✅ Load cart from localStorage initially
  const [cartItems, setCartItems] = useState(() =>
    JSON.parse(localStorage.getItem('cartItems') || '[]')
  );

  // ✅ Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add item to cart (or increase quantity if exists)
  const addToCart = (item) => {
    const exists = cartItems.find(ci => ci.id === item.id);
    if (exists) {
      setCartItems(ci =>
        ci.map(ci =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        )
      );
    } else {
      setCartItems(ci => [...ci, { ...item, quantity: 1 }]);
    }
  };

  // ✅ Remove 1 quantity or delete item if quantity becomes 0
  const removeFromCart = (id) => {
    setCartItems(ci =>
      ci
        .map(ci =>
          ci.id === id ? { ...ci, quantity: ci.quantity - 1 } : ci
        )
        .filter(ci => ci.quantity > 0)
    );
  };

  // ✅ Increment quantity
  const incrementQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Decrement quantity
  const decrementQuantity = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // ✅ Clear entire cart
  const clearCart = () => setCartItems([]);

  // ✅ Calculate total cart value
  const total = cartItems.reduce(
    (sum, ci) => sum + ci.price * ci.quantity,
    0
  );

  // ✅ Load previous orders from localStorage
  const [orders, setOrders] = useState(() =>
    JSON.parse(localStorage.getItem('orders') || '[]')
  );

  // ✅ Save orders to localStorage
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // ✅ Add a new order
  const addOrder = (orderDetails) => {
    setOrders(prev => [...prev, orderDetails]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        total,
        orders,
        addOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
