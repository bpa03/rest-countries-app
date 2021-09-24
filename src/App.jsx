import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from 'router/AppRouter';
import GlobalStyles from 'App.styles';
import useDarkMode from 'hooks/useDarkTheme';
import { darkTheme, lightTheme } from 'config/themes';
import CountriesProvider from 'context/context';

const RestCountriesApp = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <CountriesProvider>
      <ThemeProvider
        theme={{
          theme: theme === 'light' ? lightTheme : darkTheme,
          toggleTheme,
          isLightTheme: theme === 'light',
        }}
      >
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </CountriesProvider>
  );
};

export default RestCountriesApp;
