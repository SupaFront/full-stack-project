import { createSlice } from '@reduxjs/toolkit';
import API from '../../API/auth';
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
		[ logInUser.pending ]: state => {
			state.loading = true;
			state.error = null;
		},
		[ logInUser.fulfilled ]: (state, { payload }) => {
			state.loading = false;
			state.user = { ...payload.user };
			state.token = payload.token;
			state.isLoggedIn = true;
			API.setToken(payload.token);
		},
		[ logInUser.rejected ]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[ registerUser.pending ]: state => {
			state.loading = true;
			state.error = null;
		},
		[ registerUser.fulfilled ]: (state, { payload }) => {
			state.loading = false;
			// state.user = { ...payload.user };
			// state.isLoggedIn = true;
		},
		[ registerUser.rejected ]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[ getCurrentUser.pending ]: state => {
			state.loading = true;
			state.error = null;
		},
		[ getCurrentUser.fulfilled ]: (state, { payload }) => {
			state.loading = false;
			state.user = { ...payload };
			state.isLoggedIn = true;
		},
		[ getCurrentUser.rejected ]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[ logOutUser.pending ]: state => {
			state.loading = true;
			state.error = null;
		},
		[ logOutUser.fulfilled ]: (state, { payload }) => {
			state.loading = false;
			state.user = { ...initialState.user };
			state.token = '';
			state.isLoggedIn = false;
		},
		[ logOutUser.rejected ]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default authSlice.reducer;
