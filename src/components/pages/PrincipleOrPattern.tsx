import {Box, useTheme} from '@mui/material';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import {loadLanguage, loadPrincipleOrPattern} from '../../selector';
import {
  CodeExample,
  CodingPrinciple,
  DesignPattern,
  Language,
  PrincipleOrPatternContent,
  selectedLanguageCodeState,
} from '../../state';
import Container from '../../views/generic/Container';
import PrincipleOrPatternHero from '../../views/pages/principle-or-pattern/Hero';
import PrinciplesOrPatternsMenu from '../../views/pages/language/BottomMenu';
// import PatternsOrPrinciples from '../../views/principles-or-patterns/AsAccordion';
import PatternsOrPrinciples from '../../views/docs/AsGrid';

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
    if (languageState.ready && principleOrPattern.ready) {
      const l = languageState?.language as Language;
      const examplesList = ['principles', 'patterns']
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((type) => (l as any)?.[type]?.[`${type}_${principleOrPatternGroup}`])
        .filter((ex) => ex);
      if (examplesList.length > 0) {
        const accordion = principleOrPattern?.content?.accordion ?? {};
        const examples = examplesList.length
          ? examplesList.pop().map((example: CodeExample) => ({
              ...example,
              description: Object.keys(accordion)
                .filter((title) => title === example.title)
                .map((title) => accordion[title])
                .reduce((_acc, cur) => cur, []),
            }))
          : [];
        setPrincipleOrPatternExamples(examples);
      }
      setLanguage(l);
    }
  }, [languageState, principleOrPatternGroup, principleOrPattern]);

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
                <PatternsOrPrinciples
                  patternsOrPrinciples={principleOrPatternExamples ?? []}
                  language={selectedLanguageCode || 'js'}
                  type={type}
                />
              </Container>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box />
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
        <Box />
      )}
    </Box>
  );
}
