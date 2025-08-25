export const handleLoginPending = (state) => {
  state.loading = true;
  state.error = null;
};

export const handleLoginFulfilled = (state, action) => {
  state.loading = false;
  state.isLoggedIn = true;
  state.user = action.payload.user;
  state.token = action.payload.token;
  localStorage.setItem('authToken', action.payload.token);
  localStorage.setItem('authUser', JSON.stringify(action.payload.user));
};

export const handleLoginRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload?.message || 'Login failed';
};

export const handleSignupPending = (state) => {
  state.loading = true;
  state.error = null;
};

export const handleSignupFulfilled = (state, action) => {
  state.loading = false;
  state.isLoggedIn = true;
  state.user = action.payload.user;
  state.token = action.payload.token;
  localStorage.setItem('authToken', action.payload.token);
  localStorage.setItem('authUser', JSON.stringify(action.payload.user));
};

export const handleSignupRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload?.message || 'Signup failed';
};
