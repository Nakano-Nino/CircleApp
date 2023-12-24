import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice";

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } = AuthSlice.actions

export const authReducer = AuthSlice.reducer

const rootReducer = combineReducers({
  auth: authReducer
})

export default rootReducer