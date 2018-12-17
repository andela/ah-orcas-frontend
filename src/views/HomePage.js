import React from 'react';
import Home from '../components/HomePage/App';
import { NavBarComponent, FooterComponent } from '../components/NavBar/App';
// importing the connected app with Authlogin as name
import AuthLogin from '../components/LoginPage/App';
import RegisterPage from '../components/SignUpPage/registerComponent';
// eslint-disable-next-line import/no-named-as-default
import ResetPasswordComponent from '../components/ResetPassword/ResetPassword';
import Profile from '../components/ProfilePage/Profile';


export const HomePage = () => (
  <Home />
);

export const LoginPage = ({ ...props }) => (
  <AuthLogin {...props} />
);

export const Header = () => (
  <NavBarComponent />
);

export const Footer = () => (
  <FooterComponent />
);
export const Register = () => (
  <RegisterPage />
);

export const ResetPassword = () => (
  <ResetPasswordComponent />
);

export const ProfilePage = ({ ...props }) => (
  <Profile {...props} />
);
