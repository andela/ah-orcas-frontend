import React from 'react';
import propTypes from 'prop-types';

const Alert = ({ message, errorVisiblity }) => (
  <div className="alert-error">
    <span>{message}</span>
    <button type="button" onClick={errorVisiblity}>&times;</button>
  </div>
);

Alert.propTypes = {
  errorVisiblity: propTypes.func,
  message: propTypes.string,
};

Alert.defaultProps = {
  errorVisiblity: propTypes.func,
  message: propTypes.string,
};
export default Alert;
