import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import optionsReducer from "./features/options/optionsSlice";
import scoreReducer from "./features/score/scoreSlice";
import utilsReducer from "./features/utils/utilsSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    options: optionsReducer,
    score: scoreReducer,
    utils: utilsReducer,
  },
});
