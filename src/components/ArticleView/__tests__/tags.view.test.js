import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '../tagComponent';
import store from '../../../store';

const tags = [];

it('renders correctly', () => {
  const tree = renderer
    .create(<Tag store={store} tags={tags} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
