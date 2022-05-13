export type ThemeColorsType = {
  primary: string;
  overlay: string;
  surface: {
    background: {
      fill: string;
    };
    base: {
      fill: string;
      border: string;
      borderFocused: string;
      borderError: string;
    };
    popout: {
      fill: string;
      border: string;
    };
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    error: string;
  };
};
