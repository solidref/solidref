import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ByLanguage from './views/ByLanguage';
import './App.css';
import {RecoilRoot} from 'recoil';

const App: React.FC = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/by-language/:language" element={<ByLanguage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </RecoilRoot>
    </div>
  );
};

export default App;
