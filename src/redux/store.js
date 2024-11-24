import { configureStore } from "@reduxjs/toolkit";
// import {
//   fileReducer,
//   FileUploadAsync,
//   BulkProcessAsync,
//   GetProcessedData,
// } from "./Slices/fileSlice";
// import {
//   notificationReducer,
//   addNotification,
// } from "./Slices/notificationSlice";
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
  // setActiveForm,
  // FileUploadAsync,
  // BulkProcessAsync,
  // GetProcessedData,
  // addNotification,
};
