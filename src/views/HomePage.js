import React from 'react';
import AuthLogin from '../components/LoginPage/App';
import ResetPasswordComp from '../components/ResetPassword/ResetPassword';
import RegisterPage from '../components/SignUpPage/registerComponent';
import Profile from '../components/ProfilePage/Profile';
import HomePage from '../components/HomePage/App';
import ArticleInput from '../components/ArticleCreate/App';
import Article from '../components/ArticleView/App';
import Update from '../components/ArticleUpdate/App';
import { NavBarComponent, FooterComponent } from '../components/NavBar/App';
import RateArticle from '../components/RateArticle/rateArticleComponent';
import Reports from '../components/reports/reports';


export const HomePageView = () => (
  <HomePage className="grid" />
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
  <ResetPasswordComp />
);

export const ArticleInputComponents = () => (
  <ArticleInput />
);

export const ArticleComponent = () => (
  <Article />
);

export const UpdateArticleComponent = () => (
  <Update />
);

export const ProfilePage = ({ ...props }) => (
  <Profile {...props} />
);

export const Rate = () => (
  <RateArticle />
);

export const reportArticle = () => (
  <Reports />
);
