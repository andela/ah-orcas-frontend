// import api from '../api';
import axios from 'axios';
import userConstants from '../constants/signup.constants';

export const signUpUser = user => ({
  type: userConstants.REGISTER_REQUEST,
  user,
});

export const signUpError = user => ({
  type: userConstants.REGISTER_FAILURE,
  user,
});

export const signUpSuccess = user => ({
  type: userConstants.REGISTER_SUCCESS,
  user,
});

const signUpRequest = data => (dispatch) => {
  const url = process.env.REACT_APP_URL;
  axios.post(`${url}users/`, { user: data })
    .then((response) => {
      dispatch(signUpSuccess(response));
    })
    .catch((error) => {
      signUpError(error.response);
    });
};


export default signUpRequest;
