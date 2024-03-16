import {Box, IconButton, Menu, MenuItem, styled} from '@mui/material';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {selectedLanguageCodeState} from '../../state';
import LazyLoadIcon from '../../components/icons/LazyLoadIcon';
import {useState, MouseEvent} from 'react';
import {loadLanguageHierarchy} from '../../selector';
import {LocalStorageSelectedLanguageCodeLabel} from '../../constants';

const GridMenu = styled(Menu)({
  '& .MuiMenu-list': {
    display: 'grid',
    gridTemplateColumns: '32% 32% 32%',
    gridTemplateRows: '50px 50px 50px 50px',
    columnGap: '2%',
    rowGap: '5px',
  },
});

const GridMenuItem = styled(MenuItem)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const IconStyle = {
  width: '1.5rem',
  height: '1.5rem',
  display: 'block',
  margin: 'auto',
  transform: 'rotate(-15deg)',
};

export default function LanguageSelector() {
  const selectedLanguageCode = useRecoilValue(selectedLanguageCodeState) as string;
  const setSelectedLanguageCode = useSetRecoilState(selectedLanguageCodeState);
  const languagesHierarchy = useRecoilValue(loadLanguageHierarchy);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectLanguageCodeAndClose = (code: string) => {
    setSelectedLanguageCode(code);
    localStorage.setItem(LocalStorageSelectedLanguageCodeLabel, code);
    setAnchorEl(null);
  };

  if (!languagesHierarchy?.list?.length) {
    return <></>;
  }

  return (
    <Box>
      <IconButton
        aria-label={'Choose your Programming Language'}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <LazyLoadIcon
          icon={selectedLanguageCode.charAt(0).toUpperCase() + selectedLanguageCode.slice(1)}
          style={IconStyle}
          fallbackProps={{
            style: IconStyle,
          }}
        />
      </IconButton>
      {open && (
        <GridMenu
          id="language-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {languagesHierarchy?.list?.map(({code, name}) => (
            <GridMenuItem key={code}>
              <IconButton
                onClick={() => selectLanguageCodeAndClose(code)}
                aria-label={`Set ${name} as Your Programming Language`}
              >
                <LazyLoadIcon
                  icon={code.charAt(0).toUpperCase() + code.slice(1)}
                  style={IconStyle}
                  fallbackProps={{
                    style: IconStyle,
                  }}
                />
              </IconButton>
            </GridMenuItem>
          ))}
        </GridMenu>
      )}
    </Box>
  );
}
