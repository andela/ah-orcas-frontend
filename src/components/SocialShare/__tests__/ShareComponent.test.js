import React from 'react';
import { shallow } from 'enzyme';
import SocialShare from '../ShareComponent';

const props = {
  slug: '',
  title: '',
};
const wrapper = shallow(<SocialShare {...props} />);
describe('componentDidMount', () => {
  it('calls componentDidMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy.mock.calls.length).toEqual(1);
    expect(wrapper.find('div').length).toBe(1);
  });
});
