import React from 'react';

const skills = [
  { name: 'Python', level: 'Vidutinis' },
  { name: 'C#', level: 'Pradedantysis' },
  { name: 'SQL', level: 'Vidutinis' },
  { name: 'JavaScript', level: 'Pagrindai' },
  { name: 'React', level: 'Pagrindai' },
  { name: 'HTML/CSS', level: 'Pažengęs' },
  { name: 'Git', level: 'Vidutinis' },
];

const Skills = () => (
  <section id="skills" style={{ textAlign: 'left', marginTop: '3rem' }}>
    <h2 className="section-title">Įgūdžiai</h2>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
      {skills.map((skill) => (
        <li key={skill.name} style={{ minWidth: '160px', background: 'var(--bg-glass)', borderRadius: '16px', padding: '1.2rem 1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid var(--bg-border)' }}>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-dark)' }}>{skill.name}</span>
          <br />
          <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{skill.level}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
