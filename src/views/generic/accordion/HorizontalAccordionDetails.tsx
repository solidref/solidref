// import * as React from 'react';

import { styled } from '@mui/system';
import { AccordionDetails } from '@mui/material';

const HorizontalAccordionDetails = styled(AccordionDetails)(() => ({
  // background: 'red',
  height: 'auto !important',
  minHeight: 'auto !important',
  minWidth: '0px',
  overflow: 'hidden',
  padding: '1rem',
  width: '0px',
}));

export default HorizontalAccordionDetails;
