import React, {useMemo, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ByLanguage from './views/ByLanguage';
import './App.css';
import {useRecoilState} from 'recoil';
import {createTheme} from '@mui/material/styles';
import History from './views/History';
import {ThemeProvider} from '@emotion/react';
import {lightTheme, darkTheme, ColorModeContext} from './theme';
import {languagesHierarchyState, languagesState} from './state';
import LanguageHierarchyLoader from './components/generic/LanguageHierarchyLoader';
import LanguageLoader, {LanguageParams} from './components/generic/LanguageLoader';
import {loadLanguages} from './selector';

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
          {/* <LanguageLoader code={language} setLanguagesState={setLanguagesState} /> */}
          <React.Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/by-language/:language" element={<ByLanguage />} />
                  <Route path="/history" element={<History />} />
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
