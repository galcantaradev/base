import { Theme } from './types';

export const commonTheme = {
  defaultBorderColor: '#979797',
  errorColor: '#ff5b5b',
  disabledColor: '#e6ebf4',
  disabledTextColor: '#666',
  boxShadowHoverColor: 'rgba(189, 192, 207, 0.5)',
  primary: '#151515',
  warningColor: '#ffc107',
  successColor: '#63cf80'
} as const;

export const darkTheme: Theme = {
  id: 'dark_theme',
  colors: {
    ...commonTheme,
    backgroundColor: '#010101',
    shadowColor: 'rgba(0, 0, 0, 0)',
    textColor: '#fff'
  }
};

export const lightTheme: Theme = {
  id: 'light_theme',
  colors: {
    ...commonTheme,
    backgroundColor: '#eee',
    shadowColor: 'rgba(232, 232, 232, .5)',
    textColor: '#222331'
  }
};
