import React from 'react';
import Page from '../components/Page';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {LanguageHierarchyObject} from '../state';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Paper} from '@mui/material';
import RootLanguages from './home/RootLanguages';
import AllLanguages from './home/AllLanguages';

export type HomeProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

function Home({languageHierarchy = {}}: HomeProps) {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  return (
    <Page>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={0} style={{margin: '10px 0', display: 'flex', justifyContent: 'end'}}>
              <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
                <ToggleButton value="list" aria-label="list">
                  <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                  <ViewModuleIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Paper>
          </Grid>
        </Grid>
        {view === 'list' ? <RootLanguages languageHierarchy={languageHierarchy} /> : <></>}
        {view === 'module' ? <AllLanguages languageHierarchy={languageHierarchy} /> : <></>}
      </Box>
    </Page>
  );
}

export default Home;
