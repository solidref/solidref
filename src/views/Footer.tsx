import React from 'react';

import {Box, Divider, Grid, IconButton, Link, Typography, styled} from '@mui/material';
import Container from './generic/Container';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import OpenAI from './logos/OpenAI';
import PaypalIcon from './logos/Paypal';
import PatreonIcon from './logos/Patreon';
import Logo from './Logo';

const FooterBox = styled(Box)(() => ({
  marginTop: 'auto',
}));

export default function Footer() {
  const urlMessage = 'Share%20Coding%20Principles%20Reference%20for%20Developers';

  return (
    <FooterBox>
      <Divider />
      <Box position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography style={{textAlign: 'left'}}>
                Built with
                <a href="https://chat.openai.com/" target="_blank" rel="noreferrer">
                  <OpenAI style={{padding: '0 5px', verticalAlign: 'middle', width: '80px'}} />
                </a>
                and proud of it!
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography style={{textAlign: 'left'}}>You can contribute by</Typography>
              <Typography style={{textAlign: 'left', fontSize: '.8rem'}}>
                - forking us on
                <IconButton
                  aria-label="delete"
                  size="small"
                  href={`https://github.com/dragoscirjan/solidref`}
                  target="_blank"
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <img
                  src="https://img.shields.io/github/forks/dragoscirjan/solidref"
                  style={{verticalAlign: 'middle'}}
                />
              </Typography>
              <Typography style={{textAlign: 'left', fontSize: '.8rem'}}>
                - finding <Link href="https://github.com/dragoscirjan/solidref/issues">issues</Link> or fixing our code
              </Typography>
              <Typography style={{textAlign: 'left', fontSize: '.8rem'}}>
                - supporting us on
                <IconButton
                  aria-label="delete"
                  size="small"
                  href={`https://www.paypal.com/donate/?hosted_button_id=FMRTTBGG5V3CQ`}
                >
                  <PaypalIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="small"
                  href={`https://www.paypal.com/donate/?hosted_button_id=FMRTTBGG5V3CQ`}
                >
                  <PatreonIcon fontSize="inherit" />
                </IconButton>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Logo />
              <IconButton
                aria-label="delete"
                size="small"
                href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
              >
                <FacebookIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                href={`https://twitter.com/intent/tweet/?text=${urlMessage}&url=${window.location.href}`}
              >
                <TwitterIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                href={`https://reddit.com/submit/?url=${window.location.href}&resubmit=true&title=${urlMessage}`}
              >
                <RedditIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&description=${urlMessage}`}
              >
                <PinterestIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=SOLID.ref%20-%20Coding%20Principles%20Cheat%20Sheet&summary=${urlMessage}`}
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="body2" align="center">
                  {'Copyright © '}
                </Typography>
                <Logo />
                <Typography variant="body2" align="center" style={{padding: '0 0 0 7px'}}>
                  {new Date().getFullYear()}
                  {'. All rights reserved.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </FooterBox>
  );
}
