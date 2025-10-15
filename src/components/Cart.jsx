import React, { useState } from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, increment, decrement, removeFromCart, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    storedOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(storedOrders));

    clearCart();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  if (cartItems.length === 0 && !orderPlaced)
    return <p className="p-5 text-center text-lg">Your cart is empty!</p>;

  return (
    <div className="p-5 max-w-4xl mx-auto mt-28 mb-20 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Your Shopping Cart
      </h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-center sm:justify-between border-b border-gray-200 py-4 gap-4 sm:gap-0"
        >
          {/* Product info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 w-full sm:w-auto text-center sm:text-left">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain rounded-lg mx-auto sm:mx-0"
            />
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              <p className="text-gray-600">Rs {item.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Quantity & Remove buttons */}
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => decrement(item.id)}
            >
              −
            </button>
            <span className="text-lg font-medium">{item.quantity}</span>
            <button
              className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={() => increment(item.id)}
            >
              +
            </button>
            <button
              className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Total & Place Order */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <p className="text-xl font-semibold text-gray-800 text-center sm:text-left">
          Total: <span className="text-orange-500">Rs {totalPrice.toFixed(2)}</span>
        </p>
        <button
          onClick={handlePlaceOrder}
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:to-orange-600 transition-all duration-300"
        >
          Place Order
        </button>
      </div>

      {/* Success Message */}
      {orderPlaced && (
        <div className="mt-6 p-4 text-center bg-green-100 text-green-800 font-semibold rounded-lg animate-fade-in">
          🎉 Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default Cart;
