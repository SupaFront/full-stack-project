import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [],
  questions: [],
};

const qaTests = createSlice({
  name: 'qaTests',
  initialState,
  extraReducers: {},
});

export default qaTests.reducer;
