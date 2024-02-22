import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Language from './components/pages/Language';
import PrincipleOrPattern from './components/pages/PrincipleOrPattern';
import Home from './views/pages/Home';
import Languages from './views/pages/Languages';
import {generateLanguagePath} from './utils/url';

// import History from './views/pages/History';

export default function LocalRoutes() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<Languages />} />
          <Route path={generateLanguagePath(':language')} element={<Language />} />
          <Route path="/coding-principles/:type" element={<PrincipleOrPattern />} />
          <Route path="/design-patterns/:type" element={<PrincipleOrPattern />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
