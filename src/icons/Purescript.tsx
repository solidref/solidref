import React from 'react';
import {SvgIconProps} from '@mui/material';
import {createSvgIcon} from './SvgIcon';

const SvgIcon = createSvgIcon({
  viewBox: '0 0 64 64',
});

const Purescript: React.FunctionComponent<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M40.47 41.36H18.53l4.997 4.666H45.47zm-21.94-7.026h21.94l4.997-4.666H23.525zm21.94-16.36H18.53l4.995 4.667h21.94zM16.22 27.26l-3.3-3.302L.68 36.197a2.31 2.31 0 0 0-.68 1.65 2.33 2.33 0 0 0 .68 1.65l12.24 12.24 3.3-3.3-10.588-10.6zm47.096-2.755l-12.234-12.24-3.3 3.3 10.583 10.6-10.583 10.588 3.3 3.3 12.234-12.236A2.33 2.33 0 0 0 64 26.153c-.002-.624-.244-1.208-.684-1.648" />
    </SvgIcon>
  );
};

export default Purescript;
