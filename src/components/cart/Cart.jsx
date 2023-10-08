import React from "react";
import { useDispatch } from "react-redux";
import {
  useDeleteCartItemMutation,
  useGetOrderQuery,
} from "../../reducers/api";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const [deleteCartItem] = useDeleteCartItemMutation();
  const { data: order, error, isLoading } = useGetOrderQuery();

console.log(order)

  const handleRemoveItem = async (itemId) => {
    const userToken = window.sessionStorage.getItem("credentials");
    try {
      if (userToken) {
        await deleteCartItem(itemId).unwrap();
      }
    } catch (err) {
      console.error("Failed to remove item from cart:", err);
    }
  };

  const calculateTotal = () => {
    if (!order || !order.cartItems) return 0;
    return order.cartItems.reduce(
      (acc, cartItem) =>
        acc + parseFloat(cartItem.product.price) * cartItem.quantity,
      0.0
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cart items: {error.message}</div>;
  }

  const totalPrice = calculateTotal();

  return (
    <div className="cart__container">
      <h2>Cart</h2>
      <div>
        <ul>
          {order &&
            order.cartItems &&
            order.cartItems.map((cartItem) => (
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
                <div className="cart-button">
                <button onClick={() => handleRemoveItem(cartItem.id)}>
                  Remove from Cart
                </button>
                </div>
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
