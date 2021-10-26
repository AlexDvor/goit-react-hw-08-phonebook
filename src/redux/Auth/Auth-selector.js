const getUsername = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;

export { getIsLoggedIn, getUsername };
