import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ContentType, PrinciplePatternContent} from '../../../state';
import TypographySet from './TypographySet';
// import SyntaxHighlighter from '../../code/SyntaxHighlighter';

type PrinciplePatternAccordionItemProps = {
  content: ContentType[];
  title: string;
  expanded: string[];
  handleChange: any;
};

function PrinciplePatternAccordionItem({title, content, handleChange, expanded}: PrinciplePatternAccordionItemProps) {
  return (
    <Accordion expanded={expanded.includes(title)} onChange={handleChange(title)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography variant="h5">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TypographySet content={content} />
      </AccordionDetails>
    </Accordion>
  );
}

export type PrinciplePatternAccordionProps = {
  accordion: Record<string, ContentType[]>;
};

export default function PrinciplePatternAccordion({accordion}: PrinciplePatternAccordionProps) {
  const expandedDefault: string[] = Object.keys(accordion).length ? [Object.keys(accordion)[0]] : [];
  const [expanded, setExpanded] = React.useState<string[]>(expandedDefault);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    if (newExpanded) {
      setExpanded([...new Set([...expanded, panel])]);
    } else {
      setExpanded(expanded.filter((x) => x !== panel));
    }
  };

  return (
    <>
      {(Object.keys(accordion) || []).map((title, index) => (
        <PrinciplePatternAccordionItem
          key={title}
          title={title}
          content={accordion[title] ?? []}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </>
  );
}
