import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Divider, Grid, IconButton, Paper} from '@mui/material';
import {styled} from '@mui/material/styles';
import Logo from './Logo';
import OpenAI from './logos/OpenAI';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

const FooterBox = styled(Paper)(({theme}) => ({
  background: theme.palette.primary.dark,
  bottom: '0px',
  color: theme.palette.primary.light,
  padding: '20px',
  position: 'fixed',
  width: '100%',

  '& a': {
    color: theme.palette.primary.light,
  },

  '& hr': {
    background: theme.palette.primary.light,
  },

  '& svg': {
    color: theme.palette.primary.light,
  },
}));

function Footer() {
  const urlMessage = 'Share%20Coding%20Principles%20Reference%20for%20Developers';

  return (
    <FooterBox>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography style={{textAlign: 'left'}}>
              Built with
              <a href="https://chat.openai.com/" target="_blank" rel="noreferrer">
                <OpenAI style={{padding: '0 5px', verticalAlign: 'middle', width: '80px'}} />
              </a>
              and proud of it!
            </Typography>
            <Typography style={{textAlign: 'left'}}>
              You can contribute by forking use on
              <IconButton
                aria-label="delete"
                size="small"
                href={`https://github.com/dragoscirjan/solidref`}
                target="_blank"
              >
                <GithubIcon fontSize="inherit" />
              </IconButton>
              <img src="https://img.shields.io/github/forks/dragoscirjan/solidref" style={{verticalAlign: 'middle'}} />
            </Typography>
            {/* <Typography style={{textAlign: 'left'}}>
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
            </Typography> */}
          </Grid>
          <Grid item xs={4}>
            <Typography style={{textAlign: 'left'}}>
              <Link href={`/history`}>History of Programming Languages</Link>
            </Typography>
            <Typography style={{textAlign: 'left'}}>
              <Link href="https://github.com/dragoscirjan/solidref/issues">Found issues?</Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Logo size={1} />
            <span style={{padding: '0 5px'}}>{'|'}</span>
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
            <Typography variant="body2" align="center">
              {'Copyright © '}
              <Logo size={1} /> {new Date().getFullYear()}
              {'. All rights reserved.'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  );
}

export default Footer;
