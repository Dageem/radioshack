import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Earbuds from './components/earbuds/Earbuds';
import Headphones from './components/headphones/Headphones';
import Speakers from './components/speakers/Speakers';
import SingleProduct from './components/singleproduct/SingleProduct';
import Home from './components/home/Home'
import  Cart  from './components/cart/Cart'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earbuds" element={<Earbuds />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default App;

