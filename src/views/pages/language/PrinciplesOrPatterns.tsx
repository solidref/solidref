import React, {useState} from 'react';
import {CodingPrinciple, DesignPattern} from '../../../state';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom';
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
  '& .MuiAccordionSummary-content': {
    justifyContent: 'space-between',
  },
}));

const CustomLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'black',
  padding: '5px 10px 0 0',

  '& *': {
    fontSize: '0.9rem',
  },

  '&:hover': {
    color: 'black',
  },

  '&:visited': {
    color: 'black',
  },
}));

export default function PrinciplesOrPatterns({principlesOrPatterns, type, languageCode}: CodingPrinciplesProps) {
  const [expanded, setExpanded] = useState<string>([principlesOrPatterns[0].title]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    if (newExpanded) {
      setExpanded([...new Set([...expanded, panel])]);
    } else {
      setExpanded(expanded.filter((x) => x !== panel));
    }
  };

  return (
    <Box sx={{flexGrow: 1}}>
      {principlesOrPatterns.map((pattern) => (
        <Accordion
          expanded={expanded.includes(pattern.title)}
          key={pattern.title}
          elevation={0}
          onChange={handleChange(pattern.title)}
        >
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{pattern.title}</Typography>
            <CustomLink
              to={`/${type.includes('principles') ? 'coding-principles' : 'design-patterns'}/${type.replace(/(principles|patterns)_/, '')}`}
              title={`${pattern.title} Definition`}
            >
              <BookmarksIcon />
            </CustomLink>
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
