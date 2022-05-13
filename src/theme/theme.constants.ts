import type { Theme, ThemeBaseType, ThemeBaseModeType } from './theme.types';

import { Font } from '../fonts';
import { Opacity } from '../opacities';
import { Shadow } from '../shadows';
import { ZIndex } from '../z-index';

import { ThemeColorsDark, ThemeColorsLight } from './colors';

const ThemeBase: ThemeBaseType = {
  font: {
    family: Font.Family,
    letterSpacing: Font.LetterSpacing,
    lineHeight: Font.LineHeight,
    size: Font.Size,
    variant: Font.Variant,
    weight: Font.Weight,
  },
  opacity: Opacity,
  shadow: Shadow,
  zIndex: ZIndex,
};

const ThemeBaseModeLight: ThemeBaseModeType = {
  colors: ThemeColorsLight,
  mode: 'light',
};

const ThemeBaseModeDark: ThemeBaseModeType = {
  colors: ThemeColorsDark,
  mode: 'dark',
};

export const ThemeLight: Theme = Object.assign(ThemeBase, ThemeBaseModeLight);

export const ThemeDark: Theme = Object.assign(ThemeBase, ThemeBaseModeDark);
