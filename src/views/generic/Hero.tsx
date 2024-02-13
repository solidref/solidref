import React from 'react';

import {Box, Grid, RegularBreakpoints, useMediaQuery, useTheme} from '@mui/material';

export type HeroProps = {
  readonly breakpoints?: RegularBreakpoints;
  readonly children: React.ReactNode;
  readonly before?: React.ReactNode;
  readonly beforeBreakpoints?: RegularBreakpoints;
  readonly after?: React.ReactNode;
  readonly afterBreakpoints?: RegularBreakpoints;
};

export default function Hero({
  children,
  before = undefined,
  after = undefined,
  beforeBreakpoints = {
    xs: 12,
    md: 6,
  },
  afterBreakpoints = {
    xs: 12,
    md: 6,
  },
  breakpoints = {
    xs: 12,
    md: 6,
  },
}: HeroProps) {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      {before && (
        <Grid item {...beforeBreakpoints}>
          {before}
        </Grid>
      )}

      <Grid item alignItems={'center'} {...breakpoints}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>{children}</Box>
      </Grid>

      {after && (
        <Grid item {...afterBreakpoints}>
          {after}
        </Grid>
      )}
    </Grid>
  );
}
