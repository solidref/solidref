import React from 'react';
import {CodingPrinciple} from '../../../state';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import CodeExampleAccordion from '../../../components/code/CodeExampleAccordion';
import {CodingPrincipleTitles} from '../../../constants';

export const PrinciplePaper = styled(Paper)(({theme}) => ({
  background: theme.palette.primary.light,
  borderRadius: 10,
  padding: '10px',
}));

type CodingPrincipleItemProps = {
  code: string;
  principle: CodingPrinciple;
};

function CodingPrincipleItem({code, principle}: CodingPrincipleItemProps) {
  return (
    <PrinciplePaper>
      <h3>{principle.title ?? CodingPrincipleTitles[principle.abbr]}</h3>
      {principle.description && <p>{principle.description}</p>}
      <CodeExampleAccordion examples={principle?.examples || []} language={code} />
    </PrinciplePaper>
  );
}

export type ByCodingPrinciplesProps = {
  code: string;
  principles: CodingPrinciple[];
};

function ByCodingPrinciples({code, principles}: ByCodingPrinciplesProps) {
  const [value, setValue] = React.useState(0);

  console.log(principles);

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          {principles
            .filter((_, index) => index % 2 == 0)
            .map((principle) => (
              <CodingPrincipleItem key={principle.abbr} code={code} principle={principle} />
            ))}
        </Grid>
        <Grid xs={6}>
          {principles
            .filter((_, index) => index % 2 == 1)
            .map((principle) => (
              <CodingPrincipleItem key={principle.abbr} code={code} principle={principle} />
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ByCodingPrinciples;
