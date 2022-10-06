import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show5050: false,
  flip: false,
  numberOfQuestions: 10,
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setShow5050: (state) => {
      state.show5050 = !state.show5050;
    },
    setShow5050False: (state) => {
      state.show5050 = false;
    },
  },
});

export const { setShow5050, setShow5050False } = optionsSlice.actions;

export default optionsSlice.reducer;
