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
          action.payload !== null || action.payload !== undefined
            ? state.products.complete.filter(
                (element) => element.category === action.payload
              )
            : state.products.complete,
      };
    },
    getAllProducts: (state) => {
      return state.productsFiltered;
    },
    getShortProducts: (state) => {
      return state.products.short;
    },
  },
});

export const { filterCategory, getAllProducts, getShortProducts } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
