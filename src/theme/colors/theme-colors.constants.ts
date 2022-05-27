import type { ThemeColorsType } from './theme-colors.types';

import { Colors } from '../../colors';

export const ThemeColorsLight: ThemeColorsType = {
  primary: Colors.indigo['600'],
  overlay: Colors.overlay,
  surface: {
    background: {
      fill: Colors.grey['100'],
    },
    base: {
      border: Colors.grey['100'],
      borderError: Colors.red['600'],
      borderFocused: Colors.indigo['600'],
      fill: Colors.grey['50'],
    },
    popout: {
      border: Colors.grey['300'],
      fill: Colors.grey['200'],
    },
  },
  text: {
    error: Colors.red['600'],
    inverse: Colors.grey['50'],
    primary: Colors.grey['900'],
    secondary: Colors.grey['800'],
    tertiary: Colors.grey['700'],
  },
};

export const ThemeColorsDark: ThemeColorsType = {
  primary: Colors.indigo['400'],
  overlay: Colors.overlay,
  surface: {
    background: {
      fill: Colors.grey['950'],
    },
    base: {
      border: Colors.grey['800'],
      borderError: Colors.red['400'],
      borderFocused: Colors.indigo['400'],
      fill: Colors.grey['900'],
    },
    popout: {
      border: Colors.grey['700'],
      fill: Colors.grey['800'],
    },
  },
  text: {
    error: Colors.red['400'],
    inverse: Colors.grey['900'],
    primary: Colors.grey['50'],
    secondary: Colors.grey['100'],
    tertiary: Colors.grey['200'],
  },
};
