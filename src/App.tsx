import {styled} from '@mui/material';
import React from 'react';

import ThemeWrapper from './components/styles/ThemeWrapper';
import Routes from './Routes';
import Header from './views/Header';
import LoadingIcon from './views/icons/Loading';
import Footer from './views/Footer';

const MyApp = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const Loading = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}));

const App: React.FC = () => {
  return (
    <ThemeWrapper>
      <MyApp>
        <React.Suspense
          fallback={
            <Loading>
              <LoadingIcon />
            </Loading>
          }
        >
          <Header />
          <Routes />
          <Footer />
        </React.Suspense>
      </MyApp>
    </ThemeWrapper>
  );
};

export default App;
