import React from 'react';
import Home from '../components/HomePage/App';
import Login from '../components/LoginPage/App';
import { NavBarComponent, FooterComponent } from '../components/NavBar/App';


export const HomePage = () => (
  <Home />
);

export const LoginPage = () => (
  <Login />
);

export const Header = () => (
  <NavBarComponent />
);

export const Footer = () => (
  <FooterComponent />
);
