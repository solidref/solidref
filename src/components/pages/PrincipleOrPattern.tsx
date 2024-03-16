import {useEffect, useState} from 'react';

import {Box, useTheme} from '@mui/material';
import {useRecoilValue} from 'recoil';

import Presentation from './principle-or-pattern/Presentation';

import {
  CodingPrinciple,
  DesignPattern,
  Language,
  PrincipleOrPatternContent,
  selectedLanguageCodeState,
} from '../../state';
import Container from '../../views/generic/Container';
import PrincipleOrPatternHero from '../../views/pages/principle-or-pattern/PrincipleOrPatternHero';
import {loadLanguage, loadPrincipleOrPattern} from '../../selector';
import PrinciplesOrPatternsMenu from '../../views/pages/language/PrinciplesOrPatternsMenu';
import {useParams} from 'react-router-dom';

type PrincipleOrPatternProps = {
  type: 'principles' | 'patterns';
};

export default function PrincipleOrPattern({type}: PrincipleOrPatternProps) {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxBgColor = (theme.palette as any).alternate?.main; // Direct access, assuming 'alternate' exists

  const {group: principleOrPatternGroup = 'solid'} = useParams<{group: string}>();

  const selectedLanguageCode = useRecoilValue(selectedLanguageCodeState) as string;

  // Assuming useRecoilValue already returns the correct type, so explicit casting may not be necessary
  const languageState = useRecoilValue(loadLanguage(selectedLanguageCode));
  const principleOrPattern = useRecoilValue(loadPrincipleOrPattern(`${type}-${principleOrPatternGroup}`));

  const [language, setLanguage] = useState<Language | null>(null);
  const [principleOrPatternExamples, setPrincipleOrPatternExamples] = useState<DesignPattern[] | CodingPrinciple[]>([]);
  const [principleOrPatternContent, setPrincipleOrPatternContent] = useState<PrincipleOrPatternContent | null>(null);

  // Simplify useEffect hooks by directly setting state without intermediate condition
  useEffect(() => {
    if (languageState.ready) {
      const l = languageState?.language as Language;
      const examplesList = ['principles', 'patterns']
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((type) => (l as any)?.[type]?.[`${type}_${principleOrPatternGroup}`])
        .filter((ex) => ex);
      if (examplesList.length > 0) {
        setPrincipleOrPatternExamples(examplesList.pop());
      }
      setLanguage(l);
    }
  }, [languageState, principleOrPatternGroup]);

  useEffect(() => {
    if (principleOrPattern.ready) {
      setPrincipleOrPatternContent(principleOrPattern.content as PrincipleOrPatternContent);
    }
  }, [principleOrPattern]);

  return (
    <Box>
      {principleOrPatternContent ? (
        <Box>
          <Box>
            <PrincipleOrPatternHero title={principleOrPatternContent?.title} />
          </Box>
          <Box>
            <Box bgcolor={boxBgColor} position={'relative'}>
              <Container position="relative" zIndex={2}>
                <Presentation
                  principleOrPatternContent={principleOrPatternContent}
                  principleOrPatternExamples={principleOrPatternExamples}
                  languageCode={selectedLanguageCode}
                />
              </Container>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
      {language ? (
        <Box>
          <Box position={'relative'}>
            <Container position="relative" zIndex={2}>
              {language && <PrinciplesOrPatternsMenu language={language} mode={'url'} />}
            </Container>
          </Box>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </Box>
  );
}
