export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserId = state => state.auth.user._id;
export const getisLoading = state => state.auth.loading;
export const getToken = state => state.auth.token;
export const getUserEmail = state => state.auth.user.email;
export const getError = state => state.auth.error;
