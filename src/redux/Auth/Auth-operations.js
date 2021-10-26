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
    return rejectWithValue(error);
  }
});
// const register = credentials => async dispatch => {
//   dispatch(authActions.registerRequest());

//   try {
//     const response = await axios.post('/users/signup', credentials);

//     token.set(response.data.token);
//     dispatch(authActions.registerSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.registerError(error.message));
//   }
// };

export { register };
