import React, { useEffect } from "react";
import { useGetOrdersQuery } from "../../reducers/api";
import "./userProfile.css";
import { useSelector } from "react-redux";

function UserProfile() {
  const { data: ordersData, isLoading, isError } = useGetOrdersQuery();
  const user = useSelector((state) => state.auth.credentials.user) || "";

  useEffect(() => {
    if (isError) {
      console.error("Error loading orders:", isError);
    }
  }, [isError]);

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
          <ul>
            {ordersData.map((order) => (
              <li key={order.id}>Order ID: {order.id}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
