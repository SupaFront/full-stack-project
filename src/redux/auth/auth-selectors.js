export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserId = state => state.auth.user._id;
export const getIsLoading = state => state.auth.isLoading;
export const getToken = state => state.auth.token;
export const getUserEmail = state => state.auth.user.email;
export const getError = state => state.auth.error;
export const getMessage = state => state.auth.message;
