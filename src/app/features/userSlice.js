import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    authIsReady: false,
  },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
    authstatus: (state, action) => {
      state.user = action.payload;
      state.authIsReady = true;
    },
  },
});

export const { signin, signout, authstatus } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
