import React from 'react';
import Box, {BoxProps} from '@mui/material/Box';

export interface ContainerProps extends Omit<BoxProps, 'width' | 'maxWidth' | 'paddingX' | 'paxxingY' | 'margin'> {
  children: React.ReactNode;
}

export default function Container({children, ...rest}: BoxProps) {
  return (
    <Box
      maxWidth={{sm: 720, md: 1236}}
      width={'100%'}
      margin={'0 auto'}
      paddingX={2}
      paddingY={{xs: 4, sm: 6, md: 8}}
      {...rest}
    >
      {children}
    </Box>
  );
}
