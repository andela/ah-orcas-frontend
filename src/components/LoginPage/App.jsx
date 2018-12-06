/* eslint-disable max-len */
import './App.scss';
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginUser from '../../actions/login.action';
import Alert from './alert';
import FormGroups from './form';
import SocialLoginConnected from './SocialLogin';

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
        <div className="login">
          {userData.errors && errorVisiblity
            ? <Alert message={userData.responseData.data.errors.error[0]} errorVisiblity={this.hideErrorDisplay} /> : ''}
          <SocialLoginConnected />
          <form onSubmit={this.handleSubmit}>
            <p>OR</p>
            <FormGroups email={email} password={password} handleChange={this.handleChange} />
            <Button
              id="button"
              block
              bsSize="large"
              bsStyle="primary"
              type="submit"
            >
             Login
            </Button>
          </form>
        </div>
      );
    }
}

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
