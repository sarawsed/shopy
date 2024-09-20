import React from "react";
import salesImage from "../../assets/vitrin.jpg";
import { Link } from "react-router-dom";

const SalesBox = () => {
  return (
    <section className="container mx-auto my-12 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="lg:w-7/10">
          <img
            src={salesImage}
            alt="Sales"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-3/10 text-left p-4">
          <h2 className="text-3xl font-bold mb-4">
            Choose your perfect style.
          </h2>

          <p className="mb-4 text-gray-700">
            Find your perfect style at unbeatable discounts! From casual wear to
            elegant outfits and trendy gadgets, we’ve got everything you need.
            Shop now and enjoy exclusive offers while upgrading your wardrobe
            with confidence.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Come and Enjoy Sale!</h3>
          <h5 className="font-bold text-4xl md:text-5xl mb-6">50%</h5>
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-700 text-white font-semibold text-lg rounded transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-lg hover:font-bold hover:bg-blue-800 shadow-md"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalesBox;
