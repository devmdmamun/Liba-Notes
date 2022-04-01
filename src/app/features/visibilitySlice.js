import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    sideNavVi: false,
  },
  reducers: {
    sideNavR: (state) => {
      state.sideNavVi = !state.sideNavVi;
    },
  },
});

export const { sideNavR } = visibilitySlice.actions;

export default visibilitySlice.reducer;
