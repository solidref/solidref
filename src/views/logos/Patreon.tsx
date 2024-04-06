import React from 'react';
import {SvgIconProps} from '@mui/material';
import {createSvgIcon} from '../icons/languages/SvgIcon';

const SvgIcon = createSvgIcon({
  viewBox: '0 0 20 20',
});

const Patreon: React.FunctionComponent<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M0 9.71C0 1.63 10.32-3.476 16.916 2.818c3.532 3.36 4.143 8.902 1.248 12.951-3.591 4.92-8.282 4.193-12.76 4.193v-9.588c.041-2.117.747-3.943 3.324-4.816 2.245-.664 4.863.581 5.653 2.947.832 2.533-.374 4.234-1.787 5.272-1.413 1.039-3.616 1.039-5.07.042v3.279c3.138 1.5 8.105-.303 9.684-4.4 1.08-2.864.332-6.185-1.912-8.26-2.701-2.2-5.653-2.74-8.811-1.204-2.204 1.12-3.741 3.404-4.116 5.894v10.834H.042L0 9.71z"
      ></path>
    </SvgIcon>
  );
};

export default Patreon;
