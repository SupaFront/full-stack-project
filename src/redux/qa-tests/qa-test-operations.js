import { createAsyncThunk } from '@reduxjs/toolkit';
import testsAPI from '../../API/qa-test';

export const getTests = createAsyncThunk(
  'tests/getTests',
  async (questionType, { rejectWithValue }) => {
    try {
      const tests = await testsAPI.getQuestions(questionType);
      return tests;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const getResults = createAsyncThunk('auth/logInUser', async (data, { rejectWithValue }) => {
  try {
    const results = await testsAPI.getResults(data);
    return results;
  } catch ({ message }) {
    return rejectWithValue(message);
  }
});
