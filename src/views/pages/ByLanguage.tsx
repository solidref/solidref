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
import Menu from './by-language/Menu';
import PrinciplesOrPatterns from './by-language/PrinciplesOrPatterns';
import { Language } from '../../state';

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

const detectPp = (language: Language) => {
  if (language.principles) {
    const type = Object.keys(language.principles)[0];
    return {
      type,
      principlesOrPatterns: (language.principles as any)[type],
    };
  }
  if (language.patterns) {
    const type = Object.keys(language.patterns)[0];
    return {
      type,
      principlesOrPatterns: (language.patterns as any)[type],
    };
  }
  return {};
};

function ByLanguage() {
  let {language = 'javascript'} = useParams<Params>();

  const [languageState, setLanguagesState] = useRecoilState(loadLanguages(language));

  const [pp, setPp] = React.useState(detectPp(languageState?.language ?? {}));

  console.log('state', languageState, pp);

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
              {languageState.ready && <Menu language={languageState.language} />}
              {languageState.ready && <PrinciplesOrPatterns type={pp.type ?? ''} principlesOrPatterns={pp.principlesOrPatterns} />}
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
