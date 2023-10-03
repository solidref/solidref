import React, {useMemo, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ByLanguage from './views/ByLanguage';
import './App.css';
import {RecoilRoot} from 'recoil';
import {createTheme} from '@mui/material/styles';
import {LanguageHierarchyObject} from './state';
import LanguageHierarchyLoader from './components/generic/LanguageHierarchy';
import History from './views/History';
import {ThemeProvider} from '@emotion/react';
import {lightTheme, darkTheme, ColorModeContext} from './theme';

const App: React.FC = () => {
  const [languageHierarchy, setLanguageHierarchy] = useState<LanguageHierarchyObject>({});

  const exportLanguageHierarchy = (value: LanguageHierarchyObject) => {
    setLanguageHierarchy(value);
  };

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

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
          <RecoilRoot>
            <Router>
              <Header />
              <LanguageHierarchyLoader exportLanguageHierarchy={exportLanguageHierarchy} />
              <main>
                <Routes>
                  <Route path="/" element={<Home languageHierarchy={languageHierarchy} />} />
                  <Route path="/by-language/:language" element={<ByLanguage languageHierarchy={languageHierarchy} />} />
                  <Route path="/history" element={<History languageHierarchy={languageHierarchy} />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </RecoilRoot>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
