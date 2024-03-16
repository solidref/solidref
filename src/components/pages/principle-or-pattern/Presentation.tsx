import React from 'react';
import {styled} from '@mui/material/styles';
import {Typography, Accordion, AccordionDetails, AccordionSummary, Grid} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {CodeExample, CodingPrinciple, ContentType, DesignPattern, PrincipleOrPatternContent} from '../../../state';

import TypographySet from '../../../views/generic/TypographySet';
import SyntaxHighlighter from '../../../views/code/SyntaxHighlighter';

type PrinciplePatternAccordionItemProps = {
  content: ContentType[];
  title: string;
  expanded: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: any;
  examples: CodeExample[];
  languageCode: string;
};

const CustomAccordion = styled(Accordion)(() => ({
  background: 'none',
  margin: '1rem 0',
}));

const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  background: 'none',
  padding: '0',
  '& .MuiAccordionSummary-content .MuiTypography-root': {
    fontSize: '1.5rem',
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(() => ({
  padding: '0',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function PrinciplePatternAccordionItem({
  title,
  content,
  handleChange,
  examples,
  expanded,
  languageCode,
}: PrinciplePatternAccordionItemProps) {
  return (
    <CustomAccordion expanded={expanded.includes(title)} onChange={handleChange(title)} elevation={0}>
      <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </CustomAccordionSummary>
      <CustomAccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TypographySet content={content} />
          </Grid>
          <Grid item xs={6}>
            {examples.map((example) => (
              <>
                <Typography variant="h6" style={{padding: '0.5rem 0'}}>
                  {example.title ?? 'Example'}
                </Typography>
                <SyntaxHighlighter code={example.code || '// missing code'} language={languageCode} />
              </>
            ))}
          </Grid>
        </Grid>
      </CustomAccordionDetails>
    </CustomAccordion>
  );
}

export type PrinciplePatternAccordionProps = {
  principleOrPatternContent: PrincipleOrPatternContent;
  principleOrPatternExamples: DesignPattern[] | CodingPrinciple[];
  languageCode: string;
};

export default function Presentation({
  principleOrPatternContent,
  principleOrPatternExamples,
  languageCode,
}: PrinciplePatternAccordionProps) {
  const {before = [], accordion = {}, after = []} = principleOrPatternContent;

  const expandedDefault: string[] = Object.keys(accordion).length ? [Object.keys(accordion)[0]] : [];

  const [expanded, setExpanded] = React.useState<string[]>(expandedDefault);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
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
          examples={principleOrPatternExamples.find((ppex) => ppex.title === title)?.examples ?? []}
          languageCode={languageCode}
        />
      ))}
      <TypographySet content={after} />
    </>
  );
}
