import React from "react";
import Heading from "./Heading";
import ProductLst from "./productlist";
import Cards from "./Cards";

const CategoryPage = ({ title, bgImage, categories, titleColor }) => {
  // Filter products that belong to the given categories
  const filteredProducts = ProductLst.filter((product) =>
    categories.includes(product.category)
  );

  console.log("CategoryPage filtered:", filteredProducts);

  return (
    <section
      className="min-h-screen flex flex-col justify-start items-center pt-32 pb-16 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 -z-0"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5">
        <Heading highlight="Shop" heading={title} headingClass={titleColor || ""} />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {filteredProducts.map((product) => (
              <Cards
                key={product.id}
                product={product}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-white mt-8 text-lg">
            No products found for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
