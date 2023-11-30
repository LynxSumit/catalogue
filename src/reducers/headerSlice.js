import { createSlice } from '@reduxjs/toolkit';

const initialState = {
title : "Catalogue Company ",
subTitle : "lorem ipsum dolor sit amet, consectetur adip euismod tempor invid id vel dslui",
background : "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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