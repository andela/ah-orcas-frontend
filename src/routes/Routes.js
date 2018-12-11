import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePageView, LoginPage, ArticleComponent, Register, Header, Footer, ArticleInputComponents, ResetPassword, DeleteArticle } from '../views/HomePage';

export const Main = () => (
  <Switch>
    <Route path="/create" component={ArticleInputComponents} />
    <Route exact path="/" component={HomePageView} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register" component={Register} />
    <Route path="/resetPassword" component={ResetPassword} />
    <Route name="article" exact path="/article/detail/:slug" component={ArticleComponent} />
    <Route path="/delete/" component={DeleteArticle} />
  </Switch>
);

export const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </BrowserRouter>
);
