import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import CategoryFilter from "../CategoryFilter";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url =
        category && category !== "all"
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-3xl font-bold">
          Loading
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    );
  }

  return (
    <section className="container mx-auto my-12 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
        <CategoryFilter category={category} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-2/3 md:w-1/3 px-4 py-2 rounded border border-gray-300"
          placeholder="Search for your product..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className=" text-center text-xl font-bold text-red-700 ">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default ProductCategory;
