import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { NavBarComponent, FooterComponent } from '../App';

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<NavBarComponent />, div);
  ReactDOM.render(<FooterComponent />, div);
=======
import { Bar } from '../App';

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<Bar />, div);
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> ft(create headers):create navbar and fouter
});
