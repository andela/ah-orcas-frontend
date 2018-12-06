import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBarComponent = () => (
  <div className="nav-bar">
    <div className="horz-center nav-container">
      <div className="floated logo">authors haven</div>
      <ul className="floated nav-div nav-links">
        <li className="rela-inline">Home</li>
        <li className="rela-inline">Profile</li>
      </ul>
      <ul className="floated right nav-div nav-link">
        <li className="rela-inline">Sign up</li>
        <li className="rela-inline"><a href="/login">Sign in</a></li>
      </ul>
    </div>
  </div>
);

export const FooterComponent = () => (
  <div className="navbar-light footer">
    <span>© 2018 Author Haven.</span>
  </div>);
