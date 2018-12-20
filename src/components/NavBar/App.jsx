import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBarComponent = () => (
  <div className="nav-container">
    <div className="nav-bar">
      <div className="horz-center nav-container">
        <div className="floated logo">Authors Haven</div>
        {localStorage.getItem('user') == null
          ? (
            <UnAuthed />
          )
          : (
            <Authed />
          )
        }
      </div>
    </div>
  </div>
);

export const UnAuthed = () => (
  <ul className="floated right nav-div nav-link">
    <a href="/" className="rela-inline">Home</a>
    <a href="/login" className="rela-inline">Signin</a>
    <a href="/register" className="rela-inline">Signup</a>
  </ul>
);

export const Authed = () => (
  <div>
    {
      window.location.pathname === '/create'
        ? (
          <AuthedNoNewArticle />
        )
        : (
          <AuthedNewArticle />
        )
    }
  </div>
);

export const AuthedNoNewArticle = () => (
  <ul className="floated right nav-div nav-link">
    <a href="/" className="rela-inline">Home</a>
    <a href="/login" className="rela-inline" onClick={() => localStorage.removeItem('user')}>Logout</a>
  </ul>
);

export const AuthedNewArticle = () => (
  <ul className="floated right nav-div nav-link">
    <a href="/create" className="rela-inline btn-link">New Article</a>
    <a href="/" className="rela-inline">Home</a>
    <a href="/login" className="rela-inline" onClick={() => localStorage.removeItem('user')}>Logout</a>
  </ul>
);

export const FooterComponent = () => (
  <div className="navbar-light footer">
    <span>© 2018 Authors Haven.</span>
  </div>);
