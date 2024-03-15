import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
