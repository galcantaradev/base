import { useRecoilState, useRecoilValue } from 'recoil';

import { themeState, toggleThemeState } from '../state';
import { Theme } from '../theme';

type UseThemeReturn = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeReturn => {
  const [theme, setTheme] = useRecoilState(themeState);
  const toggle = useRecoilValue(toggleThemeState);

  const toggleTheme = (): void => {
    setTheme(toggle());
  };

  return {
    theme,
    toggleTheme
  };
};
