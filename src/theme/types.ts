export type ThemeOptions = 'dark_theme' | 'light_theme';

export type Theme = {
  id: ThemeOptions;
  colors: {
    primary: string;
    secondary: string;
    backgroundColor: string;
    detailColor: string;
    errorColor: string;
  };
};
