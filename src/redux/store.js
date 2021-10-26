import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Contact/contacts-reducer';
import authSlice from './Auth/Auth-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
