import React, { useEffect } from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Link from '@mui/material/Link';
import { languageHierarchyState, LanguageHierarchy } from '../state';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { loadLanguageHierarchy } from '../selector';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: React.FC = () => {
  const [languageHierarchy, setLanguageHierarchy] = useRecoilState(languageHierarchyState);
  const languageHierarchyLoadable = useRecoilValueLoadable(loadLanguageHierarchy);

  useEffect(() => {
    if (languageHierarchyLoadable.state === 'hasValue') {
      setLanguageHierarchy({
        ...languageHierarchy,
        ...languageHierarchyLoadable.contents,
      });
    }
  }, [languageHierarchyLoadable.state]);

  console.log(languageHierarchy, languageHierarchyLoadable);

  return (
    <Page>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {languageHierarchy?.rootLanguages?.length ? (
            languageHierarchy?.rootLanguages?.map((language) => (
              <Grid item xs={4} key={language}>
                <Link color="inherit" variant="h6" underline="none" href={`/by-language/${language}`}>
                  <Item>{language}</Item>
                </Link>
              </Grid>
            ))
          ) : (
            <Grid item xs={4}>
              <Item>Loading...</Item>
            </Grid>
          )}
        </Grid>
        <Grid container spacing={2}>
          {languageHierarchy?.languages?.length ? (
            languageHierarchy?.languages?.map((language) => (
                <Grid item xs={4} key={language}>
                  <Link color="inherit" variant="h6" underline="none" href={`/by-language/${language}`}>
                    <Item>{language}</Item>
                  </Link>
                </Grid>
              ))
          ) : (
            <Grid item xs={4}>
              <Item>Loading...</Item>
            </Grid>
          )}
        </Grid>
      </Box>
    </Page>
  );
};

export default Home;
