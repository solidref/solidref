import * as React from 'react';
import Box from '@mui/material/Box';
import MuiAppBar, {AppBarProps} from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {IconButton} from '@mui/material';
import Logo from './Logo';
import ColorModeSwitch from '../components/header/ColorModeSwitch';

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export const Toolbar = styled(MuiToolbar)(({theme}) => ({
  background: theme.palette.primary.dark,
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },

  '& svg': {
    color: theme.palette.primary.light,
  },
}));

export const CenteredToolbar = styled(Toolbar)(({theme}) => ({
  justifyContent: 'center !important',
  overflow: 'auto',
  flexDirection: 'column',
  height: 'auto !important',
  padding: '50px 0',

  '& .MuiTypography-root': {
    flexGrow: '1',
    color: theme.palette.primary.light,
    padding: '10px 0',
  },
}));

function Header() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box sx={{flex: 1}} />
          <Logo size={2} />
          <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
            <a href="https://github.com/dragoscirjan/solidref" rel="external nofollow noreferrer" target="_blank">
              <IconButton aria-label="Github Repository">
                <GitHubIcon />
              </IconButton>
            </a>
            <a
              href="https://facebook.com/sharer/sharer.php?u=https://quickref.me/index.html"
              rel="external nofollow noreferrer"
              target="_blank"
            >
              <IconButton aria-label="Publish to Facebook">
                <FacebookIcon />
              </IconButton>
            </a>
            <a
              href="https://twitter.com/intent/tweet/?text=Share%20quick%20reference%20and%20cheat%20sheet%20for%20developers&amp;url=https://quickref.me/index.html"
              rel="external nofollow noreferrer"
              target="_blank"
            >
              <IconButton aria-label="Publish to Twitter">
                <TwitterIcon />
              </IconButton>
            </a>
            <ColorModeSwitch />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
