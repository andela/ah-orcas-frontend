import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import UpdateForm, { Form } from '../UpdateForm';
import store from '../../../store';

function setup() {
  const props = {
    login: jest.fn(),
    resolved: false,
    social: {},
  };
  const enzymeWrapper = shallow(<Form {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Update form unconnected', () => {
  describe('update', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.form-group-lg').length).toBe(2);
      expect(enzymeWrapper.find('.article-create-page').length).toBe(1);
      expect(enzymeWrapper.find('.form-control-lg').length).toBe(1);
      expect(enzymeWrapper.find('.container').length).toBe(0);
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});


const title = 'some article title';

it('renders register component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <UpdateForm />
      </Router>
    </Provider>,
  );
  const node = wrapper.find('#title');
  node.simulate(
    'change',
    {
      target:
        { name: 'title', value: title },
    },
  );
  expect(node.instance().value).toBe(title);
});
