import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../ArticleComponents';
import store from '../../../store';

it('renders correctly', () => {
  const tree = renderer
    .create(<Article store={store} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
