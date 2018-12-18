import React from 'react';
import propTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

const Alert = ({ message, color }) => (
  <UncontrolledAlert color={color}>
    {message}
  </UncontrolledAlert>
);

Alert.propTypes = {
  message: propTypes.string,
  color: propTypes.string,
};

Alert.defaultProps = {
  message: propTypes.string,
  color: propTypes.string,
};
export default Alert;
