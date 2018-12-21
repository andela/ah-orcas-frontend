import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../store';
import Body from '../ArticleComponents';

function setup() {
  const props = {
    login: jest.fn(),
    userimage: jest.fn(),
    description: jest.fn(),
    username: jest.fn(),
    title: jest.fn(),
    time: jest.fn(),
    slug: jest.fn(),
  };
  const Wrapper = shallow(<Body {...props} store={store} />);
  return {
    props,
    Wrapper,
  };
}

describe('login', () => {
  it('snapshot test', () => {
    const { Wrapper } = setup();
    expect(Wrapper.find('button').length).toBe(1);
    expect(Wrapper.find('div').length).toBe(6);
    expect(Wrapper.find('a').length).toBe(2);
    expect(Wrapper.find('p').length).toBe(1);
    expect(Wrapper).toMatchSnapshot();
  });
});
