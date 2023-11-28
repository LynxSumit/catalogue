import { createSlice } from '@reduxjs/toolkit';

const initialState = {
title : "",
subTitle : "",
background : "",
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    modifyHeader: (state, action) => {
      const newHeader = {
     title : action.payload.title,
     subTitle : action.payload.subTitle,
     background : action.payload.background

      };

     state.title = newHeader.title;
     state.subTitle = newHeader.subTitle;
     state.background = newHeader.background;
     console.log(state)
  },

}
});

// this is for dispatch
export const { modifyHeader } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;