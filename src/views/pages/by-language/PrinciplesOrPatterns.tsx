import React from 'react';
import {CodingPrinciple, DesignPattern} from '../../../state';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyntaxHighlighter from '../../code/SyntaxHighlighter';
import {Link} from 'react-router-dom';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TypographySet from '../../generic/TypographySet';

type CodingPrinciplesProps = {
  principlesOrPatterns: DesignPattern[] | CodingPrinciple[];
  type: string;
};

export default function PrinciplesOrPatterns({principlesOrPatterns, type}: CodingPrinciplesProps) {
  return (
    <Box sx={{flexGrow: 1}}>
      {principlesOrPatterns.map((pattern) => (
        <Accordion key={pattern.title}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{pattern.title}</Typography>
            <Link to={`/design-patterns/${type}?item=${pattern.title}`}>
              <BookmarksIcon />
            </Link>
          </AccordionSummary>
          <AccordionDetails>
            {pattern.description && <TypographySet content={pattern.description} />}
            {/* <CodeExamples language={code} examples={pattern.examples} /> */}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
