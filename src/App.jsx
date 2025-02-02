import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('day');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'day' ? 'night' : 'day'));

  return (
    <div className={`app ${theme}`}>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
