import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @typedef {{
 *   title: string;
 *   slug: string;
 *   cover: string;
 *   tagline: string;
 *   link?: string;
 *   techStack: string[];
 *   type?: string;
 * }} FeaturedProject
 *
 * @typedef {{ projects: FeaturedProject[] }} FeaturedProjectsProps
 */

/**
 * Carousel that shows 3‑4 cards at once, auto‑scrolls continuously,
 * and enlarges the centre card for focus.
 */
const FeaturedProjects = ({ projects = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(3);

  // Determine cards per view responsively
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setProjectsPerView(3); // lg
      else if (window.innerWidth >= 768) setProjectsPerView(2); // md
      else setProjectsPerView(1); // sm
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous auto‑scroll
  useEffect(() => {
    if (projects.length <= projectsPerView) return; // nothing to scroll
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3500);
    return () => clearInterval(id);
  }, [projects.length, projectsPerView]);

  if (!projects || projects.length === 0) return null;

  const centerIdx = Math.floor(projectsPerView / 2);

  // Build visible slice (wrap‑around)
  const visible = Array.from({ length: projectsPerView }, (_, i) => {
    return projects[(currentIndex + i) % projects.length];
  });

  const containerStyle = {
    background: 'linear-gradient(to right, #eff6ff, #ffffff, #eff6ff)',
  };

  const navBtnBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#1f2937',
    border: 'none',
    borderRadius: '50%',
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,.1)',
    zIndex: 10,
  };

  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);

  const renderButton = (project) => {
    if (project.type === 'company' && project.link) {
      return (
        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-dark btn-circle mt-auto">
          Visit <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      );
    }
    if (project.type === 'In-progress') {
      return <button className="btn btn-secondary btn-circle mt-auto" disabled>In&nbsp;Progress</button>;
    }
    if (!project.link) {
      return <button className="btn btn-dark btn-circle mt-auto" disabled>Private&nbsp;Project</button>;
    }
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-dark btn-circle mt-auto">
        View <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    );
  };

  return (
    <section id="featured-projects" className="py-5" style={containerStyle}>
      <div className="container position-relative">
        <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2.5rem', color: '#1f2937' }}>
          Featured Projects
        </h2>

        {/* Slides row */}
        <div className="d-flex justify-content-center align-items-stretch overflow-hidden" style={{ gap: '1rem' }}>
          {visible.map((project, idx) => (
            <div
              key={project.slug || idx}
              className="card shadow-sm border-0 flex-shrink-0"
              style={{
                width: `calc(100% / ${projectsPerView} - 1rem)`,
                transform: idx === centerIdx ? 'scale(1.08)' : 'scale(0.9)',
                transition: 'transform .4s',
              }}
            >
              <img src={project.cover} className="card-img-top" alt={project.title} style={{ height: 200, objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.tagline}</p>
                <div className="mb-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge bg-dark text-white me-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
                {renderButton(project)}
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        {projects.length > projectsPerView && (
          <>
            <button style={{ ...navBtnBase, left: 10 }} onClick={prev} aria-label="Previous">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button style={{ ...navBtnBase, right: 10 }} onClick={next} aria-label="Next">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
