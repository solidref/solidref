import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import {IconButton, Box} from '@mui/material';

export default function SocialLinks() {
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
}
