// import * as React from 'react';

import {styled} from '@mui/system';
import {AccordionSummary} from '@mui/material';

const HorizontalAccordionSummary = styled(AccordionSummary)(() => ({
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  padding: '0',
  transform: 'rotate(90deg) translateX(150%)',
  transformOrigin: 'top right',
  whiteSpace: 'nowrap',
  justifyContent: 'start',

  '&:hover *': {
    fontWeight: 'bold',
  },
}));

export default HorizontalAccordionSummary;
