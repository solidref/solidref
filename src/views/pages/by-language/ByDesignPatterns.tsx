import React from 'react';
import {CodeExample, DesignPattern} from '../../../state';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyntaxHighlighter from '../../code/SyntaxHighlighter';
import {CodingPrincipleTitles} from '../../../constants';
import {Link} from 'react-router-dom';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

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
  type: string;
};

function ByDesignPatterns({code, patterns, type}: ByDesignPatternsProps) {

  return (
    <Box sx={{flexGrow: 1}}>
      {patterns.map((pattern) => (
        <Accordion key={pattern.abbr}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{pattern.title ?? CodingPrincipleTitles[pattern.abbr] ?? pattern.abbr}</Typography>
            <Link to={`/design-patterns/${type}?item=${pattern.abbr}`}>
              <BookmarksIcon />
            </Link>
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
