import React from 'react';
import {SvgIconProps} from '@mui/material';
import {createSvgIcon} from '../icons/SvgIcon';

const SvgIcon = createSvgIcon({
  width: 100,
  height: 100,
  viewBox: '0 0 100 100',
});

const SolidRef: React.FunctionComponent<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <circle cx="50" cy="50" r="45" fill="none" stroke="#000" stroke-width="2" />
      <path d="M 25,75 L 75,75 L 50,25 Z" fill="none" stroke="#000" stroke-width="2" />
      <text x="50" y="90" font-family="Arial" font-size="10" text-anchor="middle">
        SOLID.ref
      </text>
    </SvgIcon>
  );
};

export default SolidRef;
