import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, LoginPage, Register } from '../HomePage';

it('renders HomePage component without crashing', () => {
  shallow(<HomePage />);
});

it('renders LoginPage component without crashing', () => {
  shallow(<LoginPage />);
});
it('renders RegisterPage component without crashing', () => {
  shallow(<Register />);
});
