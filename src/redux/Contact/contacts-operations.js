// import * as actions from './contacts-actions';
import * as services from '../../services/fetchContacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.fetchContacts();
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
      const { data } = await services.postContacts(newUserData);
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
      const { data } = await services.deleteContacts(id);
      return data.id;
    } catch (error) {
      return rejectWithValue(console.log(error));
    }
  },
);

// export const deleteContacts = id => async dispatch => {
//   dispatch(actions.deleteContactsRequest());
//   try {
//     await services.deleteContacts(id);
//     dispatch(actions.deleteContactsSuccess());
//   } catch (error) {
//     dispatch(actions.deleteContactsError());
//   }
// };

// export const getContacts = () => async dispatch => {
//   dispatch(actions.getContactsRequest());
//   try {
//     const contacts = await services.fetchContacts();
//     dispatch(actions.getContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.getContactsError());
//   }
// };

// export const postContacts = newUserData => async dispatch => {
//   dispatch(actions.postContactsRequest());
//   try {
//     await services.postContacts(newUserData);
//     dispatch(actions.postContactsSuccess());
//     updatedUserList(dispatch);
//   } catch (error) {
//     dispatch(actions.postContactsError());
//   }
// };
