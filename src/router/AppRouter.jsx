import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import Header from 'layout/header/Header';
import Countries from 'pages/countries/Countries';

const Country = () => <h1>Country</h1>;

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact component={Countries} path="/" />
      <Route exact component={Country} path="/country" />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
