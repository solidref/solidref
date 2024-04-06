import React from 'react';

import {styled} from '@mui/system';
import {Box, Typography} from '@mui/material';

import {CodeExample} from '../../state';
import SyntaxHighlighter from '../generic/SyntaxHighlighter';
import HorizontalAccordion from '../generic/accordion/HorizontalAccordion';
import HorizontalAccordionSummary from '../generic/accordion/HorizontalAccordionSummary';
import HorizontalAccordionDetails from '../generic/accordion/HorizontalAccordionDetails';

export type CodeExampleAccordionProps = {
  examples: CodeExample[];
  language?: string;
};

const CustomBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
}));

function CodeExampleAccordion({examples, language = 'js'}: CodeExampleAccordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : 'panel0');
  };

  return (
    <CustomBox>
      {examples.map((example, index) => {
        return (
          <HorizontalAccordion
            className={index === 0 ? 'HorizontalAccordionSection-Targeted' : ''}
            key={example.title}
            elevation={0}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <HorizontalAccordionSummary>
              <Typography>{example.title ?? 'Unknown Title'}</Typography>
            </HorizontalAccordionSummary>
            <HorizontalAccordionDetails>
              {/* <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" /> */}
              <SyntaxHighlighter code={example.code || '// missing code'} language={language} />
            </HorizontalAccordionDetails>
          </HorizontalAccordion>
        );
      })}
    </CustomBox>
  );
}

export default CodeExampleAccordion;
