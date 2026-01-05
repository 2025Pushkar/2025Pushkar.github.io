import React from 'react';
import author from '../image/me.jpg';
// import { SectionTitle } from './vanilla/SectionTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumePDF from "../pdfs/Pushkar_Pramod_Wani_Resume.pdf";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const AboutMe = () => {

  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Pushkar_Pramod_Wani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div id="about" className="container-fluid py-5 px-5">
      <section id="about">
        <div className='py-4'>
          {/* <SectionTitle title="" /> */}
          <div className="row w-100 align-items-center lead">
            <div className="col-lg-7 col-md-12 mb-4">
              <div className="about-text" id="outer-div">
                {/* Header */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <h2 className="text-primary font-mono fw-bold mb-0 me-3">
                      Pushkar Pramod Wani
                    </h2>
                  </div>
                  <p className="text-muted font-mono mb-2" style={{ fontSize: '1.1rem' }}>
                    Software Engineer | Full Stack & Backend Systems
                  </p>
                </div>

                {/* Main Description */}
                <p className="text-muted font-mono mb-3">
                  I am a Software Engineer with experience building production ready full stack and backend systems across startup and enterprise environments. My work focuses on designing APIs, authentication and authorization flows, distributed processing, and data intensive applications using Python, TypeScript, React, and Next.js, with end to end ownership from design and implementation to deployment, monitoring, and reliability.
                </p>

                <p className="text-muted font-mono mb-3">
                  Most recently, I worked as a Graduate Software Engineer Intern at Regeneron, building backend services and REST APIs to support AI agent orchestration on governed enterprise data. Previously, I spent several years in startup environments working across frontend, backend, data pipelines, and cloud infrastructure, which trained me to move quickly, adapt to ambiguity, and ship practical solutions.
                </p>

                <p className="text-muted font-mono mb-3">
                  I am particularly interested in backend or full stack software engineering roles where strong engineering fundamentals, system design, and ownership matter.
                </p>

                <div className="mt-4">
                  <p className="text-primary font-mono fw-bold mb-2">Top skills</p>
                  <div className="about-skills d-flex flex-wrap gap-2">
                    <span className="badge bg-secondary text-light px-3 py-2 about-skill-badge">Next.js</span>
                    <span className="badge bg-secondary text-light px-3 py-2 about-skill-badge">Python</span>
                    <span className="badge bg-secondary text-light px-3 py-2 about-skill-badge">SQL</span>
                    <span className="badge bg-secondary text-light px-3 py-2 about-skill-badge">React.js</span>
                    <span className="badge bg-secondary text-light px-3 py-2 about-skill-badge">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 text-center d-flex flex-column align-items-center">
              <div
                className="open-to-work-wrapper mx-auto mb-3"
                style={{
                  padding: "1.25rem",
                  maxWidth: "440px",
                  width: "100%",
                  background: "linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)",
                  boxShadow: "0 14px 36px rgba(0, 0, 0, 0.12)",
                  borderRadius: "1.5rem",
                  border: "1px solid #e9ecef",
                  overflow: "hidden",
                }}
              >
                <div className="open-to-work-badge">
                  <span className="open-to-work-text">Open to work</span>
                </div>
                <img
                  src={author}
                  alt="Pushkar's Portrait"
                  className="border border-muted open-to-work-image"
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "18px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
              <button
                onClick={handleDownload}
                className="btn btn-primary resume-button mt-2"
              >
                <i className="ri-download-line me-2"></i>
                Download My Resume
              </button>

              <div
                className="about-socials d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3 p-3"
                style={{
                  background: "#f8f9fa",
                  borderRadius: "0.75rem",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                  width: "100%",
                  maxWidth: "520px",
                }}
              >
                <FaLinkedin
                  size={28}
                  className="icon"
                  onClick={() => handleIconClick('https://www.linkedin.com/in/pushkar-wani-44bb10190/')}
                  style={{ cursor: 'pointer', color: '#0077b5' }}
                />
                <FaGithub
                  size={28}
                  className="icon"
                  onClick={() => handleIconClick('https://github.com/2015pushkar')}
                  style={{ cursor: 'pointer', color: '#6c757d' }}
                />
                <SiLeetcode
                  size={28}
                  className="icon"
                  onClick={() => handleIconClick('https://leetcode.com/u/pushkarwani/')}
                  style={{ cursor: 'pointer', color: '#FFA116' }}
                />
                <SiGeeksforgeeks
                  size={28}
                  className="icon"
                  onClick={() => handleIconClick('https://www.geeksforgeeks.org/user/pushkarwani2015/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user')}
                  style={{ cursor: 'pointer', color: '#28a745' }}
                />
                <FaInstagram
                  size={28}
                  className="icon"
                  onClick={() => handleIconClick('https://www.instagram.com/pushkar_4o4/')}
                  style={{ cursor: 'pointer', color: '#E1306C' }}
                />
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
