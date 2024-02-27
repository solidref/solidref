import React, {useState, useEffect} from 'react';
import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';

import Hero from '../../generic/Hero';
import {Language} from '../../../state';
import GenericCodeIcon from '../../icons/GenericCodeIcon';

type PresentableLanguage = {
  language: Language;
  logoComponent: React.ElementType | null;
};

export type LanguageHeroProps = {
  language: Language;
};

export default function LanguageHero({language}: LanguageHeroProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [fullLanguage, setFullLanguage] = useState<PresentableLanguage | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      const moduleName = language.code.charAt(0).toUpperCase() + language.code.slice(1);
      try {
        // console.log(`../../icons/${moduleName}`);
        const module = await import(`../../icons/${moduleName}`);
        // console.log(module);

        setFullLanguage({language, logoComponent: module.default as React.ElementType});
      } catch (error) {
        console.error(`Error importing language icon: ${moduleName}`, error);
      }
    };
    loadIcon();
  }, [language, setFullLanguage]);

  return (
    <Hero breakpoints={{md: 12}}>
      {fullLanguage && (
        <Box
          maxWidth={'100%'}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding={'calc(50px) 0'}
        >
          <Typography variant="h2" align="center">
            <i>{fullLanguage.language.name}</i>
          </Typography>
          <Typography variant="h3" align="center">
            Coding Principles &amp; Design Patterns
          </Typography>
          <Typography variant="h6">
            Here are the <i>{fullLanguage.language.name}</i> Coding Principles or Design Patterns explained
          </Typography>
          {fullLanguage !== null && fullLanguage.logoComponent !== null ? (
            React.createElement(fullLanguage.logoComponent, {
              style: {
                width: '8rem',
                height: '8rem',
                display: 'block',
                margin: 'auto',
                transform: 'rotate(-15deg) translateY(40px)',
              },
            })
          ) : (
            <GenericCodeIcon
              style={{
                width: '8rem',
                height: '8rem',
                display: 'block',
                margin: 'auto',
                transform: 'rotate(-15deg) translateY(40px)',
              }}
            />
          )}
        </Box>
      )}
    </Hero>
  );
}
