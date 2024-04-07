import {ComponentType, createElement, ElementType, Suspense, lazy, useEffect, useState} from 'react';
import {SvgIconProps} from '@mui/material';
import {OverridableTypeMap, OverrideProps} from '@mui/material/OverridableComponent';

import Loader from '../../views/icons/Loading';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Importer = (name: string) => Promise<{default: ComponentType<any>}>;

// Extending SvgIconProps to include all properties a MUI Box element can have
export type LazyLoadSvgProps = Omit<SvgIconProps, 'children'> & {
  importer: Importer;
  name: string;
  fallback?: ElementType;
  fallbackProps?: OverrideProps<OverridableTypeMap, ElementType>;
  mode?: 'lazy' | 'effect';
};

export function LoadSvgWithImport({
  fallback = Loader,
  fallbackProps = {},
  importer,
  name,
  ...rest
}: Omit<LazyLoadSvgProps, 'mode'>) {
  const [Lazypath, setLazypath] = useState<React.ElementType | null>(null);

  useEffect(() => {
    let isActive = true;
    const importPath = async () => {
      try {
        const {default: ImportedImage} = await importer(name);
        if (isActive) {
          setLazypath(() => ImportedImage);
        }
      } catch (error) {
        console.error(`Error importing svg wit name: '${name}'`, error);
        if (isActive) {
          setLazypath(fallback); // Fallback path
        }
      }
    };

    importPath();
    return () => {
      isActive = false; // Prevents setting state on an unmounted component
    };
  }, [fallback, fallbackProps, importer, name]);

  return (
    <Suspense fallback={createElement(fallback, fallbackProps)}>
      {Lazypath ? createElement(Lazypath, {...rest}) : createElement(fallback, fallbackProps)}
    </Suspense>
  );
}

export function LoadSvgWithLazy({
  fallback = Loader,
  fallbackProps = {},
  importer,
  name,
  ...rest
}: Omit<LazyLoadSvgProps, 'mode'>) {
  const LazyImage = lazy(() =>
    importer(name).catch((error) => {
      console.error(`Error importing svg with name: '${name}'`, error);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return {default: fallback as ComponentType<any>}; // Ensure this matches the expected return type
    }),
  );

  return (
    <Suspense fallback={createElement(fallback, fallbackProps)}>
      <LazyImage {...rest} />
    </Suspense>
  );
}

export default function LazyLoadImage({
  mode = 'lazy',
  name,
  importer = async (name: string) => {
    if (name.includes('solid/')) {
      const image = name.split('/').pop();
      return import(`../../views/images/lazy/solid/${image}.tsx`);
    }
    return import(`../../views/images/lazy/${name}.tsx`);
  },
  ...rest
}: Omit<LazyLoadSvgProps, 'importer'> & {importer?: Importer}) {
  if (mode === 'lazy') {
    return <LoadSvgWithLazy name={name} importer={importer} {...rest} />;
  }
  return <LoadSvgWithImport name={name} importer={importer} {...rest} />;
}
