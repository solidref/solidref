import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ByLanguage from './views/ByLanguage';
import './App.css';
import {RecoilRoot} from 'recoil';

import {LanguageHierarchyObject} from './state';
import LanguageHierarchyLoader from './components/generic/LanguageHierarchy';

const App: React.FC = () => {
  const [languageHierarchy, setLanguageHierarchy] = useState<LanguageHierarchyObject>({});

  const exportLanguageHierarchy = (value: LanguageHierarchyObject) => {
    setLanguageHierarchy(value);
  };

  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Header />
          <LanguageHierarchyLoader exportLanguageHierarchy={exportLanguageHierarchy} />
          <main>
            <Routes>
              <Route path="/" element={<Home languageHierarchy={languageHierarchy} />} />
              <Route path="/by-language/:language" element={<ByLanguage languageHierarchy={languageHierarchy} />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </RecoilRoot>
    </div>
  );
};

export default App;
