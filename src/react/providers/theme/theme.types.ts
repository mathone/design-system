import type { ReactNode } from 'react';
import type { ThemeModeType } from '../../../theme';

export type ThemeProviderProps = {
  children: ReactNode | undefined;
  mode: ThemeModeType;
};
