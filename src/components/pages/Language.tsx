import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import {Box, Typography, useTheme} from '@mui/material';

import {LanguageParams} from './language/LanguageLoader';

import {CodingPrinciple, DesignPattern, Language, LanguageState} from '../../state';
import {loadLanguage} from '../../selector';
import Container from '../../views/generic/Container';
import LanguageHero from '../../views/pages/language/LanguageHero';
import PrinciplesOrPatterns from '../../views/pages/language/PrinciplesOrPatterns';
import PrinciplesOrPatternsMenu from '../../views/pages/language/PrinciplesOrPatternsMenu';
import {CodingPrincipleTitles} from '../../constants';

type DetectedPrincipleOrPattern = {type?: string; principlesOrPatterns?: DesignPattern[] | CodingPrinciple[]};

const detectPrincipleOrPattern = (language: Language): DetectedPrincipleOrPattern => {
  if (language.principles) {
    const type = Object.keys(language.principles)[0];
    return {
      type,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      principlesOrPatterns: (language.principles as any)[type],
    };
  }
  if (language.patterns) {
    const type = Object.keys(language.patterns)[0];
    return {
      type,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      principlesOrPatterns: (language.patterns as any)[type],
    };
  }
  return {};
};

// export type LanguageProps = {};

export default function LanguagePage() {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxBgColor = (theme.palette as any)?.alternate?.main;

  const {language: languageParam = 'javascript'} = useParams<LanguageParams>();

  const languageState = useRecoilValue<LanguageState>(loadLanguage(languageParam));

  const [detectedPrincipleOrPattern, setDetectedPrincipleOrPattern] = useState<DetectedPrincipleOrPattern>({});

  useEffect(() => {
    if (!languageState || !languageState?.ready) {
      return;
    }
    setDetectedPrincipleOrPattern(detectPrincipleOrPattern(languageState?.language ?? []));
  }, [languageState, setDetectedPrincipleOrPattern]);

  // console.log('LanguagePage', language, detectedPrincipleOrPattern)

  return (
    <Box>
      {languageState?.ready && detectedPrincipleOrPattern.type ? (
        <Box>
          <Box bgcolor={boxBgColor} position={'relative'}>
            <Container position="relative" zIndex={2}>
              <LanguageHero language={languageState?.language} />
            </Container>
          </Box>
          <Box>
            <Container position="relative" zIndex={2}>
              <Box sx={{flexGrow: 1}} display={'flex'} justifyContent={'center'}>
                <Typography variant="h4" gutterBottom>
                  {CodingPrincipleTitles[detectedPrincipleOrPattern.type ?? 'unknown'] ?? 'unknown'}
                </Typography>
              </Box>
              <Box sx={{flexGrow: 1}}>
                {detectedPrincipleOrPattern.principlesOrPatterns?.length && (
                  <PrinciplesOrPatterns
                    type={detectedPrincipleOrPattern.type ?? ''}
                    principlesOrPatterns={detectedPrincipleOrPattern.principlesOrPatterns ?? []}
                    languageCode={languageState.language.code}
                  />
                )}
              </Box>
            </Container>
          </Box>
          <Box>
            <Box bgcolor={boxBgColor} position={'relative'}>
              <Container position="relative" zIndex={2}>
                {languageState && (
                  <PrinciplesOrPatternsMenu
                    language={languageState.language}
                    setPrincipleOrPattern={setDetectedPrincipleOrPattern}
                  />
                )}
              </Container>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </Box>
  );
}
