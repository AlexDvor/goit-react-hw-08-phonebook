import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const logOut = createAsyncThunk('auth/logOut ', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh ', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistToken = state.auth.token;

  if (persistToken === null) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistToken);
  try {
    const response = await axios.get('/users/current').then(res => res.data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(console.log(error));
  }
});

export { register, login, logOut, fetchCurrentUser };
