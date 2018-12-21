import React from 'react';
import { shallow } from 'enzyme';
import ArticleComponent from '../ArticleViewComponents';

function setup() {
  const props = {
    login: jest.fn(),
    resolved: false,
    social: {},
  };
  const enzymeWrapper = shallow(<ArticleComponent {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Article View Components', () => {
  describe('Article', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.container-fluid').length).toBe(1);
      expect(enzymeWrapper.find('.article-body').length).toBe(1);
      expect(enzymeWrapper.find('.row').length).toBe(1);
    });
  });
});
