import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  singleUser: JSON.parse(localStorage.getItem('singleUser')) || null,
  isFetching: false,
  error: false
};

export const AuthContext = createContext(INITIAL_STATE);

// Create Wrapper
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Save Initial to localStorage
  useEffect(() => {
    return localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        singleUser: state.singleUser,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
