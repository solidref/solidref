import React from 'react';
import { CodingPrinciple } from '../../state';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

export const PrinciplePaper = styled(Paper)(({theme}) => ({
  background: theme.palette.primary.light,
  borderRadius: 10,
  padding: '10px',
}));

type CodingPrincipleItemProps = {
  principle: CodingPrinciple,
}

function CodingPrincipleItem({principle}: CodingPrincipleItemProps) {
  return <PrinciplePaper>{principle.abbr}</PrinciplePaper>;
}

export type ByCodingPrinciplesProps = {
  principles: CodingPrinciple[];
};

function ByCodingPrinciples({principles}: ByCodingPrinciplesProps) {
  const [value, setValue] = React.useState(0);

  console.log(principles)

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          {principles
            .filter((principle, index) => index % 2 == 0)
            .map((principle) => (
              <CodingPrincipleItem key={principle.abbr} principle={principle} />
            ))}
        </Grid>
        <Grid xs={6}>
          {principles
            .filter((principle, index) => index % 2 == 1)
            .map((principle) => (
              <CodingPrincipleItem key={principle.abbr} principle={principle} />
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ByCodingPrinciples;
