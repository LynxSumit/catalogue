import { configureStore } from '@reduxjs/toolkit';
import headerReducer from "../reducers/headerSlice.js"
import loginReducer from "../reducers/loginSlice.js"
export default configureStore({
  reducer: {
    header : headerReducer,
    login : loginReducer
  },
});