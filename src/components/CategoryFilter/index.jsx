import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryFilter = ({ category, handleCategoryChange }) => {
  const navigate = useNavigate();

  const categories = [
    { value: "all", label: "All" },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
    { value: "electronics", label: "Electronics" },
    { value: "jewelery", label: "Jewelry" },
  ];

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    navigate(`/products/${selectedCategory}`);
  };

  return (
    <div className="text-center mb-8">
      <label htmlFor="category" className="mr-4 font-semibold text-lg">Choose Category:</label>
      <select
        id="category"
        className="p-2 border rounded-lg"
        value={category || "all"}
        onChange={handleChange}
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>{cat.label}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
