import React from 'react';

import {Box, Grid, useMediaQuery, useTheme} from '@mui/material';

export type HeroProps = {
  readonly children: React.ReactNode;
  readonly leftContent?: React.ReactNode | undefined;
  readonly rightContent?: React.ReactNode | undefined;
};

export default function Hero({children, leftContent = undefined, rightContent = undefined}: HeroProps) {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      {leftContent && (
        <Grid item xs={12} md={6}>
          {leftContent}
        </Grid>
      )}

      <Grid item alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>{children}</Box>
      </Grid>

      {rightContent && (
        <Grid item xs={12} md={6}>
          {rightContent}
        </Grid>
      )}
    </Grid>
  );
}
