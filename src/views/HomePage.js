import React from 'react';
// importing the connected app with Authlogin as name
import AuthLogin from '../components/LoginPage/App';
import RegisterPage from '../components/SignUpPage/registerComponent';
import HomePage from '../components/HomePage/App';
import ArticleInput from '../components/ArticleCreate/App';
import Article from '../components/ArticleView/App';
import { NavBarComponent, FooterComponent } from '../components/NavBar/App';
import DeleteArticleConected from '../components/ArticleDelete/DeleteArticle';


export const HomePageView = () => (
  <HomePage className="grid" />
);

export const LoginPage = () => (
  <AuthLogin />
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
export const DeleteArticle = ({ props }) => (
  <DeleteArticleConected {...props} />
);
