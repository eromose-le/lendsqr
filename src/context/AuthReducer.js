const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'USERS_START':
      return {
        user: null,
        isFetching: true,
        error: false
      };
    case 'USERS_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };
    case 'USERS_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: action.payload
      };
    case 'USER_START':
      return {
        user: state.user,
        singleUser: null,
        isFetching: true,
        error: false
      };
    case 'USER_SUCCESS':
      return {
        user: state.user,
        singleUser: action.payload,
        isFetching: false,
        error: false
      };
    case 'USER_FAILURE':
      return {
        user: state.user,
        singleUser: null,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;
