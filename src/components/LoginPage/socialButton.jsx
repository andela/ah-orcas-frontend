import React from 'react';
import 'bootstrap';
import '../style.scss';
import SocialLogin from 'react-social-login';
import propTypes from 'prop-types';

const google = require('../../assets/images/google.jpg');
const facebook = require('../../assets/images/facebook.jpg');

const buttonsocial = ({ children, triggerLogin, ...props }) => (
  <button type="button" onClick={triggerLogin} {...props}>
    { children }
  </button>
);
const SocialButton = SocialLogin(buttonsocial);

const Buttons = ({ onSignIn, onFailure }) => (
  <div>
    <SocialButton
      className="btn-social"
      provider="google"
      appId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onLoginFailure={onFailure}
      onLoginSuccess={onSignIn}
    >
      <img className="my-img" src={google} alt="" />
    </SocialButton>
    <div className="social-button-bt" />
    <SocialButton
      className="btn-social btn-facebook"
      provider="facebook"
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      onLoginFailure={onFailure}
      onLoginSuccess={onSignIn}
    >
      <img className="my-img" src={facebook} alt="" />
    </SocialButton>
  </div>
);

Buttons.propTypes = {
  onSignIn: propTypes.func,
  onFailure: propTypes.func.isRequired,
};

Buttons.defaultProps = {
  onSignIn: propTypes.func,
};


export default Buttons;
