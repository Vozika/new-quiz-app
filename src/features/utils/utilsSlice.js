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
    setIsClickedTrue: (state) => {
      state.isClicked = true;
    },
    setIsClickedFalse: (state) => {
      state.isClicked = false;
    },
    setStartTrue: (state) => {
      state.start = true;
    },
    setStartFalse: (state) => {
      state.start = false;
    },
    setMainTrue: (state) => {
      state.main = true;
    },
    setMainFalse: (state) => {
      state.main = false;
    },
    setFinishTrue: (state) => {
      state.finish = true;
    },
    setFinishFalse: (state) => {
      state.finish = false;
    },
  },
});

export const {
  setShowFadeTrue,
  setShowFadeFalse,
  setIsClickedTrue,
  setIsClickedFalse,
  setStartTrue,
  setStartFalse,
  setMainTrue,
  setMainFalse,
  setFinishTrue,
  setFinishFalse
} = utilsSlice.actions;

export default utilsSlice.reducer;
