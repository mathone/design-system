import type { FontFamily } from './family';
import type { LetterSpacingsType } from './letter-spacing';
import type { LineHeightsType } from './line-height';
import type { FontSizesType } from './size';
import type { FontWeightsType } from './weight';

export type FontSystemType = {
  Family: FontFamily;
  LetterSpacing: LetterSpacingsType;
  LineHeight: LineHeightsType;
  Size: FontSizesType;
  Weight: FontWeightsType;
};
