import { createSlice } from "@reduxjs/toolkit";

export const sidebarVSlice = createSlice({
  name: "sidebarV",
  initialState: {
    sidebarVisibility: false,
  },
  reducers: {
    sidebarVToggle: (state) => {
      state.sidebarVisibility = !state.sidebarVisibility;
    },
  },
});

export const { sidebarVToggle } = sidebarVSlice.actions;

export default sidebarVSlice.reducer;
