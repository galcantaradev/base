import { Theme } from './types';

/**
 * palette
 * #232931: black
 * #393e46: grey
 * #4ecca3: turquoise
 * #eeeeee: white
 */

export const darkTheme: Theme = {
  id: 'dark_theme',
  colors: {
    primary: '#eeeeee',
    secondary: '#393e46',
    backgroundColor: '#232931',
    detailColor: '#4ecca3',
    errorColor: '#ff5b5b'
  }
};

export const lightTheme: Theme = {
  id: 'light_theme',
  colors: {
    primary: '#1b262c',
    secondary: '#0f4c75',
    backgroundColor: 'lightskyblue', // #eeeeee
    detailColor: '#4ecca3',
    errorColor: '#ff5b5b'
  }
};
