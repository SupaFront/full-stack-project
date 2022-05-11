import axios from 'axios';

const path = {
  tests: 'tests/',
  results: 'tests/results/',
};

const getQuestions = async questionType => {
  try {
    const { data } = axios.get(path.tests + questionType);
    return data;
  } catch (error) {
    const err = { ...error.response.data, status: error.response.status };
    throw err;
  }
};

const getResults = async ({ questionType, answers }) => {
  try {
    const { data } = axios.post(path.results + questionType, answers);
    return data;
  } catch (error) {
    const err = { ...error.response.data, status: error.response.status };
    throw err;
  }
};

const API = { getResults, getQuestions };

export default API;
