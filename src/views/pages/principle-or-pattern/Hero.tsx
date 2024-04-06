import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';

import GenericHero from '../../generic/Hero';

export type HeroProps = {
  title: string;
};

export default function Hero({title}: HeroProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <GenericHero breakpoints={{md: 12}}>
      <Box
        maxWidth={'100%'}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={'100px 0 50px 0'}
      >
        <Typography variant="h2" align="center">
          <i dangerouslySetInnerHTML={{__html: title || 'Undefined row...'}} />
        </Typography>
      </Box>
    </GenericHero>
  );
}
