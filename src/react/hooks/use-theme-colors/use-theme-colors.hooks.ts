import type { UseThemeColorsProps } from './use-theme-colors.types';

import { useMemo } from 'react';
import { ThemeDark, ThemeLight } from '../../../theme';

export function useThemeColors({ mode }: UseThemeColorsProps) {
  return useMemo(() => {
    if (mode === 'dark') {
      return ThemeDark;
    }
    return ThemeLight;
  }, [mode]);
}
