import React from "react";
import projectsInfo from "../projectsInfo/projectsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';


const Portfolio = () => {
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
                  <span key={index} className="badge badge-pill badge-info mr-1">
                    {tag}
                  </span>
                ))}
              </div>
              {a.type === "company" ? (
                <a href={a.link} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">
                  Visit <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              ) : (
                <button className="btn btn-secondary mt-auto" disabled>
                  Client Project
                </button>
              )}
            </div>
          </div>
        </div>
      ));
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

        <h2 className="text-center py-4">Web Development</h2>
        <div className="row justify-content-center">
          {renderProjects("Web Development")}
        </div>

        <h2 className="text-center py-4">Data Analysis</h2>
        <div className="row justify-content-center">
          {renderProjects("Data Analysis")}
        </div>

        <h2 className="text-center py-4">Data Engineering</h2>
        <div className="row justify-content-center">
          {renderProjects("Data Engineering")}
        </div>

        <h2 className="text-center py-4">Machine Learning</h2>
        <div className="row justify-content-center">
          {renderProjects("Machine Learning")}
        </div>

        <h2 className="text-center py-4">Networking</h2>
        <div className="row justify-content-center">
          {renderProjects("Networking")}
        </div>

        <h2 className="text-center py-4">Publications</h2>
        <div className="row justify-content-center">
          {renderProjects("Publications")}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
