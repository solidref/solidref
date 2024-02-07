import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ByLanguage from './components/pages/ByLanguage';

import Home from './views/pages/Home';
// import History from './views/pages/History';
// import ByPrinciplePatternType from './views/pages/ByPrinciplePatternType';

export default function LocalRoutes() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/by-language/:language" element={<ByLanguage />} />
          {/* <Route path="/history" element={<History />} />
                  <Route path="/coding-principles/:type" element={<ByPrinciplePatternType />} />
                  <Route path="/design-patterns/:type" element={<ByPrinciplePatternType />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
