import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Box, useTheme } from '@mui/material';

import { CodingPrinciple, DesignPattern, Language, LanguageState } from '../../state';
import LanguageLoader, { LanguageParams } from '../LanguageLoader';
import { loadLanguages } from '../../selector';
import Container from '../../views/generic/Container';
import LanguageHero from '../../views/pages/language/LanguageHero';
// import Menu from '../../views/pages/language/Menu';
import PrinciplesOrPatterns from '../../views/pages/language/PrinciplesOrPatterns';

type DetectedPrincipleOrPattern = { type?: string; principlesOrPatterns?: DesignPattern[] | CodingPrinciple[] };

const detectPrincipleOrPattern = (language: Language): DetectedPrincipleOrPattern => {
  // console.log(language);
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

  const { language: languageParam = 'javascript' } = useParams<LanguageParams>();

  const [languageState, setLanguagesState] = useRecoilState<LanguageState>(loadLanguages(languageParam));
  console.log('languageState', languageState);

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
              <Box sx={{ flexGrow: 1 }}>
                {/* {detectedPrincipleOrPattern.principlesOrPatterns?.length && (
                <Menu language={language} setPrincipleOrPattern={setDetectedPrincipleOrPattern} />
              )} */}
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
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </Box>
  );
}
