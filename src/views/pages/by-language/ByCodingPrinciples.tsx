import React from 'react';
import {CodingPrinciple} from '../../../state';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import CodeExampleAccordion from '../../code/CodeExampleAccordion';
import {CodingPrincipleTitles} from '../../../constants';
import {Link} from 'react-router-dom';

export const PrinciplePaper = styled(Paper)(({theme}) => ({
  background: theme.palette.primary.light,
  borderRadius: 10,
  padding: '10px',
}));

type CodingPrincipleItemProps = {
  code: string;
  principle: CodingPrinciple;
  type: string;
};

function CodingPrincipleItem({code, principle, type}: CodingPrincipleItemProps) {
  const to = `/coding-principles/${type}?item=${principle.abbr}`;

  return (
    <PrinciplePaper>
      <h3>
        {principle.title ?? CodingPrincipleTitles[principle.abbr]}
        <Link to={to}>
          <BookmarksIcon />
        </Link>
      </h3>
      {principle.description && <p>{principle.description}</p>}
      <CodeExampleAccordion examples={principle?.examples || []} language={code} />
    </PrinciplePaper>
  );
}

export type ByCodingPrinciplesProps = {
  code: string;
  principles: CodingPrinciple[];
  type: string;
};

function ByCodingPrinciples({code, principles, type}: ByCodingPrinciplesProps) {

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          {principles
            .filter((_, index) => index % 2 === 0)
            .map((principle) => (
              <CodingPrincipleItem key={principle.abbr} code={code} principle={principle} type={type} />
            ))}
        </Grid>
        <Grid xs={6}>
          {principles
            .filter((_, index) => index % 2 === 1)
            .map((principle) => (
              <CodingPrincipleItem key={principle.abbr} code={code} principle={principle} type={type} />
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ByCodingPrinciples;
