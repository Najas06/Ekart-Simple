import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:wishListSlice
    }
})
export default store;