import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Register, resetPassword, HomePage, LoginPage, Header, Footer } from '../views/HomePage';

export const Main = () => routes();

export const Routes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    </BrowserRouter>
);
function routes() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login/" component={LoginPage} />
            <Route path="/register" component={Register} />
            <Route path="/resetPassword" component={resetPassword} />
        </Switch>
    );
}
