import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const itemReducer = createReducer([], {
  [actions.getContactsSuccess]: (_, action) => [...action.payload],
  [actions.updatedListUsers]: (_, action) => [...action.payload],
});

const filterReducer = createReducer('', {
  [actions.filterByName]: (state, action) => (state = action.payload),
});

const contactReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactReducer;
