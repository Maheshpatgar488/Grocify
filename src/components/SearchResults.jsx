import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../components/productlist";
import { useCart } from "./CartContext";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Read query param from URL
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  // Filter products by name
  const results = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-orange-500 font-semibold mb-8 hover:text-orange-600 transition-colors"
        >
          <FaArrowLeft /> Back
        </button>

        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          {results.length > 0
            ? `Search Results for "${query}"`
            : `No results found for "${query}"`}
        </h2>

        {results.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500 text-lg">Try searching something else!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center transform transition-transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg mb-2 text-center text-gray-800">
                  {product.name}
                </h3>
                <p className="font-bold text-orange-500 mb-4">
                  Rs {product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2 bg-gradient-to-b from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full hover:shadow-md hover:scale-105 transition-all duration-200"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
