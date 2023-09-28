import {createSlice} from "@reduxjs/toolkit";

const initialState =[];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.push(action.payload);
        },
        removeFromCart:(state, action)=>{
            state.splice(action.payload, 1);
        }
    }
})

export const {addToCart, removeFromCart}= cartSlice.actions;

export default cartSlice.reducer;