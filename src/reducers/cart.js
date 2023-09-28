import {createSlice} from "@reduxjs/toolkit";

const initialState =[];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeFromCart:(state, action)=>{
            state.splice(action.payload, 1);
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
})

export const {addToCart, removeFromCart}= cartSlice.actions;

export default cartSlice.reducer;