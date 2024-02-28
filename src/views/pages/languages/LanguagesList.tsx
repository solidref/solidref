import {useMemo} from 'react';

import {Box, Card, CardContent, Grid, Link, RegularBreakpoints, Typography} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {HierarchyLanguage} from '../../../state';
import {generateLanguagePath} from '../../../utils/url';
import {loadLanguageHierarchy} from '../../../selector';
import LazyLoadIcon from '../../../components/icons/LazyLoadIcon';
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

export type FilterMode = 'all' | 'root' | 'highlight';

export type LanguagesListProps = RegularBreakpoints & {
  readonly filterMode: FilterMode;
  readonly filterArgs: unknown[];
};

export default function LanguagesList({
  filterMode = 'all',
  filterArgs = [],
  xs = 12,
  sm = 6,
  md = 4,
}: LanguagesListProps) {
  const languagesHierarchy = useRecoilValue(loadLanguageHierarchy);

  // Assuming `filters` is an object with filtering functions you've defined elsewhere
  // and `FilterMethod` is a function type for these filters
  const languages = useMemo(() => {
    if (!languagesHierarchy.list) return [];

    const filterCb = filters[`${filterMode}Filter`]; // Assuming this is a function
    // console.log(`${filterMode}Filter`);
    return languagesHierarchy.list.filter(filterCb(...filterArgs));
  }, [languagesHierarchy.list, filterMode, filterArgs]);

  return (
    <Grid container spacing={4}>
      {languages.map((language) => (
        <Grid item xs={xs} sm={sm} md={md} key={`languages-grid-item-${language.code}`}>
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
                <LazyLoadIcon
                  icon={language.code.charAt(0).toUpperCase() + language.code.slice(1)}
                  style={{
                    width: '8rem',
                    height: '8rem',
                    display: 'block',
                    margin: 'auto',
                    transform: 'rotate(-15deg)',
                  }}
                  fallbackProps={{
                    style: {
                      width: '8rem',
                      height: '8rem',
                      display: 'block',
                      margin: 'auto',
                      transform: 'rotate(-15deg)',
                    },
                  }}
                />
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
