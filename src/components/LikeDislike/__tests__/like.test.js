import React from 'react';
import { shallow } from 'enzyme';
import { LikesDislikes } from '../likedislike';

function setup() {
  const props = {
    payload: jest.fn(),
    dispatch: jest.fn(),
  };
  const enzymeWrapper = shallow(<LikesDislikes {...props} />);
  return {
    enzymeWrapper,
  };
}
describe('snapshot test for like disike', () => {
  describe('snapshot test', () => {
    it('should create a snapshot test', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
      expect(enzymeWrapper.find('#likebutton').length).toBe(2);
      expect(enzymeWrapper.find('#thumbsup').length).toBe(1);
      expect(enzymeWrapper.find('#thumbsdown').length).toBe(1);
      expect(enzymeWrapper.find('div').length).toBe(1);
    });
  });
});
