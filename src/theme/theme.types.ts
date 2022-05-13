import type { FontSystemType } from '../fonts';
import type { OpacitiesType } from '../opacities';
import type { ShadowsType } from '../shadows';
import type { ZIndexesType } from '../z-index';
import type { ThemeColorsType } from './colors';

export type ThemeModeType = 'light' | 'dark';

export type ThemeBaseType = {
  font: {
    family: FontSystemType['Family'];
    letterSpacing: FontSystemType['LetterSpacing'];
    lineHeight: FontSystemType['LineHeight'];
    size: FontSystemType['Size'];
    variant: FontSystemType['Variant'];
    weight: FontSystemType['Weight'];
  };
  opacity: OpacitiesType;
  shadow: ShadowsType;
  zIndex: ZIndexesType;
};

export type ThemeBaseModeType = {
  colors: ThemeColorsType;
  mode: ThemeModeType;
};

export type Theme = ThemeBaseType & ThemeBaseModeType;
