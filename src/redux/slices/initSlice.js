// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as Config from "../../config";
// import axios from "axios";

// export const initAsync = createAsyncThunk(
//   "init/initAsync",
//   async (payload) => {
//     let url = Config.API_URL + "Inventory/Login";
//     console.log(payload);
//     let response = {};
//     if (payload.user_id == "admin" && payload.password == "Aster@202410.com")
//      {        console.log('d'); 
//       response = {    

//         isSuccess: true,
//         strMessage: "",
//         returnValue: null,
//         returnValue2: null,
//         varOutMsg: null,
//       };}
//     else
//     {console.log('f'); 
//       response = {
//         isSuccess: false,
//         strMessage: "Invalid User ID or Password",
//         returnValue: null,
//         returnValue2: null,
//         varOutMsg: null,
//       };
//     }
//     // const response = await axios.post(url, payload);
//     // console.log(response);
//     return {
//       isAuthOK: response.isSuccess,
//       user_id: response.isSuccess === true ? payload.user_id : "",
//       err: response.strMessage,
//     };
//   }
// );

// export const initAsync = createAsyncThunk("auth/initAsync", async (payload) => {
//   console.log(payload);
//   let url = Config.API_URL + "Inventory/initialize";
//   const response = await axios.post(url, payload);
//   //  console.log(response.data)
//   return response.data;
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     ActiveForm: "",
//     isAuthOK: false,
//     isInitOK: false,
//     user_id: "",
//     err: "",
//     route: "",
//   },
//   reducers: {
//     setAuthStatus(state, action) {
//       state.push(action.payload);
//     },
//     setActiveForm(state, action) {
//       console.log("aa");
//       return { ...state, ActiveForm: action.payload };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(logginAsync.fulfilled, (state, action) => {
//         return {
//           ...state,
//           isAuthOK: action.payload.isAuthOK,
//           user_id: action.payload.user_id,
//           err: action.payload.err,
//           ActiveForm: action.payload.isAuthOK == true ? "Home" : "",
//         };
//       })
//       .addCase(logginAsync.rejected, (state, action) => {
//         return {
//           ...state,
//           isAuthOK: false,
//           user_id: "",
//           err: action.error.message,
//         };
//       })
//       .addCase(initAsync.fulfilled, (state, action) => {
//         localStorage.setItem("items", JSON.stringify(action.payload.items));
//         localStorage.setItem(
//           "customer",
//           JSON.stringify(action.payload.customer)
//         );
//         localStorage.setItem(
//           "customerOutstanding",
//           JSON.stringify(action.payload.customerOutstanding)
//         );
//         // localStorage.setItem('synchronizedTime', DateNow);
//         // localStorage.setItem('userId', 1);
//         localStorage.setItem("route", action.payload.route);
//         localStorage.setItem("userType", action.payload.userType);
//         localStorage.setItem(
//           "saleHistory",
//           JSON.stringify(action.payload.saleHistory)
//         );
//         localStorage.setItem(
//           "itemPricing",
//           JSON.stringify(action.payload.itemPricing)
//         );
//         return { ...state, isInitOK: true, route: action.payload.route };
//       })
//       .addCase(initAsync.rejected, (state, action) => {
//         return { ...state, isInitOK: false };
//       });
//   },
// });

// export const { setAuthStatus, setActiveForm } = authSlice.actions;
// export const authReducer = authSlice.reducer;

// export const loggin = (payload) => (dispatch) => {
//   dispatch(logginAsync(payload));
// };
// export const init = (payload) => (dispatch) => {
//   dispatch(initAsync(payload));
// };
