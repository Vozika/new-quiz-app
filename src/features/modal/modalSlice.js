import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleOpen: (state) => {
      state.open = true;
    },
    handleClose: (state) => {
      state.open = false;
    },
  },
});

export const { handleOpen, handleClose } = modalSlice.actions;

export default modalSlice.reducer;