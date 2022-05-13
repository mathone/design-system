import type { ThemeProviderProps } from './theme.types';

import React, { createContext } from 'react';
import { useThemeColors } from '../../hooks';

import { Theme, ThemeLight } from '../../../theme';

export const ThemeContext = createContext<Theme>(ThemeLight);

export function ThemeProvider({ children, mode }: ThemeProviderProps) {
  const theme = useThemeColors({ mode });

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
