import * as React from 'react';
import {styled} from '@mui/system';
import {Paper, PaperProps} from '@mui/material';

export interface HorizontalAccordionProps extends PaperProps {}

const Container = styled(Paper)({
  display: 'flex',
  height: '400px',
  overflow: 'auto',
});

function HorizontalAccordion({children, ...rest}: HorizontalAccordionProps) {
  rest = {
    ...rest,
    className: [(rest.className ?? '').split(' '), 'HorizontalAccordion'].join(' '),
    elevation: rest.elevation ?? 1,
  };
  const LocalContainer = Container as typeof Paper;
  return <LocalContainer {...rest}>{children}</LocalContainer>;
}

export default HorizontalAccordion;
