import React, { useEffect, useState } from 'react';

import { Box, useTheme } from '@mui/material';
import { useRecoilState } from 'recoil';

import PrincipleOrPatternLoader from './principle-or-pattern/PrincipleOrPatternLoader';
import Presentation from './principle-or-pattern/Presentation';

import { PrincipleOrPatternContent, principleOrPatternState } from '../../state';
import Container from '../../views/generic/Container';
import PrincipleOrPatternHero from '../../views/pages/principle-or-pattern/PrincipleOrPatternHero';

export default function PrinciplePattern() {
  const theme = useTheme();

  const [principleOrPattern, setPrincipleOrPattern] = useRecoilState(principleOrPatternState);

  const [principleOrPatternContent, setPrincipleOrPatternContent] = useState<PrincipleOrPatternContent | null>(null);

  useEffect(() => {
    if (!principleOrPattern || !principleOrPattern.ready) {
      return;
    }
    setPrincipleOrPatternContent(principleOrPattern.content as PrincipleOrPatternContent);
  }, [principleOrPattern, setPrincipleOrPatternContent]);

  return (
    <Box>
      <PrincipleOrPatternLoader setPrinciplePatternContentState={setPrincipleOrPattern} />
      <Box>
        <PrincipleOrPatternHero title={principleOrPatternContent?.title} />
      </Box>
      <Box>
        {principleOrPatternContent ? (
          <Box>
            <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
              <Container position="relative" zIndex={2}>
                <Presentation principleOrPattern={principleOrPatternContent} />
              </Container>
            </Box>
          </Box>
        ) : (
          <Box>Loading...</Box>
        )}
      </Box>
    </Box>
  );
}
