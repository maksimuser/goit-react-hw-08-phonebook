export const getIsAuthenticated = state => state.auth.isAuthenticated;
console.log(getIsAuthenticated);

export const getUserEmail = state => state.auth.user.email;
