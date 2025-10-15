import React, { createContext, useState } from "react";
import { useCart as useCartHook } from "./cartHooks";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => setCartItems(prev => [...prev, product]);
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
