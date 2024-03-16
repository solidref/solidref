import {Menu, MenuItem, Link, Divider} from '@mui/material';

export type LinkLikeItem = {
  href: string;
  title: string;
  type?: 'link' | 'divider';
  handleClose?: React.MouseEventHandler<HTMLLIElement>;
};

type SubMenuProps = {
  items: LinkLikeItem[];
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
};

export default function SubMenu({anchorEl, handleClose, items, open}: SubMenuProps) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {items.map(({href, handleClose, title, type}, index) =>
        type !== 'divider' ? (
          <MenuItem onClick={handleClose} key={`${index},${href}`}>
            <Link href={href} title={title} style={{textDecoration: 'none'}}>
              {title}
            </Link>
          </MenuItem>
        ) : (
          <Divider style={{margin: 'auto 10px'}} key={`${index},${href}`} />
        ),
      )}
    </Menu>
  );
}
