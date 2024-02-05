import React from 'react';
import Grid from '@mui/material/Grid';
import LanguageItem from './LanguageItem';
import {useRecoilValue} from 'recoil';
import {Language, languagesHierarchyState} from '../../../state';

export type LanguageListProps = {};

function RootLanguages() {
  const hierarchyState = useRecoilValue(languagesHierarchyState);

  // TODO: add logic to filter and determine root languages
  const rootLanguages = hierarchyState?.list ?? [];

  return (
    <Grid container spacing={2}>
      {hierarchyState.ready
        ? rootLanguages.map((language) => (
            <Grid item xs={4} key={language.code}>
              <LanguageItem language={language} displayChildren={true} />
            </Grid>
          ))
        : [0, 1].map(
            (
              key, // Add parentheses here
            ) => (
              <Grid item xs={4} key={key}>
                <LanguageItem loading={true} language={{} as Language} />
              </Grid>
            ),
          )}
    </Grid>
  );
}

export default RootLanguages;
