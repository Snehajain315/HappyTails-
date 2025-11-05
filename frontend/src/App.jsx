import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "../src/Pages/home";
import Categories from "./Pages/categories";
import Products from "./Pages/products";
import Contact from "./Pages/contact";
import About from "./Pages/about";
import WishList from "./Pages/wishList";
import Cart from "./Pages/cart";
import SignUp from "./Pages/Auth/signUp";
import Login from "./Pages/Auth/login";
import Pets from "./Pages/pets";

export default function App() {
  let [cartData, setCartData] = useState([]);
  let [wishListData, setWishListData] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <NavBar />
                <Home />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                {" "}
                <NavBar />
                <Categories />
              </>
            }
          />
          <Route
            path="/categories/:slug"
            element={
              <>
                {" "}
                <NavBar />
                <Products
                  setCartData={setCartData}
                  setWishListData={setWishListData}
                />
              </>
            }
          />
          <Route
            path="/pets"
            element={
              <>
                <NavBar />
                <Pets />{" "}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <NavBar />
                <Contact />{" "}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <About />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <NavBar />
                <Cart cartData={cartData} />{" "}
              </>
            }
          />
          <Route
            path="/wishList"
            element={
              <>
                <NavBar />
                <WishList wishListData={wishListData} />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
