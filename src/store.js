import { configureStore } from "@reduxjs/toolkit";
import { api } from "./reducers/api";
import authReducer from './reducers/auth'
import cartReducer from "./reducers/cart"


const store = configureStore({
    reducer: {
        cart: cartReducer,
        [api.reducerPath]: api.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
