import * as React from 'react';
import {styled} from '@mui/system';
import {Paper, PaperProps} from '@mui/material';

export interface HorizontalAccordionSectionTitleProps extends PaperProps {
  children: string;
  onTitleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const TitleContainer = styled(Paper)({
  background: 'transparent',
  cursor: 'pointer',
  position: 'relative',
  width: '100%',
});

const StyledLink = styled('a')({
  display: 'block',
  fontWeight: 'bold',
  left: '50%',
  position: 'relative',
  transform: 'rotate(90deg)',
  transformOrigin: 'left center',
  whiteSpace: 'nowrap',
});

function findMySection(el: HTMLElement | null, className: string): HTMLElement | null {
  while (el && el !== document.documentElement) {
    // document.documentElement refers to the <html> element
    if (el.classList.contains(className)) {
      return el;
    }
    el = el.parentElement; // Use parentElement instead of parentNode for type safety as parentNode can be a Node, not necessarily an HTMLElement
  }
  return null;
}

function findSectionSiblings(el: HTMLElement, className: string): HTMLElement[] {
  const siblings: HTMLElement[] = [];
  let sibling: ChildNode | null | undefined = el.parentNode?.firstChild;

  while (sibling) {
    console.log(sibling);
    if (sibling.nodeType === 1 && sibling !== el && (sibling as HTMLElement).classList.contains(className)) {
      siblings.push(sibling as HTMLElement);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
}

function HorizontalAccordionSectionTitle({children, onTitleClick, ...rest}: HorizontalAccordionSectionTitleProps) {
  rest = {
    ...rest,
    className: [...(rest.className || '').split(' '), 'HorizontalAccordionSectionTitle'].join(' '),
    elevation: rest.elevation ?? 0,
  };

  const defaultOnClick = (reactEvent: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const mySection = findMySection(reactEvent.target as HTMLAnchorElement, 'HorizontalAccordionSection');
    if (!mySection) {
      console.error('No accordion section found');
      return;
    }
    const mySectionSiblings = findSectionSiblings(mySection, 'HorizontalAccordionSection');

    mySectionSiblings.forEach((el) => el.classList.remove('HorizontalAccordionSection-Targeted'));
    mySection.classList.add('HorizontalAccordionSection-Targeted');
  };

  const Container = TitleContainer as typeof Paper;

  return (
    <Container {...rest}>
      <StyledLink className="HorizontalAccordionSectionTitle-Link" onClick={onTitleClick ?? defaultOnClick}>
        {children}
      </StyledLink>
    </Container>
  );
}

export default HorizontalAccordionSectionTitle;
