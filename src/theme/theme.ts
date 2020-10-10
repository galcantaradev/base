import { Theme } from './types';

const commonColors = {
  defaultBorderColor: '#979797',
  errorColor: '#ff5b5b',
  disabledColor: '#e6ebf4',
  disabledTextColor: '#666',
  boxShadowHoverColor: 'rgba(189, 192, 207, 0.5)'
} as const;

export const darkTheme: Theme = {
  id: 'dark_theme',
  colors: {
    ...commonColors,
    primary: '#91d18b',
    backgroundColor: '#090a11',
    shadowColor: 'rgba(0, 0, 0, 0)',
    textColor: '#fff'
  }
};

export const lightTheme: Theme = {
  id: 'light_theme',
  colors: {
    ...commonColors,
    primary: '#91d18b',
    backgroundColor: '#fff',
    shadowColor: 'rgba(232, 232, 232, .5)',
    textColor: '#222331'
  }
};
