import React from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {LanguageHierarchyObject} from '../state';
import LanguageItem from './home/LanguageItem';

export type HomeProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

function Home({languageHierarchy = {}}: HomeProps) {
  console.log(languageHierarchy);

  return (
    <Page>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {languageHierarchy.ready ? (
            languageHierarchy?.rootLanguages?.map((language) => (
              <Grid item xs={4} key={language}>
                <LanguageItem language={language} subLanguages={languageHierarchy?.languageMap?.[language] ?? []} />
              </Grid>
            ))
          ) : (
            <Grid item xs={4}>
              Loading...
            </Grid>
          )}
        </Grid>
        <Grid container spacing={2}>
          {languageHierarchy?.languages?.length ? (
            languageHierarchy?.languages?.map((language) => (
              <Grid item xs={4} key={language}>
                <LanguageItem language={language} />
              </Grid>
            ))
          ) : (
            <Grid item xs={4}>
              Loading...
            </Grid>
          )}
        </Grid>
      </Box>
    </Page>
  );
}

export default Home;
