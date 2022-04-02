import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import sidebarVReducer from "./features/sidebarVSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    sidebarV: sidebarVReducer,
  },
});
