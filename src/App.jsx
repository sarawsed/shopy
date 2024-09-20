import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ProductCategory from "./components/ProductCategory";
import Favorites from "./components/Favorites";
import CartShop from "./components/CartShop";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductCategory />}></Route>
            <Route
              path="/products/:category"
              element={<ProductCategory />}
            ></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/cart" element={<CartShop />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
