import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const getInitialCart = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error parsing cart from local storage", error);
    return [];
  }
};

const initialState = getInitialCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      return action.payload;
    },
    addToCartLocal: (state, action) => {
      state.push({ ...action.payload, id: state.length }); //localstorage does not have autoincrement id because its not being pushed to DB, so added id of state.length
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCartLocal: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.splice(0, state.length, ...updatedCart); // Update the state directly
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.addCartItem.matchFulfilled,
      (state, action) => {
        const userToken = window.sessionStorage.getItem("credentials");
        if (!userToken) {
          state.push(action.payload);
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    );
    builder.addMatcher(
      api.endpoints.deleteCartItem.matchFulfilled,
      (state, action) => {
        const userToken = window.sessionStorage.getItem("credentials");
        if (!userToken) {
          const updatedCart = state.filter(
            (item) => item.id !== action.payload
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return updatedCart;
        }
      }
    );
    builder.addMatcher(
      api.endpoints.getOrder.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getCartItems.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export const {
  initializeCart,
  addToCartLocal,
  removeFromCartLocal,
  clearCartLocal,
} = cartSlice.actions;

export default cartSlice.reducer;
