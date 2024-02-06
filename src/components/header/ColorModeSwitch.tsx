import React, {useContext} from 'react';
import {IconButton} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {ThemeWrapperContext} from '../styles/ThemeWrapper';
import {useTheme} from '@mui/material/styles';

function ColorModeSwitch() {
  const theme = useTheme();
  const colorMode = useContext(ThemeWrapperContext);

  return (
    <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default ColorModeSwitch;
