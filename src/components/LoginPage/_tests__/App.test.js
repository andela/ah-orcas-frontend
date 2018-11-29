import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders Login without crashing', () => {
  const div = document.createElement('nav');
  const Login = App;
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
