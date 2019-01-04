import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import HomePage from '../App';

function setup() {
  const props = {
    articles: [],
  };
  const enzymeWrapper = shallow(<HomePage {...props} store={store} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('homepage component', () => {
  describe('homepage', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
      expect(enzymeWrapper.find('div').length).toBe(0);
    });
  });
});
