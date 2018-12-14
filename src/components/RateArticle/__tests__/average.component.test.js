import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import AverageRate from '../averageRate';
import myStore from '../../../store/index';

it('renders rating component without crashing', () => {
  const wrapper = mount(
    <Provider store={myStore}>
      <Router>
        <AverageRate />
      </Router>
    </Provider>,
  );
  expect(wrapper.find('.aveRatings')).toHaveLength(1);
},
);
