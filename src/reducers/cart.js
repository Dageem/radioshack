import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem('cart')) || []; this failed when the cart was empty so had to add below code...
const getInitialCart = () => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (!storedCart) return []; 
      return JSON.parse(storedCart); 
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
        addToCart: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        }        
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
