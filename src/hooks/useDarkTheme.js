import { useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      return localTheme;
    }
    window.localStorage.setItem('theme', 'light');
    return 'light';
  });

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  return [theme, toggleTheme];
}

export default useDarkMode;
