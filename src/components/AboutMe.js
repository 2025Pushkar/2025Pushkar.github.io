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
                    Full-Stack Developer & Data Engineer | New York, USA
                  </p>
                </div>

                {/* Main Description */}
                <p className="text-muted font-mono mb-3">
                  I build scalable web apps, robust data pipelines, and AI-powered solutions that deliver real business impact. My expertise spans Python, JavaScript/TypeScript, React.js, Next.js, and leading cloud platforms (AWS, GCP, Azure, Snowflake).
                </p>

                {/* Experience */}
                <p className="text-muted font-mono mb-3">
                  Currently, I'm a Graduate Software Developer Intern at{" "}
                  <a
                    href="https://www.regeneron.com/"
                    className="text-primary text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Regeneron
                  </a>, where I architected an AI-driven analytics platform that reduced query latency by 70% and automated insights for commercial teams. Previously, I led the development of AI-powered digital assistants, engineered the company website, and built scalable data pipelines at                  <a
                    href="https://www.krtrimaiq.ai/"
                    className="text-primary text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KrtrimaIQ
                  </a>, and building a micro-internship platform at{" "}
                  <a
                    href="https://www.binghamton.edu/"
                    className="text-primary text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Binghamton University
                  </a>.
                </p>

                {/* Personal Touch */}
                <p className="text-muted font-mono mb-4">
                  Always eager to learn, collaborate, and solve complex challenges. Outside of coding, I enjoy hiking, exploring new tech, and experimenting with recipes.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 text-center d-flex flex-column align-items-center">
              <div className="open-to-work-wrapper mx-auto mb-3">
                <img
                  src={author}
                  alt="Pushkar's Portrait"
                  className="border border-muted rounded-circle open-to-work-image"
                  style={{
                    minWidth: "300px",
                    minHeight: "300px",
                    maxWidth: "400px",
                    maxHeight: "400px",
                  }}
                />
                <div className="open-to-work-badge sm-px-3">
                  <div className="open-to-work-circle"></div>
                  <div className="open-to-work-text">#OpenToWork</div>
                </div>
                <div className="icon-semicircle">

                  <FaInstagram
                    size={24}
                    className="icon"
                    onClick={() => handleIconClick('https://www.instagram.com/pushkar_4o4/')}
                    style={{ cursor: 'pointer', color: '#E1306C' }}
                  />
                  <SiGeeksforgeeks
                    size={24}
                    className="icon"
                    onClick={() => handleIconClick('https://www.geeksforgeeks.org/user/pushkarwani2015/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user')}
                    style={{ cursor: 'pointer', color: '#28a745' }}
                  />
                  <SiLeetcode
                    size={24}
                    className="icon"
                    onClick={() => handleIconClick('https://leetcode.com/u/pushkarwani/')}
                    style={{ cursor: 'pointer', color: '#FFA116' }}
                  />
                  <FaGithub
                    size={24}
                    className="icon"
                    onClick={() => handleIconClick('https://github.com/2015pushkar')}
                    style={{ cursor: 'pointer', color: '#6c757d' }}
                  />
                  <FaLinkedin
                    size={24}
                    className="icon"
                    onClick={() => handleIconClick('https://www.linkedin.com/in/pushkar-wani-44bb10190/')}
                    style={{ cursor: 'pointer', color: '#0077b5' }}
                  />

                </div>
              </div>
              <button
                onClick={handleDownload}
                className="btn btn-primary resume-button mt-2"
              >
                <i className="ri-download-line me-2"></i>
                Download My Resume
              </button>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;