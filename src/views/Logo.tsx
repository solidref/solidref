import React from 'react';
import Link from '@mui/material/Link';
import {styled} from '@mui/material/styles';
import SolidRef from './logos/SolidRef';

export type LogoProps = {
  size?: number;
  unit?: string;
};

const Solid = styled('span')(({theme}) => ({
  color: theme.palette.secondary.main,
}));

const Dot = styled('span')(({theme}) => ({
  color: theme.palette.secondary.dark,
}));

const Ref = styled('span')(({theme}) => ({
  color: theme.palette.secondary.light,
}));

function Logo({size = 36, unit = 'rem'}: LogoProps) {
  return (
    <Link
      variant="h6"
      underline="none"
      color="inherit"
      href="/"
      sx={{fontSize: `${size}${unit}`}}
      style={{fontWeight: 'bold'}}
    >
      <SolidRef />
      <Solid>{'SOLID'}</Solid>
      <Dot style={{fontSize: `${size + Math.trunc(size * 0.3)}${unit}`}}>{'.'}</Dot>
      <Ref>{'ref'}</Ref>
    </Link>
  );
}

export default Logo;
