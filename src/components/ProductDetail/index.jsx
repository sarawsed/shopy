import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);

        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setIsInCart(cartItems.some((item) => item.id === data.id));
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto my-12 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <button
            onClick={toggleCart}
            className={`px-6 py-3 text-white font-semibold text-lg rounded transition ${
              isInCart
                ? "bg-green-500 hover:bg-green-600"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
