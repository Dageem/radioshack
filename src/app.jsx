import React from "react";
import { Route, Routes } from "react-router-dom";
import Earbuds from "./components/earbuds/Earbuds";
import Headphones from "./components/headphones/Headphones";
import Speakers from "./components/speakers/Speakers";
import Home from "./components/home/Home";
import SingleProduct from "./components/singleproduct/SingleProduct";
import LoginRegister from "./components/login-register/Login-register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/earbuds" element={<Earbuds />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
