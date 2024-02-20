import React from 'react';
import { CodingPrinciple, DesignPattern } from '../../../state';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TypographySet from '../../generic/TypographySet';
import CodeExampleAccordion from '../../code/CodeExampleAccordion';
import SyntaxHighlighter from '../../code/SyntaxHighlighter';

type CodingPrinciplesProps = {
  principlesOrPatterns: DesignPattern[] | CodingPrinciple[];
  type: string;
  languageCode: string;
};

const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  justifyContent: 'space-between',
}));

export default function PrinciplesOrPatterns({ principlesOrPatterns, type, languageCode }: CodingPrinciplesProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {principlesOrPatterns.map((pattern) => (
        <Accordion key={pattern.title} elevation={0}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{pattern.title}</Typography>
            <Link to={`/design-patterns/${type}?item=${pattern.title}`}>
              <BookmarksIcon />
            </Link>
          </CustomAccordionSummary>
          <AccordionDetails>
            {pattern.description && <TypographySet content={pattern.description} />}
            {pattern.examples && pattern.examples.length === 1 && (
              <SyntaxHighlighter code={pattern?.examples?.[0]?.code ?? '// missing code'} language={languageCode} />
            )}
            {pattern.examples && pattern.examples.length > 1 && (
              <CodeExampleAccordion examples={pattern?.examples || []} language={languageCode} />
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
