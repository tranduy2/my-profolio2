import React from 'react';
import Navbar from './components/Navar/index';
import About from './components/About/index';
import Education from './components/Education/index';
import Skills from './components/Skills/index';
import Experience from './components/Experience/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
