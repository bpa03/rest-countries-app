import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from 'router/AppRouter';
import GlobalStyles from 'App.styles';

const RestCountriesApp = () => (
  <Router>
    <GlobalStyles />
    <AppRouter />
  </Router>
);

export default RestCountriesApp;
