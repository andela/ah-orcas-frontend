import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBarComponent = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button type="button" className="navbar-brand" href="#">Authors Haven</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </nav>

);

export const FooterComponent = () => (
  <div className="navbar-light footer">
    <span>© 2018 Author Haven.</span>
  </div>);
