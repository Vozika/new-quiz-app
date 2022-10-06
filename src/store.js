import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import optionsReducer from "./features/options/optionsSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    options: optionsReducer,
  },
});
