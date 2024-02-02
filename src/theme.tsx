import React, {createContext} from 'react';
import {createTheme} from '@mui/material/styles';
import {green, grey, red} from '@mui/material/colors';

const ColorModeContext = createContext({toggleColorMode: () => {}});

export const light = {
  '900': '#1e1d5e',
  '800': '#2c2e72',
  '700': '#34387d',
  '600': '#3c4188',
  '500': '#424891',
  '400': '#5d639d',
  '300': '#787ead', //
  '200': '#9da2c5',
  '100': '#c3c6dc',
  '50': '#e7e8f1',
};

export const lightCompl = {
  '900': '#888270',
  '800': '#ada778', //
  '700': '#c2bd7e',
  '600': '#d5d487',
  '500': '#e4e58e',
  '400': '#e8e99b',
  '300': '#edefa9',
  '200': '#f1f4bf',
  '100': '#f6f7d7',
  '50': '#fbfcef',
};

export const lightAnalog1 = {
  '900': '#253a47',
  '800': '#364f5e',
  '700': '#446374',
  '600': '#54778b',
  '500': '#61869d',
  '400': '#7899ad', //
  '300': '#8facbe',
  '200': '#adc4d3',
  '100': '#c9dde8',
  '50': '#e6f1fb',
};

export const lightAnalog2 = {
  '900': '#35226d',
  '800': '#442e7b',
  '700': '#4e3483',
  '600': '#593c8b',
  '500': '#604191',
  '400': '#755c9c',
  '300': '#8c78ad', //
  '200': '#ac9ec4',
  '100': '#cdc4dc',
  '50': '#ebe7f0',
};

export const lightTriadic1 = {
  '900': '#472967',
  '800': '#5f3577',
  '700': '#6c3b80',
  '600': '#7c4289',
  '500': '#874790',
  '400': '#955f9b',
  '300': '#a778ad', //
  '200': '#c09cc5',
  '100': '#d8c3dc',
  '50': '#efe7f0',
};

export const lightTriadic2 = {
  '900': '#421625',
  '800': '#532330',
  '700': '#642e39',
  '600': '#753944',
  '500': '#81414b',
  '400': '#975c64',
  '300': '#ad787e', //
  '200': '#cb9da2',
  '100': '#e9c1c5',
  '50': '#ffe3e2',
};

export const dark = {
  '900': '#1e1d5e',
  '800': '#2c2e72',
  '700': '#34387d',
  '600': '#3c4188',
  '500': '#424891',
  '400': '#5d639d',
  '300': '#787ead', //
  '200': '#9da2c5',
  '100': '#c3c6dc',
  '50': '#e7e8f1',
};

const lightTheme = createTheme({
  palette: {
    primary: {
      light: light['50'],
      main: light['500'],
      dark: light['900'],
    },
    secondary: {
      light: lightAnalog1['50'],
      main: lightAnalog1['500'],
      dark: lightAnalog1['900'],
    },
    warning: {
      light: '#ffc071',
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
});

export {lightTheme, darkTheme, ColorModeContext};
