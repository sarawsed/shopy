import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoriteItems);
  }, []);

  return (
    <div className="container mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mb-5">You have no favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
