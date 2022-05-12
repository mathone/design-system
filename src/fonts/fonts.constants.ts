import type { FontSystemType } from './fonts.types';

import { fontFamily } from './family';
import { letterSpacings } from './letter-spacing';
import { lineHeights } from './line-height';
import { fontSizes } from './size';
import { fontVariants } from './variant';
import { fontWeights } from './weight';

export const Font: FontSystemType = {
  Family: fontFamily,
  LetterSpacing: letterSpacings,
  LineHeight: lineHeights,
  Size: fontSizes,
  Variant: fontVariants,
  Weight: fontWeights,
};
