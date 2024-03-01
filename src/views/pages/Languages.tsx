import React, {useCallback, useState} from 'react';
import {Box, ToggleButton, ToggleButtonGroup, useTheme} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import LanguagesList, {FilterMode} from './languages/LanguagesList';
import Hero from './home/Hero';

import Container from '../generic/Container';

// export type LanguagesProps = { };

const toggleStyle = {
  border: '0',
  borderRadius: '50%',
  background: 'transparent',
};

export default function Languages(/*{ }: LanguagesProps*/) {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxBgColor = (theme.palette as any)?.alternate?.main;

  const [filterMode, setFilterMode] = useState<FilterMode>('all');

  const handleChange = useCallback((_event: React.MouseEvent<HTMLElement>, nextView: FilterMode) => {
    setFilterMode(nextView);
  }, []);

  return (
    <Box>
      <Box bgcolor={boxBgColor} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      {false && (
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
      )}
      <Box>
        <Container>
          <LanguagesList filterMode={filterMode} filterArgs={[]} md={3} />
        </Container>
      </Box>
    </Box>
  );
}
