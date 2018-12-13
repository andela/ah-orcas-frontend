
import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../App';

function setup() {
  const props = {
    login: jest.fn(),
    dispatch: jest.fn(),
  };
  const enzymeWrapper = shallow(<Login {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('login components', () => {
  describe('login', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#button').length).toBe(0);
    });
  });
});
