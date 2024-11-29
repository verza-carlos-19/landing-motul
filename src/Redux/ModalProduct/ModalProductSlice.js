import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modal: false,
   id: "",
};

const modalProductSlice = createSlice({
    name: "modalProduct",
    initialState: INITIAL_STATE,
    reducers: {
        toggleHiddenModal: (state,action) => {
          console.log("este es el product antes de cambiar" + state.product)
          console.log("este es el payload" + action.payload)
          // console.log(action.payload)
            return {
              ...state,
              modal: !state.modal,
              
               id: action.payload,
            };
          },
    }
});
export const {
    toggleHiddenModal,
  } = modalProductSlice.actions;
  const modalProductReducer = modalProductSlice.reducer;
  export default modalProductReducer;