// import { createSlice } from "@reduxjs/toolkit";
// import { productsData } from "../../data/products";


// const getProducts = async () => {
//   const products = await getAllProducts();
//   return products;
// }



// const INITIAL_STATE = {
//   products: getProducts(),
//   productsFiltered: getProducts(),
// };

// export const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: INITIAL_STATE,
//   reducers: {
//     filterCategory: (state, action) => {
//       return {
//         ...state,
//         productsFiltered:
//           action.payload !== null && action.payload !== undefined
//             ? state.products.complete.filter(
//                 (product) => product.category === action.payload
//               )
//             : state.products.complete,
//       };
//     },
//   },
// });

// export const { filterCategory, getAllProducts, getShortProducts } =
//   categoriesSlice.actions;
// const categoriesReducer = categoriesSlice.reducer;
// export default categoriesReducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts as fetchAllProducts } from "../../Axios/productsAxios"; // Importa correctamente

// Thunk asíncrono para cargar productos
export const getProducts = createAsyncThunk(
  "categories/getProducts",
  async () => {
    const products = await fetchAllProducts();
    return products;
  }
);

const INITIAL_STATE = {
  products: [], 
  productsFiltered: [],
  loading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    filterCategory: (state, action) => {
      if (action.payload) {
        state.productsFiltered = state.products.filter(
          (product) => product.category === action.payload
        );
      } else {
        state.productsFiltered = state.products;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsFiltered = action.payload; // Inicialmente no hay filtro
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterCategory } = categoriesSlice.actions;

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
