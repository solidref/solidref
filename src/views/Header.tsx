import * as React from 'react';

// import MenuIcon from '@mui/icons-material/Menu';
// import CodeOffIcon from '@mui/icons-material/CodeOff';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import {IconButton, Slide, useScrollTrigger, useTheme, Box, AppBar} from '@mui/material';
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
    <>
      {/* <Box>
        <Link href={'/by-language'} title="By Programming Language">
          <Button>By Language</Button>
        </Link>
      </Box> */}
      <Box
        component="a"
        href="https://github.com/dragoscirjan/solidref"
        rel="external nofollow noreferrer"
        target="_blank"
        title="Visit our Github repository"
      >
        <IconButton aria-label="Github Repository">
          <GitHubIcon />
        </IconButton>
      </Box>
      <Box
        component="a"
        href="https://facebook.com/sharer/sharer.php?u=https://quickref.me/index.html"
        rel="external nofollow noreferrer"
        target="_blank"
        title="Post us on Facebook"
      >
        <IconButton aria-label="Publish to Facebook">
          <FacebookIcon />
        </IconButton>
      </Box>
      <Box
        component="a"
        href="https://twitter.com/intent/tweet/?text=Share%20quick%20reference%20and%20cheat%20sheet%20for%20developers&amp;url=https://quickref.me/index.html"
        rel="external nofollow noreferrer"
        target="_blank"
        title="Post us on Twitter"
      >
        <IconButton aria-label="Publish to Twitter">
          <TwitterIcon />
        </IconButton>
      </Box>
    </>
  );
};

// type TopBarProps = {};

const TopBar = () => {
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
