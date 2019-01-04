import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '../containers';

function setup() {
  const props = {};
  const enzymeWrapper = shallow(<ArticleCard {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('articlecard', () => {
  describe('article card elements', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
      expect(enzymeWrapper.find('div').length).toBe(6);
      expect(enzymeWrapper.find('a').length).toBe(6);
      expect(enzymeWrapper.find('h4').length).toBe(1);
      expect(enzymeWrapper.find('li').length).toBe(3);
      expect(enzymeWrapper.find('img').length).toBe(2);
      expect(enzymeWrapper.find('ul').length).toBe(1);
    });
  });
});
