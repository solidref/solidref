import React, {useEffect} from 'react';
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
import {CodingPrinciple, DesignPattern, Language, LanguageState} from '../../state';

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

type DetectedPrincipleOrPattern = {type?: string; principlesOrPatterns?: DesignPattern[] | CodingPrinciple[]};

const detectPrincipleOrPattern = (language: Language): DetectedPrincipleOrPattern => {
  console.log(language);
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

  const [languageState, setLanguagesState] = useRecoilState<LanguageState>(loadLanguages(language));

  const [detectedPrincipleOrPattern, setDetectedPrincipleOrPattern] = React.useState<DetectedPrincipleOrPattern>({});

  console.log(detectedPrincipleOrPattern, 'detectedPrincipleOrPattern');

  useEffect(() => {
    if (languageState?.ready) {
      setDetectedPrincipleOrPattern(detectPrincipleOrPattern(languageState?.language ?? []));
    }
  }, [languageState, setDetectedPrincipleOrPattern]);

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
              {detectedPrincipleOrPattern.principlesOrPatterns?.length && (
                <Menu language={languageState.language} setPrincipleOrPattern={setDetectedPrincipleOrPattern} />
              )}
              {detectedPrincipleOrPattern.principlesOrPatterns?.length && (
                <PrinciplesOrPatterns
                  type={detectedPrincipleOrPattern.type ?? ''}
                  principlesOrPatterns={detectedPrincipleOrPattern.principlesOrPatterns ?? []}
                  languageCode={languageState.language.code}
                />
              )}
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
