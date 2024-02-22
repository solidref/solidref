import React, {useState, useEffect} from 'react';
import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';

import Hero from '../../generic/Hero';
import {Language} from '../../../state';
import GenericCodeIcon from '../../icons/GenericCodeIcon';
import {LanguageIconStyle} from '../../../styles';

export type LanguageHeroProps = {
  language: Language;
};

export default function LanguageHero({language}: LanguageHeroProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [svgLanguageIcon, setSvgLanguageIcon] = useState<React.ElementType | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      const moduleName = language.code.replace(/(.)/, ($1) => $1.toUpperCase());
      let module = null;

      try {
        module = null; // await import(`../../icons/${moduleName}`);
      } catch (error) {
        console.error(`Error importing language icon: ${moduleName}`, error);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setSvgLanguageIcon(module ? ((module as any).default as React.ElementType) : null);
    };
    loadIcon();
  }, [language]);

  return (
    <Hero breakpoints={{md: 12}}>
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
        {svgLanguageIcon ? (
          React.createElement(svgLanguageIcon, {
            style: LanguageIconStyle,
          })
        ) : (
          <GenericCodeIcon style={LanguageIconStyle} />
        )}
      </Box>
    </Hero>
  );
}
