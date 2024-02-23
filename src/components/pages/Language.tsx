import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {Box, Typography, useTheme} from '@mui/material';

import LanguageLoader, {LanguageParams} from './language/LanguageLoader';

import {CodingPrinciple, DesignPattern, Language, LanguageState} from '../../state';
import {loadLanguages} from '../../selector';
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

  const {language: languageParam = 'javascript'} = useParams<LanguageParams>();

  const [languageState, setLanguagesState] = useRecoilState<LanguageState>(loadLanguages(languageParam));

  const [language, setLanguage] = useState<Language | null>(null);

  const [detectedPrincipleOrPattern, setDetectedPrincipleOrPattern] = useState<DetectedPrincipleOrPattern>({});

  useEffect(() => {
    if (languageState?.ready) {
      setLanguage(languageState.language);
    }
  }, [languageState, setLanguage]);

  useEffect(() => {
    if (!languageState || !languageState?.ready) {
      return;
    }
    setDetectedPrincipleOrPattern(detectPrincipleOrPattern(languageState?.language ?? []));
  }, [languageState, setDetectedPrincipleOrPattern]);

  return (
    <Box>
      <LanguageLoader code={languageParam} setLanguagesState={setLanguagesState} />
      {language ? (
        <Box>
          <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
            <Container position="relative" zIndex={2}>
              <LanguageHero language={language} />
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
                    languageCode={language.code}
                  />
                )}
              </Box>
            </Container>
          </Box>
          <Box>
            <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
              <Container position="relative" zIndex={2}>
                {language && (
                  <PrinciplesOrPatternsMenu language={language} setPrincipleOrPattern={setDetectedPrincipleOrPattern} />
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
