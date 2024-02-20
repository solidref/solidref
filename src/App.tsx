import React from 'react';
import {useRecoilState} from 'recoil';

import {languagesHierarchyState} from './state';

import Routes from './Routes';

import ThemeWrapper from './components/styles/ThemeWrapper';
import LanguageHierarchyLoader from './components/LanguageHierarchyLoader';

import Header from './views/Header';
// import Footer from './views/Footer';

const App: React.FC = () => {
  const [, setLanguagesHierarchyState] = useRecoilState(languagesHierarchyState);

  return (
    <ThemeWrapper>
      <div className="App">
        <LanguageHierarchyLoader setLanguagesHierarchyState={setLanguagesHierarchyState} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes />
          {/* <Footer /> */}
        </React.Suspense>
      </div>
    </ThemeWrapper>
  );
};

export default App;
