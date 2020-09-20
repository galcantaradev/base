import { atom } from 'recoil';

import { Theme, getLocalStorageTheme } from '../../theme';

export const themeState = atom<Theme>({
  key: 'themeState',
  default: getLocalStorageTheme()
});
