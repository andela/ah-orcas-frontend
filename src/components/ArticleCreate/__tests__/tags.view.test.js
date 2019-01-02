import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from '../tagComponent';
import store from '../../../store';


describe('TagComponent', () => {
  describe('Tag', () => {
    it('should render self and subcomponents', () => {
      const event = {
        target: {
          value: 9,
        },
      };
      const spy = jest.spyOn(Tag.prototype, 'handleInputChange');
      const enzymeWrapper = shallow(<Tag store={store} />);
      enzymeWrapper.find('input').at(1).simulate('change', event);
      enzymeWrapper.find('input').at(1).simulate('keydown', event);
      expect(spy).toHaveBeenCalled();
    });
  });
});
