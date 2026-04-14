import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize from local storage if exactly possible
    const savedCart = localStorage.getItem('cartify_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Calculate generic total items (for Navbar bubble)
  const [totalItems, setTotalItems] = useState(0);

  // Sync to local storage & update total count whenever cart changes
  useEffect(() => {
    localStorage.setItem('cartify_cart', JSON.stringify(cartItems));
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // Increment quantity
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      // New item
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, type) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        if (type === 'increment') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === 'decrement' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShopContext.Provider value={{ cartItems, totalItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};
