import React, {useMemo} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './views/Header';
import Footer from './views/Footer';
import Home from './views/pages/Home';
import ByLanguage from './views/pages/ByLanguage';
import './App.css';
import {useRecoilState} from 'recoil';
import {createTheme} from '@mui/material/styles';
import History from './views/pages/History';
import {ThemeProvider} from '@emotion/react';
import {lightTheme, darkTheme, ColorModeContext} from './theme';
import {languagesHierarchyState} from './state';
import LanguageHierarchyLoader from './components/LanguageHierarchyLoader';
import ByPrinciplePatternType from './views/pages/ByPrinciplePatternType';

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const [, setLanguagesHierarchyState] = useRecoilState(languagesHierarchyState);

  // const {language = 'javascript'} = useParams<LanguageParams>();
  // const [, setLanguagesState] = useRecoilState(loadLanguages(language));

  const theme = useMemo(() => {
    const defaultTheme = mode === 'light' ? lightTheme : darkTheme;
    return createTheme({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        mode,
      },
    });
  }, [mode, lightTheme, darkTheme]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <LanguageHierarchyLoader setLanguagesHierarchyState={setLanguagesHierarchyState} />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/by-language/:language" element={<ByLanguage />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/coding-principles/:type" element={<ByPrinciplePatternType />} />
                  <Route path="/design-patterns/:type" element={<ByPrinciplePatternType />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </React.Suspense>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
