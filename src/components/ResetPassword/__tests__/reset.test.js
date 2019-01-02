import React from 'react';
import renderer from 'react-test-renderer';
import ResetPassword from '../ResetPassword';
import storemock from '../../../store';

const tags = [];

it('renders correctly', () => {
  const tree = renderer
    .create(<ResetPassword store={storemock} tags={tags} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
