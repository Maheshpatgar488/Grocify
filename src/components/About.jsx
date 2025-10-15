import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const About = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 mt-10 md:mt-20 lg:mt-16
                 pt-[100px] sm:pt-[120px] md:pt-[120px] lg:pt-[120px] pb-20 sm:pb-24 md:pb-28 lg:pb-32"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
        {/* Left Column: Text */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center sm:text-center lg:text-left">
            {/* About <span className="text-orange-500">Us</span> */}
            <Heading highlight="About" heading="Us" />
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 sm:space-y-6 md:space-y-6 lg:space-y-8 text-center sm:text-center lg:text-left">
            <p className="text-gray-700 text-base sm:text-base md:text-lg lg:text-lg leading-relaxed">
              Welcome to <span className="font-semibold">Gr<span className="text-orange-500 uppercase">o</span>cify</span> — your trusted
              partner for fresh groceries delivered to your doorstep. Our goal is to make
              healthy, high-quality food accessible to everyone, every day.
            </p>

            <p className="text-gray-700 text-base sm:text-base md:text-lg lg:text-lg leading-relaxed">
              We work closely with local farmers and suppliers to ensure that every product you
              receive is fresh, sustainable, and responsibly sourced. From seasonal fruits and
              vegetables to dairy and pantry essentials, we deliver only the best.
            </p>

            <p className="text-gray-700 text-base sm:text-base md:text-lg lg:text-lg leading-relaxed">
              At FreshMart, we believe that good food brings people together — and that’s why
              we’re committed to offering convenience, quality, and care in every delivery.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center sm:justify-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Column: Accent Bar */}
        <div className="hidden lg:block w-1 bg-orange-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default About;
