import React from 'react';
import { shallow } from 'enzyme';
import { Reports } from '../reports';

function setup() {
  const props = {
    payload: jest.fn(),
    dispatch: jest.fn(),
  };
  const enzymeWrapper = shallow(<Reports {...props} />);
  return {
    enzymeWrapper,
  };
}
describe('snapshot test for reports', () => {
  describe('snapshot test', () => {
    it('should create a snapshot test for reports', () => {
      const { enzymeWrapper } = setup();

      enzymeWrapper.find('#report').simulate('change', {
        target: { id: 'report', value: 'something' },
      });

      expect(enzymeWrapper.state().report).toEqual('something');
      expect(enzymeWrapper).toMatchSnapshot();
    });

    it('should submit the report data', () => {
      const { enzymeWrapper } = setup();

      enzymeWrapper.find('#report').simulate('change', {
        target: { id: 'report', value: 'something' },
      });

      enzymeWrapper.find('#title').simulate('change', {
        target: { id: 'title', value: 'some title' },
      });

      enzymeWrapper.find('.report-button').simulate('click');

      setTimeout(() => {
        expect(enzymeWrapper.state().report).toEqual('');
      }, 1000);
    });
  });
});
