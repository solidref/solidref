import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion, AccordionDetails, AccordionSummary, AccordionSummaryProps, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';

import {AsArticleProps} from './AsArticle';
import CodeExampleAccordion from '../../code/CodeExampleAccordion';
import TypographySet from '../../generic/TypographySet';
import SyntaxHighlighter from '../../generic/SyntaxHighlighter';

export type AsAccordionProps = AsArticleProps & {
  expanded: string[];
  onChange: (event: SyntheticEvent, expanded: boolean) => void;
  summaryProps?: AccordionSummaryProps;
};

export default function AsAccordion({
  expanded,
  language = 'js',
  onChange,
  patternOrPrinciple,
  summaryProps = {},
  type,
}: AsAccordionProps) {
  summaryProps = {
    expandIcon: <ExpandMoreIcon />,
    ...summaryProps,
  };
  const {description, examples, title} = patternOrPrinciple;
  return (
    <Accordion expanded={expanded.includes(title)} key={title} elevation={0} onChange={onChange}>
      <CustomAccordionSummary {...summaryProps} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{title}</Typography>
        {!description && (
          <CustomLink
            to={`/${type.includes('principles') ? 'coding-principles' : 'design-patterns'}/${type.replace(/(principles|patterns)_/, '')}`}
            title={`${title} Definition`}
          >
            <BookmarksIcon />
          </CustomLink>
        )}
      </CustomAccordionSummary>
      <AccordionDetails>
        {description && <TypographySet content={description} />}
        {examples && examples.length === 1 && (
          <SyntaxHighlighter code={examples?.[0]?.code ?? '// missing code'} language={language} />
        )}
        {examples && examples.length > 1 && <CodeExampleAccordion examples={examples || []} language={language} />}
      </AccordionDetails>
    </Accordion>
  );
}

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
