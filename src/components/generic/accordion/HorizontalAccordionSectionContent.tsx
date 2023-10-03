import * as React from 'react';
import {styled} from '@mui/system';

export type HorizontalAccordionSectionContentProps = {
  children: React.ReactNode;
};

const ContentContainer = styled('div')({
  display: 'none',

  '&:after': {
    position: 'relative',
    fontSize: '24px',
    fontWeight: 'bold',
  },

  '&:target': {
    padding: '10px',
  },
});

function HorizontalAccordionSectionContent({children, ...rest}: HorizontalAccordionSectionContentProps) {
  return <ContentContainer className="HorizontalAccordionSectionContent">{children}</ContentContainer>;
}

export default HorizontalAccordionSectionContent;
