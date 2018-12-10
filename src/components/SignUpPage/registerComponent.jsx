import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import signUpRequest from '../../actions/signup.actions';
import Form from './formComponent';
import 'bootstrap';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const image = require('../../assets/images/blog-49006_640.png');

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit = () => {
      this.setState({ submitted: true });
      const { username, email, password } = this.state;
      const { signUp } = this.props;
      if (username && email && password) {
        signUp({ ...this.state });
      }
    };

    successMessage = () => (
      <div className="text-success">
        <h6> You have successfully signed up.</h6>
        <h6>Kindly check your email to verify your account.</h6>
      </div>
    );

    errorMessage = () => (
      <div className="text-danger">
        <h6> Username/email already exists. Try another one</h6>
      </div>
    );

    handleChange =(e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    render() {
      const { username, password, email, confirmPassword } = this.state;
      const { visible } = this.props;
      return (
        <section className="signup">
          <div className="container">
            <div className="signup-content col-md-12">
              <div className="col-md-7">
                <div className="signup-form ">
                  <h2 className="form-title">Sign up</h2>
                  <form className="register-form" id="signup-form" onSubmit={this.handleSubmit}>
                    { visible && this.successMessage()}
                    <Div {...this.state} />
                    <Errors {...this.state} />
                    <Form
                      username={username}
                      email={email}
                      password={password}
                      confirmPassword={confirmPassword}
                      handleChange={this.handleChange}
                    />
                    <div className="form-group form-button">
                      <input type="button" name="signup" id="signup" className="form-submit" value="Register" onClick={() => this.handleSubmit()} />
                    </div>
                  </form>
                </div>
              </div>
              <SignupLoginLink imageClass="signup-image" image={image} link="/login" />
            </div>
          </div>
        </section>
      );
    }
}

// this component is meant to soleve code climate issue of the same code appearing App.jsx
export const SignupLoginLink = ({imageClass, image, link }) => (
  <div className="col-md-5">
    <div className={imageClass}>
      <figure><img src={image} alt="" /></figure>
      <Link to={link} className="btn">Already have an account?</Link>
    </div>
  </div>
);

export const Errors = ({ ...props }) => {
  const { submitted, username, password, confirmPassword, email } = props;
  return (
    <div className={`form-group${submitted && !username && submitted && !email
      && submitted && !password && submitted && !confirmPassword ? ' has-error' : ''}`}
    />
  );
};

export const Div = ({ ...props }) => {
  const { username, password, email, confirmPassword, submitted, ...rest } = props;
  return (
    <div className="alert-info, form-group" {...rest}>
      {submitted && !username
            && <div className="help-block, text-danger">Username is required</div>}
      {submitted && !email
              && <div className="help-block, text-danger">Enter a valid email</div>}
      {submitted && !password
            && <div className="help-block, text-danger">Password is required</div> }
      {submitted && !confirmPassword && (
      <div className="help-block, text-danger">Confirm Password is required</div>)}
    </div>
  );
};

SignupLoginLink.propTypes = {
  imageClass: propTypes.string,
  image: propTypes.string,
  link: propTypes.string,
};

SignupLoginLink.defaultProps = {
  imageClass: '',
  image: '',
  link: '',
};

Errors.propTypes = {
  handleChange: propTypes.func,
  email: propTypes.string,
  password: propTypes.string,
  username: propTypes.string,
  submitted: propTypes.bool,
  confirmPassword: propTypes.string,
};
Errors.defaultProps = {
  handleChange: propTypes.func,
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
  submitted: '',
};

RegisterPage.propTypes = {
  signUp: propTypes.string,
  visible: propTypes.bool,
};

RegisterPage.defaultProps = {
  signUp: '',
  visible: '',
};
const mapStateToProps = state => ({
  visible: state.registration.visible,
  success: state.registration.success,
});


const matchDispatchToProps = dispatch => bindActionCreators({
  signUp: signUpRequest,
}, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(RegisterPage);
