import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Register, HomePage, LoginPage, Header, Footer, ResetPassword, Likes } from '../views/HomePage';

export const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register" component={Register} />
    <Route path="/resetPassword" component={ResetPassword} />
    <Route path="/likeDislike" component={Likes} />
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
