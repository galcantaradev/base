export type ThemeOptions = 'dark_theme' | 'light_theme';

export type ThemeColors = {
  primary: string;
  textColor: string;
  backgroundColor: string;
  errorColor: string;
  shadowColor: string;
  defaultBorderColor: string;
  boxShadowHoverColor: string;
  disabledColor: string;
  disabledTextColor: string;
  warningColor: string;
  successColor: string;
};

export type Theme = {
  id: ThemeOptions;
  colors: ThemeColors;
};

declare module 'styled-components' {
  interface DefaultTheme extends ThemeColors {
    themeId: ThemeOptions;
  }
}
