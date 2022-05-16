import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionType: '',
};

const qaTests = createSlice({
  name: 'qaTests',
  initialState,
  reducers: {
    setQuestType: (state, { payload }) => {
      state.questionType = payload;
    },
  },
});
export const { setQuestType } = qaTests.actions;
export default qaTests.reducer;
