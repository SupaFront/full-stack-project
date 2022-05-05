import { createSlice } from '@reduxjs/toolkit';
import { setToken, unsetToken } from '../../API/auth';
import { logInUser, logOutUser, registerUser, getCurrentUser } from './auth-operations';

const initialState = {
  user: { email: '', _id: '' },
  token: null,
  loading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [logInUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [registerUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.user = { ...payload.user };
      // state.isLoggedIn = true;
    },
    [registerUser.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCurrentUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = { ...payload };
      state.isLoggedIn = true;
    },
    [getCurrentUser.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logOutUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logOutUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = { ...initialState.user };
      state.token = '';
      state.isLoggedIn = false;
    },
    [logOutUser.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
