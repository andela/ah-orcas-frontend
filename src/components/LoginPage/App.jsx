/* eslint-disable max-len */
import '../style.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loginUser from '../../actions/login.action';
import Alert from './alert';
import SocialLoginConnected from './SocialLogin';
import FormGroups from './form';
import { SignupLoginLink } from '../SignUpPage/registerComponent';

const image = require('../../assets/images/1505193005.jpg');

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideErrorDisplay = this.hideErrorDisplay.bind(this);
    this.state = {
      email: '',
      password: '',
      errorVisiblity: true,
    };
  }

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { dispatch } = this.props;
      dispatch(loginUser(this.state));
    }

    hideErrorDisplay = () => {
      this.setState({ errorVisiblity: false });
    }

    render() {
      const { userData } = this.props;
      const { errorVisiblity } = this.state;
      const { email, password } = this.state;
      return (
        <section className="sign-in">
          <div className="container">
            <div className="signin-content col-md-10">
              <SignupLoginLink imageClass="signin-image" image={image} link="/register" />
              <div className="signin-form" />
              <div className="col-md-5">
                <h2 className="form-title">Sign In</h2>
                <SocialLoginUl />
                <span className="social-label">Or</span>
                <form method="POST" className="register-form" id="login-form">
                  {userData.errors && errorVisiblity
                    ? <Alert message={userData.responseData.data.errors.error[0]} errorVisiblity={this.hideErrorDisplay} /> : ''}
                  <FormGroups
                    email={email}
                    password={password}
                    handleChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                  />
                  <FormGroup />
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
}

export const SocialLoginUl = () => (
  <div className="social-login">
    <ul className="socials">
      <SocialLoginConnected />
    </ul>
  </div>
);

// solve code length
export const FormGroup = () => (
  <div className="form-group form-button">
    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
    <div className="forgot-password">
      <Link to="/register" className="btn btn-link">Forgot Password?</Link>
    </div>
  </div>
);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

Login.defaultProps = {
  // dispatch: PropTypes.func,
  userData: {},
};
// pass the login reducer for maping as props to the login component
const mapStateToProps = ({ login }) => ({
  userData: login,
});

export default connect(mapStateToProps)(Login);
