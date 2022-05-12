import type { FontSystemType } from './fonts.types';

import { fontFamily } from './family';
import { lineHeights } from './line-height';
import { fontSizes } from './size';
import { fontWeights } from './weight';

export const Font: FontSystemType = {
  Family: fontFamily,
  LineHeight: lineHeights,
  Size: fontSizes,
  Weight: fontWeights,
};
