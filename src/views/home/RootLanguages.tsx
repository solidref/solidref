import React from 'react';
import Grid from '@mui/material/Grid';
import LanguageItem from './LanguageItem';
import { LanguageHierarchyObject } from '../../state';

export type LanguageListProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

function AllLanguages({languageHierarchy = {}}: LanguageListProps) {
  return (
    <Grid container spacing={2}>
      {languageHierarchy.ready
        ? languageHierarchy?.rootLanguages?.map((language) => (
            <Grid item xs={4} key={language}>
              <LanguageItem language={language} subLanguages={languageHierarchy?.languageMap?.[language] ?? []} />
            </Grid>
          ))
        : [0, 1].map(
            (
              key, // Add parentheses here
            ) => (
              <Grid item xs={4} key={key}>
                <LanguageItem loading={true} language={'none'} />
              </Grid>
            ),
          )}
    </Grid>
  );
}

export default AllLanguages;