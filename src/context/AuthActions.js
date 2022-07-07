export const UsersStart = () => ({
  type: 'USERS_START'
});

export const UsersSuccess = (user) => ({
  type: 'USERS_SUCCESS',
  payload: user
});

export const UsersFailure = (error) => ({
  type: 'USERS_FAILURE',
  payload: error
});

export const UserStart = (userId) => ({
  type: 'USER_START',
  payload: userId
});

export const UserSuccess = (user) => ({
  type: 'USER_SUCCESS',
  payload: user
});

export const UserFailure = (error) => ({
  type: 'USER_FAILURE',
  payload: error
});
