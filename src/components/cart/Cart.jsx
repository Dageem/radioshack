import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDeleteCartItemMutation } from "../../reducers/api";
import { removeFromCartLocal } from "../../reducers/cart";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [deleteCartItem] = useDeleteCartItemMutation();

  const eventHandleC = async (itemId) => {
    const userToken = window.sessionStorage.getItem("credentials");

    try {
      if (userToken) {
        // If user is logged in, delete from the server
        await deleteCartItem(itemId);
      } else {
        // If user is a guest, delete from local storage
        dispatch(removeFromCartLocal(itemId));
      }
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + parseFloat(item.price), 0.0);
  };

  const totalPrice = calculateTotal();

  return (
    <div className="cart__container">
      <h2>Cart</h2>
      <div>
        <ul>
          {cart.map((product) => (
            <li className="product" key={product.id}>
              <figure className="productimage-container">
                <img src={product.imageUrl} alt={product.name} />
              </figure>
              <h4 className="productprice">
                ${parseFloat(product.price).toFixed(2)}
              </h4>
              <button onClick={() => eventHandleC(product.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="producttotalprice">
        Total Price: ${totalPrice.toFixed(2)}
      </h3>
    </div>
  );
}

export default Cart;

