import React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ContentType} from '../../../state';
import TypographySet from '../../generic/TypographySet';

type PrinciplePatternAccordionItemProps = {
  content: ContentType[];
  title: string;
  expanded: string[];
  handleChange: any;
};

// TODO: continue from here to customize accordion

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}} />} {...props} />
))(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

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
