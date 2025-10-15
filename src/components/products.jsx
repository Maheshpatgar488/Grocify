import React, { useState } from "react";
import Cards from "./Cards";
import products from "../components/productlist";

const Products = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(
    categories && categories.length > 0 ? categories[0] : "All"
  );

  // Filter products based on categories
  const filteredItems =
    !categories || categories.includes("All")
      ? products
      : products.filter((product) => categories.includes(product.category));

  return (
    <div>
      {/* Optional Tabs for categories */}
      {categories && categories.length > 1 && (
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-sm md:text-base transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-md"
                  : "bg-zinc-100 text-gray-700 hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems
          .filter((p) => activeTab === "All" || p.category === activeTab)
          .map((product) => (
            <Cards
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
