import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../reducers/cart";
import "./cart.css"
import { useGetOrdersQuery } from "../../reducers/api";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const eventHandleC = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
useGetOrdersQuery();
  const calculateTotal = () => {
    let totalPrice = 0.0;

    cart.forEach((item) => {
      totalPrice += parseFloat(item.price);
    });

    return { totalPrice };
  };

  const { totalPrice } = calculateTotal();
  return (
    <div className="cart__container">
      <h2>Cart</h2>
      <div>
        <ul>
          {cart.map((product, index) => (
            <li className="product" key={index}>
              <figure className="productimage-container">
                <img src={product.imageUrl} alt={product.name} />
              </figure>
              <h4 className="productprice">
                ${parseFloat(product.price).toFixed(2)}
              </h4>
              <button onClick={() => eventHandleC(product.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="producttotalprice">Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
