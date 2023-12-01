import React from 'react';
import Grid from '@mui/material/Grid';
import LanguageItem from './LanguageItem';

export type LanguageListProps = {
};

function LanguageModule({}: LanguageListProps) {
  // return (
  //   <Grid container spacing={2}>
  //     {languageHierarchy?.allLanguages?.length ? (
  //       languageHierarchy?.allLanguages?.map((language) => (
  //         <Grid item xs={4} key={language}>
  //           <LanguageItem language={language} />
  //         </Grid>
  //       ))
  //     ) : (
  //       <Grid item xs={4}>
  //         Loading...
  //       </Grid>
  //     )}
  //   </Grid>
  // );
  return <></>
}

export default LanguageModule;
