import axios from 'axios';
import baseUrl from '../constants/url';

export const loginStart = () => ({
  type: 'LOGIN_START',
});


export const loginSuccess = response => ({
  type: 'LOGIN_SUCCESS',
  payload: response,
});

export const loginFailed = error => ({
  type: 'LOGIN_FAILED',
  payload: error,
});


// dispatch apropriate action for login
const loginUser = (loginData) => {
  const url = `${baseUrl}/users/login/`;
  return (dispatch) => {
    dispatch(loginStart());
    return axios.post(url,
      { user: { email: loginData.email, password: loginData.password } }).then(
      (response) => {
        dispatch(loginSuccess(response));
        localStorage.setItem('user', JSON.stringify(response.data.user));
      },
      (err) => {
        dispatch(loginFailed(err.response));
      },
    );
  };
};
export default loginUser;
