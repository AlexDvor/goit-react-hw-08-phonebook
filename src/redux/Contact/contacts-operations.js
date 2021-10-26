import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts').then(res => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const postContacts = createAsyncThunk(
  'contacts/postContacts',
  async (newUserData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newUserData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(console.log(error));
    }
  },
);
