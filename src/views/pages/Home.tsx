import React from 'react';
import {Box, useTheme} from '@mui/material';

import HomeHero from './home/HomeHero';
import LanguagesList from './languages/LanguageList';

import Container from '../generic/Container';

// export type HomeProps = {};

function Home(/*{ }: HomeProps*/) {
  const theme = useTheme();

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <HomeHero />
        </Container>
      </Box>
      <Container>
        <LanguagesList filterMode="highlight" filterArgs={[['javascript']]} md={3} />
      </Container>
    </Box>
  );
}

export default Home;
