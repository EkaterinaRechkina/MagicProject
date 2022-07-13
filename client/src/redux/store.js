import { configureStore } from "@reduxjs/toolkit";
import { storyReducer } from "./reducers/story.reducer";
import { authReducer } from "./reducers/auth.reducer";

const initState = {
  story: {
    sLoading: false,
    value: [],
    error: null,
  },
  users: {
    sLoading: false,
    value: [],
    error: null,
  },
};

const store = configureStore({
  reducer: {
    story: storyReducer,
    users: authReducer,
  },
});

export default store;
