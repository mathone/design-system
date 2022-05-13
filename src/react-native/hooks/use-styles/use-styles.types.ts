import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '../../../theme';

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export type UseStyleCallback<T extends NamedStyles<T>> = (theme: Theme) => T;
