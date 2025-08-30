import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../api/rtk/authApi";
import authReducer from "./slices/authSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer, // RTK Query
});

export default rootReducer;
