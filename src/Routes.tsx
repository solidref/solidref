import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Language from './components/pages/Language';
import PrincipleOrPattern from './components/pages/PrincipleOrPattern';
import Home from './views/pages/Home';
import Languages from './views/pages/Languages';
import {generateLanguagePath} from './utils/url';
import NotFound from './views/pages/NotFound';
import About from './views/pages/About';

// import History from './views/pages/History';

export default function LocalRoutes() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<Languages />} />
          <Route path={generateLanguagePath(':language')} element={<Language />} />
          <Route path="/coding-principles/:group" element={<PrincipleOrPattern type={'principles'} />} />
          <Route path="/design-patterns/:group" element={<PrincipleOrPattern type={'patterns'} />} />
          <Route
            path="/clean-code"
            element={<PrincipleOrPattern type={'clean-code'} showMenu={false} showBefore={true} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
