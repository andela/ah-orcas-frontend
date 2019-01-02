import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../Modal';
import storemock from '../../../../store';

const tags = [];

it('renders correctly', () => {
  const tree = renderer
    .create(<Modal store={storemock} tags={tags} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
