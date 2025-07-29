import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'about', label: 'Apie', description: 'Mano aprašymas' },
  { id: 'skills', label: 'Įgūdžiai', description: 'Technologiniai įgūdžiai' },
  { id: 'experience', label: 'Patirtis', description: 'Darbinė patirtis' },
  { id: 'projects', label: 'Projektai', description: 'Atlikti darbai' },
  { id: 'contact', label: 'Kontaktai', description: 'Susisiekime' },
];

const scrollToSection = (id, setActiveSection) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -100; // height of navbar + some spacing
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    
    // Set active section immediately when clicking
    setActiveSection(id);
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 100;

      // If we're at the very top, always show 'about' as active
      if (scrollPosition < 50) {
        setActiveSection('about');
        return;
      }

      let currentActiveSection = 'about';
      let maxVisibleArea = 0;

      sections.forEach(sectionData => {
        const section = document.getElementById(sectionData.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = Math.max(0, rect.top);
          const sectionBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, sectionBottom - sectionTop);
          
          // Consider navbar offset for what's actually visible
          const adjustedVisibleHeight = rect.top < navbarHeight ? 
            visibleHeight - (navbarHeight - rect.top) : visibleHeight;

          if (adjustedVisibleHeight > maxVisibleArea && adjustedVisibleHeight > 100) {
            maxVisibleArea = adjustedVisibleHeight;
            currentActiveSection = sectionData.id;
          }
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {sections.map((section) => (
          <a
            key={section.id} 
            href={`#${section.id}`}
            className={`navbar-item ${activeSection === section.id ? 'active' : ''}`}
            data-description={section.description}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id, setActiveSection);
            }}
          >
            <div className="linktext">
              {section.label}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;