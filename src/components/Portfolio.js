import React, { useContext, useState } from "react";
import { RefContext } from "./RefContext";
import { projectsInfo } from "../projectsInfo/projectsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BackButtonContext } from "./BackButtonContext";
import { MdOutlineArrowUpward } from "react-icons/md";



const Portfolio = () => {
  const { languagesRef, webdevRef, cloudRef, biRef, databasesRef } = useContext(RefContext);
  const { showBackButton, setShowBackButton } = useContext(BackButtonContext);
  const [isHovered, setIsHovered] = useState(false);
  const renderProjects = (category) => {
    return projectsInfo
      .filter((project) => project.categories === category)
      .map((a, idx) => (
        <div key={idx} className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
          <div className="card h-100 shadow-sm border-0">
            <img src={a.imgSrc} className="card-img-top" alt={a.desc} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{a.name}</h5>
              <p className="card-text">{a.summary}</p>
              <div className="mb-3">
                {a.summary2.split(", ").map((tag, index) => (
                  <span key={index} className="badge badge-pill badge-dark mr-1">
                    {tag}
                  </span>
                ))}
              </div>
              {a.type === "company" ? (
                <a href={a.link} target="_blank" rel="noreferrer" className="btn btn-dark btn-circle mt-auto">
                  Visit <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              ) : a.type === "In-progress" ? (
                <button className="btn btn-secondary btn-circle mt-auto" disabled>
                  In Progress
                </button>
              ) : (
                <button className="btn btn-dark btn-circle mt-auto" disabled>
                  Client Project
                </button>
              )}
            </div>
          </div>
        </div>
      ));
  };

  const handleBackButtonClick = () => {
    document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
    setShowBackButton(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    circle: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '1000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#f0f0f0',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    arrow: {
      stroke: '#333',
    },
    circleHover: {
      transform: 'scale(1.1)',
    },

  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <p className="text-center">
          This is my github page{" "}
          <a href="https://github.com/2015pushkar" target="_blank" rel="noreferrer">
            https://github.com/2015pushkar
          </a>
        </p>

        <h2 className="text-center py-4" ref={(el) => {
          languagesRef.current = el;
          webdevRef.current = el;
        }}>Full Stack Development</h2>
        <div className="row justify-content-center">
          {renderProjects("Full Stack Development")}
        </div>

        <h2 className="text-center py-4" ref={(el) => {
          cloudRef.current = el;
          biRef.current = el;
          databasesRef.current = el;
        }}>Data Engineering & Data Analytics</h2>
        <div className="row justify-content-center">
          {renderProjects("Data Engineering & Data Analytics")}
        </div>

        <h2 className="text-center py-4">Machine Learning</h2>
        <div className="row justify-content-center">
          {renderProjects("Machine Learning")}
        </div>

        <h2 className="text-center py-4">Computer Networks</h2>
        <div className="row justify-content-center">
          {renderProjects("Computer Networks")}
        </div>

        <h2 className="text-center py-4">Embedded Systems</h2>
        <div className="row justify-content-center">
          {renderProjects("Embedded Systems")}
        </div>

        <h2 className="text-center py-4">Publications</h2>
        <div className="row justify-content-center">
          {renderProjects("Publications")}
        </div>
      </div>
      {showBackButton && (
        <div onClick={handleBackButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ ...styles.circle, ...(isHovered ? styles.circleHover : {}) }}>
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
    </div>
  );
};

export default Portfolio;
