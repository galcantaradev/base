import { Theme } from './types';

const commonColors = {
  errorColor: '#ff5b5b',
  shadowColor: '#e8e8e8',
  borderColor: '#979797'
} as const;

export const darkTheme: Theme = {
  id: 'dark_theme',
  colors: {
    ...commonColors,
    backgroundColor: '#232931',
    textColor: '#eeeeee'
  }
};

export const lightTheme: Theme = {
  id: 'light_theme',
  colors: {
    ...commonColors,
    backgroundColor: '#f4f4f4',
    textColor: '#222331'
  }
};
