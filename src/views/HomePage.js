import React from 'react';
import Home from '../components/HomePage/App';
import { NavBarComponent, FooterComponent } from '../components/NavBar/App';
import SocialAuth from '../components/LoginPage/SocialLogin';


export const HomePage = () => (
  <Home />
);

export const LoginPage = () => (
  <SocialAuth />
);

export const Header = () => (
  <NavBarComponent />
);

export const Footer = () => (
  <FooterComponent />
);
