import React from "react";
import { Link } from "react-router-dom";
import HeroSectionImg from "../../assets/herosection.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={HeroSectionImg}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-end">
        <div className="text-right p-8 md:p-16 lg:p-24 bg-black bg-opacity-50 rounded-lg mr-8">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Welcome to Our Shop
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            Discover the best products here.
          </p>
          <Link
            to="/products"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded transition-transform duration-500 hover:bg-yellow-400 hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
