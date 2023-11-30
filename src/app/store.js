import { configureStore } from '@reduxjs/toolkit';
import headerReducer from "../reducers/headerSlice.js"
import loginReducer from "../reducers/loginSlice.js"
import layoutReducer from "../reducers/layoutSlice.js"
export default configureStore({
  reducer: {
    header : headerReducer,
    login : loginReducer,
    layout : layoutReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});