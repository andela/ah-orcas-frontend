import axios from 'axios';
import { SOCIAL_LOGIN_SUCCESS } from '../constants';

export const socialSuccess = userData => ({
  type: SOCIAL_LOGIN_SUCCESS,
  payload: userData,
});

const SocialAuthAct = socialData => (dispatch) => {
  const payload = {
    access_token: socialData.access_token,
    provider: socialData.provider,
  };
  axios.post(`${process.env.REACT_APP_URL}social_auth/`, payload)
    .then((response) => {
      dispatch(socialSuccess(response.data));
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.assign(process.env.REACT_APP_FRONTEND_URL);
    },
    );
};

export default SocialAuthAct;
