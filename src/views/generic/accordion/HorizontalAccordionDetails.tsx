import * as React from 'react';

import { styled } from '@mui/system';
import { AccordionDetails } from '@mui/material';

const HorizontalAccordionDetails = styled(AccordionDetails)(() => ({
  height: 'auto !important',
  minHeight: 'auto !important',
  padding: '0',
  width: '0px',
  minWidth: '0px'

}))

export default HorizontalAccordionDetails;
