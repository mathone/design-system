export type FontSizesType = {
  /**
   * @default 10
   */
  '2xs': number;
  /**
   * @default 12
   */
  xs: number;
  /**
   * @default 14
   */
  sm: number;
  /**
   * @default 16
   */
  md: number;
  /**
   * @default 18
   */
  lg: number;
  /**
   * @default 20
   */
  xl: number;
  /**
   * @default 24
   */
  '2xl': number;
  /**
   * @default 30
   */
  '3xl': number;
  /**
   * @default 36
   */
  '4xl': number;
  /**
   * @default 48
   */
  '5xl': number;
  /**
   * @default 60
   */
  '6xl': number;
  /**
   * @default 72
   */
  '7xl': number;
  /**
   * @default 96
   */
  '8xl': number;
  /**
   * @default 128
   */
  '9xl': number;
};

export type FontSizeType = keyof FontSizesType;
