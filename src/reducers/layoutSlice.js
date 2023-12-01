import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    rows: "3",
    columns: "4",
  },
};

export const layoutSlice = createSlice({
  name: "Layout",
  initialState,
  reducers: {
    changeLayout: (state, action) => {
      state.data = action.payload.value;
    },
  },
});

// this is for dispatch
export const { changeLayout } = layoutSlice.actions;

// this is for configureStore
export default layoutSlice.reducer;
