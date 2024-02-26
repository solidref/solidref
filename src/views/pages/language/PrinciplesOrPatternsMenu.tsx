import * as React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import {CodingPrincipleTitles} from '../../../constants';
import {Language} from '../../../state';

const CustomWhiteButton = styled(Button)(() => ({
  color: 'white',
}));

export type MenuProps = {
  language: Language;
  mode?: 'url' | 'state';
  setDetectedPrincipleOrPatternTitle: string;
  setPrincipleOrPattern?: (...args: unknown[]) => void;
};

export default function PrinciplesOrPatternsMenu({language, setPrincipleOrPattern, mode = 'state'}: MenuProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const filter = (key) => (mode === 'state' ? true : !key.includes('other'));

  return (
    <Box position={'relative'}>
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant={'h3'} gutterBottom>
          <ExtensionIcon style={{fontSize: '5rem'}} />
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 0 : 2} alignItems={'center'}>
        <Grid item xs={12} md={6}>
          <Box component={Card} data-aos={isMd ? 'fade-left' : 'fade-up'}>
            <Box
              component={CardContent}
              padding={{sm: 4}}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box component={Typography} variant={'h4'} fontWeight={600} gutterBottom>
                Coding Principles
              </Box>
              <List>
                {Object.keys(language.principles)
                  .filter(filter)
                  .map((key) => (
                    <ListItem key={key}>
                      <ListItemText>
                        <Button
                          onClick={() => {
                            mode === 'state' &&
                              setPrincipleOrPattern({
                                type: key,
                                principlesOrPatterns: language.principles[key],
                              });
                          }}
                          href={
                            mode === 'state' ? '#' : `/coding-principles/${key.replace(/(patterns|principles)_/, '')}`
                          }
                        >
                          {CodingPrincipleTitles[key]}
                        </Button>
                      </ListItemText>
                    </ListItem>
                  ))}
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box
            component={Card}
            bgcolor={theme.palette.primary.main}
            data-aos={isMd ? 'fade-left' : 'fade-up'}
            width={'100%'}
          >
            <Box
              component={CardContent}
              padding={{sm: 4}}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box
                component={Typography}
                variant={'h4'}
                color={theme.palette.common.white}
                fontWeight={600}
                gutterBottom
              >
                Design Patterns
              </Box>

              <List>
                {Object.keys(language.patterns)
                  .filter(filter)
                  .map((key) => (
                    <ListItem key={key}>
                      <ListItemText>
                        <CustomWhiteButton
                          onClick={() => {
                            mode === 'state' &&
                              setPrincipleOrPattern({
                                type: key,
                                principlesOrPatterns: language.patterns[key],
                              });
                          }}
                          href={
                            mode === 'state' ? '#' : `/design-patterns/${key.replace(/(patterns|principles)_/, '')}`
                          }
                        >
                          {CodingPrincipleTitles[key]}
                        </CustomWhiteButton>
                      </ListItemText>
                    </ListItem>
                  ))}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
