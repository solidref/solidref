import { Box, Card, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { HierarchyLanguage, languagesHierarchyState } from '../../../state';

// import JavascriptIcon from '../../icons/Javascript';

export type LanguageHighlight = {
  language: HierarchyLanguage;
  logoComponent: React.ElementType;
};

const highlighted = ['javascript', 'javascript', 'javascript', 'javascript'];

export default function LanguagesHighlights() {
  const languagesHierarchy = useRecoilValue(languagesHierarchyState);

  const [languagesHighlights, setLanguagesHighlights] = useState<LanguageHighlight[] | null>(null);

  useEffect(() => {
    if (!languagesHierarchy?.list || !languagesHierarchy?.list?.length) {
      return;
    }
    console.log(languagesHierarchy);

    const loagHighlights = async () => {
      const highlights: Array<LanguageHighlight | null> = await Promise.all(
        highlighted.map(async (code) => {
          const language = languagesHierarchy?.list?.find((l) => l.code === code);
          if (!language) {
            return null;
          }
          console.log(`../../icons/${code.replace(/(.)/, ($1) => $1.toUpperCase())}`);
          const module = await import(`../../icons/${code.replace(/(.)/, ($1) => $1.toUpperCase())}`);
          console.log(module);
          return {
            language,
            logoComponent: module.default,
          };
        }),
      );
      console.log(highlights);

      setLanguagesHighlights(highlights.filter((h) => h !== null) as LanguageHighlight[]);
    };

    loagHighlights();
  }, [languagesHierarchy, highlighted]);

  return (
    <Grid container spacing={4}>
      {languagesHighlights ? (
        (languagesHighlights as LanguageHighlight[]).map(({ language, logoComponent }, i) => (
          <Grid item xs={6} md={3} key={i}>
            <Box
              component={Card}
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={0}
            >
              <Link href={`/by-language/${language.code}`} style={{ paddingTop: '1rem', textDecoration: 'none' }}>
                {React.createElement(logoComponent, {
                  style: {
                    width: '8rem',
                    height: 'auto',
                    display: 'block',
                    margin: 'auto',
                    transform: 'rotate(-15deg)',
                  },
                })}
                <Typography variant={'h6'} align={'center'} style={{ paddingTop: '1.5rem' }}>
                  {language.name}
                </Typography>
              </Link>
            </Box>
          </Grid>
        ))
      ) : (
        <Grid>No data</Grid>
      )}
    </Grid>
  );
}
