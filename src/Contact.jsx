import React, { useState, useEffect, useRef } from 'react';
import LazySection from './LazySection';
import MatrixTitle from './MatrixTitle';

const Contact = () => {
  const [toast, setToast] = useState({ show: false, message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const icons = {
    email: (<svg width="24" height="24" fill="#3b68acff" viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.379l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15.5 2.618-7.646 5.099a1 1 0 0 1-1.108 0L4.5 8.618V17.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8.618Z" /></svg>),
    phone: (<svg width="24" height="24" fill="#3b68acff" viewBox="0 0 24 24"><path d="M17.707 14.293a1 1 0 0 0-1.414 0l-2.086 2.086a11.05 11.05 0 0 1-4.586-4.586l2.086-2.086a1 1 0 0 0 0-1.414l-3.293-3.293a1 1 0 0 0-1.414 0l-1.293 1.293a2 2 0 0 0-.293 2.293c2.13 4.26 6.01 8.14 10.27 10.27a2 2 0 0 0 2.293-.293l1.293-1.293a1 1 0 0 0 0-1.414l-3.293-3.293Z" /></svg>),
    linkedin: (<svg width="24" height="24" fill="#3b68acff" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>),
    github: (<svg width="24" height="24" fill="#3b68acff" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.34-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.479C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" /></svg>),
    location: (<svg width="24" height="24" fill="#3b68acff" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" /></svg>),
    person: (<svg width="24" height="24" fill="#3b68acff" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" /></svg>),
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast({ show: true, message: 'Nukopijuota!' });
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };

  const contactCards = [
    { icon: icons.person, label: "Vardas", value: "Ainius Stonkus" },
    { icon: icons.location, label: "Lokacija", value: "Vilnius, Lietuva" },
    { icon: icons.email, label: "El. paštas", value: "stonkusainius@gmail.com", clickable: true },
    { icon: icons.phone, label: "Telefonas", value: "+37069554829", clickable: true },
    { icon: icons.linkedin, label: "LinkedIn", value: "Ainius Stonkus", clickable: true, url: "https://www.linkedin.com/in/ainius-stonkus/" },
    { icon: icons.github, label: "GitHub", value: "ainiusstonkus", clickable: true, url: "https://github.com/ainiusstonkus" }
  ];

  const handleCardClick = (card) => {
    if (!card.clickable) return;
    
    if (card.url) {
      window.open(card.url, '_blank');
    } else {
      copyToClipboard(card.value);
    }
  };

  return (
    <section ref={sectionRef} id="contact">
        <h2 className="section-title" style={{ textAlign: 'left', marginLeft: '0' }}>
          <MatrixTitle>Kontaktai</MatrixTitle>
        </h2>

        {/* Contact Cards Grid - 3 columns */}
        <div className="contact-grid-3">
          {contactCards.map((card, index) => (
            <div 
              key={index}
              className={`contact-card-item ${card.clickable ? 'contact-clickable' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 0.1}s`
              }}
              onClick={() => handleCardClick(card)}
            >
              <div className="contact-icon-wrapper">
                {card.icon}
              </div>
              <div className="contact-content">
                <div className="contact-label">{card.label}</div>
                <div className={`contact-value ${card.clickable ? 'contact-link' : ''}`}>
                  {card.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {toast.show && (
          <div className="toast">
            {toast.message}
          </div>
        )}
    </section>
  );
};

export default Contact;