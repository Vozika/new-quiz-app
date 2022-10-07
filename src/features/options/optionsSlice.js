import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show5050: false,
  flip: false,
  lessAnswers: false,
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
    setLessAnswers: (state) => {
      state.lessAnswers = !state.lessAnswers;
    },
    setLessAnswersFalse: (state) => {
      state.lessAnswers = false;
    },
    setFlip: (state) => {
      state.flip = !state.flip;
    },
    setFlipFalse: (state) => {
      state.flip = false;
    },
    setNumberOfQuestions: (state, number) => {
      state.numberOfQuestions = number.payload;
    },
  },
});

export const {
  setShow5050,
  setShow5050False,
  setLessAnswers,
  setLessAnswersFalse,
  setFlip,
  setFlipFalse,
  setNumberOfQuestions,
} = optionsSlice.actions;

export default optionsSlice.reducer;
