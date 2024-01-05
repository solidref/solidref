import React from 'react';
import Typography from '@mui/material/Typography';
import {CenteredToolbar} from '../Header';
import Page from './Page';
import {PrinciplePatternContent, PrinciplePatternContentState, principlePatternContentState} from '../../state';
import {useRecoilState} from 'recoil';
import PrinciplePatternContentLoader from '../../components/PrinciplePatternContentLoader';
import TypographySet from '../generic/TypographySet';
import Box from '@mui/material/Box';
import PrinciplePatternAccordion from './by-principle-pattern/PrinciplePatternAccordion';

type PrinciplePatternContentProps = {
  ppc: PrinciplePatternContentState;
};

function PrinciplePatternContentRender({ppc}: PrinciplePatternContentProps) {
  if (!ppc.ready) {
    return <>Loading...</>;
  }

  const content = ppc?.content as PrinciplePatternContent;

  return (
    <>
      <CenteredToolbar sx={{justifyContent: 'space-between'}}>
        {/* TODO: this is not safe... */}
        <Typography variant="h2" dangerouslySetInnerHTML={{__html: content.title}} />
        <Typography variant="h6"></Typography>
      </CenteredToolbar>
      <Page>
        <Box sx={{flexGrow: 1}}>
          <TypographySet content={content.before || []} />
          <PrinciplePatternAccordion accordion={content.accordion || {}} />
          <TypographySet content={content.after || []} />
        </Box>
      </Page>
    </>
  );
}

export default function ByPrinciplePatternType() {
  const [principlePatternContent, setPrinciplePatternContentState] = useRecoilState(principlePatternContentState);

  return (
    <>
      <PrinciplePatternContentLoader setPrinciplePatternContentState={setPrinciplePatternContentState} />
      <PrinciplePatternContentRender ppc={principlePatternContent} />
    </>
  );
}
