import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, singupApi } from "../../api/services/authService";
import {
  handleLoginPending,
  handleLoginFulfilled,
  handleLoginRejected,
  handleSignupPending,
  handleSignupFulfilled,
  handleSignupRejected,
} from './authReducers';


//Thunks
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email , password , role}, thunlAPI) => {
    try {
      return await loginApi(email,password,role);
    } catch (error) {
      return thunlAPI.rejectWithValue(error.response?.data || { message: 'Login failed'});
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ email , password , role}, thunlAPI) => {
    try {
      return await singupApi(email,password,role);
    } catch (error) {
      return thunlAPI.rejectWithValue(error.response?.data || { message: 'Login failed'});
    }
  }
);


const initialState = {
  isLoggedIn: !!localStorage.getItem('authToken'),
  user: JSON.parse(localStorage.getItem('authUser')) || null,
  token: localStorage.getItem('authToken') || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, handleLoginPending)
      .addCase(loginUser.fulfilled, handleLoginFulfilled)
      .addCase(loginUser.rejected, handleLoginRejected)
      .addCase(signupUser.pending, handleSignupPending)
      .addCase(signupUser.fulfilled, handleSignupFulfilled)
      .addCase(signupUser.rejected, handleSignupRejected);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;