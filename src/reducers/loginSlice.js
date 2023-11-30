import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      const credentials = {
        email: action.payload.email,
        password: action.payload.password,
      };

      const { email, password } = credentials;
      state.email = email;
      state.password = password;
    },
  },
});

// this is for dispatch
export const { login } = loginSlice.actions;

// this is for configureStore
export default loginSlice.reducer;
