import * as React from 'react';
import {styled} from '@mui/system';

export type HorizontalAccordionSectionContentProps = {
  children: React.ReactNode;
};

const ContentContainer = styled('div')({
  // background: 'red',
  display: 'none',
  flexGrow: 1,
  overflow: 'auto',

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
