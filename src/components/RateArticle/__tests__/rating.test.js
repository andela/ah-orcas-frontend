import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import RateArticle from '../rateArticleComponent';
import myStore from '../../../store/index';

it('renders rating component without crashing', () => {
  const wrapper = mount(
    <Provider store={myStore}>
      <Router>
        <RateArticle />
      </Router>
    </Provider>,
  );
  expect(wrapper.find('.star-ratings')).toHaveLength(1);
},
);
