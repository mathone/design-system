import type { FontSystemType } from './fonts.types';

import { fontFamily } from './family';
import { fontSizes } from './size';
import { fontWeights } from './weight';

export const Font: FontSystemType = {
  Family: fontFamily,
  Size: fontSizes,
  Weight: fontWeights,
};
