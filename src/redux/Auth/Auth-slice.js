import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './Auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      console.log('authOperations.fetchCurrentUser.fulfilled', action);
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },

    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrent = true;
    },

    [authOperations.fetchCurrentUser.rejected](state, _) {
      state.isFetchingCurrent = false;
    },
  },
});

export default authSlice.reducer;
