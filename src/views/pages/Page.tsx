import {Container} from '@mui/material';
import React from 'react';

interface PageProps {
  children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({children}) => {
  return (
    <div style={{textAlign: 'left', padding: '20px 0 200px 0'}}>
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
};

export default Page;
