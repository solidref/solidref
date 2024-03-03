// import * as React from 'react';

import { styled } from '@mui/system';
import { Accordion } from '@mui/material';

const HorizontalAccordion = styled(Accordion)(() => ({
  // border: '1px green solid',
  borderRadius: '0px',
  flex: '0 1 auto',
  minHeight: '400px',
  transition: 'flex 0.3s ease',
  width: '3rem',
  alignItems: 'start',

  '& + .Mui-expanded': {
    marginTop: '0px',
  },

  '&::before': {
    display: 'none',
  },

  '&.Mui-expanded': {
    flexGrow: 10,
    width: '100%',
  },

  '&.Mui-expanded .MuiAccordionSummary-root': {
    border: '0px',
    transform: 'rotate(0deg)',
    padding: '0 0 0 1rem',
  },

  '&.Mui-expanded .MuiAccordionDetails-root': {
    width: '100%',
  },
}));

// export interface HorizontalAccordionProps extends PaperProps { }

// const Container = styled(Paper)({
//   display: 'flex',
//   height: '400px',
// });

// function HorizontalAccordion({ children, ...rest }: HorizontalAccordionProps) {
//   rest = {
//     ...rest,
//     className: [(rest.className ?? '').split(' '), 'HorizontalAccordion'].join(' '),
//     elevation: rest.elevation ?? 1,
//   };
//   const LocalContainer = Container as typeof Paper;
//   return <LocalContainer {...rest}>{children}</LocalContainer>;
// }

export default HorizontalAccordion;
