import {Container} from '@mui/material';
import React from 'react';
// import { useParams } from "react-router-dom";

// type Params = {
//   name: string;
// };

interface PageProps {
  children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({children}) => {
  //   const { name } = useParams<Params>();

  return (
    <div>
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
};

export default Page;
