import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../reducers/cart";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const eventHandleC = (event) => {
    event.preventDefault();
    dispatch(removeFromCart(cart));
  };
  return (
    <>
      <h2>Cart</h2>
      <div>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <figure className="productimage-container">
                <img src={product.imageUrl} alt={product.name} />
              </figure>
              <h4 className="productprice">
                ${parseFloat(product.price).toFixed(2)}
              </h4>
              <button onClick={eventHandleC}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cart;
