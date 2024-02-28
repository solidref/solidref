import React from 'react';

import CodeOffIcon from '@mui/icons-material/CodeOff';

import {Box, IconButton, Typography, TypographyOwnProps, useTheme} from '@mui/material';

export type LogoProps = {
  readonly variant?: TypographyOwnProps['variant'];
  readonly component?: React.ElementType;
};

function Logo({...rest}: LogoProps) {
  const theme = useTheme();

  rest.variant = rest.variant ?? 'h6';
  rest.component = rest.component ?? 'h1';

  return (
    <Box display={'flex'} alignItems="center">
      <Box display={'flex'} alignItems="baseline">
        <IconButton aria-label="SOLID.ref">
          <CodeOffIcon height={'100%'} width={'100%'} />
        </IconButton>
      </Box>
      <Box display={'flex'} alignItems="baseline">
        <Typography {...rest} display={'flex'}>
          <Typography variant="inherit" color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}>
            SOLID
          </Typography>
          <Typography variant="inherit">.</Typography>
          <Typography variant="inherit" color={theme.palette.mode === 'light' ? 'secondary' : 'primary'}>
            ref
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default Logo;
