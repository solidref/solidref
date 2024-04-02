import React, {ElementType, Suspense, lazy, useEffect, useState} from 'react';
import {SvgIconProps} from '@mui/material';
import {OverridableTypeMap, OverrideProps} from '@mui/material/OverridableComponent';

import Loader from '../../views/Loader';

// Extending SvgIconProps to include all properties a MUI Box element can have
export type LazyLoadImageProps = SvgIconProps & {
  image: string;
  fallback?: ElementType;
  fallbackProps?: OverrideProps<OverridableTypeMap, ElementType>;
  mode?: 'lazy' | 'effect';
};

export function LazyLoadImageImport({
  image,
  fallback = Loader,
  fallbackProps = {},
  ...rest
}: Omit<LazyLoadImageProps, 'mode'>) {
  const [Lazypath, setLazypath] = useState<React.ElementType | null>(null);

  useEffect(() => {
    let isActive = true;
    const importpath = async () => {
      try {
        const {default: ImportedImage} = await import(image);
        if (isActive) setLazypath(() => ImportedImage);
      } catch (error) {
        console.error(`Error importing language path: ${image}`, error);
        if (isActive) setLazypath(fallback); // Fallback path
      }
    };

    importpath();
    return () => {
      isActive = false; // Prevents setting state on an unmounted component
    };
  }, [image, fallback, fallbackProps]);

  return (
    <Suspense fallback={React.createElement(fallback, fallbackProps)}>
      {Lazypath ? React.createElement(Lazypath, {...rest}) : React.createElement(fallback, fallbackProps)}
    </Suspense>
  );
}

export function LazyLoadImageLazy({
  image,
  fallback = Loader,
  fallbackProps = {},
  ...rest
}: Omit<LazyLoadImageProps, 'mode'>) {
  const LazyImage = lazy(async () => {
    try {
      return import(image);
    } catch (error) {
      console.error(`Error importing language path: ${image}`, error);
    }

    rest = fallbackProps;
    return Loader;
  });

  return (
    <Suspense fallback={React.createElement(fallback, fallbackProps)}>
      <LazyImage {...rest} />
    </Suspense>
  );
}

export default function LazyLoadImage({mode = 'lazy', image, ...rest}: LazyLoadImageProps) {
  image = image.replace('.tsx', '');
  image = `../../views/images/${image}.tsx`;
  if (mode === 'lazy') {
    return <LazyLoadImageLazy image={image} {...rest} />;
  }
  return <LazyLoadImageImport image={image} {...rest} />;
}
