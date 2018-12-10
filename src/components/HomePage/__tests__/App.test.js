import React from 'react';
import ReactDOM from 'react-dom';
import wrapper from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<wrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
