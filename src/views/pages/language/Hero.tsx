import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';

import GenericHero from '../../generic/Hero';
import {Language} from '../../../state';
import LazyLoadIcon from '../../../components/icons/LazyLoadIcon';

export type HeroProps = {
  language: Language;
};

export default function Hero({language}: HeroProps) {
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
        padding={'calc(50px) 0'}
      >
        <Typography variant="h2" align="center">
          <i>{language.name}</i>
        </Typography>
        <Typography variant="h3" align="center">
          Coding Principles &amp; Design Patterns
        </Typography>
        <Typography variant="h6">
          Here are the <i>{language.name}</i> Coding Principles or Design Patterns explained
        </Typography>
        <LazyLoadIcon
          icon={`languages/${language.code.charAt(0).toUpperCase() + language.code.slice(1)}`}
          style={{
            width: '8rem',
            height: '8rem',
            display: 'block',
            margin: 'auto',
            transform: 'rotate(-15deg) translateY(40px)',
          }}
          fallbackProps={{
            style: {
              width: '8rem',
              height: '8rem',
              display: 'block',
              margin: 'auto',
              transform: 'rotate(-15deg) translateY(40px)',
            },
          }}
        />
      </Box>
    </GenericHero>
  );
}
