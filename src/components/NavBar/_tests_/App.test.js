import React from 'react';
import ReactDOM from 'react-dom';
import { NavBarComponent, FooterComponent } from '../App';

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<NavBarComponent />, div);
  ReactDOM.render(<FooterComponent />, div);
});
