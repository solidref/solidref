import GenericCodeIcon from '../../views/icons/lazy/languages/GenericCodeIcon';
import {LoadSvgWithLazy, LoadSvgWithImport, LazyLoadSvgProps, Importer} from '../images/LazyLoadImage';

// Extending SvgIconProps to include all properties a MUI Box element can have
export type LazyLoadIconProps = Omit<LazyLoadSvgProps, 'name' | 'importer'> & {
  importer?: Importer;
  icon: string;
};

export default function LazyLoadIcon({
  fallback = GenericCodeIcon,
  icon,
  mode = 'lazy',
  importer = async (name: string) => {
    if (name.includes('languages/')) {
      const lang = name.split('/').pop();
      return import(`../../views/icons/lazy/languages/${lang}.tsx`);
    }
    return import(`../../views/icons/lazy/${name}.tsx`);
  },
  ...rest
}: LazyLoadIconProps) {
  if (mode === 'lazy') {
    return <LoadSvgWithLazy fallback={fallback} name={icon} importer={importer} {...rest} />;
  }
  return <LoadSvgWithImport fallback={fallback} name={icon} importer={importer} {...rest} />;
}
