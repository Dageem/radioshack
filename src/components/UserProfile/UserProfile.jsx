import React, { useEffect, useState } from "react";
import { useGetOrdersQuery } from "../../reducers/api";
import "./userProfile.css";
import { useSelector } from "react-redux";


function UserProfile() {
  const user = useSelector((state) => state.auth.credentials.user) || "";
  const [userId, setUserId] = useState(user.userId);

  const {
    data: ordersData,
    isLoading,
    isError,
    refetch,
  } = useGetOrdersQuery(null, {
    skip: !userId,
  });

  useEffect(() => {
    if (isError) {
      console.error("Error loading orders:", isError);
    }
  }, [isError]);

  useEffect(() => {
    setUserId(user.userId);
    if (user.userId) {
      refetch();
    }
  }, [user.userId, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profile-container">
      {user.userId && <h1>{user.email}'s Profile</h1>}
      <div className="order-container">
        <h2>Past Orders</h2>
        {ordersData.length === 0 ? (
          <p>No past orders available.</p>
        ) : (
          <div>
            {ordersData.map((order) => (
              <div className="small-order-container" key={order.id}>
                <h3>Order ID: {order.id}</h3>
                <div className="order-details">
                  {order.cartItems.map((cartItem) => (
                    <div className="individual-item-details" key={cartItem.id}>
                      <img src={cartItem.product.imageUrl} alt="pic" />
                      <h4>Product: {cartItem.product.name}</h4> 
                      <h4>Quantity: {cartItem.quantity}</h4> 
                      <h4>Price: ${parseFloat(cartItem.product.price).toFixed(2)}</h4>
                      <h4>Details: {cartItem.product.details}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  console.log(orders.data);
}

export default UserProfile;
