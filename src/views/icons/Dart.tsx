import React from 'react';
import {SvgIconProps} from '@mui/material';
import {createSvgIcon} from './SvgIcon';

const SvgIcon = createSvgIcon({
  x: '0px',
  y: '0px',
  viewBox: '188 251.8 110.5 110.5',
  width: '110.5',
  height: '110.5',
});

const Coffeescript: React.FunctionComponent<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="m 217.7,281.7 -7.1,-7.1 v 51.2 l 0.1,2.4 c 0,1.1 0.2,2.4 0.6,3.7 l 56.2,19.8 14,-6.2 v 0 z"
        id="path2"
        fill="#00c4b3"
      />
      <path
        d="m 211.3,331.9 v 0 c 0,0 0,0 0,0 0,0 0,0 0,0 z m 70.2,13.6 -14,6.2 -56.1,-19.8 c 1.1,4.1 3.4,8.7 6,11.3 l 18.3,18.2 40.8,0.1 z"
        id="path4"
        fill="#22d3c5"
      />
      <path
        d="m 210.8,274.6 -21.8,33 c -1.8,1.9 -0.9,5.9 2,8.9 l 12.6,12.7 7.9,2.8 c -0.3,-1.3 -0.6,-2.6 -0.6,-3.7 l -0.1,-2.4 z"
        id="path6"
        fill="#0075c9"
      />
      <path
        d="m 267.9,275.2 c -1.3,-0.3 -2.6,-0.5 -3.7,-0.6 l -2.5,-0.1 h -51.1 l 70.9,70.9 v 0 l 6.2,-14 z"
        id="path8"
        fill="#0075c9"
      />
      <path
        d="m 267.8,275.2 c 0.1,0 0.1,0 0,0 v 0 c 0.1,0 0.1,0 0,0 z m 11.4,6 c -2.6,-2.6 -7.1,-5 -11.3,-6 l 19.8,56.2 -6.2,14 v 0 l 15.2,-4.9 v -41.7 z"
        id="path10"
        fill="#00a8e1"
      />
      <path
        d="m 265.1,267.4 -12.7,-12.6 c -2.9,-2.9 -6.9,-3.8 -8.9,-2 l -33,21.8 h 51.1 l 2.5,0.1 c 1.1,0 2.4,0.2 3.7,0.6 z"
        id="path12"
        fill="#00c4b3"
      />
    </SvgIcon>
  );
};

export default Coffeescript;
