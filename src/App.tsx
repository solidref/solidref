import React from 'react';
import {useRecoilState} from 'recoil';

import {languagesHierarchyState} from './state';

import Routes from './Routes';

import ThemeWrapper from './components/styles/ThemeWrapper';
import LanguageHierarchyLoader from './components/LanguageHierarchyLoader';

import Header from './views/Header';
import Footer from './views/Footer';
import {styled} from '@mui/material';

const MyApp = styled('div')(() => ({
  // background: 'red',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const App: React.FC = () => {
  const [, setLanguagesHierarchyState] = useRecoilState(languagesHierarchyState);

  return (
    <ThemeWrapper>
      <MyApp>
        <LanguageHierarchyLoader setLanguagesHierarchyState={setLanguagesHierarchyState} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes />
          <Footer />
        </React.Suspense>
      </MyApp>
    </ThemeWrapper>
  );
};

export default App;
