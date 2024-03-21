import GenericCodeIcon from '../../views/icons/GenericCodeIcon';
import {LazyLoadImageLazy, LazyLoadImageImport, LazyLoadImageProps} from '../images/LazyLoadImage';

// Extending SvgIconProps to include all properties a MUI Box element can have
export type LazyLoadIconProps = Omit<LazyLoadImageProps, 'image'> & {
  icon: string;
};

export default function LazyLoadIcon({mode = 'lazy', icon, fallback = GenericCodeIcon, ...rest}: LazyLoadIconProps) {
  const image = `../../views/icons/${icon}.tsx`;
  if (mode === 'lazy') {
    return <LazyLoadImageLazy image={image} fallback={fallback} {...rest} />;
  }
  return <LazyLoadImageImport image={image} fallback={fallback} {...rest} />;
}
