import React from 'react';
import { HomePage, LoginPage } from '../views/HomePage';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login/" component={LoginPage} />
  </Switch>
);

const Header = () => (
  <ul>
    <li>
      <button ><Link to="/">Home</Link></button>
    </li>
    <li >
      <button><Link to="/login">Login</Link></button>
    </li>
  </ul>
);

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default Routes;
