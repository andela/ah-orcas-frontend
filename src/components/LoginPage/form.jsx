import React from 'react';
import propTypes from 'prop-types';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const FormGroups = ({ email, password, handleChange }) => (
  <div>
    <FormGroup controlId="email" bsSize="large">
      <ControlLabel>Email</ControlLabel>
      <FormControl
        autoFocus
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
    </FormGroup>
    <FormGroup controlId="password" bsSize="large">
      <ControlLabel>Password</ControlLabel>
      <FormControl
        value={password}
        onChange={handleChange}
        type="password"
        placeholder="Enter Password"
      />
    </FormGroup>
  </div>
);
FormGroups.propTypes = {
  handleChange: propTypes.func,
  email: propTypes.string,
  password: propTypes.string,
};

FormGroups.defaultProps = {
  handleChange: propTypes.func,
  email: '',
  password: '',
};

export default FormGroups;
