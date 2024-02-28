import React, {Suspense, lazy, useEffect, useState} from 'react';
import GenericCodeIcon from '../../views/icons/GenericCodeIcon';
import {SvgIconProps} from '@mui/material';

// Extending SvgIconProps to include all properties a MUI Box element can have
export type LazyLoadIconProps = SvgIconProps & {
  icon: string;
  fallbackProps?: SvgIconProps;
  mode?: 'lazy' | 'effect';
};

export default function LazyLoadIcon({icon, fallbackProps = {}, mode = 'lazy', ...rest}: LazyLoadIconProps) {
  if (mode !== 'lazy') {
    const [LazyIcon, setLazyIcon] = useState<React.ElementType | null>(null);

    useEffect(() => {
      let isActive = true;
      const importIcon = async () => {
        try {
          const {default: ImportedIcon} = await import(`../../views/icons/${icon}`);
          if (isActive) setLazyIcon(() => ImportedIcon);
        } catch (error) {
          console.error(`Error importing language icon: ${icon}`, error);
          if (isActive) setLazyIcon(GenericCodeIcon); // Fallback icon
        }
      };

      importIcon();
      return () => {
        isActive = false; // Prevents setting state on an unmounted component
      };
    }, [icon]);

    return (
      <Suspense fallback={<GenericCodeIcon {...fallbackProps} />}>
        {LazyIcon ? React.createElement(LazyIcon, {...rest}) : <GenericCodeIcon {...fallbackProps} />}
      </Suspense>
    );
  }

  const LazyIcon = lazy(async () => {
    try {
      return await import(`../../views/icons/${icon}`);
    } catch (error) {
      console.error(`Error importing language icon: ${icon}`, error);
    }

    rest = fallbackProps;
    return await import('../../views/icons/GenericCodeIcon');
  });

  return (
    <Suspense fallback={<GenericCodeIcon {...fallbackProps} />}>
      <LazyIcon {...rest} />
    </Suspense>
  );
}
