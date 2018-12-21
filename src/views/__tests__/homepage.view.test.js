import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { ArticleInputComponents } from '../HomePage';
import store from '../../store';

it('renders correctly', () => {
  const Component = (
    <Provider store={store}>
      <ArticleInputComponents />
    </Provider>
  );
  const tree = renderer
    .create(Component)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
