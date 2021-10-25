import { createSelector } from '@reduxjs/toolkit';

const getContactsSelector = state => state.contacts.items;
const filterSelector = state => state.contacts.filter;

// const visibleContactsSelector = state => {
//   const contacts = getContactsSelector(state);
//   const userName = filterSelector(state);
//   if (contacts) {
//     return contacts.filter(item => item.name.toLowerCase().includes(userName.toLowerCase()));
//   }
// };

const visibleContactsSelector = state => {
  const contacts = getContactsSelector(state);
  const userName = filterSelector(state);
  const normalizedFilter = userName.toLowerCase().trim();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

// const visibleContactsSelector = createSelector(
//   [getContactsSelector, filterSelector],
//   (contacts, userName) => {
//     if (contacts) {
//       return contacts.filter(item => item.name.toLowerCase().includes(userName.toLowerCase()));
//     }
//   },
// );

export { getContactsSelector, filterSelector, visibleContactsSelector };
