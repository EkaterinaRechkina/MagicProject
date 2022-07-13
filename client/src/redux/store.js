import { configureStore } from "@reduxjs/toolkit";
import { storyReducer } from "./reducers/story.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { userReducer } from "./reducers/user.reducer";

const initState = {
  story: {
    sLoading: false,
    value: [],
    error: null,
  },
  user: {
    sLoading: false,
    value: [],
    error: null,
  },
  auth: {
    sLoading: false,
    value: [],
    error: null,
  },
};

const store = configureStore({
  reducer: {
    story: storyReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
