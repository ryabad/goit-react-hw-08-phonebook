import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const deleteToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, thunk) => {
    try {
      const { data } = await axios.post('users/signup', body);
      setToken(data.token);
      Notiflix.Notify.success('Registration success!');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, thunk) => {
    try {
      const { data } = await axios.post('users/login', body);
      setToken(data.token);
      Notiflix.Notify.success('Login success!');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunk) => {
  try {
    await axios.post('users/logout');
    Notiflix.Notify.success('Logout success! We are waiting for you again');
    deleteToken();
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return thunk.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunk) => {
    if (!thunk.getState().auth.token) {
      return thunk.rejectWithValue('Something went wrong with fetching user!');
    }
    try {
      setToken(thunk.getState().auth.token);
      const { data } = await axios('users/current');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      return thunk.rejectWithValue(error.message);
    }
  }
);
