import React from 'react';
import {styled} from '@mui/material/styles';
import {Paper, PaperProps} from '@mui/material';
// import {light, dark} from '../../../theme';

export interface HorizontalAccordionSectionProps extends PaperProps {}

const SectionContainer = styled(Paper)(({theme}) => ({
  display: 'flex',
  flex: '0 0 auto',
  transition: 'flex 0.3s ease',
  width: '10%',

  // '&:hover': {
  //   background: theme.palette.mode === 'light' ? light['100'] : dark['100'],
  // },

  '&.HorizontalAccordionSection-Targeted': {
    background: theme.palette.primary.light,
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    justifyContent: 'left',
    padding: '10px',
  },

  '&.HorizontalAccordionSection-Targeted:hover': {
    // background: '#DDD',
  },

  '&.HorizontalAccordionSection-Targeted .HorizontalAccordionSectionTitle a': {},

  '&.HorizontalAccordionSection-Targeted .HorizontalAccordionSectionTitle-Link': {
    left: '0',
    transform: 'rotate(0deg)',
  },

  '&.HorizontalAccordionSection-Targeted .HorizontalAccordionSectionContent': {
    display: 'block',
  },
}));

function HorizontalAccordionSection({children, ...rest}: HorizontalAccordionSectionProps) {
  rest = {
    ...rest,
    className: [...(rest.className || '').split(' '), 'HorizontalAccordionSection'].join(' '),
    elevation: rest.elevation ?? 0,
  };

  const Container = SectionContainer as typeof Paper;

  return <Container {...rest}>{children}</Container>;
}

export default HorizontalAccordionSection;
