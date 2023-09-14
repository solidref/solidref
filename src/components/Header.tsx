import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar, {AppBarProps} from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

const Toolbar = styled(MuiToolbar)(({theme}) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function Header() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box sx={{flex: 1}} />
          <Link variant="h6" underline="none" color="inherit" href="/premium-themes/onepirate/" sx={{fontSize: 24}}>
            {'SOLIDref'}
          </Link>
          <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
            {/* <a href="https://github.com/dragoscirjan/solidref" rel="external nofollow noreferrer" target="_blank">
              <img
                alt="GitHub Repo stars"
                style={{height: '26px', opacity: '0.8'}}
                src="https://img.shields.io/github/stars/dragoscirjan/solidref?style=social"
              />
            </a> */}
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

            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{...rightLink, color: 'secondary.main'}}
            >
              {'Sign Up'}
            </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
