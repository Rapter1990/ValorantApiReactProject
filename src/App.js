import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Agents from './pages/Agents';
import Gears from './pages/Gears';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import Header from './components/Header/Header'
import { LanguageContext, languages } from "./context/LanguageContext";
import Footer from './components/Footer/Footer';
import useLocalStorage from 'use-local-storage';
import AgentDetail from './components/Agents/AgentDetail';

function App() {
  
  const lang = useState(languages[0].lang);

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div data-theme={theme}>
      <LanguageContext.Provider value={lang}> 
        <Router>
          <Header theme={theme} switchTheme={switchTheme} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/gear' element={<Gears />} />
            <Route path='/maps' element={<Maps />} />
            <Route path='/weapons' element={<Weapons />} />
            <Route path='/agents/detail/:uuid' element={<AgentDetail />} />
          </Routes>
          <Footer />
        </Router>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
