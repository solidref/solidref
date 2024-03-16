import * as React from 'react';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import {IconButton, useTheme} from '@mui/material';

import {ThemeWrapperContext} from '../../components/styles/ThemeWrapper';

export default function ColorModeSwitch() {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeWrapperContext);

  return (
    <IconButton
      onClick={() => colorMode.toggleColorMode()}
      aria-label="Dark mode toggler"
      color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
    >
      {theme.palette.mode === 'dark' ? <NightsStayIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
