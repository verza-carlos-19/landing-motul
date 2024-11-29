// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//   modal: false,
// };

// const modalUserSlice = createSlice({
//     name: "modalUser",
//     initialState: INITIAL_STATE,
//     reducers: {
//         toggleHiddenModal: (state) => {
//             return {
//               ...state,
//               modal: !state.modal,
//             };
//           },
//     }
// });
// export const {
//     toggleHiddenModal,
//   } = modalUserSlice.actions;
//   const userReducer = modalUserSlice.reducer;
//   export default userReducer;

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modal: false,
  user: null, 
  isAuthenticated: false, 
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    // Alternar visibilidad del modal
    toggleHiddenModal: (state) => {
      state.modal = !state.modal;
    },

    // Guardar usuario al iniciar sesión o registrarse
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    // Limpiar estado del usuario al cerrar sesión
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("jwtToken"); // Opcional: elimina el token del almacenamiento local
    },
  },
});

export const { toggleHiddenModal, setUser, logoutUser } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;