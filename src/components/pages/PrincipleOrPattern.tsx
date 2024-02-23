import React, {useEffect, useState} from 'react';

import {Box, useTheme} from '@mui/material';
import {useRecoilState} from 'recoil';

import PrincipleOrPatternLoader from './principle-or-pattern/PrincipleOrPatternLoader';
import Presentation from './principle-or-pattern/Presentation';

import {Language, LanguageState, PrincipleOrPatternContent, principleOrPatternState} from '../../state';
import Container from '../../views/generic/Container';
import PrincipleOrPatternHero from '../../views/pages/principle-or-pattern/PrincipleOrPatternHero';
import {loadLanguages} from '../../selector';
import LanguageLoader from './language/LanguageLoader';
import PrinciplesOrPatternsMenu from '../../views/pages/language/PrinciplesOrPatternsMenu';

export default function PrinciplePattern() {
  const theme = useTheme();

  const [languageState, setLanguagesState] = useRecoilState<LanguageState>(loadLanguages('javascript'));

  const [language, setLanguage] = useState<Language | null>(null);

  const [principleOrPattern, setPrincipleOrPattern] = useRecoilState(principleOrPatternState);

  const [principleOrPatternContent, setPrincipleOrPatternContent] = useState<PrincipleOrPatternContent | null>(null);

  useEffect(() => {
    if (languageState?.ready) {
      setLanguage(languageState.language);
    }
  }, [languageState, setLanguage]);

  useEffect(() => {
    if (!principleOrPattern || !principleOrPattern.ready) {
      return;
    }
    setPrincipleOrPatternContent(principleOrPattern.content as PrincipleOrPatternContent);
  }, [principleOrPattern, setPrincipleOrPatternContent]);

  return (
    <Box>
      <LanguageLoader code={'javascript'} setLanguagesState={setLanguagesState} />
      <PrincipleOrPatternLoader setPrinciplePatternContentState={setPrincipleOrPattern} />
      {principleOrPatternContent ? (
        <Box>
          <Box>
            <PrincipleOrPatternHero title={principleOrPatternContent?.title} />
          </Box>
          <Box>
            <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
              <Container position="relative" zIndex={2}>
                <Presentation principleOrPattern={principleOrPatternContent} />
              </Container>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
      <Box>
        <Box position={'relative'}>
          <Container position="relative" zIndex={2}>
            {language && <PrinciplesOrPatternsMenu language={language} mode={'url'} />}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
