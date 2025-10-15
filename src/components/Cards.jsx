import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { useCart } from "./CartContext";

const Cards = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null; // ✅ prevents crash

  const { id, image, name, price } = product;

  console.log("Rendering product:", product);

  return (
    <div
      key={id}
      className="bg-zinc-100 p-5 rounded-xl flex flex-col items-center gap-5 text-center hover:shadow-lg transition-all"
    >
      <div className="flex justify-between w-full text-zinc-600">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button
          className="bg-gradient-to-b from-orange-400 to-orange-500 p-3 rounded-full text-white"
          onClick={() => addToCart(product)}
        >
          <FaPlus />
        </button>
      </div>

      <div className="w-40 h-32">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-lg font-semibold text-orange-600">
          Rs {price.toFixed(2)}
        </p>
        <button
          className="mt-2 bg-orange-400 text-white px-4 py-2 rounded"
          onClick={() => addToCart(product)}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
