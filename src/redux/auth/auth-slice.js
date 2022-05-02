import { createSlice } from '@reduxjs/toolkit';
import { setToken, unsetToken } from '../../API/auth';

const initialState = {
  user: { email: '' },
  token: null,
  userId: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
