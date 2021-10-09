import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import Header from 'layout/header/Header';
import Countries from 'pages/countries/Countries';
import Country from 'pages/countryView/Country';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact component={Countries} path="/countries" />
      <Route exact component={Country} path="/country/:country" />
      <Redirect to="/countries" />
    </Switch>
  </Router>
);

export default AppRouter;
