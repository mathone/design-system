import { useMemo } from 'react';
import { useTheme } from '../../../react';

import type { NamedStyles, UseStyleCallback } from './use-styles.types';

import { StyleSheet } from 'react-native';

export function useStyles<T extends NamedStyles<T>>(
  styles: T | UseStyleCallback<T>,
  deps: ReadonlyArray<unknown> = [],
): T {
  const theme = useTheme();

  return useMemo(() => {
    if (typeof styles === 'function') {
      return StyleSheet.create<T>(styles(theme));
    }
    return StyleSheet.create<T>(styles);
  }, [styles, theme, ...deps]);
}
