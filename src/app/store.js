import { configureStore } from '@reduxjs/toolkit';
import headerReducer from "../reducers/HomeSlice.js"
import footerReducer from "../reducers/HomeSlice.js"
import cardReducer from "../reducers/HomeSlice.js"
import loginReducer from "../reducers/loginSlice.js"
import layoutReducer from "../reducers/layoutSlice.js"
export default configureStore({
  reducer: {
  
    header : headerReducer,
    footer : footerReducer,
    card : cardReducer,
  
    login : loginReducer,
    layout : layoutReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});