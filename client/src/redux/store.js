import { configureStore } from "@reduxjs/toolkit";
import { storyReducer } from "./reducers/story.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { userReducer } from "./reducers/user.reducer";
import { productReducer } from "./reducers/product.reducer";
import { adminReducer } from "./reducers/admin.reducer";
import { eventReducer } from "./reducers/event.reducer";

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
  product: {
    sLoading: false,
    value: [],
    error: null,
  },
  admin: {
    sLoading: false,
    value: [],
    error: null,
  }
};

const store = configureStore({
  reducer: {
    story: storyReducer,
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    admin: adminReducer,
    events: eventReducer,
  },
});

export default store;
