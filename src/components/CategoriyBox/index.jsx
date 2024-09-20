import React from "react";
import { Link } from "react-router-dom";
import womenImg from "../../assets/women.png";
import menImg from "../../assets/men.png";
import jewelryImg from "../../assets/Jewelry.png";
import electronicsImg from "../../assets/Electronics.png";

const CategoryBox = () => {
  const categories = [
    { name: "Woman", image: womenImg, link: "/products/women's%20clothing" },
    { name: "Man", image: menImg, link: "/products/men's%20clothing" },
    { name: "Jewelry", image: jewelryImg, link: "/products/jewelery" },
    { name: "Electronics", image: electronicsImg, link: "/products/electronics" },
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Product Categories</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              loading="lazy"
              src={category.image}
              alt={category.name}
              className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <Link
                to={category.link}
                className="opacity-0 group-hover:opacity-100 bg-yellow-500 text-black px-4 py-2 rounded transition-all duration-500 ease-in-out transform group-hover:scale-105"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBox;
