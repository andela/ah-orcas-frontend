import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

<<<<<<< HEAD
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
=======

export const Bar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button type="button" className="navbar-brand" href="#">Authors Haven</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </nav>

);

export const Foot = () => (
>>>>>>> ft(create headers):create navbar and fouter
  <div className="navbar-light footer">
    <span>© 2018 Authors Haven.</span>
  </div>);
