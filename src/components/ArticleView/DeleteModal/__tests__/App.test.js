import React from 'react';
import { shallow } from 'enzyme';
import storemock from '../../../../store';
import DeleteModal from '../App';

function setup() {
  const props = {
    login: jest.fn(),
  };
  const enzymeWrapper = shallow(<DeleteModal {...props} store={storemock} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Articlc View', () => {
  describe('Article', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.modal').length).toBe(0);
    });
  });
});
