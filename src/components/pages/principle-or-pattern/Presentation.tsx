import React from 'react';
import {styled} from '@mui/material/styles';
import {Typography, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {ContentType, PrincipleOrPatternContent} from '../../../state';

import TypographySet from '../../../views/generic/TypographySet';

type PrinciplePatternAccordionItemProps = {
  content: ContentType[];
  title: string;
  expanded: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: any;
};

const CustomAccordion = styled(Accordion)(() => ({
  background: 'none',
}));

const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  background: 'none',
}));

const CustomAccordionDetails = styled(AccordionDetails)(({theme}) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function PrinciplePatternAccordionItem({title, content, handleChange, expanded}: PrinciplePatternAccordionItemProps) {
  return (
    // <CustomAccordion disableGutters elevation={0} expanded={expanded.includes(title)} onChange={handleChange(title)}>
    <CustomAccordion expanded={expanded.includes(title)} onChange={handleChange(title)} elevation={0}>
      <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </CustomAccordionSummary>
      <CustomAccordionDetails>
        <TypographySet content={content} />
      </CustomAccordionDetails>
    </CustomAccordion>
  );
}

export type PrinciplePatternAccordionProps = {
  principleOrPattern: PrincipleOrPatternContent;
};

export default function Presentation({principleOrPattern}: PrinciplePatternAccordionProps) {
  const {before = [], accordion = {}, after = []} = principleOrPattern;

  const expandedDefault: string[] = Object.keys(principleOrPattern?.accordion ?? {}).length
    ? [Object.keys(principleOrPattern?.accordion)[0]]
    : [];

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
      <TypographySet content={before} />
      {Object.keys(accordion).map((title) => (
        <PrinciplePatternAccordionItem
          key={title}
          title={title}
          content={accordion[title]}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
      <TypographySet content={after} />
    </>
  );
}
