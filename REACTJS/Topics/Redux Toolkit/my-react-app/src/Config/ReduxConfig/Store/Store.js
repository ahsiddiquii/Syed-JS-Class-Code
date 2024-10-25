import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Reducers/TodoSlice";

export const store = configureStore({
    reducer: todoSlice
});