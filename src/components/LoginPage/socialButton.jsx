import React from 'react';
import './App.scss';
import SocialLogin from 'react-social-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import propTypes from 'prop-types';


const buttonsocial = ({ children, triggerLogin, ...props }) => (
  <button type="button" onClick={triggerLogin} {...props}>
    { children }
  </button>
);
const SocialButton = SocialLogin(buttonsocial);

const Buttons = ({ onSignIn }) => (
  <div>
    <SocialButton
      className="btn-primary btn-light btn-outline-secondary google-button btn-sm btn-block h-25"
      provider="google"
      appId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onLoginFailure={onSignIn}
      onLoginSuccess={onSignIn}
    >
      <FontAwesomeIcon icon={faGoogle} />
      <span> Google </span>
    </SocialButton>
    <SocialButton
      className="btn-primary fb-button btn-sm btn-block"
      provider="facebook"
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      onLoginSuccess={onSignIn}
    >
      <FontAwesomeIcon icon={faFacebookF} />
      <span> Facebook </span>
    </SocialButton>
  </div>
);

Buttons.propTypes = {
  onSignIn: propTypes.func,
};

Buttons.defaultProps = {
  onSignIn: propTypes.func,
};


export default Buttons;
