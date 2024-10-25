import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Reducers/CartSlice";


const store = configureStore({
    reducer: CartSlice,
});

export default store;