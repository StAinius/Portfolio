import React, { useState, useEffect } from 'react';
import LazySection from './LazySection';
import { getImagePath } from './config';
import MatrixTitle from './MatrixTitle';
import FastMatrixText from './FastMatrixText';

import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const AboutMe = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 4000); // 4 sekundės

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="main-content">
    {/* Apie mane - baltas fonas */}
    <div className="section-white" style={{ padding: '4rem 0' }}>
      <div className="main-content">
        <div className="about-row" style={{ justifyContent: 'space-between', textAlign: 'left' }}>
          <section id="about" style={{ textAlign: 'left', alignItems: 'flex-start', display: 'flex', flexDirection: 'column', flex: '1', maxWidth: '900px' }}>
            <h2 className="section-title">
              <MatrixTitle>Apie mane</MatrixTitle>
            </h2>
            <FastMatrixText style={{ textAlign: 'left' }}>
              Esu (Junior) programuotojas, aktyviai besimokantis ir naudojantis šiuolaikines 
              technologijas, kad greitai tobulėčiau. Turiu inžinerinį pagrindą, todėl gerai 
              išmanau tiek kompiuterių vidų (ypač Windows aplinką), tiek įvairius išorinius 
              įrenginius. Esu baigęs duomenų analitikos kursus, o programavimas man tapo pagrindine 
              kryptimi, kuria nuosekliai judu į priekį. Esu atsakingas, smalsus, greitai 
              prisitaikantis ir nebijantis naujų iššūkių. Gebu dirbti tiek savarankiškai,
              tiek komandoje.
            </FastMatrixText>
          </section>
          <div className="profile-photo-container">
            <div className={`profile-photo-flip ${isFlipped ? 'flipped' : ''}`}>
              <div className="profile-photo-front">
                <img src={getImagePath('/img/im.png')} alt="Ainius Stonkus" />
              </div>
              <div className="profile-photo-back">
                <div className="profile-info">
                  <h3>Ainius Stonkus</h3>
                  <p className="profile-role">Junior Programuotojas</p>
                  <div className="profile-details">
                    <p className="profile-location">⚡ Lietuva</p>
                    <p className="profile-focus">⚙️ Software Development</p>
                    <p className="profile-learning">🎯 Python • C# • SQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section-dark" style={{ textAlign: 'left', padding: '4rem 0' }}>
      <div className="main-content">
        <Skills />
      </div>
    </div>
    {/* Patirtis - baltas fonas */}
    <div className="section-white" style={{ textAlign: 'left', padding: '4rem 0' }}>
      <div className="main-content">
        <Experience />
      </div>
    </div>
    
    {/* Projektai - žalsvas fonas */}
    <div className="section-dark" style={{ textAlign: 'left', padding: '4rem 0' }}>
      <div className="main-content">
        <Projects />
      </div>
    </div>
    
    {/* Kontaktai - baltas fonas */}
    <div className="section-white" style={{ textAlign: 'left', padding: '4rem 0' }}>
      <div className="main-content">
        <Contact />
      </div>
    </div>
    <div className="footer-bar">
      <span>© {new Date().getFullYear()} Ainius Stonkus. Visos teisės saugomos.</span>
    </div>
  </div>
  );
};

export default AboutMe;