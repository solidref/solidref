import React, {useEffect, useState} from 'react';

import {Box, Card, CardContent, Grid, Link, RegularBreakpoints, Typography} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {HierarchyLanguage, languagesHierarchyState} from '../../../state';
import GenericCodeIcon from '../../icons/GenericCodeIcon';
import {LanguageIconStyle} from '../../../styles';
import {generateLanguagePath} from '../../../utils/url';

export type ListLanguage = {
  language: HierarchyLanguage;
  logoComponent: React.ElementType | null;
};

type FilterMethod = (...args: unknown[]) => (value: HierarchyLanguage) => boolean;

type Filters = Record<string, FilterMethod>;

const filters: Filters = {
  allFilter: () => () => true,
  rootFilter: () => (/*value: HierarchyLanguage*/) => {
    // TODO: make sure you filter out the root languages
    return true;
  },
  highlightFilter: ((highlights?: string[]) => (value: HierarchyLanguage) => {
    return (highlights ?? ['javascript']).includes(value.code);
  }) as FilterMethod,
};

const filterListLanguages = async (
  hierarchyLanguages: HierarchyLanguage[],
  filterMode: string,
  filterArgs: unknown[],
  setLanguages: React.Dispatch<React.SetStateAction<ListLanguage[]>>,
) => {
  const filterCb = (filters[`${filterMode}Filter`] as FilterMethod)(...filterArgs);
  const languages: ListLanguage[] = await Promise.all(
    hierarchyLanguages.filter(filterCb).map(async (language) => {
      let module = null;
      try {
        // console.log(`../../icons/${language.code.replace(/(.)/, ($1) => $1.toUpperCase())}`);
        module = null; // await import(`../../icons/${language.code.replace(/(.)/, ($1) => $1.toUpperCase())}`);
      } catch (e) {
        console.error(e);
      }

      return {
        language,
        logoComponent: module !== null ? module.default : null,
      };
    }),
  );
  // console.log(languages);
  setLanguages(languages);
};

export type LanguagesListProps = RegularBreakpoints & {
  readonly filterMode: 'all' | 'root' | 'highlight';
  readonly filterArgs: unknown[];
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
  }, [languagesHierarchy, filterArgs, filterMode]);

  return (
    <Grid container spacing={4}>
      {languages.map(({language, logoComponent}, i) => (
        <Grid item xs={xs} sm={sm} md={md} key={i}>
          <Box component={Card} boxShadow={3} borderRadius={4}>
            {/* TODO: must add dropdown for child languages */}
            <Link href={generateLanguagePath(language.code)} style={{paddingTop: '1rem', textDecoration: 'none'}}>
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                padding={{xs: 2, sm: 4, md: 6}}
                sx={{
                  '&:last-child': {
                    paddingBottom: {xs: 2, sm: 4, md: 6},
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
                  style={{paddingTop: '1.5rem'}}
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
