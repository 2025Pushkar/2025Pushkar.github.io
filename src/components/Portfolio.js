import React from "react";
// --------------FONT AWESOME IMPORTS --------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import {
  PopupboxManager,
  PopupboxContainer,
} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import projectsInfo from "../projectsInfo/projectsInfo";

const Portfolio = () => {
  const popupboxConfig = {
    titleBar: {
      enable: false,
      text: "Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupbox = (a) => {
    const content = (
      <>
        <div>
          <b>{a.desc}</b>
          <hr />
          <img
            className="portfolio-image-popupbox"
            src={a.imgSrc}
            alt={a.desc}
          />
        </div>
        <h5 className="summary-popup">{a.summary}</h5>
        <h5 className="summary-popup">{a.summary2}</h5>
        <p className="hyper-link" onClick={() => window.open(a.link)}>
          <p className="link-popup">Click here to go to site</p>
        </p>
      </>
    );
    PopupboxManager.open({ content });
  };

  const renderProjects = (category) => {
    return projectsInfo
      .filter((project) => project.categories === category)
      .map((a, idx) => (
        <div key={idx} className="portfolio-image-box" onClick={() => openPopupbox(a)}>
          <img className="portfolio-image" src={a.imgSrc} alt={a.desc} />
          <div className="summary-popup">{a.summary}</div>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
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

        <h2 className="text-center py-4">Data Analytics</h2>
        <div className="image-box-wrapper row justify-content-center">
          {renderProjects("Data Analytics")}
        </div>

        <h2 className="text-center py-4">Web Development</h2>
        <div className="image-box-wrapper row justify-content-center">
          {renderProjects("Web Development")}
        </div>

        <h2 className="text-center py-4">Data Engineering</h2>
        <div className="image-box-wrapper row justify-content-center">
          {renderProjects("Data Engineering")}
        </div>

        <h2 className="text-center py-4">Machine Learning</h2>
        <div className="image-box-wrapper row justify-content-center">
          {renderProjects("Machine Learning")}
        </div>

        <h2 className="text-center py-4">Networking</h2>
        <div className="image-box-wrapper row justify-content-center">
          {renderProjects("Networking")}
        </div>

        <PopupboxContainer {...popupboxConfig} />
      </div>
    </div>
  );
};

export default Portfolio;
