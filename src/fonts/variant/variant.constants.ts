import type { FontVariantsType } from './variant.types';

import { fontSizes } from '../size';
import { lineHeights } from '../line-height';

export const fontVariants: FontVariantsType = {
  body1: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights['3xl'],
  },
  body2: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.xl,
  },
  body3: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.lg,
  },
  body4: {
    fontSize: fontSizes['2xs'],
    lineHeight: lineHeights.md,
  },
  button: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.md,
  },
  h6: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights['2xl'],
  },
  link2: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.lg,
  },
  subtitle1: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights['3xl'],
  },
};
