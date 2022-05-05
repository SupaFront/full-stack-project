import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/';
const path = {
  register: 'auth/register',
  login: 'auth/login',
  logout: 'auth/logout',
  current: 'auth/current',
};

export const setToken = token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const unsetToken = () => (axios.defaults.headers.common.Authorization = null);

export const loginUser = async user => {
  try {
    const { data } = await axios.post(path.login, user);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const registerUser = async user => {
  try {
    const { data } = await axios.post(path.register, user);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.get(path.current);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(path.logout);
    return 'success';
  } catch (err) {
    throw err.message;
  }
};
