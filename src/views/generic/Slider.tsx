import {createElement} from 'react';

import * as SlickSlider from 'react-slick';

import {Card, CardContent, CardContentProps, CardProps} from '@mui/material';
import {SlickSliderProps, defaultSlickSliderProps, defaultSliderCardProps} from './SliderDefaults';

export type SliderFrameWrapperProps = {
  cardProps?: CardProps;
  cardContentProps?: CardContentProps;
  children: React.ReactNode;
};

export function SliderFrameWrapper({
  cardProps = defaultSliderCardProps,
  cardContentProps = {},
  children,
}: SliderFrameWrapperProps) {
  return (
    <Card {...cardProps}>
      <CardContent {...cardContentProps}>{children}</CardContent>
    </Card>
  );
}

export type SliderProps = Omit<SliderFrameWrapperProps, 'children'> & {
  sliderProps?: SlickSliderProps;
  frameWrapper?: React.ElementType;
  frames: React.ReactNode[];
};

export default function Slider({
  sliderProps = defaultSlickSliderProps,
  frameWrapper = SliderFrameWrapper,
  frames,
  ...rest
}: SliderProps) {
  return (
    <SlickSlider.default {...sliderProps}>
      {frames.map((frame) => createElement(frameWrapper, {...rest, key: frame, children: frame}))}
    </SlickSlider.default>
  );
}
