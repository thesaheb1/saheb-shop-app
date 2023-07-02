import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import WishListSlice from "./slices/WishListSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice,
        wish:WishListSlice,
    }
})