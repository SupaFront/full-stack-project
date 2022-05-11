import { createSlice } from '@reduxjs/toolkit';
import { getResults, getTests } from './qa-test-operations';

const initialState = {
  answers: [],
  questions: [],
  result: null,
  loading: false,
  error: null,
};

const qaTests = createSlice({
  name: 'qaTests',
  initialState,
  reducers: {
    clearQuestionsList: state => {
      state.questions = initialState.questions;
    },
  },
  extraReducers: {
    [getTests.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getTests.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.questions = payload;
    },
    [getTests.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getResults.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getResults.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.result = { ...payload };
    },
    [getResults.pending]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { clearQuestionsList } = qaTests.actions;
export default qaTests.reducer;
