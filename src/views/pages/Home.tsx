import React from 'react';
import {Box, useTheme} from '@mui/material';

import Container from '../generic/Container';
import HomeHero from './home/HomeHero';
import LanguagesHighlights from './home/LanguagesHightlights';
import LanguagesList from './languages/LanguageList';

export type HomeProps = {};

function Home({}: HomeProps) {
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
      {/*<Container>
        <Features />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <DemoPages />
        </Container>
      </Box>
      <Container>
        <Footer />
      </Container> */}
    </Box>
  );
}

export default Home;
