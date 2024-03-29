import {SvgIcon, SvgIconProps, styled} from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export const createSvgIcon = (
  props: SvgIconProps = {
    viewBox: '0 0 24 24',
    // focusable: 'false',
    // 'aria-hidden': 'true',
  },
) => {
  const CustomSvgIcon = styled(SvgIcon, {
    name: 'MopeimIcon',
    shouldForwardProp: (prop) => prop !== 'fill',
  })<SvgIconProps>(() => ({
    // fill: 'none',
    // stroke: 'currentColor',
    // strokeLinecap: 'round',
    // strokeLinejoin: 'round',
    // strokeWidth: '2.25px',
  }));

  CustomSvgIcon.defaultProps = {
    viewBox: '0 0 24 24',
    focusable: 'false',
    'aria-hidden': 'true',
    ...props,
  };

  return CustomSvgIcon;
};

const CustomSvgIcon = createSvgIcon();

export default CustomSvgIcon;
