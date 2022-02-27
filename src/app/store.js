import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import visibilityReducer from "./features/visibilitySlice";
export default configureStore({
  reducer: {
    user: userReducer,
    visibility: visibilityReducer,
  },
});
