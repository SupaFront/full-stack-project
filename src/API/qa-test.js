import axios from 'axios';

const path = {
  tests: 'tests/',
  results: 'tests/results/',
};

export const getQuestions = async questionType => {
  try {
    const { data } = axios.get(path.tests + questionType);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const getResults = async (questionType, answers) => {
  try {
    const { data } = axios.post(path.results + questionType, answers);
    return data;
  } catch (error) {
    throw error.message;
  }
};
