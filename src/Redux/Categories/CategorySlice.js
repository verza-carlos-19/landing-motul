import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../data/products";

const INITIAL_STATE = {
  products: productsData,
  productsFiltered: productsData.complete,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    filterCategory: (state, action) => {
      return {
        ...state,
        productsFiltered:
          action.payload !== null && action.payload !== undefined
            ? state.products.complete.filter(
                (product) => product.category === action.payload
              )
            : state.products.complete,
      };
    },
  },
});

export const { filterCategory, getAllProducts, getShortProducts } =
  categoriesSlice.actions;
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
