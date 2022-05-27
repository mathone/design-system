export type ColorType = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '950': string;
};

export type ColorAType = ColorType & {
  '100A': string;
  '200A': string;
  '400A': string;
  '700A': string;
};

export type ColorsType = {
  overlay: string;
  transparent: string;
  black: string;
  white: string;
  red: ColorAType;
  pink: ColorAType;
  purple: ColorAType;
  deepPurple: ColorAType;
  indigo: ColorAType;
  blue: ColorAType;
  lightBlue: ColorAType;
  cyan: ColorAType;
  teal: ColorAType;
  green: ColorAType;
  lightGreen: ColorAType;
  lime: ColorAType;
  yellow: ColorAType;
  amber: ColorAType;
  orange: ColorAType;
  deepOrange: ColorAType;
  brown: ColorType;
  blueGrey: ColorType;
  grey: ColorType;
};
