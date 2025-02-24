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
                    Pushkar Pramod Wani
                  </span>, a software developer passionate about building scalable and efficient applications. I specialize in{" "}
                  <span className="text-primary font-mono">
                    Next.js, React.js, TypeScript, and Python
                  </span>, developing full-stack solutions from the ground up.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  I actively contribute to impactful projects, including leading the development of an in-house job search platform for SUNY Binghamton students, where I designed and implemented a full-stack solution using{" "}
                  <span className="text-primary font-mono">Next.js and TypeScript</span>.
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
                  </a> with a cumulative GPA of{" "}
                  <span className="text-primary font-mono">3.8/4.0</span>.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  Previously, I was a key developer at{" "}
                  <a href="https://www.krtrimaiq.ai/" className="text-link" target="_blank" rel="noreferrer">
                    <span className="text-primary font-mono">
                      KrtrimaIQ Cognitive Solutions
                    </span>
                  </a>, where I contributed to the development of AI-driven applications in a fast-paced startup environment.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  My technical skills include{" "}
                  <span className="text-primary font-mono">
                    JavaScript/TypeScript, React.js, Next.js, Node.js, Python, PostgreSQL, and MongoDB
                  </span>. I also have hands-on experience with{" "}
                  <span className="text-primary font-mono">Microsoft Azure</span> and{" "}
                  <span className="text-primary font-mono">AWS</span> for hosting and scaling applications.
                </p>

                <p className="text-muted font-mono">
                  <i className="ri-play-line"></i>
                  I thrive in startup environments where innovation and problem-solving take center stage. My goal is to leverage technology to build impactful products while continuously expanding my expertise in software engineering and cloud computing.
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
