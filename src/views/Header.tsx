import {useTheme, Box, AppBar} from '@mui/material';
import Logo from './Logo';

import HideOnScroll from './header/HideOnScroll';
import SocialLinks from './header/SocialLinks';
import MenuLinks from './header/MenuLinks';
import ColorModeSwitch from './header/ColorModeSwitch';
import LanguageSelector from '../components/header/LanguageSelector';

export default function Header() {
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
              <MenuLinks />
            </Box>
            <Box>
              <LanguageSelector />
            </Box>
            <Box>
              <ColorModeSwitch />
            </Box>
            <Box>
              <SocialLinks />
            </Box>
          </Box>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
}
