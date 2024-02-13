import React, { useEffect, useState } from 'react';

import { Box, Card, CardContent, Grid, Link, RegularBreakpoints, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { HierarchyLanguage, LanguagesHierarchyState, languagesHierarchyState } from '../../../state';
import GenericCodeIcon from '../../icons/GenericCodeIcon';
import { LanguageIconStyle } from '../../../styles';

export type ListLanguage = {
  language: HierarchyLanguage;
  logoComponent: React.ElementType | null;
};

const filters = {
  allFilter: () => (value: HierarchyLanguage) => true,
  rootFilter: () => (value: HierarchyLanguage) => {
    // TODO: make sure you filter out the root languages
    return true;
  },
  highlightFilter: (highlights?: string[]) => (value: HierarchyLanguage) => {
    return (highlights ?? ['javascript']).includes(value.code);
  },
};

const filterListLanguages = async (
  hierarchyLanguages: HierarchyLanguage[],
  filterMode: string,
  filterArgs: any[],
  setLanguages: (value: ListLanguage[]) => void,
) => {
  const languages: ListLanguage[] = await Promise.all(
    hierarchyLanguages.filter(filters[`${filterMode}Filter`](...filterArgs)).map(async (language) => {
      let module = null;
      try {
        // console.log(`../../icons/${language.code.replace(/(.)/, ($1) => $1.toUpperCase())}`);
        module = await import(`../../icons/${language.code.replace(/(.)/, ($1) => $1.toUpperCase())}`);
      } catch (e) {
        console.error(e);
      }

      return {
        language,
        logoComponent: module ? module.default : null,
      };
    }),
  );
  // console.log(languages);
  setLanguages(languages);
};

export type LanguagesListProps = RegularBreakpoints & {
  filterMode: 'all' | 'root' | 'highlight';
  filterArgs: any[];
};

export default function LanguagesList({
  filterMode = 'all',
  filterArgs = [],
  xs = 12,
  sm = 6,
  md = 4,
}: LanguagesListProps) {
  const languagesHierarchy = useRecoilValue(languagesHierarchyState);

  const [languages, setLanguages] = useState<ListLanguage[]>([]);

  useEffect(() => {
    if (!languagesHierarchy?.list || !languagesHierarchy?.list?.length) {
      return;
    }
    filterListLanguages(languagesHierarchy?.list || [], filterMode, filterArgs, setLanguages);
  }, [languagesHierarchy]);

  return (
    <Grid container spacing={4}>
      {languages.map(({ language, logoComponent }, i) => (
        <Grid item xs={xs} sm={sm} md={md} key={i}>
          <Box component={Card} boxShadow={3} borderRadius={4}>
            {/* TODO: must add dropdown for child languages */}
            <Link href={`/by-language/${language.code}`} style={{ paddingTop: '1rem', textDecoration: 'none' }}>
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                padding={{ xs: 2, sm: 4, md: 6 }}
                sx={{
                  '&:last-child': {
                    paddingBottom: { xs: 2, sm: 4, md: 6 },
                  },
                }}
              >
                {logoComponent !== null ? (
                  React.createElement(logoComponent, {
                    style: LanguageIconStyle,
                  })
                ) : (
                  <GenericCodeIcon style={LanguageIconStyle} />
                )}
                <Typography
                  variant={'h6'}
                  gutterBottom
                  fontWeight={500}
                  align={'center'}
                  style={{ paddingTop: '1.5rem' }}
                >
                  {language.name}
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
