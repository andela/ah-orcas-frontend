import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, LoginPage } from '../HomePage';

it('renders HomePage component without crashing', () => {
  shallow(<HomePage />);
});

it('renders LoginPage component without crashing', () => {
  shallow(<LoginPage />);
});
