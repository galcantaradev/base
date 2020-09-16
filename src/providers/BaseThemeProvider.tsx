import React, { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Theme,
  changeLocalStorageTheme,
  darkTheme,
  getLocalStorageTheme,
  lightTheme
} from '../theme';

export type BaseThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export type BaseThemeProviderProps = {
  children: ReactNode;
};

export const BaseThemeContext = createContext<BaseThemeContextProps>({
  theme: lightTheme,
  toggleTheme: () => {}
});

export const BaseThemeProvider = ({ children }: BaseThemeProviderProps) => {
  const [theme, setTheme] = useState(getLocalStorageTheme());

  const toggleTheme = (): void => {
    setTheme(prevTheme => {
      const newTheme = prevTheme.id === 'light_theme' ? darkTheme : lightTheme;
      changeLocalStorageTheme(newTheme.id);

      return newTheme;
    });
  };

  return (
    <BaseThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      <ThemeProvider theme={theme.colors}>{children}</ThemeProvider>
    </BaseThemeContext.Provider>
  );
};
