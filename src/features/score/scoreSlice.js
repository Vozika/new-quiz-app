import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rightAnswer: 0,
  wrongAnswer: 0,
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setRightAnswer: (state) => {
      state.rightAnswer = state.rightAnswer + 1;
    },
    setWrongAnswer: (state) => {
        state.wrongAnswer = state.wrongAnswer + 1;
    },
    clearRightAnswer: (state) => {
        state.rightAnswer = 0;
    },
    clearWrongAnswer: (state) => {
        state.wrongAnswer = 0;
    },
  },
});

export const { setRightAnswer, setWrongAnswer, clearRightAnswer, clearWrongAnswer } = scoreSlice.actions;

export default scoreSlice.reducer;
