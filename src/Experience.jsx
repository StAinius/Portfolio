import React, { useState } from 'react';

const ExperienceItem = ({ company, role, period, details, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`experience-item ${className}`}>
      <div 
        className="exp-compact-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="exp-main-info">
          <div className="exp-company-row">
            <span className="exp-company">{company}</span>
            <span className="exp-date">{period}</span>
          </div>
          <div className="exp-role-row">
            <span className="exp-role">{role}</span>
            <div className="exp-arrow">
              {isExpanded ? '▼' : '▶'}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`exp-details ${isExpanded ? 'expanded' : ''}`}>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'UAB „Daglus“',
      role: 'Programuotojas',
      period: '2025-04 – dabar',
      details: [
        'Svetainės kūrimas ir priežiūra: HTML, CSS, Python.',
        'Naujų Windows aplikacijų kūrimas naudojant Python. Duomenų įmportas iš CSV failų, Active Directory į Cloud platformą.',
        'Senos aplikacijos paleidimas naudojant C# ir .NET Framework. Naujinimas į naujesnę versiją, testavimas, sistemos analizė.',
        'SQL duomenų bazės valdymas, užklausų rašymas, duomenų analizė.',
        'Aplikacijų versijavimas, diegimas, testavimas. GIT naudojimas.'
      ]
    },
    {
      company: 'UAB „Edrana Baltic“',
      role: 'Diegėjas - projektų vadovas',
      period: '2023-05 – 2024-07',
      details: [
        'Programinės įrangos „Profit-W“ diegimas ir priežiūra: įdiegimas, konfigūravimas, atnaujinimai, gedimų šalinimas, duomenų atsarginių kopijų valdymas.',
        'Klientų konsultavimas: pagalba dėl programinės įrangos naudojimo, problemų sprendimas, mokymai, grįžtamojo ryšio rinkimas.',
        'Projektų planavimas ir koordinavimas: reikalavimų surinkimas, užduočių paskirstymas, projekto eigos stebėsena, bendravimas su klientais ir programuotojų komanda.',
        'Naujų sistemų koordinavimas, testavimas, klientų mokymai ir palaikymas.',
      ]
    },
    {
      company: 'UAB „UCS Baltic“',
      role: 'Vykstantis inžinierius',
      period: '2022-08 – 2023-05',
      details: [
        'Kasos aparatų ir čekių spausdintuvų priežiūra: diegimas, konfigūravimas, remontas, profilaktika.',
        'Tinklo trikdžių šalinimas: įrangos konfigūravimas, sutrikimų diagnostika, tinklo saugumo užtikrinimas.',
        'Klientų konsultavimas: pagalba dėl įrangos naudojimo, problemų sprendimas, mokymai.',
        'Serverių priežiūra: diegimas, administravimas, atnaujinimai, gedimų šalinimas, saugumo užtikrinimas.'
      ]
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Patirtis</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            details={exp.details}
            className={exp.className}
          />
        ))}
      </div>
      
      <style jsx>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 3rem;
        }

        .experience-item {
          background: var(--bg-glass-light);
          backdrop-filter: blur(20px);
          border: 1px solid var(--bg-border);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .experience-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(200, 200, 200, 0.03) 0%, rgba(180, 180, 180, 0.03) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .experience-item:hover::before {
          opacity: 1;
        }

        .experience-item:hover {
          transform: translateX(5px);
          border-color: rgba(150, 150, 150, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12),
            -5px 0 20px rgba(120, 120, 120, 0.15);
        }

        .exp-compact-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .exp-main-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .exp-company-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--bg-border);
        }

        .exp-arrow-container {
          display: flex;
          align-items: center;
        }

        .exp-arrow {
          color: var(--primary-blue);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .exp-compact-header:hover .exp-arrow {
          color: var(--primary-purple);
          transform: scale(1.1);
        }

        .exp-details {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateX(-20px);
          margin-top: 0;
        }

        .exp-details.expanded {
          max-height: 500px;
          opacity: 1;
          transform: translateX(0);
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--bg-border);
        }

        .exp-details ul {
          margin-left: 1.5rem;
          margin-bottom: 0;
          color: var(--text-muted);
          font-size: 1rem;
          position: relative;
          z-index: 1;
        }

        .exp-details ul li {
          margin-bottom: 0.8rem;
          line-height: 1.6;
          color: var(--primary-dark);
          transition: color 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.3s ease forwards;
        }

        .exp-details.expanded ul li {
          opacity: 1;
        }

        .exp-details.expanded ul li:nth-child(1) {
          animation-delay: 0.1s;
        }

        .exp-details.expanded ul li:nth-child(2) {
          animation-delay: 0.2s;
        }

        .exp-details.expanded ul li:nth-child(3) {
          animation-delay: 0.3s;
        }

        .exp-details.expanded ul li:nth-child(4) {
          animation-delay: 0.4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .experience-item:hover .exp-compact-header {
          transform: translateX(0px);
        }

        .exp-company {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-dark);
        }

        .exp-role {
          font-size: 1.1rem;
          font-weight: 600;
          color: #334155;
        }

        .exp-date {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          background: rgba(248, 250, 252, 0.8);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--bg-border);
        }

        @media (max-width: 768px) {
          .exp-company-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .exp-role-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .exp-compact-header {
            align-items: flex-start;
          }

          .exp-arrow-container {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;