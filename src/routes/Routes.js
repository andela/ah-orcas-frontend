import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePageView, LoginPage, ArticleComponent, Register, Header, Footer, ResetPassword, ArticleInputComponents, updateArticleComponent } from '../views/HomePage';


export const Main = () => (
  <Switch>
    <Route path="/create" component={ArticleInputComponents} />
    <Route exact path="/" component={HomePageView} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register" component={Register} />
    <Route path="/resetPassword" component={ResetPassword} />
    <Route path="/article/detail/:slug" component={ArticleComponent} />
    <Route exact path="/article/update/:slug" component={updateArticleComponent} />
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
