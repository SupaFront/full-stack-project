import { createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../API/auth';

export const logInUser = createAsyncThunk('auth/logInUser', async (data, { rejectWithValue }) => {
	try {
		const loginUserResponse = await authAPI.loginUser(data);
		return loginUserResponse;
	} catch ({ message }) {
		return rejectWithValue(message);
	}
});

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (data, { rejectWithValue }) => {
		try {
			const registerUserResponse = await authAPI.registerUser(data);
			return registerUserResponse;
		} catch ({ message }) {
			return rejectWithValue(message);
		}
	},
);

export const logOutUser = createAsyncThunk('auth/logOutUser', async (_, { rejectWithValue }) => {
	try {
		const registerUserResponse = await authAPI.logoutUser();
		return registerUserResponse;
	} catch ({ message }) {
		return rejectWithValue(message);
	}
});

export const getCurrentUser = createAsyncThunk(
	'auth/getCurrentUser',
	async (_, { rejectWithValue, getState }) => {
		const { token } = getState().auth;
		token && authAPI.setToken(token);
		try {
			const userInfo = await authAPI.getCurrentUser();
			return userInfo.data;
		} catch ({ message }) {
			return rejectWithValue(message);
		}
	},
);
