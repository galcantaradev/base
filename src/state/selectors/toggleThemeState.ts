import { selector } from 'recoil';

import {
  Theme,
  changeLocalStorageTheme,
  darkTheme,
  lightTheme
} from '../../theme';
import { themeState } from '../atoms';

export const toggledThemeState = selector<Theme>({
  key: 'toggledThemeState',
  get: ({ get }) => {
    const theme = get<Theme>(themeState);
    changeLocalStorageTheme(theme.id);

    return theme.id === 'light_theme' ? darkTheme : lightTheme;
  }
});
