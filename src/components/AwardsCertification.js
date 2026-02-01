import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
import SectionTitle from './vanilla/SectionTitle';

// Import certification images
import ieeesscs from "../image/ieeesscs.png";
import hackerrankreact from "../image/react-cert.png";
import azureaifundamentals from "../image/azure-ai-fundamentals.png";
import azuredatafundamentals from "../image/azure-data-fundamentals.png";
import snowflakeAI from "../image/Technologies-Behind-Snowflake-AI-1024x682.png"

const awards = [
  {
    name: "Building and Evaluating Data Agents",
    imgSrc: snowflakeAI,
  },
  {
    name: "Azure AI Fundamentals",
    imgSrc: azureaifundamentals,
  },
  {
    name: "Azure Data Fundamentals",
    imgSrc: azuredatafundamentals,
  },
  {
    name: "Hackerrank Front-end (React) Certification",
    imgSrc: hackerrankreact,
  },
  {
    name: "1st Place in IEEE circuit video contest",
    imgSrc: ieeesscs,
  },
];

const AwardsCertifications = () => {
  const [show, setShow] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  const handleShow = (award) => {
    setSelectedAward(award);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="certifications" className="awards-wrapper container-fluid text-center py-5">
      <SectionTitle title="Awards & Certifications" />
      <div className="row justify-content-center">
        {awards.map((award, index) => (
          <div key={index} className="col-md-4 col-lg-3 mb-4">
            <div className="card award-card h-100 shadow-sm border-0" onClick={() => handleShow(award)}>
              <div className="image-container">
                <img
                  src={award.imgSrc}
                  className="card-img-top award-image"
                  alt={award.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{award.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying full-size certificate */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>{selectedAward?.name}</Modal.Title>
          <AiOutlineClose
            className="close-icon"
            onClick={handleClose}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          />
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={selectedAward?.imgSrc} alt={selectedAward?.name} className="img-fluid" />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default AwardsCertifications;
