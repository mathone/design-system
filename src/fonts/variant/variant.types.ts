export type VariantInfoType = {
  fontSize: number;
  lineHeight: number;
};

export type FontVariantsType = {
  body1: VariantInfoType;
  body2: VariantInfoType;
  body3: VariantInfoType;
  body4: VariantInfoType;
  button: VariantInfoType;
  h6: VariantInfoType;
  link2: VariantInfoType;
  subtitle1: VariantInfoType;
};

export type FontVariantType = keyof FontVariantsType;
