import React, { useContext, useState, useEffect, useRef } from "react";
import { RefContext } from "./RefContext";
import { projectsInfo } from "../projectsInfo/projectsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { BackButtonContext } from "./BackButtonContext";

const portfolioCategories = [
  { id: "Distributed Systems", label: "Distributed Systems" },
  { id: "Gen AI", label: "Gen AI" },
  { id: "Full Stack Development", label: "Full Stack" },
  { id: "Data Engineering & Data Analytics", label: "Data & Analytics" },
  { id: "Data Structures & Algorithms", label: "Data Structures & Algorithms" },
  { id: "Machine Learning", label: "Machine Learning" },
  { id: "Computer Networks", label: "Networks" },
  { id: "Embedded Systems", label: "Embedded" },
  { id: "Publications", label: "Publications" },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Portfolio = () => {
  const { languagesRef, webdevRef, cloudRef, biRef, databasesRef } = useContext(RefContext);
  const { showBackButton, setShowBackButton } = useContext(BackButtonContext);
  const [activeCategory, setActiveCategory] = useState("Distributed Systems");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const portfolioRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, perView]);

  useEffect(() => {
    const currentRef = portfolioRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBackButton(true);
        }
      },
      { threshold: 0.15 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [setShowBackButton]);

  const setTabRef = (category, el) => {
    if (category === "Full Stack Development") {
      languagesRef.current = el;
      webdevRef.current = el;
    }
    if (category === "Data Engineering & Data Analytics") {
      cloudRef.current = el;
      biRef.current = el;
      databasesRef.current = el;
    }
  };

  const typeLabel = (project) => {
    if (!project.type) return "Project";
    if (project.type === "project") return "Project";
    if (project.type === "In-progress") return "In Progress";
    if (project.type === "Internship") return "Internship";
    if (project.type === "company") return "Company";
    if (project.type === "aws") return "AWS Pipeline";
    if (project.type === "client") return "Client";
    if (project.type === "personal") return "Personal";
    if (project.type === "publication") return "Publication";
    return project.type;
  };

  const renderButton = (project) => {
    if (project.type === "company" && project.link) {
      return (
        <a href={project.link} target="_blank" rel="noreferrer" className="featured-project-button">
          Visit <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      );
    }
    if (project.type === "publication" && project.link) {
      return (
        <a href={project.link} target="_blank" rel="noreferrer" className="featured-project-button">
          Read <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      );
    }
    if (project.type === "In-progress") {
      return (
        <button className="featured-project-button is-muted" disabled>
          In&nbsp;Progress
        </button>
      );
    }
    if (!project.link) {
      return (
        <button className="featured-project-button is-muted" disabled>
          Private&nbsp;Project
        </button>
      );
    }
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="featured-project-button">
        View <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    );
  };

  const filteredProjects = projectsInfo.filter((project) => project.category === activeCategory);
  const totalProjects = filteredProjects.length;
  const viewCount = Math.min(perView, totalProjects);
  const centerOffset = Math.floor(viewCount / 2);

  const visibleProjects =
    totalProjects === 0
      ? []
      : Array.from({ length: viewCount }, (_, i) => {
          const idx = (currentIndex - centerOffset + i + totalProjects) % totalProjects;
          return { ...filteredProjects[idx], _isCenter: i === centerOffset };
        });

  useEffect(() => {
    if (totalProjects <= viewCount || viewCount === 0) return;
    const id = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % totalProjects);
    }, 5200);
    return () => clearInterval(id);
  }, [totalProjects, viewCount, activeCategory]);

  const handleBackButtonClick = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    setShowBackButton(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const prev = () => {
    if (totalProjects === 0) return;
    setCurrentIndex((index) => (index - 1 + totalProjects) % totalProjects);
  };

  const next = () => {
    if (totalProjects === 0) return;
    setCurrentIndex((index) => (index + 1) % totalProjects);
  };

  const styles = {
    circle: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "1000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#f0f0f0",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    arrow: {
      stroke: "#333",
    },
    circleHover: {
      transform: "scale(1.1)",
    },
  };

  return (
    <section id="portfolio" className="portfolio-section py-5" ref={portfolioRef}>
      <div className="container-fluid px-4 px-lg-5 position-relative">
        <div className="portfolio-header text-center">
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-subtitle">
            Explore selected projects across full-stack engineering, data systems, and research work.
          </p>
          <p className="portfolio-link">
            <a href="https://github.com/2015pushkar" target="_blank" rel="noreferrer">
              github.com/2015pushkar
            </a>
          </p>
        </div>

        <div className="portfolio-tabs" role="tablist" aria-label="Project categories">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`portfolio-${slugify(category.id)}`}
              className={`portfolio-tab ${activeCategory === category.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
              ref={(el) => setTabRef(category.id, el)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          key={activeCategory}
          id={`portfolio-${slugify(activeCategory)}`}
          role="tabpanel"
          aria-hidden={false}
          className="portfolio-panel is-active position-relative"
        >
          {totalProjects === 0 ? (
            <div className="portfolio-empty">More projects coming soon.</div>
          ) : (
            <div className="featured-projects-carousel">
              {visibleProjects.map((project) => (
                <article
                  className={`featured-project-card portfolio-card ${project._isCenter ? "is-center" : ""}`}
                  key={project.slug}
                  style={{ width: `calc(100% / ${perView} - 1rem)` }}
                >
                  <div className="featured-project-image">
                    <img src={project.cover} alt={project.title} />
                    <span className="featured-project-type">{typeLabel(project)}</span>
                  </div>
                  <div className="featured-project-body">
                    <h3 className="featured-project-title">{project.title}</h3>
                    <p className="featured-project-tagline">{project.summary}</p>
                    <p className="featured-project-tags-title">Tech Stack</p>
                    <div className="featured-project-tags">
                      {project.techStack.map((tech, index) => (
                        <span key={`${project.slug}-${index}`} className="featured-project-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="featured-project-cta">{renderButton(project)}</div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {totalProjects > viewCount && (
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
      </div>

      {showBackButton && (
        <div
          onClick={handleBackButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ ...styles.circle, ...(isHovered ? styles.circleHover : {}) }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={styles.arrow}
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
