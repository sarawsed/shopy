import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setIsLiked(favoriteItems.some((item) => item.id === product.id));
    setIsInCart(cartItems.some((item) => item.id === product.id));
  }, [product.id]);

  const toggleLike = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isLiked) {
      favorites = favorites.filter((item) => item.id !== product.id);
    } else {
      favorites.push(product);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsLiked(!isLiked);
  };

  const toggleCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (isInCart) {
      cart = cart.filter((item) => item.id !== product.id);
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsInCart(!isInCart);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 relative text-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4 transition-transform duration-300 hover:scale-105"
      />
      <h3 className="text-lg font-bold mb-3 truncate">{product.title}</h3>
      <p className="text-gray-700 mb-3">${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded mb-3">
          View Details
        </button>
      </Link>

      <div className="flex justify-center space-x-4 mt-5">
        <button
          onClick={toggleLike}
          className={`like-button ${isLiked ? "liked" : ""}`}
        >
          <FaHeart size={20} />
        </button>
        <button
          onClick={toggleCart}
          className={`w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-white transition ${
            isInCart ? "text-yellow-500" : "hover:text-yellow-400"
          }`}
        >
          <FaShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
