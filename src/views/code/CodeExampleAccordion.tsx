import React from 'react';

import { styled } from '@mui/system';
import { AccordionDetails, Box, Typography } from '@mui/material'

import { CodeExample } from '../../state';
// import SyntaxHighlighter from './SyntaxHighlighter';
import HorizontalAccordion from '../generic/accordion/HorizontalAccordion';
import HorizontalAccordionSummary from '../generic/accordion/HorizontalAccordionSummary';
import HorizontalAccordionDetails from '../generic/accordion/HorizontalAccordionDetails';

export type CodeExampleAccordionProps = {
  examples: CodeExample[];
  language?: string;
};

const CustomBox = styled(Box)(() => ({
  display: 'flex',
  // flex: 'auto',
  justifyContent: 'start',
  alignItems: 'start'
  // overflow: 'hidden',
}));

function CodeExampleAccordion({ examples, language = 'js' }: CodeExampleAccordionProps) {
  return (
    <CustomBox>
      {examples.map((example, index) => {
        return (
          <HorizontalAccordion
            className={index === 0 ? 'HorizontalAccordionSection-Targeted' : ''}
            key={example.title}
            elevation={0}
          >
            <HorizontalAccordionSummary><Typography>{example.title ?? 'Unknown Title'}</Typography></HorizontalAccordionSummary>
            <HorizontalAccordionDetails>
              <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />
              {/* <SyntaxHighlighter code={example.code || '// missing code'} language={language} /> */}
            </HorizontalAccordionDetails>
          </HorizontalAccordion>
        );
      })}
    </CustomBox >
  );
}

export default CodeExampleAccordion;
