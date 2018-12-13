import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../../store';
import App from '../App';

it('renders register component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  wrapper.find('#signup-form').simulate(
    'submit',
    { preventDefault() {} },
  );
});
