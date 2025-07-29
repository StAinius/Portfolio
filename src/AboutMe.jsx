import React from 'react';
import LazySection from './LazySection';

import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const AboutMe = () => (
  <div className="main-content">
    <div className="about-row" style={{ justifyContent: 'space-between', textAlign: 'left' }}>
      <LazySection direction="left">
        <section id="about" style={{ textAlign: 'left', alignItems: 'flex-start', display: 'flex', flexDirection: 'column', flex: '1', maxWidth: '900px' }}>
          <h2 className="section-title">Apie mane</h2>
          <p style={{ textAlign: 'left' }}>
            Esu (Junior) programuotojas, aktyviai besimokantis ir naudojantis šiuolaikines 
            technologijas, kad greitai tobulėčiau. Turiu inžinerinį pagrindą, todėl gerai 
            išmanau tiek kompiuterių vidų (ypač Windows aplinką), tiek įvairius išorinius 
            įrenginius. Esu baigęs duomenų analitiką, o programavimas man tapo pagrindine 
            kryptimi, kuria nuosekliai judu į priekį. Esu atsakingas, smalsus, greitai 
            prisitaikantis ir nebijantis naujų iššūkių – tiek dirbdamas savarankiškai, 
            tiek komandoje.
          </p>
        </section>
      </LazySection>
      <div className="profile-photo-container">
        <div className="profile-photo-flip">
          <div className="profile-photo-front">
            <img src="./img/im.png" alt="Ainius Stonkus" />
          </div>
          <div className="profile-photo-back">
            <div className="profile-info">
              <h2>Ainius Stonkus</h2>
              <h5>Programuotojas</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section-separator" />
    <div className="section-dark" style={{ textAlign: 'left', padding: '4rem 0' }}>
      <div className="main-content">
        <Skills />
      </div>
    </div>
    <div className="section-separator" />
    <div style={{ textAlign: 'left' }}>
      <Experience />
    </div>
    <div className="section-separator" />
    <div className="section-dark" style={{ textAlign: 'left', padding: '4rem 0' }}>
      <div className="main-content">
        <Projects />
      </div>
    </div>
    <div className="section-separator" />
    <div style={{ textAlign: 'left' }}>
      <Contact />
    </div>
    <div className="footer-bar">
      <span>© {new Date().getFullYear()} Ainius Stonkus. Visos teisės saugomos.</span>
    </div>
  </div>
);

export default AboutMe;