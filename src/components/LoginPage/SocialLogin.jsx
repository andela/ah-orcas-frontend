/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import SocialAuthAct from '../../actions/sociallogin.action';
import Buttons from './socialButton';

class SocialAuth extends Component {
  state = {
    access_token: '',
    provider: '',
  };

  onSignIn = (payload) => {
    this.setState({
      access_token: payload._token.accessToken,
      provider: payload._provider === 'google' ? 'google-oauth2' : payload._provider,
    });
    const { dispatch } = this.props;
    dispatch(SocialAuthAct(this.state));
  };

  onFailure = () => {

  };

  render() {
    return (
      <Buttons onSignIn={this.onSignIn} onFailure={this.onFailure} />

    );
  }
}
const mapStateToProps = social => ({
  social,
});
SocialAuth.propTypes = {
  dispatch: propTypes.func,
};
SocialAuth.defaultProps = {
  dispatch: propTypes.func,
};
export default connect(
  mapStateToProps,
)(SocialAuth);
