import {Box, useTheme} from '@mui/material';

import HomeHero from './home/Hero';
import LanguagesList from './languages/LanguagesList';

import Container from '../generic/Container';
import {useRecoilValue} from 'recoil';
import {selectedLanguageCodeState} from '../../state';

// export type HomeProps = {};

function Home(/*{ }: HomeProps*/) {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxBgColor = (theme.palette as any)?.alternate?.main;

  const selectedLanguage = useRecoilValue(selectedLanguageCodeState) as string;
  let homePageLanguages = [...new Set(['python', 'go', 'csharp', selectedLanguage])];
  if (homePageLanguages.length < 4) {
    homePageLanguages.push('typescript');
  }
  homePageLanguages = homePageLanguages.sort();

  return (
    <Box>
      <Box bgcolor={boxBgColor} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <HomeHero />
        </Container>
      </Box>
      <Container>
        <LanguagesList filterMode="highlight" filterArgs={[homePageLanguages]} md={3} />
      </Container>
    </Box>
  );
}

export default Home;
