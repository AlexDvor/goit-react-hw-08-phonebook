import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import { getContacts, postContacts, deleteContacts } from './contacts-operations';

const itemReducer = createReducer([], {
  [getContacts.fulfilled]: (_, action) => [...action.payload],
  [postContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer('', {
  [actions.filterByName]: (state, action) => (state = action.payload),
});

const contactReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactReducer;
