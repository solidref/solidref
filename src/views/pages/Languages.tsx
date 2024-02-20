import React, {useState} from 'react';
import {Box, ToggleButton, ToggleButtonGroup, useTheme} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import LanguageList from './languages/LanguageList';
import HomeHero from './home/HomeHero';

import Container from '../generic/Container';
// import { CenteredToolbar } from '../Header';

// export type LanguagesProps = { };

const toggleStyle = {
  border: '0',
  borderRadius: '50%',
  background: 'transparent',
};

export default function Languages(/*{ }: LanguagesProps*/) {
  const theme = useTheme();

  const [filterMode, setFilterMode] = useState('all');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setFilterMode(nextView);
  };

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <HomeHero />
        </Container>
      </Box>
      <Box style={{padding: '64px 0 0 0'}}>
        <Container display={'flex'} justifyContent={'flex-end'} style={{padding: 0}}>
          <ToggleButtonGroup value={filterMode} exclusive onChange={handleChange}>
            <ToggleButton value="all" aria-label="all" style={toggleStyle}>
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="root" aria-label="root" style={toggleStyle}>
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </Box>
      <Container>
        <LanguageList filterMode={filterMode} />
      </Container>
    </Box>
  );
}
