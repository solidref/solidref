import React from 'react';
import Page from './Page';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {CenteredToolbar} from '../Header';
import Typography from '@mui/material/Typography';
import SvgIconByName from '../icons/SvgIconByName';
import {styled} from '@mui/material';
import {loadLanguages} from '../../selector';
import LanguageLoader from '../../components/LanguageLoader';
import ByPrinciplesOrPatterns from './by-language/ByPrinciplesOrPatterns';

type Params = {
  language: string;
};

export type ByLanguageProps = {};

export const StyledSvgIconByName = styled(SvgIconByName)(({theme}) => ({
  width: '100px',
  height: '100px',
  transform: 'rotate(-15deg)',

  '&.GenericCodeIcon': {
    fill: theme.palette.primary.light,
  },
}));

function ByLanguage() {
  let {language = 'javascript'} = useParams<Params>();

  const [languageState, setLanguagesState] = useRecoilState(loadLanguages(language));

  return (
    <>
      <LanguageLoader code={language} setLanguagesState={setLanguagesState} />
      {languageState?.ready ? (
        <>
          <CenteredToolbar sx={{justifyContent: 'space-between'}}>
            <Typography variant="h2">
              <i>{languageState.language.name}</i> Coding Principles
            </Typography>
            <Typography variant="h6">
              Here are the <i>{languageState.language.name}</i> Coding Principles explained
            </Typography>
            <StyledSvgIconByName name={languageState.language.code ?? ''} />
          </CenteredToolbar>
          <Page>
            <Box sx={{flexGrow: 1}}>
              <ByPrinciplesOrPatterns language={languageState.language} />
            </Box>
          </Page>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}

export default ByLanguage;
