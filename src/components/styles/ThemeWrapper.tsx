import React, {useMemo, useState, createContext} from 'react';
import {ThemeProvider} from '@mui/material/styles';

import getTheme from '../../theme';

export type ThemeWrapperProps = {
  readonly children: React.ReactNode;
};

export const ThemeWrapperContext = createContext({toggleColorMode: () => {}});

export default function ThemeWrapper({children}: ThemeWrapperProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => getTheme(mode, 'green'), [mode]);

  return (
    <ThemeWrapperContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
}
