import React from 'react';

import { Box, Grid, RegularBreakpoints, useMediaQuery, useTheme } from '@mui/material';

export type HeroProps = {
  readonly breakpoints?: RegularBreakpoints;
  readonly children: React.ReactNode;
  readonly leftContent?: React.ReactNode;
  readonly leftContentBreakpoints?: RegularBreakpoints;
  readonly rightContent?: React.ReactNode;
  readonly rightContentBreakpoints?: RegularBreakpoints;
};

export default function Hero({ children, leftContent = undefined, rightContent = undefined, leftContentBreakpoints = {
  xs: 12, md: 6
} }: HeroProps) {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      {leftContent && (
        <Grid item {...leftContentBreakpoints}>
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
