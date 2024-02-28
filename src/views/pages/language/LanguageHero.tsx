import React, {useState, useEffect, lazy, Suspense} from 'react';
import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';

import Hero from '../../generic/Hero';
import {Language} from '../../../state';
import GenericCodeIcon from '../../icons/GenericCodeIcon';
import LazyLoadIcon from '../../../components/icons/LazyLoadIcon';

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

  // version 2
  // const fullLanguage: PresentableLanguage = {
  //   language,
  //   logoComponent: lazy(async () => {
  //     const iconName = language.code.charAt(0).toUpperCase() + language.code.slice(1);
  //     try {
  //       return await import(`../../icons/${iconName}`);
  //     } catch (e) {
  //       console.error(`Error importing language icon: ${iconName}`, e);
  //     }
  //     return await import('../../icons/GenericCodeIcon');
  //   }),
  // };

  // version 1
  // const [fullLanguage, setFullLanguage] = useState<PresentableLanguage | null>(null);

  // useEffect(() => {
  //   const loadIcon = async () => {
  //     const moduleName = language.code.charAt(0).toUpperCase() + language.code.slice(1);
  //     try {
  //       // // console.log(`../../icons/${moduleName}`);
  //       // const module = await import(`../../icons/${moduleName}.js `);
  //       // // console.log(module);

  //       // setFullLanguage({ language, logoComponent: module.default as React.ElementType });
  //       setFullLanguage({ language, logoComponent: lazy(() => import(`../../icons/${moduleName}`)) })
  //     } catch (error) {
  //       console.error(`Error importing language icon: ${moduleName}`, error);
  //     }
  //   };
  //   loadIcon();
  // }, [language, setFullLanguage]);

  return (
    <Hero breakpoints={{md: 12}}>
      {/* {fullLanguage && ( */}
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
        {/* version 3 */}
        <LazyLoadIcon
          icon={language.code.charAt(0).toUpperCase() + language.code.slice(1)}
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
        {/* version 2 */}
        {/* {[fullLanguage].map(({language, logoComponent: DynamicLanguageIcon}) => (
            <Suspense
              fallback={
                <GenericCodeIcon
                  style={{
                    width: '8rem',
                    height: '8rem',
                    display: 'block',
                    margin: 'auto',
                    transform: 'rotate(-15deg) translateY(40px)',
                  }}
                />
              }
              key={language.code}
            >
              <DynamicLanguageIcon
                style={{
                  width: '8rem',
                  height: '8rem',
                  display: 'block',
                  margin: 'auto',
                  transform: 'rotate(-15deg) translateY(40px)',
                }}
              />
            </Suspense>
          ))} */}
        {/* version 1 */}
        {/* {fullLanguage !== null && fullLanguage.logoComponent !== null ? (
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
          )} */}
      </Box>
      {/* )} */}
    </Hero>
  );
}
