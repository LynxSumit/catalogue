import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rows: "3",
  columns: "4",
}

export const layoutSlice = createSlice({
  name: 'Change Layout',
  initialState,
  reducers: {
    changeLayout: (state, action) => {
      const { rows, columns } = action.payload;
      // Update the state properties instead of assigning a new object
      state.rows = rows;
      state.columns = columns;
    },
  },
});

// this is for dispatch
export const { changeLayout } = layoutSlice.actions;

// this is for configureStore
export default layoutSlice.reducer;
