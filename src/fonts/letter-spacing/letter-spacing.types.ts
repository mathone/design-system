export type LetterSpacingsType = {
  /**
   * @default -0.6
   */
  xs: number;
  /**
   * @default -0.3
   */
  sm: number;
  /**
   * @default 0
   */
  md: number;
  /**
   * @default 0.3
   */
  lg: number;
  /**
   * @default 0.6
   */
  xl: number;
};

export type LetterSpacingType = keyof LetterSpacingsType;
