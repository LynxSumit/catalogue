import { createSlice } from "@reduxjs/toolkit";
import Logo from "../assets/bgHeader.png"
const initialState = {
  data: {
    title: "Catalogue Company ",
    subTitle:
      "lorem ipsum dolor sit amet, consectetur adip euismod tempor invid id vel dslui",
    background:
      Logo,
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
    companyAddress : 'lorem ipsumet dolor sit amet, consectet',
    companyEmail : 'info@nularksolutions',
    companyNo : '875938576',
    copyrightSentence : 'CopyRight @2023 Karan Pandit | All Rights Reserved'
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
