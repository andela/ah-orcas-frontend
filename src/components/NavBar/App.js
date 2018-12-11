import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBarComponent = () => (
  <div className="nav-container">
    <div className="nav-bar">
      <div className="horz-center nav-container">
        <div className="floated logo">Authors Haven</div>
        <ul className="floated right nav-div nav-link">
          <li className="rela-inline">Home</li>
          <li className="rela-inline">Search</li>
          <li className="rela-inline">About</li>
          <li className="rela-inline">Contact Us</li>
        </ul>
      </div>
    </div>
  </div>
);

export const FooterComponent = () => (
  <div className="navbar-light footer">
    <span>© 2018 Authors Haven.</span>
  </div>);
