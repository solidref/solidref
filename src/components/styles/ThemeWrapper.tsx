import React, {useMemo, useState, createContext} from 'react';
import {ThemeProvider} from '@mui/material/styles';

import getTheme from '../../theme';
import {Paper} from '@mui/material';
import {ThemeBrightness} from '../../constants';

export type ThemeWrapperProps = {
  readonly children: React.ReactNode;
};

export const ThemeWrapperContext = createContext({toggleColorMode: () => {}});

type Mode = 'light' | 'dark';

export default function ThemeWrapper({children}: ThemeWrapperProps) {
  const [mode, setMode] = useState<'light' | 'dark'>((localStorage.getItem(btoa(ThemeBrightness)) as Mode) || 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem(btoa(ThemeBrightness), newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(() => getTheme(mode, 'green'), [mode]);

  return (
    <ThemeWrapperContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>{children}</Paper>
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
}
