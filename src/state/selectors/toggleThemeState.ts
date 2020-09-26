import { selector } from 'recoil';

import {
  Theme,
  changeLocalStorageTheme,
  darkTheme,
  lightTheme
} from '../../theme';
import { themeState } from '../atoms';

export const toggleThemeState = selector<() => Theme>({
  key: 'toggleThemeState',
  get: ({ get }) => {
    return () => {
      const theme = get<Theme>(themeState);
      const toggledTheme = theme.id === 'light_theme' ? darkTheme : lightTheme;
      changeLocalStorageTheme(toggledTheme.id);

      return toggledTheme;
    };
  }
});
