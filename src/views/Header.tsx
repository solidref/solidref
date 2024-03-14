import * as React from 'react';

// import MenuIcon from '@mui/icons-material/Menu';
// import CodeOffIcon from '@mui/icons-material/CodeOff';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import {
  IconButton,
  Slide,
  useScrollTrigger,
  useTheme,
  Box,
  AppBar,
  Link,
  Button,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import Logo from './Logo';

import {ThemeWrapperContext} from '../components/styles/ThemeWrapper';

type HideOnScrollProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any, any>;
};

const HideOnScroll = ({children}: HideOnScrollProps) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ColorModeSwitch = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeWrapperContext);

  return (
    <IconButton
      onClick={() => colorMode.toggleColorMode()}
      aria-label="Dark mode toggler"
      color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
    >
      {theme.palette.mode === 'dark' ? <NightsStayIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

const HeaderLinks = () => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      {[
        {
          href: 'https://github.com/dragoscirjan/solidref',
          title: 'Visit our Github repository',
          iconLabel: 'Github Repository',
          icon: <GitHubIcon />,
        },
        {
          href: `https://facebook.com/sharer/sharer.php?u=${window.location.origin}`,
          title: 'Post us on Facebook',
          iconLabel: 'Post us on Facebook',
          icon: <FacebookIcon />,
        },
        {
          href: `https://twitter.com/intent/tweet/?text=Share%20coding%20principles%20and%20design%20patterns%20for%20developers&amp;url=${window.location.origin}`,
          title: 'Post us on Twitter',
          iconLabel: 'Post us on Twitter',
          icon: <TwitterIcon />,
        },
      ].map(({href, icon, iconLabel, title}) => (
        <Box component="a" href={href} rel="external nofollow noreferrer" target="_blank" title={title} key={href}>
          <IconButton aria-label={iconLabel}>{icon}</IconButton>
        </Box>
      ))}
    </Box>
  );
};

type SubMenuItem = {href: string; title: string; type?: 'link' | 'divider'};
type MenuItem = SubMenuItem & {subItems?: SubMenuItem[]};

type TobBarSubMenuItemProps = SubMenuItem & {handleClose: () => void};

const TobBarSubMenuItem = ({href, title, type = 'link', handleClose}: TobBarSubMenuItemProps) => {
  if (type === 'divider') {
    return <Divider style={{margin: 'auto 10px'}} />;
  }
  return (
    <MenuItem onClick={handleClose} key={href}>
      <Link href={href} title={title} style={{textDecoration: 'none'}}>
        {title}
      </Link>
    </MenuItem>
  );
};

type TobBarMenuItemProps = MenuItem;

const TopBarMenuItem = ({href, title, type = 'link', subItems}: TobBarMenuItemProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
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
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {subItems.map((subItem, index) => (
            <TobBarSubMenuItem {...subItem} handleClose={handleClose} key={`${index},${subItem.href}`} />
          ))}
        </Menu>
      )}
    </Box>
  );
};

// type TopBarProps = {};

const TopBar = () => {
  const menuItems: MenuItem[] = [
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
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} height={'4rem'}>
      <Box display={'flex'} alignItems={'center'}>
        {/* <Box marginRight={{xs: 1, sm: 2}}>
          <IconButton aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box> */}
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          href="/"
          title="SOLID.ref"
          height={{xs: 28, md: 32}}
          width={45}
          style={{textDecoration: 'none'}}
        >
          <Logo />
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        {menuItems.map((item) => (
          <TopBarMenuItem {...item} key={item.href} />
        ))}
        <Box>
          <ColorModeSwitch />
        </Box>
        <Box>
          <HeaderLinks />
        </Box>
      </Box>
    </Box>
  );
};

function Header() {
  const theme = useTheme();

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={1}
      >
        <TopBar />
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
