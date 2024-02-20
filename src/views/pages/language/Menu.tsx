import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {CodingPrinciples, DesignPatterns, Language} from '../../../state';
import {CodingPrincipleTitles} from '../../../constants';
import {styled} from '@mui/material/styles';

const MenuPopper = styled(Popper)(() => ({
  zIndex: 100,
}));

type PPMenuItemsProps = {
  children: string;
  ppItems: CodingPrinciples | DesignPatterns;
  setPrincipleOrPattern: unknown;
};

function PPMenuItem({children, ppItems, setPrincipleOrPattern}: PPMenuItemsProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {children}
      </Button>
      <MenuPopper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({TransitionProps, placement}) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {Object.keys(ppItems).map((key) => (
                    <MenuItem
                      key={key}
                      onClick={(event) => {
                        handleClose(event);
                        setPrincipleOrPattern({
                          type: key,
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          principlesOrPatterns: (ppItems as any)[key],
                        });
                      }}
                    >
                      {CodingPrincipleTitles[key] ?? CodingPrincipleTitles.unknownPrinciple}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </MenuPopper>
    </div>
  );
}

export type MenuProps = {
  language: Language;
  setPrincipleOrPattern: unknown;
};

export default function Menu({language, setPrincipleOrPattern}: MenuProps) {
  return (
    <Stack direction="row" spacing={2}>
      {language.principles && (
        <PPMenuItem ppItems={language.principles} setPrincipleOrPattern={setPrincipleOrPattern}>
          Principles
        </PPMenuItem>
      )}
      {language.patterns && (
        <PPMenuItem ppItems={language.patterns} setPrincipleOrPattern={setPrincipleOrPattern}>
          Patterns
        </PPMenuItem>
      )}
    </Stack>
  );
}
