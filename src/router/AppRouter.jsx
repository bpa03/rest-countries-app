import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Country = () => <h1>Country</h1>;

const Countries = () => <h1>Countries</h1>;

const AppRouter = () => (
  <Switch>
    <Route exact component={Countries} path="/" />
    <Route exact component={Country} path="/country" />
  </Switch>
);

export default AppRouter;
