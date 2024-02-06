import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {languagesHierarchyState} from './state';

import ThemeWrapper from './components/ThemeWrapper';
import ByLanguage from './components/pages/ByLanguage';
import LanguageHierarchyLoader from './components/LanguageHierarchyLoader';

import Header from './views/Header';
import Footer from './views/Footer';
import Home from './views/pages/Home';
// import History from './views/pages/History';
// import ByPrinciplePatternType from './views/pages/ByPrinciplePatternType';

const App: React.FC = () => {
  const [, setLanguagesHierarchyState] = useRecoilState(languagesHierarchyState);

  return (
    <ThemeWrapper>
      <div className="App">
        <LanguageHierarchyLoader setLanguagesHierarchyState={setLanguagesHierarchyState} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <div>App</div>
          <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/by-language/:language" element={<ByLanguage />} />
                {/* <Route path="/history" element={<History />} />
                  <Route path="/coding-principles/:type" element={<ByPrinciplePatternType />} />
                  <Route path="/design-patterns/:type" element={<ByPrinciplePatternType />} /> */}
              </Routes>
            </main>
            <Footer />
          </Router>
        </React.Suspense>
      </div>
    </ThemeWrapper>
  );
};

export default App;
