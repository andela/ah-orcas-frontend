import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { NavBarComponent, FooterComponent } from '../App';
=======
import { NavBarComponent } from '../App';
>>>>>>> ft(create headers):create navbar and fouter

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<NavBarComponent />, div);
<<<<<<< HEAD
  ReactDOM.render(<FooterComponent />, div);
=======
import { Bar } from '../App';

it('footer render without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<Bar />, div);
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> ft(create headers):create navbar and fouter
=======
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> ft(create headers):create navbar and fouter
});
