import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credentials: {
    email: "",
    password: "",
  },
};

export const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.credentials = action.payload.value;
    },
  },
});

// this is for dispatch
export const { setLogin } = loginSlice.actions;

// this is for configureStore
export default loginSlice.reducer;
