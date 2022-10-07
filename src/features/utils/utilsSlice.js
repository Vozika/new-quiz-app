import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFade: true,
  start: true,
  main: false,
  finish: false,
  isClicked: false,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setShowFadeTrue: (state) => {
      state.showFade = true;
    },
    setShowFadeFalse: (state) => {
        state.showFade = false;
      },
  },
});

export const { setShowFadeTrue, setShowFadeFalse } = utilsSlice.actions;

export default utilsSlice.reducer;
