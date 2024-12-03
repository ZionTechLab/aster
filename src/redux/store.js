import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  setAuthStatus,
  loggin,
  init,
  setActiveForm,
} from "./slices/authSlice";

import { reset } from "./actions";

const store = configureStore({
  reducer: {
    // file: fileReducer,
    auth: authReducer,
    // notification: notificationReducer,
  },
});

export {
  store,
  loggin,
  init,
  setAuthStatus,
  reset,
};