import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Register, HomePage, LoginPage, Header, Footer, ResetPassword, ProfilePage } from '../views/HomePage';
import { store } from '../store';

export const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register" component={Register} />
    <Route path="/resetPassword" component={ResetPassword} />
    <Route path="/profile/:username" component={ProfilePage} />
  </Switch>
);

export const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);
