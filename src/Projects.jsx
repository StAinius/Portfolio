import React, { useState } from 'react';
import { getImagePath } from './config';

const ProjectItem = ({ title, description, images, image, technologies, demoUrl, demoText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = images || (image ? [image] : []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="project-item">
      <div 
        className="project-compact-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="project-main-info">
          <div className="project-title-row">
            <span className="project-title">{title}</span>
          </div>
          <div className="project-role-row">
            <div className="project-arrow">
              {isExpanded ? '▼' : '▶'}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`project-details ${isExpanded ? 'expanded' : ''}`}>
        <div className="project-content">
          <div className="project-description">
            <p>{description}</p>
            {technologies && (
              <div className="project-technologies">
                <h4>Technologijos:</h4>
                <div className="tech-tags">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
            {demoUrl && (
              <div className="project-links">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                  🌐 {demoText || 'Demo'}
                </a>
              </div>
            )}
          </div>
          {projectImages.length > 0 && (
            <div className="project-images">
              <div className="image-container">
                <img src={projectImages[currentImageIndex]} alt={title} />
                {projectImages.length > 1 && (
                  <div className="image-navigation">
                    <button onClick={prevImage} className="nav-btn">‹</button>
                    <span className="image-counter">{currentImageIndex + 1} / {projectImages.length}</span>
                    <button onClick={nextImage} className="nav-btn">›</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'NFC-LABS svetainė',
      description: 'NFCLABS.com svetainė skirta įmonės siūlomų produktų ir sprendimų pristatymui, reklamai bei pardavimui. Svetainėje įdiegta patogi administravimo panelė, leidžianti lengvai valdyti turinį – pridėti, redaguoti ar pašalinti produktus, sprendimus bei kontaktinę informaciją. Taip pat integruota kontaktų forma, leidžianti lankytojams greitai susisiekti su įmone. Visa sistema sukurta naudojant Python, HTML, CSS ir JavaScript, užtikrinant aukštą saugumo, greičio ir funkcionalumo lygį.',
      technologies: ['Python', 'JavaScript', 'HTML5', 'CSS'],
      images: [
        getImagePath('/images/web/1.png'),
        getImagePath('/images/web/2.png'),
        getImagePath('/images/web/3.png'),
        getImagePath('/images/web/4.png')
      ],
      demoUrl: 'https://nfclabs.com',
      demoText: 'Apžiūrėti svetainę'
    },
    {
      title: 'Active Directory / CSV duomenų importo aplikacija',
      description: 'Aplikacija skirta importuoti/atnaujinti vartotojus NFCLABS Cloud platformoje imant duomenis iš Active Directory ar CSV failų. Pagrindinės funkcijos apima vartotojų kūrimą, redagavimą, šalinimą ir grupių valdymą. Aplikacijos parašytos naudojant Python kalbą. Stiliui nebuvo skiriama daug dėmesio - svarbiausia buvo aplikacijos veikimas.',
      images: [
        getImagePath('/images/import/AD.png'),
        getImagePath('/images/import/CSV.png')
      ],
      technologies: ['Python']
    }
  ];

  return (
    <section id="projects">
      <h1 className="section-title">Projektai</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            images={project.images}
            technologies={project.technologies}
            demoUrl={project.demoUrl}
            demoText={project.demoText}
          />
        ))}
      </div>
      
      <style jsx>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 3rem;
        }

        .project-item {
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

        .project-item::before {
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

        .project-item:hover::before {
          opacity: 1;
        }

        .project-item:hover {
          transform: translateX(5px);
          border-color: rgba(150, 150, 150, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12),
            -5px 0 20px rgba(120, 120, 120, 0.15);
        }

        .project-compact-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .project-main-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--bg-border);
        }

        .project-role-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-dark);
        }

        .project-arrow {
          color: var(--primary-blue);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-compact-header:hover .project-arrow {
          color: var(--primary-purple);
          transform: scale(1.1);
        }

        .project-details {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateX(-20px);
          margin-top: 0;
        }

        .project-details.expanded {
          max-height: 800px;
          opacity: 1;
          transform: translateX(0);
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--bg-border);
        }

        .project-content {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .project-description {
          flex: 1;
          opacity: 0;
          animation: fadeInUp 0.3s ease forwards;
        }

        .project-details.expanded .project-description {
          opacity: 1;
        }

        .project-description p {
          color: var(--primary-dark);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-technologies {
          margin-bottom: 1.5rem;
        }

        .project-technologies h4 {
          color: var(--primary-dark);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: linear-gradient(135deg, #d0d0d0, #c0c0c0);
          color: #444444;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .demo-link {
          background: linear-gradient(135deg, #d0d0d0, #c0c0c0);
          color: #444444;
        }

        .demo-link:hover {
          transform: translateY(-1px);
        }

        .project-images {
          flex: 0 0 600px;

        }

        .project-details.expanded .project-images {
          opacity: 1;
        }

        .image-container {
          position: relative;
        }

        .image-container img {
          width: 600px;
          height: 400px;
          object-fit: contain;
          background: #f8f8f8;
          border-radius: 8px;
        }

        .image-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          padding: 0 0.5rem;
        }

        .nav-btn {
          background: var(--bg-glass);
          border-radius: 50%;
          border: none;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--primary-blue);
          transition: all 0.3s ease;
          box-shadow: none;
        }

        .nav-btn:hover {
          color: white;
          transform: scale(1.1);
          box-shadow: none;
        }

        .image-counter {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .projects-list {
            gap: 2rem;
            margin-top: 2rem;
          }

          .project-item {
            padding: 1.5rem;
          }

          .project-content {
            flex-direction: column;
            gap: 1.5rem;
          }

          .project-images {
            flex: none;
            align-self: stretch;
          }

          .image-container img {
            width: 100%;
            height: auto;
            max-height: 250px;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-description p {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .tech-tags {
            justify-content: center;
          }

          .project-links {
            justify-content: center;
          }

          .project-details.expanded {
            max-height: 1000px;
          }

          .image-navigation {
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;