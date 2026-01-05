import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { projectsInfo } from '../projectsInfo/projectsInfo';

/**
 * @typedef {{
 *   title: string;
 *   slug: string;
 *   cover: string;
 *   summary: string;
 *   link?: string;
 *   techStack: string[];
 *   type?: string;
 * }} FeaturedProject
 *
 * Responsive carousel showing 3 (lg), 2 (md), or 1 (sm) cards.
 * `currentIndex` always points to the *center* card, which is enlarged.
 * Continuous auto‑scroll every 3.5 s.
 */
const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const featuredProjects = projectsInfo.filter((project) => project.feature);

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
    const id = setInterval(() => setCurrentIndex((i) => (i + 1) % featuredProjects.length), 5000);
    return () => clearInterval(id);
  }, [featuredProjects.length, perView]);

  if (featuredProjects.length === 0) return null;

  const centerOffset = Math.floor(perView / 2);

  // Build indices so currentIndex is centred
  const visible = Array.from({ length: perView }, (_, i) => {
    const idx = (currentIndex - centerOffset + i + featuredProjects.length) % featuredProjects.length;
    return { ...featuredProjects[idx], _isCenter: i === centerOffset };
  });

  const prev = () => setCurrentIndex((i) => (i - 1 + featuredProjects.length) % featuredProjects.length);
  const next = () => setCurrentIndex((i) => (i + 1) % featuredProjects.length);

  const typeLabel = (p) => {
    if (!p.type) return "Project";
    if (p.type === "project") return "Project";
    if (p.type === "In-progress") return "In Progress";
    if (p.type === "Internship") return "Internship";
    if (p.type === "company") return "Company";
    if (p.type === "aws") return "AWS Pipeline";
    if (p.type === "client") return "Client";
    if (p.type === "personal") return "Personal";
    if (p.type === "publication") return "Publication";
    return p.type;
  };

  const renderBtn = (p) => {
    if (p.type === "company" && p.link) {
      return (
        <a href={p.link} target="_blank" rel="noreferrer" className="featured-project-button">
          Visit <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      );
    }
    if (p.type === "In-progress") {
      return (
        <button className="featured-project-button is-muted" disabled>
          In&nbsp;Progress
        </button>
      );
    }
    if (p.type === "Internship") {
      return (
        <button className="featured-project-button is-muted" disabled>
          Completed&nbsp;Internship
        </button>
      );
    }
    if (!p.link) {
      return (
        <button className="featured-project-button is-muted" disabled>
          Private&nbsp;Project
        </button>
      );
    }
    return (
      <a href={p.link} target="_blank" rel="noreferrer" className="featured-project-button">
        View <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    );
  };

  return (
    <section id="featuredProjects" className="featured-projects-section py-5">
      <div className="container-fluid px-4 px-lg-5 position-relative">
        <div className="featured-projects-header text-center">
          <h2 className="featured-projects-title">Featured Projects</h2>
          <p className="featured-projects-subtitle">
            Selected work that highlights product impact, engineering rigor, and system design depth.
          </p>
        </div>

        <div className="featured-projects-carousel">
          {visible.map((p, i) => (
            <article
              key={p.slug || i}
              className={`featured-project-card ${p._isCenter ? "is-center" : ""}`}
              style={{ width: `calc(100% / ${perView} - 1rem)` }}
            >
              <div className="featured-project-image">
                <img src={p.cover} alt={p.title} />
                <span className="featured-project-type">{typeLabel(p)}</span>
              </div>
              <div className="featured-project-body">
                <h3 className="featured-project-title">{p.title}</h3>
                <p className="featured-project-tagline">{p.summary}</p>
                <p className="featured-project-tags-title">Tech Stack</p>
                <div className="featured-project-tags">
                  {p.techStack.map((t, idx) => (
                    <span key={idx} className="featured-project-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="featured-project-cta">{renderBtn(p)}</div>
              </div>
            </article>
          ))}
        </div>

        {featuredProjects.length > perView && (
          <>
            <button className="featured-project-nav is-prev" onClick={prev} aria-label="Previous project">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="featured-project-nav is-next" onClick={next} aria-label="Next project">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
