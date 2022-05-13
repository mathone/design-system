export type ShadowInfoType = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type ShadowsType = {
  0: ShadowInfoType;
  1: ShadowInfoType;
  2: ShadowInfoType;
  3: ShadowInfoType;
  4: ShadowInfoType;
  5: ShadowInfoType;
  6: ShadowInfoType;
  7: ShadowInfoType;
  8: ShadowInfoType;
  9: ShadowInfoType;
};

export type ShadowType = keyof ShadowsType;
