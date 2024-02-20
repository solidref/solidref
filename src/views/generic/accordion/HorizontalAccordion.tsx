import * as React from 'react';

import { styled } from '@mui/system';
import { Accordion } from '@mui/material';

const HorizontalAccordion = styled(Accordion)(() => ({
  flex: '1',
  height: '400px',
  transition: 'flex 0.3s ease',
  width: '30px',

  '&.Mui-expanded .MuiAccordionSummary-root': {
    transform: 'rotate(0deg)',
  }
}))

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
