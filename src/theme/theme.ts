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
    primary: '#9ab3f5',
    backgroundColor: '#282c35',
    shadowColor: 'rgba(26, 26, 27, .5)',
    textColor: '#fff'
  }
};

export const lightTheme: Theme = {
  id: 'light_theme',
  colors: {
    ...commonColors,
    primary: '#7579e7',
    backgroundColor: '#fff',
    shadowColor: 'rgba(232, 232, 232, .5)',
    textColor: '#222331'
  }
};
