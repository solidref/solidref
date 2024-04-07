import React from 'react';
import {SvgIconProps} from '@mui/material';
import {createSvgIcon} from '../../SvgIcon';

const SvgIcon = createSvgIcon({
  viewBox: '0 0 256 256',
});

const GenericCodeIcon: React.FunctionComponent<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="100%" // Set the width to 100% to fill the viewBox
        height="100%" // Set the height to 100% to fill the viewBox
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 181.424 126.936"
        x={(256 - 181.424) / 2} // Center horizontally
        y={(256 - 126.936) / 2} // Center vertically
        className={[...(props.className ?? '').split(' '), 'GenericCodeIcon'].join(' ')}
      >
        <path d="M51.895 106.535a9.039 9.039 0 0 1-6.018-2.284L0 63.469l48.427-43.05a9.066 9.066 0 0 1 12.042 13.555L27.296 63.469l30.628 27.217a9.072 9.072 0 0 1-6.018 15.85Zm81.1-.017 48.427-43.05-45.876-40.782a9.065 9.065 0 0 0-12.038 13.554l30.628 27.228-33.176 29.484a9.068 9.068 0 0 0 12.036 13.566Zm-42.408 12.846 18.133-108.8a9.063 9.063 0 1 0-17.878-2.986l-18.134 108.8a9.066 9.066 0 0 0 7.452 10.438 9.616 9.616 0 0 0 1.5.119 9.068 9.068 0 0 0 8.931-7.571Z"></path>
      </svg>
    </SvgIcon>
  );
};

export default GenericCodeIcon;
