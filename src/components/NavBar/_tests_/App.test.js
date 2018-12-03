import React from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '../App';

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<Bar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
