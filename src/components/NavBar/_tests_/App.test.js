import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar, Foot } from '../App';

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.render(<Foot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
