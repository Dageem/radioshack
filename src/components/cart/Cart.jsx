import React, { useState, useEffect } from "react";
import {
  useDeleteCartItemMutation,
  useEditOrderMutation,
  useGetOrderQuery,
} from "../../reducers/api";
import "./cart.css";
import { useSelector } from "react-redux";

function Cart() {
  const [deleteCartItem] = useDeleteCartItemMutation();
  const { data: apiCart, error, isLoading } = useGetOrderQuery();
  const [submitcart] = useEditOrderMutation();
  const userToken = window.sessionStorage.getItem("credentials");

  const reduxCart = useSelector((state) => state.cart);

  // Local cart state to keep it in sync with the Redux store
  const [localCart, setLocalCart] = useState(reduxCart);
  // API cart state to keep it in sync with the API response
  const [apiCartState, setApiCartState] = useState(apiCart);

  useEffect(() => {
    // Update the local cart whenever the Redux cart changes
    setLocalCart(reduxCart);
  }, [reduxCart]);

  useEffect(() => {
    // Update the API cart whenever the API response changes
    setApiCartState(apiCart); // Update apiCartState when apiCart changes
  }, [apiCart]);

const [loadingNewData, setLoadingNewData] = useState(false);

  const handleLoadNewData = async () => {
    try {
      setLoadingNewData(true);
      // Simulate loading new data (you can replace this with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoadingNewData(false);
    } catch (error) {
      console.error("Error loading new data:", error);
      setLoadingNewData(false);
    }
  };
  const order = userToken ? apiCart?.cartItems : localCart || [];

  const handleRemoveItem = async (itemId) => {
    try {
      if (userToken) {
        await deleteCartItem(itemId).unwrap();
      } else {
        const updatedLocalCart = localCart.filter((item) => item.id !== itemId);
        localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
        // Update the local cart state
        setLocalCart(updatedLocalCart);
      }
    } catch (err) {
      console.error("Failed to remove item from cart:", err);
    }
  };

  const handleSubmitCart = async () => {
    try {
      if (userToken) {
        await submitcart(order).unwrap();
      }
    } catch (err) {
      console.error("Failed to submit cart:", err);
    }
  };

  const calculateTotal = () => {
    if (userToken) {
      if (apiCart && apiCart.cartItems) {
        return apiCart.cartItems.reduce(
          (acc, cartItem) =>
            acc + parseFloat(cartItem.product.price) * cartItem.quantity,
          0.0
        );
      } else {
        return 0.0;
      }
    } else {
      if (order) {
        return order.reduce(
          (acc, cartItem) =>
            acc + parseFloat(cartItem.product.price) * cartItem.quantity,
          0.0
        );
      } else {
        return localCart.reduce(
          (acc, cartItem) =>
            acc + parseFloat(cartItem.product.price) * cartItem.quantity,
          0.0
        );
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && userToken) {
    return <div>Error loading cart items: {error.message}</div>;
  }

  const totalPrice = calculateTotal();

  return (
    <div className="cart__container">
      <h2>Cart</h2>
      <div>
        <ul>
          {order.map((cartItem) => (
            <li
              className="product"
              key={`${cartItem.product.id}-${cartItem.id}`}
            >
              <figure className="productimage-container">
                <img
                  src={cartItem.product.imageUrl}
                  alt={cartItem.product.name}
                />
              </figure>
              <h4 className="productprice">
                ${parseFloat(cartItem.product.price).toFixed(2)} x{" "}
                {cartItem.quantity}
              </h4>
              <button onClick={() => handleRemoveItem(cartItem.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="producttotalprice">
        Total Price: ${totalPrice.toFixed(2)}
      </h3>
      <div className="CartSubmit">
        <button onClick={() => handleSubmitCart()}>Submit Cart</button>
      </div>
    </div>
  );
}

export default Cart;

