import React, {useMemo, useState, createContext} from 'react';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import {lightTheme, darkTheme} from '../theme';

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

  const theme = useMemo(() => {
    const defaultTheme = mode === 'light' ? lightTheme : darkTheme;
    return createTheme({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        mode,
      },
    });
  }, [mode, lightTheme, darkTheme]);

  return (
    <ThemeWrapperContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
}
