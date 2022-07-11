import { configureStore } from "@reduxjs/toolkit";
import subredditsListReducer from "../reducer/subredditsListReducer";
export const store = configureStore({
  reducer: {
    subreddits: subredditsListReducer,
  },
});
