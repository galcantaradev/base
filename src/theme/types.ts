export type ThemeOptions = 'dark_theme' | 'light_theme';

export type Theme = {
  id: ThemeOptions;
  colors: {
    textColor: string;
    backgroundColor: string;
    errorColor: string;
    shadowColor: string;
    borderColor: string;
  };
};
