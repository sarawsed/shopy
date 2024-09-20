import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import LoginModal from "../Login";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const searchRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleOutsideClick = (e) => {
    if (isMenuOpen && e.target.id === "backdrop") {
      setIsMenuOpen(false);
    }
  };

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-8 sticky top-0 z-50">
        <nav className="flex justify-between items-center">
          <div className="hidden lg:flex space-x-6">
            <Link to={"/"} className="hover:text-yellow-300">
              Home
            </Link>
            <Link to={"/products"} className="hover:text-yellow-300">
              Products
            </Link>
            <Link to={"/about"} className="hover:text-yellow-300">
              About Us
            </Link>
          </div>
          <div className="lg:hidden">
            <LoginModal
              isLoggedIn={isLoggedIn}
              username={username}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          </div>
          <div className="text-2xl font-bold">
            <Link to="/">SHOPY</Link>
          </div>          
          <div className="hidden lg:flex space-x-4 items-center relative">
            <div className="relative flex items-center">
              <FaSearch
                className="hover:text-yellow-300 cursor-pointer"
                onClick={toggleSearch}
              />
              <div
                className={`absolute right-full top-[-8px] ml-2 transform transition-transform duration-300 ease-in-out origin-left ${
                  isSearchOpen
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 px-2 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none mr-4"
                  placeholder="Search..."
                />
              </div>
            </div>
            <LoginModal
              isLoggedIn={isLoggedIn}
              username={username}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
            <Link to="/favorites">
              <FaHeart className="hover:text-yellow-300 cursor-pointer" />
            </Link>
            <Link to="/cart">
              <FaShoppingCart className="hover:text-yellow-300 cursor-pointer" />
            </Link>
          </div>
          <button
            className="lg:hidden text-white text-3xl z-30 relative"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
        {isMenuOpen && (
          <div
            id="backdrop"
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={handleOutsideClick}
          ></div>
        )}
        <div
          className={`lg:hidden fixed top-0 left-0 w-2/4 h-full bg-gray-900 text-white flex flex-col items-center pt-16 z-20 
          transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link
            to={"/"}
            className="hover:text-yellow-300 mb-4"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to={"/products"}
            className="hover:text-yellow-300 mb-4"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to={"/about"}
            className="hover:text-yellow-300 mb-4"
            onClick={toggleMenu}
          >
            About Us
          </Link>

          <div className="flex space-x-4 mb-4">
            <FaSearch className="hover:text-yellow-300" />
            <Link to="/favorites" onClick={handleMenuClose}>
              <FaHeart className="hover:text-yellow-300" />
            </Link>
            <Link to="/cart" onClick={handleMenuClose}>
              <FaShoppingCart className="hover:text-yellow-300" />
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>

      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© 2024 My React Project. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
