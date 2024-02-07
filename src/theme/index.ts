import {createContext} from 'react';
import {Theme, responsiveFontSizes} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import shadows from './shadows';
import palette from './palette';

export const palettes = ['green', 'blue', 'indigo', 'pink', 'orange'];

export type Palettes = (typeof palettes)[number];

const getTheme = (mode: string, paletteType: string): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: palette(mode, paletteType),
      layout: {
        contentWidth: 1236,
      },
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            label: {
              fontWeight: 600,
            },
            containedSecondary: mode === 'light' ? {color: 'white'} : {},
          },
        },
      },
    }),
  );

export default getTheme;
