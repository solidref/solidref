import React from 'react';
import {CodeExample, DesignPattern} from '../../../state';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyntaxHighlighter from '../../../components/code/SyntaxHighlighter';
import {CodingPrincipleTitles} from '../../../constants';

type ExampleListProps = {
  examples: CodeExample[];
  language: string;
};

function CodeExamples({examples, language}: ExampleListProps) {
  return (
    <>
      {examples.map((example) => (
        <div key={example.title}>
          <SyntaxHighlighter code={example.code || '// missing code'} language={language} />
        </div>
      ))}
    </>
  );
}

export type ByDesignPatternsProps = {
  code: string;
  patterns: DesignPattern[];
};

function ByDesignPatterns({code, patterns}: ByDesignPatternsProps) {
  const [value, setValue] = React.useState(0);

  console.log(patterns);

  return (
    <Box sx={{flexGrow: 1}}>
      {patterns.map((pattern) => (
        <Accordion key={pattern.abbr}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{pattern.title ?? CodingPrincipleTitles[pattern.abbr] ?? pattern.abbr}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CodeExamples language={code} examples={pattern.examples} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default ByDesignPatterns;
