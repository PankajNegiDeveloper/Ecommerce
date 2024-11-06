import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Cart from "./Cart";
import Nav from "./Nav";
import View from "./View";

const AdminPortal = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart/:id" element={<Cart />}></Route>
        <Route path="/View/:id" element={<View/>}></Route>
      </Routes>
    </div>
  );
};

export default AdminPortal;
