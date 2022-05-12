export type LineHeightsType = {
  /**
   * @default 12
   */
  xxs: number;
  /**
   * @default 13.1
   */
  xs: number;
  /**
   * @default 15
   */
  sm: number;
  /**
   * @default 16.1
   */
  md: number;
  /**
   * @default 18
   */
  lg: number;
  /**
   * @default 21
   */
  xl: number;
  /**
   * @default 22.1
   */
  '2xl': number;
  /**
   * @default 24
   */
  '3xl': number;
};

export type LineHeightType = keyof LineHeightsType;
