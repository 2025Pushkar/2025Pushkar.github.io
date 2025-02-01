import React from 'react';
// import author from '../image/me.png';
import author from '../image/me_green_bg.png';
import SectionTitle from './vanilla/SectionTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
// import OpenToWorkBadge from './OpenToWork';

const AboutMe = () => {
  return (
    <div id="about" className="container-fluid py-5 px-5">
      <section id="about">
        <div>
          <SectionTitle title="About" />
          <div className="row w-100 align-items-center lead">
            <div className="col-lg-7 col-md-12 mb-4">
              <div className="about-text" id="outer-div">
                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  Hi, I'm{" "}
                  <span className="text-primary font-mono">
                    Pushkar Pramod Wani, a tech enthusiast
                  </span>.{" "}
                  I create versatile software solutions that combine cutting-edge technology with practical functionality.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  I have a deep passion for{" "}
                  <span className="text-primary font-mono">
                    Data Science and Software Development
                  </span>. I believe that a{" "}
                  <span className="text-primary font-mono">
                    great data scientist is also a fantastic software developer
                  </span>.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  I am currently pursuing a{" "}
                  <span className="text-primary font-mono">
                    Master's degree in Computer Science
                  </span> at{" "}
                  <a href="https://www.binghamton.edu/" className="text-link" target="_blank" rel="noreferrer">
                    <span className="text-primary font-mono">
                      SUNY Binghamton University, NY
                    </span>
                  </a>{" "}
                  with a cumulative GPA of{" "}
                  <span className="text-primary font-mono">3.76/4.00</span>.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  I'm from{" "}
                  <span className="text-primary font-mono">Bangalore, India</span>, where I earned my{" "}
                  <span className="text-primary font-mono">
                    Bachelor's degree in Electronics and Communication
                  </span> from{" "}
                  <a href="https://pes.edu/" className="text-link" target="_blank" rel="noreferrer">
                    <span className="text-primary font-mono">
                      PES Institute of Technology
                    </span>
                  </a>{" "}
                  with a cumulative GPA of{" "}
                  <span className="text-primary font-mono">3.27/4.00</span>.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  I have extensive experience in{" "}
                  <span className="text-primary font-mono">
                    software development and data engineering
                  </span>. I worked as a{" "}
                  <a href="https://www.krtrimaiq.ai/" className="text-link" target="_blank" rel="noreferrer">
                    <span className="text-primary font-mono">
                      Data Engineer at KrtrimaIQ Cognitive Solutions
                    </span>
                  </a> and as an{" "}
                  <a href="https://www.alvaria.com/" className="text-link" target="_blank" rel="noreferrer">
                    <span className="text-primary font-mono">
                      Implementation Consultant at Alvaria INC
                    </span>
                  </a>.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  My technical skills include{" "}
                  <span className="text-primary font-mono">
                    Java, Python, C++, JavaScript, React.JS, Next.JS, Power BI, Tableau, GoodData BI, Azure Data Factory, PostgreSQL, Azure SQL Database, MySQL and MongoDB                  </span>.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  I also served as the{" "}
                  <span className="text-primary font-mono">
                    Publicity Head for the IEEE Solid States and Photonics Society
                  </span> during my undergraduate studies at PES Institute of Technology, where I developed and executed marketing strategies and organized events.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 text-center">
              <div className="open-to-work-wrapper mx-auto">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
