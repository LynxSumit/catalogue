import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    title: "Catalogue Company ",
    subTitle:
      "lorem ipsum dolor sit amet, consectetur adip euismod tempor invid id vel dslui",
    background:
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundColor: "black",
  },
  card: {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum Lore mipsum dolor sit amet, consectetur adipiscing",
    price: "$210",
    productImage:
      "https://plus.unsplash.com/premium_photo-1678577239308-2424ed6ad00d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  footer: {
    youtube: "John Doe",
    instagram: "John Doe",
    twitter: "John Doe",
  },
};

export const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setModifyHeader: (state, action) => {
      state.data = action.payload.value;
    },
    setModifyCard: (state, action) => {
      state.card = action.payload.value;
    },
    setModifyFooter: (state, action) => {
      state.footer = action.payload.value;
    },
  },
});

// this is for dispatch
export const { setModifyHeader, setModifyCard, setModifyFooter } =
  HomeSlice.actions;

// this is for configureStore
export default HomeSlice.reducer;
