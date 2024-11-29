import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./Cart/CartSlice";
import categoriesReducer from "./Categories/CategorySlice";
import userReducer from "./User/UserSlice";
import modalProductReducer from "./ModalProduct/ModalProductSlice";
const reducers = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  user: userReducer,
  modalProduct: modalProductReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
