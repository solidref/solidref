import * as SlickSlider from 'react-slick';
import {CardProps} from '@mui/material';

export type SlickSliderProps = SlickSlider.Settings & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
};

export const defaultSlickSliderProps: SlickSliderProps = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const defaultSliderCardProps: CardProps = {
  sx: {
    backgroundColor: 'transparent',
    height: '250px',
    boxShadow: 0,
  },
};
