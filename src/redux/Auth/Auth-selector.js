const getUsername = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getFetchingCurrent = state => state.auth.isFetchingCurrent;

export { getIsLoggedIn, getUsername, getFetchingCurrent };
