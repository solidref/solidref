import React from 'react';
import {SvgIconProps} from '@mui/material';
import {createSvgIcon} from '../../SvgIcon';

const SvgIcon = createSvgIcon({
  viewBox: '0 0 128 128',
});

export interface ElmIconProps extends SvgIconProps {
  mainColor?: string;
}

const Elm: React.FunctionComponent<SvgIconProps> = ({mainColor = '#34495e', ...rest}: ElmIconProps) => {
  return (
    <SvgIcon {...rest}>
      <polygon fill={mainColor ?? '#efa500'} points="64 60.74 89.65 35.09 38.35 35.09 64 60.74"></polygon>
      <polygon fill={mainColor ?? '#8dd737'} points="7.91 4.65 33.74 30.49 89.91 30.49 64.07 4.65 7.91 4.65"></polygon>
      <rect
        width="39.71"
        height="39.53"
        x="75.42"
        y="44.17"
        fill={mainColor ?? '#8dd737'}
        transform="rotate(-45 95.27 63.928)"
      ></rect>
      <polygon fill={mainColor ?? '#60b5cc'} points="123.35 57.42 123.35 4.65 70.58 4.65 123.35 57.42"></polygon>
      <polygon fill={mainColor ?? '#34495e'} points="60.74 64 4.65 7.91 4.65 120.1 60.74 64"></polygon>
      <polygon fill={mainColor ?? '#efa500'} points="98.47 95.21 123.35 120.1 123.35 70.33 98.47 95.21"></polygon>
      <polygon fill={mainColor ?? '#60b5cc'} points="64 67.26 7.91 123.35 120.09 123.35 64 67.26"></polygon>
    </SvgIcon>
  );
};

export default Elm;
