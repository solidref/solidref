import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Hero from '../../generic/Hero';
import Quotes from './hero/Quotes';
import Rocket from '../../images/Rocket';

function HomeHeroImage() {
  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      padding={'2rem 0'}
    >
      <Rocket />
    </Box>
  );
}

export default function HomeHero() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Hero after=<HomeHeroImage />>
      <Box
        maxWidth={'100%'}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
        display="flex"
        alignItems="center"
        padding={'calc(50% - 100px) 0'}
      >
        <Box width={'100%'} height={'100%'}>
          <Quotes />
        </Box>
      </Box>
    </Hero>
  );
}
