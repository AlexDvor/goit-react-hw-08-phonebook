import { createSelector } from '@reduxjs/toolkit';

const getContactsSelector = state => state.contacts.items;
const filterSelector = state => state.contacts.filter;

const visibleContactsSelector = createSelector(
  [getContactsSelector, filterSelector],
  (contacts, userName) => {
    if (contacts) {
      return contacts.filter(item => item.name.toLowerCase().includes(userName.toLowerCase()));
    }
  },
);

export { getContactsSelector, filterSelector, visibleContactsSelector };
