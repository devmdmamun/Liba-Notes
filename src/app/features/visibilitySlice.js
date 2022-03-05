import { createSlice } from "@reduxjs/toolkit";

let sideV;
window.innerWidth < 500 ? (sideV = false) : (sideV = true);
export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    sideNavVi: sideV,
  },
  reducers: {
    sideNavR: (state) => {
      state.sideNavVi = !state.sideNavVi;
    },
  },
});

export const { sideNavR } = visibilitySlice.actions;

export default visibilitySlice.reducer;
