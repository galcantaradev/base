import { darkTheme, lightTheme } from './theme';
import { Theme, ThemeOptions } from './types';

export const getLocalStorageTheme = (): Theme => {
  const theme = window.localStorage.getItem('theme');

  if (theme && theme === 'dark_theme') {
    return darkTheme;
  }

  return lightTheme;
};

export const changeLocalStorageTheme = (theme: ThemeOptions): void => {
  window.localStorage.setItem('theme', theme);
};
