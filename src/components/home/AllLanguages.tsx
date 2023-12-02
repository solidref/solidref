import React from 'react';
import Grid from '@mui/material/Grid';
import LanguageItem from './LanguageItem';
import {useRecoilValue} from 'recoil';
import {Language, languagesHierarchyState} from '../../state';

function AllLanguages() {
  const languagesHierarchy = useRecoilValue(languagesHierarchyState);

  return (
    <Grid container spacing={2}>
      {languagesHierarchy?.list && languagesHierarchy?.list?.length
        ? languagesHierarchy?.list?.map((language) => (
            <Grid item xs={4} key={language.code}>
              <LanguageItem language={language} />
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

export default AllLanguages;
