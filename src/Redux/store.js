import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./Cart/CartSlice";
import categoriesReducer from "./Categories/CategorySlice";
const reducers = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
