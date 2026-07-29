import React, { useState, useEffect } from 'react'
import CyberCursor from './components/CyberCursor'
import ParticleBackground from './components/ParticleBackground'
import MatrixBackground from './components/MatrixBackground'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'

function App() {
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  useEffect(() => {
    let keyBuffer = '';
    const secretCode = 'hack';

    const handleKeyDown = (e) => {
      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > secretCode.length) {
        keyBuffer = keyBuffer.substring(keyBuffer.length - secretCode.length);
      }
      if (keyBuffer === secretCode) {
        setIsMatrixMode(prev => !prev);
        keyBuffer = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {isMatrixMode ? <MatrixBackground /> : <ParticleBackground />}
      <CyberCursor />
      
      <div className={`cyber-container ${isMatrixMode ? 'matrix-active' : ''}`}>
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />

          <footer>
              <div className="footer-content">
                  <a href="mailto:itzkish29@gmail.com" className="btn outline-btn clickable">&gt; ping itzkish29@gmail.com</a>
                  <p>Designed & Built by KISHORE T</p>
                  {isMatrixMode && <p style={{color: '#0F0', marginTop: '10px', fontSize: '0.8rem'}}>Matrix Protocol Active.</p>}
              </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
