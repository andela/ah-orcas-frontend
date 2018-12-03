import React from 'react';
import Home from '../components/HomePage/App';
import Login from '../components/LoginPage/App';
import { Bar, Foot } from '../components/NavBar/App';


export const HomePage = () => (
  <Home />
);

export const LoginPage = () => (
  <Login />
);

export const Header = () => (
  <Bar />
);

export const Footer = () => (
  <Foot />
);
