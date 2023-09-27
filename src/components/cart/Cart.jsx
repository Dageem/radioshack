import React, { useState } from "react";
import { useGetProductsQuery } from "../../reducers/api";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { loading, error, data } = useGetProductsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;
  if (!data || data.length === 0) return <p>No products found!</p>;

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Cart Page</h1>

      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <figure className="product__image-container">
              <img src={product.imageUrl} alt={product.name} />
            </figure>
            <h4 className="product__price">
              ${parseFloat(product.price).toFixed(2)}
            </h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>

      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <figure className="product__image-container">
              <img src={product.imageUrl} alt={product.name} />
            </figure>
            <h4 className="product__price">
              ${parseFloat(product.price).toFixed(2)}
            </h4>
            <button onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
