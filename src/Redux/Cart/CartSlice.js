import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./CartUtils";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
  hiddenCheckOut: true,
  percentageShip: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
    updateShipPercentage: (state, action) => {
      return {
        ...state,
        percentageShip: action.payload,
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
    clearItemCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
    toggleHiddenCheckOut: (state) => {
      return {
        ...state,
        hiddenCheckOut: !state.hiddenCheckOut,
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateShipPercentage,
  clearCart,
  toggleHiddenCart,
  clearItemCart,
  toggleHiddenCheckOut,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
