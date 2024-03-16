import {Box, Link, Button} from '@mui/material';

import SubMenu, {LinkLikeItem} from './SubMenu';
import {useState} from 'react';

export type MenuLinksItem = LinkLikeItem & {subItems?: LinkLikeItem[]};

export default function MenuLinks() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const items: MenuLinksItem[] = [
    {href: '/', title: 'Home'},
    {
      href: '#',
      title: 'Code',
      subItems: [
        {href: '/coding-principles/solid', title: 'Coding Principles'},
        {href: '/design-patterns/structural', title: 'Design Patterns'},
        {type: 'divider', href: '#', title: 'Divider'},
        {href: '/clean-code', title: 'Clean Code'},
        {type: 'divider', href: '#', title: 'Divider'},
        {href: '/languages', title: 'Programming Languages'},
      ],
    },
    {href: '/about', title: 'About'},
  ];

  return (
    <Box display={'flex'}>
      {items.map(({href, subItems, title, type = 'link'}, index) => (
        <Box key={`${index},${href}`}>
          {type === 'link' && href !== '#' && (
            <Link href={href} title={title}>
              <Button>{title}</Button>
            </Link>
          )}
          {type === 'link' && href === '#' && (
            <Button
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {title}
            </Button>
          )}
          {subItems && subItems.length && (
            <SubMenu anchorEl={anchorEl} handleClose={handleClose} items={subItems} open={open} />
          )}
        </Box>
      ))}
    </Box>
  );
}
