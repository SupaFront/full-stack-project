import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/';

const path = {
  register: 'auth/register',
  login: 'auth/login',
  logout: 'auth/logout',
  current: 'auth/current',
};

const setToken = token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = null);

const loginUser = async user => {
  try {
    const { data } = await axios.post(path.login, user);
    return data;
  } catch (error) {
    const err = { ...error.response.data, status: error.response.status };
    throw err;
  }
};

const registerUser = async user => {
  try {
    const { data } = await axios.post(path.register, user);
    return data;
  } catch (error) {
    const err = { ...error.response.data, status: error.response.status };
    throw err;
  }
};

const getCurrentUser = async () => {
  try {
    const { data } = await axios.get(path.current);
    return data;
  } catch (error) {
    const err = { ...error.response.data, status: error.response.status };
    throw err;
  }
};

const logoutUser = async () => {
  try {
    await axios.post(path.logout);
    return 'success';
  } catch (error) {
    const err = { ...error.response.data, status: error.response.status };
    throw err;
  }
};

const API = { loginUser, logoutUser, getCurrentUser, registerUser, setToken, unsetToken };

export default API;
