import axios from 'axios';

export const BASE_URL =
  'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/';

export const getUsers = async (dispatch) => {
  dispatch({ type: 'USERS_START' });
  try {
    const res = await axios.get(BASE_URL + 'users');
    dispatch({ type: 'USERS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'USERS_FAILURE', payload: err });
  }
};

export const getUser = async (userId, dispatch) => {
  dispatch({ type: 'USER_START' });
  try {
    const res = await axios.get(BASE_URL + 'users/' + userId);
    localStorage.setItem('singleUser', JSON.stringify(res.data));
    dispatch({ type: 'USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'USER_FAILURE', payload: err });
  }
};
