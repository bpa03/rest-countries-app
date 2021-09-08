import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from 'router/AppRouter';
import GlobalStyles from 'App.styles';
import useDarkMode from 'hooks/useDarkTheme';
import { darkTheme, lightTheme } from 'config/themes';

const RestCountriesApp = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
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
  );
};

export default RestCountriesApp;
