import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, LoginPage, Header, Footer } from '../views/HomePage';

export const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login/" component={LoginPage} />
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
