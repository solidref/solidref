import * as React from 'react';

import { styled } from '@mui/system';
import { AccordionSummary } from '@mui/material';

const HorizontalAccordionSummary = styled(AccordionSummary)(() => ({
  transform: 'rotate(90deg)',
  transformOrigin: 'left center',
}))

export default HorizontalAccordionSummary;
