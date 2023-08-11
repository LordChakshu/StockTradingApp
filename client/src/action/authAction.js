import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  USER_LOADING
} from './types';

// Login action
export const login = (userData,history) => (dispatch) => {
  dispatch(setUserLoading());

  axios
    .post('/login', userData)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data, 
      });
      
      history.push('/home');
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data.error, 
      });
    });
};

// Signup 
export const signup = (userData,history) => (dispatch) => {
  dispatch(setUserLoading());

  axios
    .post('http://localhost:3000/signup', userData)
    .then((res) => {
      history.push('/home');
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data, 
      });
      
    })
    .catch((err) => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.response.data.error, 
      });
    })
};

// Logout action
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

// User loading action
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
