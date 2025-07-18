import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { featuredProjects } from '../projectsInfo/projectsInfo';

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
 * @typedef {{ featuredProjects: FeaturedProject[] }} FeaturedProjectsProps
 */

/**
 * Responsive carousel showing 3 (lg), 2 (md), or 1 (sm) cards.
 * `currentIndex` always points to the *center* card, which is enlarged.
 * Continuous auto‑scroll every 3.5 s.
 */
const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  // breakpoints
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // auto‑scroll
  useEffect(() => {
    if (featuredProjects.length <= perView) return;
    const id = setInterval(() => setCurrentIndex((i) => (i + 1) % featuredProjects.length), 4800);
    return () => clearInterval(id);
  }, [featuredProjects.length, perView]);

  if (featuredProjects.length === 0) return null;

  const centerOffset = Math.floor(perView / 2);

  // Build indices so currentIndex is centred
  const visible = Array.from({ length: perView }, (_, i) => {
    const idx = (currentIndex - centerOffset + i + featuredProjects.length) % featuredProjects.length;
    return { ...featuredProjects[idx], _isCenter: i === centerOffset };
  });

  const btnBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    borderRadius: '50%',
    width: 44,
    height: 44,
    background: 'rgba(255,255,255,0.9)',
    color: '#1f2937',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,.1)',
    zIndex: 5,
  };

  const prev = () => setCurrentIndex((i) => (i - 1 + featuredProjects.length) % featuredProjects.length);
  const next = () => setCurrentIndex((i) => (i + 1) % featuredProjects.length);

  const renderBtn = (p) => {
    if (p.type === 'company' && p.link) return <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">Visit <FontAwesomeIcon icon={faExternalLinkAlt} /></a>;
    if (p.type === 'In-progress') return <button className="btn btn-secondary mt-auto" disabled>In&nbsp;Progress</button>;
    if (p.type === 'Internship') return <button className="btn btn-secondary mt-auto" disabled>In&nbsp;Progress</button>;
    if (!p.link) return <button className="btn btn-dark mt-auto" disabled>Private&nbsp;Project</button>;
    return <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">View <FontAwesomeIcon icon={faExternalLinkAlt} /></a>;
  };

  return (
    <section id="featuredProjects" className="py-5" style={{ background: 'linear-gradient(to right,#eff6ff,#fff,#eff6ff)' }}>
      <div className="container position-relative">
        <h2 className="text-center fw-bold mb-5" style={{ fontSize: '2.6rem', color: '#1f2937' }}>Featured Projects</h2>

        <div className="d-flex justify-content-center align-items-stretch" style={{ gap: '1rem', overflow: 'hidden' }}>
          {visible.map((p, i) => (
            <div
              key={p.slug || i}
              className="card shadow-sm border-0 flex-shrink-0"
              style={{
                width: `calc(100% / ${perView} - 1rem)`,
                transform: p._isCenter ? 'scale(1.08)' : 'scale(0.9)',
                transition: 'transform .4s',
              }}
            >
              <img src={p.cover} className="card-img-top" alt={p.title} style={{ height: 200, objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text flex-grow-1">{p.tagline}</p>
                <div className="mb-2">
                  {p.techStack.map((t, idx) => (
                    <span key={idx} className="badge bg-dark text-white me-2 mb-1 mr-1">{t}</span>
                  ))}
                </div>
                {renderBtn(p)}
              </div>
            </div>
          ))}
        </div>

        {featuredProjects.length > perView && (
          <>
            <button style={{ ...btnBase, left: 10 }} onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button style={{ ...btnBase, right: 10 }} onClick={next}><FontAwesomeIcon icon={faChevronRight} /></button>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
