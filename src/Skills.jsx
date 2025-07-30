import React, { useState, useEffect, useRef } from 'react';
import MatrixTitle from './MatrixTitle';

const skills = [
  { name: 'Python', level: 'Vidutinis' },
  { name: 'C#', level: 'Pradedantysis' },
  { name: 'SQL', level: 'Vidutinis' },
  { name: 'JavaScript', level: 'Pagrindai' },
  { name: 'React', level: 'Pagrindai' },
  { name: 'HTML/CSS', level: 'Pažengęs' },
  { name: 'Git', level: 'Vidutinis' },
];

const Skills = () => {
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

  return (
    <section ref={sectionRef} id="skills" style={{ textAlign: 'left', marginTop: '3rem' }}>
      <h2 className="section-title">
        <MatrixTitle>Įgūdžiai</MatrixTitle>
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {skills.map((skill, index) => (
          <li 
            key={skill.name} 
            style={{ 
              minWidth: '160px', 
              background: 'var(--bg-glass)', 
              borderRadius: '16px', 
              padding: '1.2rem 1.5rem', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', 
              border: '1px solid var(--bg-border)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
              transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-dark)' }}>{skill.name}</span>
            <br />
            <span style={{ color: 'var(--color-darkest)', fontSize: '0.95rem', fontWeight: '500' }}>{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
