import {Box, useTheme} from '@mui/material';

import HomeHero from './home/Hero';
import LanguagesList from './languages/LanguagesList';

import Container from '../generic/Container';

// export type HomeProps = {};

function Home(/*{ }: HomeProps*/) {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxBgColor = (theme.palette as any)?.alternate?.main;

  return (
    <Box>
      <Box bgcolor={boxBgColor} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <HomeHero />
        </Container>
      </Box>
      <Container>
        <LanguagesList filterMode="highlight" filterArgs={[['typescript', 'python', 'go', 'csharp']]} md={3} />
      </Container>
    </Box>
  );
}

export default Home;
