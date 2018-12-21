import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '../tagComponent';
import store from '../../../store';

it('renders correctly', () => {
  const tree = renderer
    .create(<Tag store={store} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
